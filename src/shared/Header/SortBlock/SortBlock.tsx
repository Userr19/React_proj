import React from 'react';
import { ArrowDown } from '../../icons/ArrowDown';
import { RocketIcon } from '../../icons/RocketIcon';
import styles from './sortblock.css';

export function SortBlock() {
  return (
    <div className={styles.sortBlock}>
      <RocketIcon />
      <span className={styles.sortName}>Лучшие</span>
      <ArrowDown />
    </div>
  );
}
