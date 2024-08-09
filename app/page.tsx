import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/root.module.css';

export default function RootPage() {
  return (
    <main className={`flex-center ${styles.container}`}>
      <div className={`flex-center ${styles.content}`}>
        <div className={styles.image}>
          <Image
            fill
            src="/images/hand.svg"
            alt="Hand"
          />
        </div>

        <div className={`flex-center`}>
          <h1 className={styles.title}>Who wants to be<br /> a millionaire?</h1>

          <Link
            href="/game"
            className={styles.link}
          >
            <button className="button">Start</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
