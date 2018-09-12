<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller as Controller;
use Illuminate\Http\Request;
use App\Models\Todo;

class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $todo_items = Todo::get();
            return response()->json($todo_items->toArray(), 200);
        } catch(\Exception $e) {
            return response()->json(['message' => 'API server error'], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'message' => 'required|max:20',
        ]);

        if ($validator->fails()) {
            $firstErrorMessage = $validator->errors()->first();
            return response()->json(['error' => $firstErrorMessage], 422);
        }

        $todo = new \App\Models\Todo;
        $todo->message = $request->input('message');
        $todo->save();

        $response = response()->json($todo->toArray(), 200);
        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = \Validator::make($request->all(), [
            'message' => 'required|max:20',
        ]);

        if ($validator->fails()) {
            $firstErrorMessage = $validator->errors()->first();
            return response()->json(['error' => $firstErrorMessage], 422);
        }

        $todo = \App\Models\Todo::find($id);

        if (empty($todo)) {
            return response()->json(['error' => 'Not found Todo Item.'], 422);
        }

        $todo->message = $request->input('message');
        $todo->save();

        $response = response()->json($todo->toArray(), 200);
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = \App\Models\Todo::find($id);

        if (empty($todo)) {
            return response()->json(['error' => 'Not found Todo Item.'], 422);
        }

        $todo->delete();

        return response()->json(['status' => 'success'], 200);
    }

    public function doneItem($id)
    {
        $todo = \App\Models\Todo::find($id);

        if (empty($todo)) {
            return response()->json(['error' => 'Not found Todo Item.'], 422);
        }

        $todo->status = 'done';
        $todo->save();

        $response = response()->json($todo->toArray(), 200);
        return $response;
    }

    public function emptyItems()
    {
        \DB::table('todos')->delete();

        return response()->json(['status' => 'success'], 200);
    }
}
