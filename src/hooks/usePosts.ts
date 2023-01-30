import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { IPostProps } from "../shared/Post";
import { RootState } from "../../store/reducer";
import { tokenState } from "../../store/token/actions";

type IPostsData = IPostProps[];

export function usePosts() {
    const token = useSelector<RootState, string>(store => store.token.token)
    const [Posts, setPosts] = useState<IPostsData>([]);
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
            headers: { Authorization: `bearer ${token}` }
        }).then((resp) => {
            setPosts(resp.data.data.children.map((c: any) => c.data))
        }).catch(console.log);
    }, [token]);
    return [Posts];
}
