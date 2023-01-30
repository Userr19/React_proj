import React from 'react';
import { Karma } from '../CardsList/Card/Controls/Karma';
import { Dropdown } from '../Dropdown';
import { DropIcon } from '../icons';
import { Menu } from '../Menu';
import styles from './post.css';
import { Title } from './Title';

export interface IPostProps {
  id: string;
  author?: string,
  url?: string,
  title: string,
  //   onClose: () => void
}

const defaultLink = "https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg";
export function Post({ title, url = defaultLink, author }: IPostProps) {

  if (url && (!url.endsWith(".jpg") && !url.endsWith(".gif"))) {
    url = defaultLink;
  }

  return (
    <li className={styles.card}>
      <div className={styles.cardContainer}>
        <img src={url} className={styles.image} />
        <div className={styles.texts}>
          <Title title={title} />
          <div className={styles.descr}>
            <span className={styles.time}>опубликовано 4 часа назад</span>
            <img className={styles.avatar} src={url} />
            <a href="#user-x" className={styles.userName}>{author}</a>
          </div>
        </div>
      </div>
      <Dropdown onClose={() => { console.log('colsed') }} onOpen={() => { console.log('opened') }} button={<DropIcon />}
        karma={<Karma />}
        isOpen={false}>
        <Menu {...{ x: 31, y: 231 }} />
      </Dropdown>
    </li>
  );
}
