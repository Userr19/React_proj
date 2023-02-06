import { useEffect } from "react";
import { RootState } from "../../store/reducer";
import { postRequestAsync } from "../../store/list/actions";
import { IChild } from "../../store/list/actions";
import { useDispatch, useSelector } from "react-redux";

export function usePosts() {
    const dispatch = useDispatch()
    const token = useSelector<RootState, string>(store => store.token.token);
    const Posts = useSelector<RootState, Array<IChild>>(store => store.list.children);
    useEffect(() => {
        dispatch(postRequestAsync());
    }, [token]);
    return [Posts];
}
