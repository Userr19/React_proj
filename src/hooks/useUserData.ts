import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { IUserData, meRequest, meRequestError, meRequestSuccess } from "../../store/me/actions";

export function useUserData() {
  const token = useSelector<RootState, string>(state => state.token);
  const data = useSelector<RootState, IUserData>(state => state.me.data) 
  const dispatch = useDispatch();
  // const token = useContext(tokenContext)
  useEffect(() => {

    if(!token) return;
    dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me.json', {
      headers : {Authorization: `bearer ${token}`}
    }).then((resp) => {
      const resData = resp.data;
      console.log(`Data came))`);
      dispatch(meRequestSuccess({name: resData.name, iconImg: resData.icon_img}));
    })
    .catch((err) => {
      console.log(err);
      dispatch(meRequestError(String(err)));
    });
  }, [token]);
  return [data];
}