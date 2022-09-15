import React, { ReactComponentElement } from 'react';
import { generateRandomString } from '../../../../../utils/react/GenerateRandomIndex';
import styles from './genericlist.css';

interface Iitem {
  className?: string,
  text: string,
  id: string,
  svg?: React.ReactNode,
  onClick: (id: string) => void,
  As?: 'a' | 'li' | 'div' | 'button',
  href?: string
}

interface IMyGenericListProps {
  list: Iitem[],
}

export function GeneericList({ list }: IMyGenericListProps) {
  return (
    <ul className={styles.menu}>
    {list.map(({ As = 'li', text, onClick, className = "some", id, svg }) => 
      <As className={styles[className]} onClick={() => onClick(id)} key={id} >
        {svg}{text}
      </As>
    )}
    </ul>
  )
}
