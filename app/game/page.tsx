import type { Metadata } from 'next';
import MenuToggle from '@/components/game/menu-toggle';
import PrizeSidebar from '@/components/game/prize-sidebar';
import Gameplay from '@/components/game/gameplay';
import styles from '@/styles/game/game.module.css';

export const metadata: Metadata = {
  title: 'Game',
};

export default function GamePage({ searchParams }: { searchParams?: { menu?: string } }) {
  const isSidebarOpen = searchParams?.menu === 'true';

  return (
    <main className={styles.container}>
      <MenuToggle action="open" />

      <Gameplay />

      <PrizeSidebar active={isSidebarOpen} />
    </main>
  );
}
