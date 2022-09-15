import React from 'react';
import { usePosts } from '../../hooks/usePosts';
import { generateId, generateRandomString } from '../../utils/react/GenerateRandomIndex';
import { Post } from '../Post';
import styles from './cardslist.css';


export function CardsList() {
  const [Posts] = usePosts();
  debugger
  // Posts.map(generateId);
  return (
    <ul className={styles.cardsList}>
      {Posts? Posts.map(child => {  
        console.log(child);
        console.log("hho");
        child.key = generateRandomString()    
        return <Post {...child}/>
      }) : <div></div>}
    </ul>
  );
}
