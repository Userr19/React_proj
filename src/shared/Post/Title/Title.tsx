import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom'

interface ITileProps {
  title: string,
  id: string
}

export function Title({ title, id }: ITileProps) {
  return (
    <h2 className={styles.title}>
      <Link className={styles.postLink} to={`/posts/${id}`}>
        {title}
      </Link>
    </h2>
  );
}
