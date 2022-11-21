import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from '../UserBlock/UserBlock';
import { Search } from './Search/Search';


export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <Search />
      <UserBlock />
    </div>
  );
}
