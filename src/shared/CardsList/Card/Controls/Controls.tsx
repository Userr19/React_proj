import React, { useState } from 'react';
// import { GeneericList } from './Menu';
import styles from './controls.css';
import { Karma } from './Karma';
import { assignId, generateId, generateRandomString } from '../../../../utils/react/GenerateRandomIndex';
import { merge } from '../../../../utils/js/merge';

const LIST = [
  {
    text: 'Комментарии'
    // svg: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      /* <path d="M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z" fill="#999999" /> */
    /* </svg> */
  },
  {
    text: 'Поделиться'
    // svg: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
      /* <path d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z" fill="#999999" /> */
    /* </svg> */
  },
  {
    text: 'Скрыть'
    // svg: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      /* <path d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z" fill="#999999" /> */
    /* </svg> */
  },
  {
    text: 'Сохранить'
    // svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
      /* <path d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" fill="#999999" /> */
    /* </svg> */
  },
  {
    text: 'Пожаловаться'
    // svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
      /* <path d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" fill="#999999" /> */
    /* </svg> */
  },
].map(generateId)

export function Controls() {
  const [list, setList] = useState(LIST);

  const handleclick = (id: string) => {
    setList(LIST.filter(item => item.id != id))
  }
  return (
    <div className={styles.controls}>
      <div className={styles.circle}>
        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
        </svg>
        {/* <GeneericList list={list.map(merge({onClick: handleclick}))}/>  */}
      </div>
      <Karma />
    </div>
  );
}
