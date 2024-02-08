<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = $this->faker->randomElement(['pending', 'completed']);
        $priority = $this->faker->randomElement(['urgent', 'not urgent']);

        return [
            'task' => $this->faker->sentence(5),
            'status' => $status,
            'priority' => $priority
        ];
    }
}
