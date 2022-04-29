<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;
use App\Models\Student;

class StudentControllerTest extends TestCase
{
    public function test_can_fetch_students()
    {
        $response = $this->getJson('/api/students');

        $response
            ->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json
                    ->has('students')
                    ->whereType('students', 'array')
            );
    }

    public function test_can_add_student()
    {
        $student = Student::factory()->raw(); // generate student in array form
        $response = $this->postJson('/api/students/create', $student);

        $response
            ->assertStatus(201)
            ->assertjson(
                fn (AssertableJson $json) =>
                $json
                    ->has('message')
                    ->has('student')
                    ->where('message', 'Student added!')
                    ->where('student.first_name', $student['first_name'])
                    ->where('student.last_name', $student['last_name'])
                    ->where('student.email', $student['email'])
                    ->whereAllType([
                        'message' => 'string',
                        'student.first_name' => 'string',
                        'student.last_name' => 'string',
                        'student.email' => 'string',
                    ])
                    ->etc()
            );
    }
}
