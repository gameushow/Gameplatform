<?php


namespace App\Services;


use App\Http\Requests\CreateQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Utils\ResponseService;

/**
 * @property QuestionRepositoryInterface questionRepo
 * @property ResponseService responseService
 * @property array headers
 */
class QuestionService
{

    public function __construct(
        ResponseService $responseService,
        QuestionRepositoryInterface $questionRepository
    )
    {
        $this->responseService = $responseService;
        $this->questionRepo = $questionRepository;
        $this->initialHeader();
    }

    private function initialHeader()
    {
        $this->headers = [
            'Content-Type' => 'application/json'
        ];
    }

    /**
     * @param string $error
     * @return array
     */
    private function makeUnSuccessfulBody($error = "")
    {
        $result = [
            'success' => false,
            'code' => ResponseService::STATUS_BAD_REQUEST,
        ];
        if ($error !== "") {
            $result['error'] = $error;
        }
        return $result;
    }

    /**
     * @param array $data
     * @return array
     */
    private function makeSuccessfulBody($data = [], $status = ResponseService::STATUS_SUCCESS)
    {
        return [
            'success' => true,
            'code' => $status,
            'data' => $data,
        ];
    }


    /**
     * @return array
     */
    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function getQuestions($game_id)
    {
        $questions = $this->questionRepo->getQuestionsByGameId($game_id);
        if (null === $questions || $questions->isEmpty()) {
            $result = $this->makeUnSuccessfulBody();
        } else {
            $result = $this->makeSuccessfulBody($questions);
        }
        return $result;
    }

    public function getQuestion($question_id)
    {

        $question = $this->questionRepo->getQuestionByQuestionId($question_id);

        if (null === $question || empty($question)) {
            $result = $this->makeUnSuccessfulBody();
        } else {
            $result = $this->makeSuccessfulBody($question);
        }

        return $result;
    }

    public function createQuestion(CreateQuestionRequest $request)
    {
        $question = $request->validated();
        $question = $this->questionRepo->createQuestion($question);
        $result = $this->makeSuccessfulBody($question, ResponseService::STATUS_CREATE_SUCCESS);
        return $result;
    }

    public function updateQuestion(UpdateQuestionRequest $request, $question_id)
    {
        $question = $request->validated();
        $question = $this->questionRepo->updateQuestionByQuestionId($question_id, $question);
        if (false === $question) {
            return $this->makeUnSuccessfulBody("question not found");
        }
        $result = $this->makeSuccessfulBody($question);
        return $result;
    }

    public function deleteQuestion($question_id)
    {
        $question = $this->questionRepo->deleteQuestionByQuestionId($question_id);
        if (false === $question) {
            return $this->makeUnSuccessfulBody("question not found");
        }
        $result = $this->makeSuccessfulBody($question);
        return $result;
    }
}