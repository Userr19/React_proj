import React from "react";
import { useUserData } from "../../../hooks/useUserData";
import { UserBlock } from "../UserBlock/UserBlock";

export function UserBlockContainer() {
    const {data, loading} = useUserData();    
    return (
        <UserBlock iconImg={data.iconImg} name={data.name} loading={loading}/>
    )
}