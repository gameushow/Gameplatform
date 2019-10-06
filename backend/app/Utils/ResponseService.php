<?php

namespace App\Utils;

use DateTime;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ResponseService
{

    private $contentType = 'application/json';

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
    public function response($content, $status = Response::HTTP_OK, $headers = [])
    {
        $headers = array_merge($headers,
            [
                'Content-Type' => $this->contentType,
                'time' => (new DateTime('now', new \DateTimeZone('Asia/Bangkok')))->getTimestamp(),
            ]);
        $data = [
            'code' => $status,
            'data' => $content
        ];
        return response($data, $status)->withHeaders($headers)->setStatusCode($status);
    }

    public function error($content, $status = Response::HTTP_BAD_REQUEST, $headers = [])
    {
        $headers = array_merge($headers,
            [
                'Content-Type' => $this->contentType,
                'time' => (new DateTime('now', new \DateTimeZone('Asia/Bangkok')))->getTimestamp(),
            ]);
        $data = [
            'code' => $status,
            'error' => $content
        ];

        return response($data, $status)->withHeaders($headers)->setStatusCode($status);
    }

}