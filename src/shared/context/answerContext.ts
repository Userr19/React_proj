import React from "react";


type AnswerContextType = {
    value: string,
    onChange: (val: string) => void
}

export const  answerContext = React.createContext<AnswerContextType>({
    value: "",
    onChange: ()=>{}
})