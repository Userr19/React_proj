import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";


interface IUserData {
    name?: string,
    iconImg?: string
  }

export function useUserData() {
    const [data, setData] = useState<IUserData>({})
    const token = useContext(tokenContext)
  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me.json', {
      headers : {Authorization: `bearer ${token}`}
    }).then((resp) => {
      const resData = resp.data;
      setData({name: resData.name, iconImg: resData.icon_img})
    })
    .catch(console.log);
  }, [token]);
  return [data];
}