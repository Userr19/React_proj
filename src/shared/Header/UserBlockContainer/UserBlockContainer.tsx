import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../hooks/useUserData";
import { RootState, setUserData } from "../../../../store/reducer";
import { UserBlock } from "../UserBlock/UserBlock";

export function UserBlockContainer() {
    const avatarSrc = useSelector<RootState, string>(store => store.userImage);
    const username = useSelector<RootState, string>(store => store.userName);
    const [{ iconImg, name }] = useUserData()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserData(iconImg, name));
    }, []);
    return (
        <UserBlock avatarSrc={iconImg} username={name}/>
    )
}