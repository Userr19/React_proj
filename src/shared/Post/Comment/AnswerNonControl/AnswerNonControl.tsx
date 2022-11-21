import React, { useRef } from 'react';
import styles from './answernoncontrol.css';


interface IAnsProps {
  name: string,
  // ref: React.RefObject<HTMLTextAreaElement>
}

export function AnswerNonControl({name}: IAnsProps) {
  const ref = useRef<HTMLTextAreaElement>(null)
  return (
    <form className={styles.form}>
      <textarea defaultValue={name} ref={ref} onChange={() => {console.log(ref.current && ref.current.value);
      }}>

      </textarea>
      <button className={styles.btn} type="submit">Add</button>
    </form>
  );
}

