import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUserData } from '../../../hooks/useUserData';
import { RootState } from '../../../../store/reducer';
import { Break } from '../../Break/Break';
import { IconAnon } from '../../icons/iconAnon';
import { Ecolors, Text } from '../../Text/Text';
import styles from './userblock.css';

interface IUserNameProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username}: IUserNameProps) {
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

