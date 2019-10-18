<?php


namespace App\Services;


use App\Http\Requests\CreateQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Utils\ResponseService;
use Symfony\Component\HttpFoundation\Response;

/**
 * @property QuestionRepositoryInterface questionRepo
 * @property ResponseService responseService
 * @property array headers
 */
class QuestionService
{

    public function __construct(
        QuestionRepositoryInterface $questionRepository
    )
    {
        $this->questionRepo = $questionRepository;
    }

    /**
     * @param string $error
     * @return array
     */
    private function makeUnSuccessfulBody($error = "")
    {
        $result = [
            'success' => false,
            'code' => Response::HTTP_BAD_REQUEST,
        ];
        if ($error !== "")
            $result['error'] = $error;
        return $result;
    }

    /**
     * @param array $data
     * @param int $status
     * @return array
     */
    private function makeSuccessfulBody($data = [], $status = Response::HTTP_OK)
    {
        return [
            'success' => true,
            'code' => $status,
            'data' => $data,
        ];
    }

    public function getQuestions($game_id)
    {
        $questions = $this->questionRepo->getQuestionsByGameId($game_id);
        foreach ($questions as $key => $question) {
            $category = $question->category();
            $questions[$key]->category = $category->get();
            unset($questions[$key]->category_id);
        }
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
        $question->category = $question->category()->get();
        unset($question->category_id);

        if (null === $question || empty($question)) {
            $result = $this->makeUnSuccessfulBody("Question not found");
        } else {
            $result = $this->makeSuccessfulBody($question);
        }
        return $result;
    }

    public function createQuestion(CreateQuestionRequest $request)
    {
        $question = $request->validated();
        $question = $this->questionRepo->createQuestion($question);
        $result = $this->makeSuccessfulBody($question, Response::HTTP_CREATED);
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