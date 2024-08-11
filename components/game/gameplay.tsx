'use client';

import styles from '@/styles/game/gameplay.module.css';
import { useContext, useState } from 'react';
import { ProgressContext } from '@/contexts/progress-context';
import questions from '@/data/questions.json';
import { DELAY_BEFORE_CHECK, DELAY_BEFORE_NEXT_STEP, LETTERS } from '@/lib/constants';
import GameOver from '@/components/game/game-over';
import clsx from 'clsx';
import { validateOption } from '@/lib/utils';

export default function Gameplay() {
  const {
    currentStage,
    setCurrentStage,
    isGameOver,
    setIsGameOver,
  } = useContext(ProgressContext);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const currentQuestion = questions[currentStage - 1];
  const isWinner = currentStage > questions.length;

  const handleOptionClick = (option: string) => {
    if (selectedOption) return;

    setSelectedOption(option);

    checkAnswer(option);
  };

  const checkAnswer = (option: string) => {
    setTimeout(() => {
      setIsAnswerShown(true);

      proceedNextStep(validateOption(currentQuestion.answers, option));
    }, DELAY_BEFORE_CHECK);
  };

  const proceedNextStep = (isAnswerCorrect: boolean) => {
    setTimeout(() => {
      reset();

      if (isAnswerCorrect) {
        setCurrentStage(currentStage + 1);
      } else {
        setIsGameOver(true);
      }
    }, DELAY_BEFORE_NEXT_STEP);
  };

  const reset = () => {
    setSelectedOption('');
    setIsAnswerShown(false);
  };

  const handleTryAgainClick = () => {
    reset();
    setCurrentStage(1);
    setIsGameOver(false);
  };

  if (isWinner || isGameOver) {
    return <GameOver
      onTryAgainClick={handleTryAgainClick}
      currentStage={currentStage}
    />;
  }

  return (
    <section className={styles.container}>
      <p className={styles.question}>{currentQuestion.title}</p>

      <ul
        key={currentQuestion.id}
        className={styles.optionsList}
      >
        {currentQuestion.options.map((option, i) => (
          <li
            key={option}
            className={clsx(
              styles.option,
              option === selectedOption && !isAnswerShown && styles.selected,
              validateOption(currentQuestion.answers, option) && isAnswerShown && styles.correct,
              option === selectedOption && isAnswerShown && !validateOption(currentQuestion.answers, option)
              && styles.wrong,
            )}
            onClick={() => handleOptionClick(option)}
          >
            <span className={styles.id}>{LETTERS[i]}</span>{option}
          </li>
        ))}
      </ul>
    </section>
  );
}
