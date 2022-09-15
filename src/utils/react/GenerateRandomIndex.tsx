import { assoc } from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = ()=>{return assoc("id", generateRandomString());}
export const generateId = <O extends Object>(obj: O) => assignId()(obj);