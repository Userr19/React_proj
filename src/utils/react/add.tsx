const add = (firstNum: number) => {
    return (secondNum: number) => {
        return firstNum + secondNum;
    }
}

const two = add(1)(1);

const addOne = add(1);

const tree = addOne(2);
