import React, { ChangeEvent, useContext } from 'react';
import { answerContext } from '../../../context/answerContext';
import styles from './answerform.css';

interface IAnsProps {
  name: string,
}

export function AnswerForm({name}: IAnsProps) {
  const { value, onChange } = useContext(answerContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    debugger
    onChange(event.target.value)
  }

  return (
    <form className={styles.form}>
      <textarea value={name + " " + value} onChange={handleChange}>

      </textarea>
      <button className={styles.btn} type="submit">Add</button>
    </form>
  );
}
