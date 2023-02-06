import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Karma } from '../../CardsList/Card/Controls/Karma';
import styles from './modal.css';
import { CommentFormContainer } from '../CommentFormContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducer';
import { IChild } from '../../../../store/list/actions';
import { getPost } from '../../../../store/list/post/actions';


export function Modal() {
  const ref = useRef<HTMLDivElement>(null);
  const path = global.location.pathname;
  const id = path.substring(path.length - path.indexOf("/", 2) - 1);
  const Posts = useSelector<RootState, IChild[]>(store => store.list.children).map(item => item.data);
  const post = getPost(id, Posts);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) { }
      global.history.go(-1);
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
          {post.title}
        </h2>
      </div>
      <div className={styles.body}>
        <p className={styles.text}>
          {"text"}
        </p>
      </div>
      <CommentFormContainer />
      {/* {all_awardings?.map(award => {
        return (
          <Comment {...award} key={generateRandomString()} />
        )
      })} */}
    </div>), node
  );
}
