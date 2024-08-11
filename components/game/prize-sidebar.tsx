'use client';

import clsx from 'clsx';
import { useProgressContext } from '@/contexts/progress-context';
import MenuToggle from '@/components/game/menu-toggle';
import stages from '@/data/stages.json';
import styles from '@/styles/game/prize-sidebar.module.css';

export default function PrizeSidebar({ active }: { active: boolean }) {
  const { currentStage } = useProgressContext();
  const formattedStages = stages.slice(1).toReversed();

  return (
    <aside className={clsx(styles.prizeSidebar, active && styles.sidebarOpen)}>
      <MenuToggle action="close" />

      <ul className={styles.prizeList}>
        {formattedStages.map((stage) => (
          <li
            key={stage.id}
            className={clsx(
              styles.prize,
              currentStage === stage.id && styles.active,
              currentStage > stage.id && styles.inactive,
            )}
          >
            {stage.prize}
          </li>
        ))}
      </ul>
    </aside>
  );
}
