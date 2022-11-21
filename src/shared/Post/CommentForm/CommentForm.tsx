import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../../../store/reducer';
import styles from './commentform.css';

interface ICommentFormProps {
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (event: FormEvent<Element>) => void,
}

export function CommentForm({value, onChange, onSubmit}: ICommentFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {/* <div className={styles.areaDescr}>
        <span className={styles.userName}>
          Константин,
        </span>
        <Break size={8} inline />
        <span className={styles.descr}>
           оставьте ваш комментарий
        </span>
      </div> */}
      <div className={styles.comment}>
        <textarea className={styles.textarea} name="comment" value={value} onChange={onChange}>
        
        </textarea>
      </div>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
