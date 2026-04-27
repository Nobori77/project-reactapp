import { createContext, useState } from "react";

export const StudyQuizContext = createContext({
    state: {
        quizzes: [], answers: []
    },
    actions: {
        insertQuizzes: () => {},
        removeQuizzes: () => {},
        insertAnswers: () => {},
        removeAnswers: () => {},
    }
})

const StudyQuizProvider = ({children}) => {

    const [quizzes, setQuizzes] = useState([])

    // [
    //      { id: 1, title: "이규학이 잘하는 것은?", answers: [{example: "맞는 생각", correct: true}, {example: "자는 생각", correct: false},] }
    // ]

    const [answers, setAnswers] = useState([])

    // const getQuizzes = async () => {
    //     const response = await fetch("퀴즈 경로")
    //     if(!response.ok) throw new Error("")
    //     const {success, message, data} = await response.json()
    //     if(success){
    //         setQuizzes(data)
    //     }
    // }

    // getQuizzes()

    const value = {
       state: {
        quizzes: quizzes, answers: answers
        },
        actions: {
            insertQuizzes: () => {},
            removeQuizzes: () => {},
            insertAnswers: () => {},
            removeAnswers: () => {},
        }
    }

    return (
        <StudyQuizContext.Provider value={value}>
            {children}
        </StudyQuizContext.Provider>
    )
}


export default StudyQuizProvider;