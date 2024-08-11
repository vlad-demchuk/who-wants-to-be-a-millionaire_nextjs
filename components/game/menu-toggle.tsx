'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from '@/styles/game/menu-toggle.module.css';

export default function MenuToggle({ action }: { action: 'open' | 'close' }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const isActive = searchParams.get('menu') === 'true';

  const handleIconClick = (status: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (status) {
      params.set('menu', 'true');
    } else {
      params.delete('menu');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button
        className={styles.menuOpener}
        onClick={() => handleIconClick(!isActive)}
      >
        {action === 'open' ? (
          <Image
            src={'/icons/menu-opener.svg'}
            alt="Open prize sidebar"
            width={14}
            height={14}
          />
        ) : (
          <Image
            src={'/icons/menu-closer.svg'}
            alt="Close prize sidebar"
            width={14}
            height={14}
          />
        )}
      </button>
    </div>
  );
}
