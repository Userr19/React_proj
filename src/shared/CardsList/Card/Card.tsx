import React from 'react';
import { generateId } from '../../../utils/react/GenerateRandomIndex';
import { Dropdown } from '../../Dropdown';
import { Icon } from '../../Icon';
import { DropIcon } from '../../icons/DropIcon';
import { Coments, Complain, Cover, Save, Share } from '../../icons/ListIcons';
import { EBacks, Ecolors, MenuItem } from '../../MenuItem';
import styles from './card.css';
import { Karma } from './Controls/Karma';
import { GeneericList } from './Controls/Menu';

const LIST = [
  {
    text: 'Комментарии',
    svg: <Coments />,
    onClick: () => {
      console.log('id');
    },
    className: 'option'
  },
  {
    text: 'Поделиться',
    svg: <Share />,
    onClick: () => {
      console.log('id');
    },
    className: 'option'
  },
  {
    text: 'Скрыть',
    svg: <Cover />,
    onClick: () => {
      console.log('id');
    },
    className: 'option'
  },
  {
    text: 'Сохранить',
    svg: <Save />,
    onClick: () => {
      console.log('id');
    },
    className: 'option'
  },
  {
    text: 'Пожаловаться',
    svg: <Complain />,
    onClick: () => {
      console.log('id');
    },
    className: 'option'
  },
  {
    text: 'Закрыть',
    onClick: () => {
      console.log('id');
    },
    className: 'optionClose'
  },
].map(generateId)

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.cardContainer}>
        <img src="https://cdn.dribbble.com/userupload/3022480/file/original-55da12bd47ce1ddc63dc5f6f925ede87.jpg?compress=1&resize=450x338&vertical=top" className={styles.image} />
        <div className={styles.texts}>
          <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink}>
              Реализация намеченных плановых заданий
            </a>
          </h2>
          <div className={styles.descr}>
            <span className={styles.time}>опубликовано 4 часа назад</span>
            <img className={styles.avatar} src="https://cdn.dribbble.com/userupload/3022480/file/original-55da12bd47ce1ddc63dc5f6f925ede87.jpg?compress=1&resize=450x338&vertical=top" />
            <a href="#user-x" className={styles.userName}>Дмитрий Гришин</a>
          </div>
        </div>
      </div>
      <Dropdown onClose={() => { console.log('colsed') }} onOpen={() => { console.log('opened') }} button={<DropIcon />}
        karma={<Karma />}
        isOpen={false}>
        {/* <GeneericList list={LIST}/> */}
        <ul className={styles.menu}>
          {LIST.map((item => {
            return <MenuItem key={item.id} size={37} icon={item.svg? item.svg : <Icon />} Background={EBacks.white} color={Ecolors.gray}>{item.text}</MenuItem>
          }))}
        </ul>
      </Dropdown>
    </li>
  );
}
