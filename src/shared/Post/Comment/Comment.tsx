import React, { useRef, useState } from 'react';
import { Break } from '../../Break';
import { award } from '../../context/ModalContext';
import { Complain, Share } from '../../icons';
import { AnswerIcon, CommentIcon } from '../../icons/CommentsIcon';
import { Answer } from './Answer';
import { AnswerForm } from './AnswerForm';
import { AnswerNonControl } from './AnswerNonControl';
import styles from './comment.css';


export function Comment({ static_icon_url, description, name }: award) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  // const ref = useRef<HTMLTextAreaElement>(null)
  return (
    <div>
      <div className={styles.container}>
        <CommentIcon />
        <div className={styles.commentBox}>
          <div>
            <img className={styles.avatar} src={static_icon_url} /><span className={styles.name}>{name}</span>
          </div>
          <p className={styles.comment}>
            {description}
          </p>
        </div>
      </div>
      <div className={styles.controllBox}>
        <Answer onClick={() => { 
          setIsFormOpen(true);
          // ref.current && ref.current.focus(); 
        }
          } />
        <div>
          <div>
            <Share />
            <Break size={8} inline />
            <span>
              Поделиться
            </span>
          </div>
        </div>
        <div>
          <div>
            <Complain />
            <Break size={8} inline />
            <span>
              Пожаловаться
            </span>
          </div>
        </div>
      </div>
      {
        isFormOpen && <><AnswerForm name={name}/><AnswerNonControl name={name}/></>
      }
    </div>
  );
}
