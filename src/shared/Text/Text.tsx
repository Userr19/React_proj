import React from 'react';
import styles from './text.css';
import classNames from "classnames"

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum Ecolors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

interface ITestProps {
  As?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p',
  children?: React.ReactNode,
  size: Tsizes,
  mobileSize?: Tsizes,
  tabletSize?: Tsizes,
  desktopSize?: Tsizes,
  color?: Ecolors,
  bold?: boolean,
  flex?: boolean
}

export function Text(props: ITestProps) {
  const {
    flex = false,
    As = 'span',
    color = Ecolors.black,
    bold = false,
    children, 
    size, 
    mobileSize,
    tabletSize, 
    desktopSize
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    {[styles.bold]: bold},
    {[styles.flex]: flex},
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
