import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/images/Logo.svg" alt="logo" />
      </Link>
    </header>
  );
}
