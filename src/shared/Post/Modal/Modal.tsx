import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Karma } from '../../CardsList/Card/Controls/Karma';
import { ModalContext } from '../../context/ModalContext';
import styles from './modal.css';
import { IModalContextData } from "../../context/ModalContext";
import { Comment } from "../Comment";
import { generateRandomString } from '../../../utils/react/GenerateRandomIndex';
import { CommentFormContainer } from '../CommentFormContainer';

export function Modal({ onClose }: IModalContextData) {
  const { title, selftext, all_awardings } = useContext(ModalContext)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        onClose()
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, []);
  
  const node = document.querySelector("#modal_root");
  if (!node) {
    return null;
  }
  return ReactDOM.createPortal((
    <div className={styles.container} ref={ref}>
      <div className={styles.header}>
        <div className={styles.karma}>
          <Karma />
        </div>
        <h2 className={styles.title}>
          {title}
        </h2>
      </div>
      <div className={styles.body}>
        <p className={styles.text}>
          {selftext ? selftext : "some"}
        </p>
      </div>
      <CommentFormContainer />
      {all_awardings?.map(award => {
        return (
            <Comment {...award} key={generateRandomString()}/>
        )
      })}
    </div>), node
  );
}
