import React from 'react';
import styles from './searchblock.css';
import { Search } from './Search/Search';
import { UserBlockContainer } from '../UserBlockContainer';


export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <Search />
      <UserBlockContainer />
    </div>
  );
}
