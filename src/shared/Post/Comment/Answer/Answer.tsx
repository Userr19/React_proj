import React, { useEffect, useRef } from 'react';
import { Break } from '../../../Break';
import { AnswerIcon } from '../../../icons/CommentsIcon';
import styles from './answer.css';

interface IAnswersProps {
  onClick: () => void,
}

export function Answer({ onClick }: IAnswersProps) {
  const ref = useRef<HTMLFormElement>(null)
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && ref.current?.contains(event.target))
        onClick()
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [])
  return (
    <form ref={ref}>
      <AnswerIcon />
      <Break size={8} inline />
      <span>
        Ответить
      </span>
    </form>
  );
}
