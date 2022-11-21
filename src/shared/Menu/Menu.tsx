import React from 'react';
import { Icon } from '../Icon/Icon';
import { EBacks, Ecolors, MenuItem } from '../MenuItem/MenuItem';
import styles from './menu.css';
import { LIST } from '../CardsList/Card/Card';

interface IMenuProps {
  x: number,
  y: number,
}

export function Menu(coord: IMenuProps) { 
  const node = document.getElementById("modal_root");
  if(!node) {
      return null;
  }
  return (
    <ul className={styles.menu}>
          {LIST.map((item => {
            return <MenuItem key={item.id} size={37} icon={item.svg? item.svg : <Icon />} Background={EBacks.white} color={Ecolors.gray}>{item.text}</MenuItem>
          }))}
    </ul>);
}
