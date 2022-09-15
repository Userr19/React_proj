import React from 'react';
import { Break } from '../../Break';
import { IconAnon } from '../../icons';
import { Ecolors, Text } from '../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=RBHYABoiHVhLzvS4UyVirQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" className={styles.userBox}>
      <div className={styles.avatarBox}>
        {
          avatarSrc ? <img src={avatarSrc} className={styles.avatarImage}></img> : <IconAnon />
        }
      </div>
      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? Ecolors.black : Ecolors.gray99} >{username || 'Anonym'}</Text>
      </div>
    </a>
  );
}
