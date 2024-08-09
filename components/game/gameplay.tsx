import styles from '@/styles/game/gameplay.module.css';
import { useContext } from 'react';
import { ProgressContext } from '@/contexts/progress-context';
import questions from '@/data/questions.json';
import { LETTERS } from '@/lib/constants';

export default function Gameplay() {
  const { prize, currentStage, setCurrentStage } = useContext(ProgressContext);
  const currentQuestion = questions[currentStage];

  return (
    <section className={styles.container}>
      <p className={styles.question}>{currentQuestion.title}</p>

      <ul className={styles.optionsList}>
        {currentQuestion.options.map((option, i) => (
          <li
            key={option}
            className={styles.option}
            // onClick={() => {
            //   setCurrentStage(currentStage + 1);
            // }}
          >
            <span className={styles.id}>{LETTERS[i]}</span>{option}
          </li>
        ))}
      </ul>


    </section>
  );
}
