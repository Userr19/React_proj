import React, { useState } from 'react';
import { Modal } from '../Modal';
import styles from './title.css';

interface ITileProps {
  title?: string,
}

export function Title({title}: ITileProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={(ev) => {
        ev.preventDefault()
        setIsModalOpened(true);
      }}>
        {title}
      </a>
      {
        isModalOpened && <Modal title={title} onClose={() => {setIsModalOpened(false)}}/>
      }
    </h2>
  );
}
