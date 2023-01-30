import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorValue, setTouched, updateComment } from '../../../../store/comment/actions';
import { RootState } from '../../../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';

export function CommentFormContainer() {
  const touched = useSelector<RootState, boolean>(state => state.comment.touched);
  const valueError = useSelector<RootState, string>(state => state.comment.valueError);

  const value = useSelector<RootState, string>(state => state.comment.commentText);
  const dispatch = useDispatch();

  function validateValue() {
    if (value.length <= 7) return { text: "Вводите больше 7-и символов", hasProblem: true };
    return { text: "", hasProblem: false };
  }
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(setErrorValue(validateValue().text));
    debugger;
    dispatch(setTouched(true));
    const isFormValid = !validateValue().hasProblem;
    if (!isFormValid) return;
    alert("Отправлено");
    dispatch(setTouched(false));
  }

  return (
    <CommentForm value={value} handleChange={handleChange} handleSubmit={handleSubmit} Touched={touched} valueError={valueError} />
  );
}
