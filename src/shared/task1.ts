// 1
type concat = (x: string,y: string) => string;

const func: concat = function(str1, str2) {
    return str1 + str2;
} 

// 2
interface Hometask {
    howIDoIt: string,
    simeArray: Array<string|number>
    withData?: Array<Hometask> 
}

const myHometask: Hometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42, 34, "werewr"],
    withData: [
        { howIDoIt: "I Do It Wel", simeArray: ["string one"] }, 
        { howIDoIt: "I Do It Well", simeArray: ["string one", 23, "string 2"] }, 
        { howIDoIt: "I Do It Welll", simeArray: ["string one", 23,34] }
    ],
}

// 3
interface MyArray <T> {
    [N: number]: T;

    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

    reduce<U>(callbackfn:(aggr: T,value: T, index: number, array: T[]) => U, start:T):U;
}

const arr:MyArray<number> = [1,2,3,4];
const result = arr.reduce(function(aggr, val){
    return aggr + val;
},0)

// 4
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPatrial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPatrial<T[N]>: T[N];
}

const mySecondHomeTask: MyPatrial <IHomeTask> = {
    date: "some"
}