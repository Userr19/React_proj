import styles from "./cardslist.css"
import React from 'react';
import { Post } from "../Post";
import { IPostState } from "../../../store/list/actions";

interface ICardsListProps {
  Posts: Array<IPostState>;
  loading: boolean;
  errorLoading: string;
  canLoad: boolean;
  handleClick: () => void;
}

export function CardsList({ Posts, loading, errorLoading, canLoad, handleClick }: ICardsListProps) {
  return (
    <div className={styles.cardsList}>
      <ul >
        {Posts.length === 0 && !loading && !errorLoading && (
          <div>
            <p className={styles.message}>
              Хмм... здесь пока пусто
            </p>
          </div>
        )}
        {Posts ? Posts.map(child => {
          return (
            <Post
              key={child.id}
              id={child.id}
              title={child.title}
              url={child.url}
              author={child.author}
              name={child.name}
              thumbnail={child.thumbnail}
            />
          )
        }) : <div>
        </div>}
        {loading && <span className={styles.loading}>Loading ...</span>}
        {errorLoading &&
          <div className={styles.error} role="alert">
            {errorLoading}
          </div>
        }
      </ul>
      {!canLoad && <button className={styles.button} onClick={handleClick}>Загрузить еще</button>}
    </div>
  );
}

