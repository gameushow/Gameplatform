<?php


namespace App\Services;


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
     * @return array
     */
    private function makeUnSuccessfulBody()
    {
        return [
            'success' => false,
            'code' => ResponseService::STATUS_BAD_REQUEST,
        ];
    }

    /**
     * @param array $data
     * @return array
     */
    private function makeSuccessfulBody($data = [])
    {
        return [
            'success' => true,
            'code' => ResponseService::STATUS_SUCCESS,
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


    /**
     * @param $content
     * @param $status
     * @param array $headers
     * @throws \Exception
     */
    public function response($content, $status, $headers = [])
    {
        $this->responseService->response($content, $status, $headers)->send();
    }

    public function getQuestions($game_id){
        $questions = $this->questionRepo->getQuestionsByGameId($game_id);
        if(null === $questions || $questions->isEmpty()){
            $result = $this->makeUnSuccessfulBody();
        }else {
            $result = $this->makeSuccessfulBody($questions);
        }
        return $result;
    }

    public function getQuestion($question_id)
    {

        $question = $this->questionRepo->getQuestionByQuestionId($question_id);

        if (null === $question || !$question) {
            $result = $this->makeUnSuccessfulBody();
        }else{
            $result = $this->makeSuccessfulBody($question);
        }

        return $result;
    }
}