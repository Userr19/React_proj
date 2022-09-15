import React, { useEffect, useState } from "react";

export function MyHooks({ title }: {title: string}) {
    React.useEffect(() => {
        console.log('componentDidMount');
        console.log('componentWillUpdate');
    });
    
    React.useEffect(() => {
        console.log('componentDidMount');

        return () => {
            console.log('componentWillUnmount');
            
        }
    }, []);

    React.useEffect(() => {
        console.log('componentWillReceveProps: ', title);
    }, [title]);

    return (
        <div>
            {title}
        </div>
    )
}

const [isMounted] = useIsMounted();

useEffect(() => {
    console.log(isMounted);
}, [isMounted])

function useIsMounted() {
     const [isMounted, setIsMounted] = useState(false);

     useEffect(() => {
        setIsMounted(true)
     }, []);

     return [isMounted];
}