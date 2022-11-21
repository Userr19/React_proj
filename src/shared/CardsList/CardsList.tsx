import React from 'react';
import { usePosts } from '../../hooks/usePosts';
import { ModalContext } from '../context/ModalContext';
import { Post } from '../Post/Post';
import styles from './cardslist.css';


export function CardsList() {
  const [Posts] = usePosts();
  return (
    <ul className={styles.cardsList}>
      {Posts? Posts.map(child => {  
        child.key = child.id;
            
        return (
          <ModalContext.Provider  key={child.key} value={child}>
              <Post {...child}/>
          </ModalContext.Provider>
          )
      }) : <div></div>}
    </ul>
  );
}
