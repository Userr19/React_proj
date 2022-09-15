import React from "react";

function InputValue({onChange, value}: {onChange: (value: string) => void, value: string}) {
    return (
        <input value={value} onChange={getValue(onChange)}/>
    )
}

function Checkbox(props: {onChange: (value: boolean) => void, value: boolean}) {
    return <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
}

function pickFromSynteticEvent<T extends HTMLElement>() {
    return<K extends keyof T> (key: K) => 
        <E extends ((t: T[K]) => void)>(callBack: E) => 
            (ev: React.SyntheticEvent<T>) => 
                callBack(ev.currentTarget[key]) 
}

export const getValue = pickFromSynteticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSynteticEvent<HTMLInputElement>()('checked');
