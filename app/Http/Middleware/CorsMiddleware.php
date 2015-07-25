<?php

namespace App\Http\Middleware;

class CorsMiddleware
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, \Closure $next)
	{
		$response = $next($request);
		$response->header('Access-Control-Allow-Credentials', 'false'));
		$response->header('Access-Control-Allow-Headers', $request->header('Access-Control-Request-Headers'));
		$response->header('Access-Control-Allow-Methods', 'GET');
		$response->header('Access-Control-Allow-Origin', '*');
		return $response;
	}
}
