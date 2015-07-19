<?php

namespace App\Http\Controllers;

use App\Thought;

class ZenThoughtController extends Controller
{
    /**
     * Show the thought for today.
     *
     * @return Response
     */
    public function showTodayThought()
    {
        $day = date('d');
        $thought = Thought::findOrFail($day);

        return response()->json([
            'day' => $day,
            'thought_jp' => $thought->thought_jp,
            'thought_en' => $thought->thought_en
        ]);
    }

    /**
     * Show the thought for the given day.
     *
     * @param  int  $day
     * @return Response
     */
    public function showDayThought($day)
    {
        $thought = Thought::findOrFail($day);
        return response()->json([
            'day' => $day,
            'thought_jp' => $thought->thought_jp,
            'thought_en' => $thought->thought_en
        ]);
    }
}
