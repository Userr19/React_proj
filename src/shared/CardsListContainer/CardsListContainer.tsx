import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync, SetCanLoadPosts, SetLoadedDataPosts, SetLoadingPosts, SetSignedUser } from '../../../store/list/actions';
import { IChild } from '../../../store/list/actions';
import { RootState } from '../../../store/reducer';
import { CardsList } from '../CardsList/CardsList';
import { Login } from '../LogIn/Login';

export function CardsListContainer() {
    const dispatch = useDispatch();
    const token = useSelector<RootState, string>(state => state.token.token);
    const nextAfter = useSelector<RootState, string>(state => state.list.after);
    const errorLoading = useSelector<RootState, string>(state => state.list.errorLoading);
    const loadedData = useSelector<RootState, number>(state => state.list.loadedData);
    const canLoad = useSelector<RootState, boolean>(state => state.list.canLoad);
    const loading = useSelector<RootState, boolean>(state => state.list.loading);
    const Posts = useSelector<RootState, IChild[]>(store => store.list.children);
    const bottomOfList = useRef<HTMLDivElement>(null);
    const signed = useSelector<RootState, boolean>(store => store.list.signed);


    useEffect(() => {
        function Load() {
            dispatch(SetLoadingPosts(true));
            dispatch(postRequestAsync())
        }
        const observer = new IntersectionObserver((entries) => {
            dispatch(SetCanLoadPosts(loadedData < 3));
            if (entries[0].isIntersecting && canLoad) {
                Load();
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
        <>
            {!signed ? <Login onClick={() => {
                dispatch(SetSignedUser(true))
            }} /> : <CardsList handleClick={() => {
                dispatch(SetLoadedDataPosts(0));
                dispatch(SetCanLoadPosts(true));
            }} canLoad={canLoad} loading={loading}
                Posts={Posts.map(item => item.data)} errorLoading={errorLoading} />}
            <div ref={bottomOfList} />
        </>
    );
}

