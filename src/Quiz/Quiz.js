import React, { useState } from 'react';
import questions from './Questions'; // Import the questions array
import "./Quiz.css"

export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) { // Use the imported 'questions' array
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
	return (
		<div className='container d-block p-5'>
			{showScore ? (
				<div className='score-section'>
					To'g'ri javoblar soni {score} ta
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Savol {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
