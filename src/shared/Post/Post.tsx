import React from 'react';
import styles from './post.css';

export interface IPostProps {
      key: string;
      author?: string,
      url?: string,
      title?: string,
}

export function Post({title, url = "https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg", author}: IPostProps) {
  // let Data = data.data?.data ? data.data?.data : {title: "Some", author: "Some", url: ''};
  if(url && (!url.endsWith(".jpg") && !url.endsWith(".gif"))) {
    url = 'https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg';
  } 
  return (
    <li className={styles.card}>
      <div className={styles.cardContainer}>
        <img src={url} className={styles.image} />
        <div className={styles.texts}>
          <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink}>
              {title}
            </a>
          </h2>
          <div className={styles.descr}>
            <span className={styles.time}>опубликовано 4 часа назад</span>
            <img className={styles.avatar} src={url} />
            <a href="#user-x" className={styles.userName}>{author}</a>
          </div>
        </div>
      </div>
      </li>
  );
}
