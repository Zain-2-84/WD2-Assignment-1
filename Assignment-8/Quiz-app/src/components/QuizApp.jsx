import { useState } from "react";
import { Options } from "./Options";
import { Button } from "./Button";
import { Heading } from "./Heading";

export function QuizApp () {
    const [mcqs, setMcqs] = useState([]);

    // quizStarted = false means that the quiz hasn't started yet.
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showResult, setShowResult] = useState(false);

    async function getQuizQuestions() {
        const data = await fetch (
            "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
        );

        const questions = await data.json();
        setMcqs(questions.results);
        // quizStarted = true means that the quiz has started.
        setQuizStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
    }

    function nextQuestion () {
        if (currentQuestionIndex < mcqs.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);

            if (mcqs[currentQuestionIndex].correct_answer === answer) {
                setScore(score + 10);
            }
        } else {
            setQuizStarted(false);
            setShowResult(true);
        }
    }

    // Working.
    // console.log(mcqs[currentQuestionIndex].correct_answer);

    // Not working
    // console.log(questions);

    function handleAnswer(answer) {
        setAnswer(answer);
    }

    return (
        <div className="quiz-container">
            <div className="entire-quiz grid place-items-center grid-cols-1 content-evenly gap-4">

                
                    <Heading>Quiz App</Heading>
                
                { !quizStarted && <Button onClick={getQuizQuestions} >Start Quiz</Button> }

                { quizStarted && (
                    <>
                        <h3>Question: { currentQuestionIndex + 1 }</h3>
                    
                        <h2>{ mcqs[currentQuestionIndex].question }</h2>
                        <div className="grid-cols-2 grid-rows-2">
                            <Options
                                correctAnswer = { mcqs[currentQuestionIndex].correct_answer }
                                incorrectAnswer = { mcqs[currentQuestionIndex].incorrect_answers }
                                onAnswer = { handleAnswer }
                            />

                        </div>
                        <Button onClick={ nextQuestion }>Next Question.</Button>
                        {console.log(score)}
                    </>
            ) }

                {showResult && (
                    <>
                    <h2>Score: {score}</h2>
                    {score < 50 ? <p>You failed.</p> : <p>You Passed.</p> }
                </>
                 ) }
            </div>
        </div>
    );
}