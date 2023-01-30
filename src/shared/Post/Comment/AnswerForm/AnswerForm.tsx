import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './answerform.css';

interface IAnsProps {
  name: string,
}

export function AnswerForm({ name }: IAnsProps) {
  const [value, setValue] = useState("");
  // const [valueTouched, setValueTouched] = useState(false);
  // const [valueError, setValueError] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    debugger;
    setValue(event.target.value);
  }

  function validateValue() {
    if (value.length <= 3) {
      return "Введите больше 3-х символов";
    }
    return "";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea value={value} onChange={handleChange} aria-valid={validateValue() ? "true" : undefined}>
      </textarea>
      {validateValue() && <div>{validateValue()}</div>}
      <button className={styles.btn} type="submit">Add</button>
    </form>

  );
}
