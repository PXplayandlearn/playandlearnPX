<?php

use Illuminate\Database\Seeder;

class AnswerTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $answerType = new AnswerType();
        $answerType->type = 'MultipleChoice';
        $answerType->save();

        $answerType = new AnswerType();
        $answerType->type = 'TrueFalse';
        $answerType->save();

        $answerType = new AnswerType();
        $answerType->type = 'Matching';
        $answerType->save();

        $answerType = new AnswerType();
        $answerType->type = 'Sorting';
        $answerType->save();

        $answerType = new AnswerType();
        $answerType->type = 'Ordering';
        $answerType->save();
    }
}
