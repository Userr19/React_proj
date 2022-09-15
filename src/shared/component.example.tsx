import * as React from 'react';
import { getValue } from '../utils/react/pickFromSynteticEvent';
import { preventDefault, stopPropagation } from '../utils/react/NotStandartLink';

function InputExample({ value, onChange}: any) {
    return (
        <input 
            value={value}   
            // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}    
            onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}    
        />
    )
}

function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any):U => 
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any):U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
} 