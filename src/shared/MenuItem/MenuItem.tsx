import classNames from 'classnames';
import React from 'react';
import { Break } from '../Break';
import { Text } from '../Text';
import styles from './menuitem.css';


type Tsizes = 26 | 37;

export enum EBacks {
  white = 'Bwhite',
  gray = 'Bgray',
}

export enum Ecolors {
  black = 'black',
  gray = 'gray',
}

interface IMenuItemProps {
  size?: Tsizes,
  descSize?: Tsizes,
  icon?: React.ReactNode,
  Background?: EBacks,
  color?: Ecolors,
  children: string,
}

export function MenuItem(props: IMenuItemProps) {
  const {
    icon,
    children = "",
    size, 
    color = Ecolors.gray,
    descSize,
    Background = EBacks.white,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    styles[Background],
    { [styles[`desc${descSize}`]]: descSize },
  )
  return (
    <li className={classes}>
      <Text size={16} flex>
        <>
        {icon}
        <Break size={4} inline></Break>
        </>{children}
      </Text>
    </li>
  );
}
