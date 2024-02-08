<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Task::create([
            'task' => $request->task,
            'status' => $request->status,
            'priority' => $request->priority
        ]);

        return response()->json([
            "message" => "Task added successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = Task::findOrFail($id);

        if (!empty($task)) {
            return response()->json($task);
        } else {
            return response()->json([
                "message" => "Task not found"
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $task = Task::findOrFail($id);
        Task::where("id", $id)->update([
            'task' => is_null($request->task) ? $task->task : $request->task,
            'priority' => is_null($request->priority) ? $task->priority : $request->priority,
            'status' => is_null($request->status) ? $task->status : $request->status
        ]);

        return response()->json([
            "message" => "Task updated successfully"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Task::destroy($id);

        return response()->json([
            "message" => "Task deleted successfully"
        ], 202);
    }
}
