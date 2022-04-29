<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return response()->json([
            'students' => $students
        ], 200);
    }

    public function store(Request $request)
    {
        $student = new Student;
        $student->first_name = $request->first_name;
        $student->last_name = $request->last_name;
        $student->email = $request->email;
        $student->save();

        return response()->json([
            'message' => 'Student added!',
            'student' => $student
        ], 201);
    }

    public function show($id)
    {
        $student = Student::find($id);
        return response()-> json([
            'student' => $student
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);
        $student->first_name = $request->first_name;
        $student->last_name = $request->last_name;
        $student->email = $request->email;
        $student->save();

        return response()->json([
            'message' => 'Student updated!',
            'student' => $student
        ], 200);
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();

        return response()->json([
            'message' => 'Student deleted!'
        ], 200);
    }
}
