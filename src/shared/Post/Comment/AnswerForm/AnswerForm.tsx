import React, { ChangeEvent, Ref, useContext, useRef, useState } from 'react';
import { answerContext } from '../../../context/answerContext';
import styles from './answerform.css';

interface IAnsProps {
  name: string,
  // ref: React.RefObject<HTMLTextAreaElement>
}

export function AnswerForm({name}: IAnsProps) {
  // const { value, onChange } = useContext(answerContext)
  const ref = useRef<HTMLTextAreaElement>(null)
  const [value, onChange] = useState(`${name}, `);
  ref.current && ref.current.focus();
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    debugger;
    onChange(event.target.value);
  }

  return (
    <form  className={styles.form}>
      <textarea ref={ref} value={value} onChange={handleChange}>

      </textarea>
      {ref && ref.current?.focus()}
      <button className={styles.btn} type="submit">Add</button>
    </form>
    
  );
}
