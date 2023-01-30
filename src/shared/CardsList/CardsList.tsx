import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { Post } from '../Post/Post';
import styles from './cardslist.css';

interface IChildProps {
  kind: string;
  data: {
    id: string;
    saved?: boolean;
    clicked?: boolean;
    title: string;
    hidden?: boolean;
    name: string;
    thumbnail: string;
    edited: boolean;
    author: string;
    isVideo?: boolean
  };
}

export function CardsList() {
  const token = useSelector<RootState, string>(state => state.token.token)
  const [loading, setLoading] = useState(false);
  const [Posts, setPosts] = useState<IChildProps[]>([]);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState('')
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [loadedData, setLoadedData] = useState(0);
  const [canLoad, setCanLoad] = useState(true)

  useEffect(() => {
    async function Load() {
      setLoading(true);
      setErrorLoading("");
      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/rising/', {
          headers: { Authorization: `bearer ${token}` },
          params: { limit: 10, after: nextAfter }
        });
        setNextAfter(after)
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error))
      }
      setLoading(false);
    }
    const observer = new IntersectionObserver((entries) => {
      setCanLoad(loadedData < 3);
      if (entries[0].isIntersecting && canLoad) {
        Load();
        setLoadedData(prev => prev + 1);
      }
    }, {
      "rootMargin": "100px",
    });
    if (bottomOfList.current)
      observer.observe(bottomOfList.current);
    return () => {
      if (bottomOfList.current)
        observer.unobserve(bottomOfList.current);
    }
  }, [bottomOfList.current, token, nextAfter, canLoad])
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
            <Post key={child.data.id}
              id={child.data.id}
              title={child.data.title}
              url={child.data.thumbnail}
              author={child.data.author}
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
      <div ref={bottomOfList} />
      {!canLoad && <button className={styles.button} onClick={() => {
        setLoadedData(0);
        setCanLoad(true)
      }}>Загрузить еще</button>}
    </div>
  );
}

