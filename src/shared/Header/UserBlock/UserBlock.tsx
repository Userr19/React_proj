import React from 'react';
import { Break } from '../../Break/Break';
import { IconAnon } from '../../icons/iconAnon';
import { Ecolors, Text } from '../../Text/Text';
import styles from './userblock.css';

interface IUserNameProps {
  iconImg?: string;
  name?: string;
  loading?: boolean;
}

export function UserBlock({ iconImg, name, loading }: IUserNameProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=RBHYABoiHVhLzvS4UyVirQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit" className={styles.userBox}>
      <div className={styles.avatarBox}>
        {
          iconImg ? <img src={iconImg} className={styles.avatarImage}></img> : <IconAnon />
        }
      </div>
      <div className={styles.name}>
        <Break size={12} />
        {
          loading ? (
            <Text size={20} color={Ecolors.gray99} >Loading...</Text>
          ) : (
            <Text size={20} color={name ? Ecolors.black : Ecolors.gray99} >{name || 'Anonym'}</Text>
          )
        }
      </div>
    </a>
  );
}

