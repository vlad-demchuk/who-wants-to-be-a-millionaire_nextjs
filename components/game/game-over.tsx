import Image from 'next/image';
import stages from '@/data/stages.json';
import styles from '@/styles/game/game-over.module.css';

export default function GameOver({
  onTryAgainClick,
  currentStage,
}: {
  onTryAgainClick: () => void,
  currentStage: number
}) {
  const prizeCash = stages[currentStage - 1].prize;

  return (
    <div className={`flex-center ${styles.container}`}>
      <div className={`flex-center ${styles.content}`}>
        <div className={styles.image}>
          <Image
            fill
            src="/images/hand.svg"
            alt="Hand"
          />
        </div>

        <div className="flex-center">
          <p className={styles.score}>Total score:</p>

          <p className={styles.earned}>
            {`${prizeCash} earned`}
          </p>

          <button
            type="button"
            onClick={onTryAgainClick}
            className={`button ${styles.button}`}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
