import { Formik } from 'formik';
import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
  value: string,
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  handleSubmit: (event: FormEvent<Element>) => void,
  valueError: string,
  Touched: boolean,
}

export function CommentForm({ value, handleChange, handleSubmit, valueError, Touched }: ICommentFormProps) {
  function validateValue() {
    if (value.length <= 7) return { text: "Вводите больше 7-и символов", hasProblem: true };
    return { text: "", hasProblem: false };
  }
  return (
    <div>
      <Formik
        initialValues={{ value, valueError }}
        validate={validateValue}
        onSubmit={() => {
        }}
      >
        {({
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.comment}>
              <textarea className={styles.textarea} name="comment" aria-invalid={valueError ? "true" : undefined} value={value} onChange={handleChange}>
              </textarea>
              {Touched && valueError && (<div>{valueError}</div>)}
            </div>
            <button type='submit' className={styles.button} disabled={Touched && validateValue().hasProblem} >Комментировать</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
