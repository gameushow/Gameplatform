<?php

namespace App\Utils;

use DateTime;
use Symfony\Component\HttpFoundation\JsonResponse;

class ResponseService
{

    private $contentType = 'application/json';

    const STATUS_SUCCESS      = 200;
    const STATUS_CREATE_SUCCESS = 201;
    const STATUS_BAD_REQUEST  = 400;
    const STATUS_UNAUTHORIZED = 401;
    const STATUS_UNPROCESSABLE_ENTITY = 422;
    const STATUS_SERVER_ERROR = 500;

    public function __construct()
    {
    }

    /**
     * @param $content
     * @param int $status
     * @param array $headers
     * @return JsonResponse
     * @throws \Exception
     */
    public function response($content, $status = ResponseService::STATUS_SUCCESS, $headers = [])
    {
        $headers    = array_merge($headers,
            [
                'Content-Type' => $this->contentType,
                'time'         => (new DateTime('now', new \DateTimeZone('Asia/Bangkok')))->getTimestamp(),
            ]);
        $data       = new \stdClass();
        $data->code = $status;
        $data->data = $content;

        return new JsonResponse($data, $status, $headers);
    }

    public function success($content, $headers = [])
    {
        return $this->response($content, $headers, ResponseService::STATUS_SUCCESS);
    }

    public function error($content, $status, $headers = [])
    {
        $headers    = array_merge($headers,
            [
                'Content-Type' => $this->contentType,
                'time'         => (new DateTime('now', new \DateTimeZone('Asia/Bangkok')))->getTimestamp(),
            ]);
        $data       = new \stdClass();
        $data->code = $status;
        $data->error = $content;

        return new JsonResponse($data, $status, $headers);
    }

}