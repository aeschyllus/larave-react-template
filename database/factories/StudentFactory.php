<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
         $firstName = $this->faker->firstName();
         $lastName = $this->faker->lastName();
         $email = strtolower($firstName.$lastName).'@mail.com';

        return [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $email
        ];
    }
}
