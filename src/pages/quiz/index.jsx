import { useState } from "react"
import { useTrivia } from "../../components/ques"
import { convert } from "../home"

export default function Quiz() {
    const questions = useTrivia(state=>state.questions) || []
    const [index,setIndex] = useState(0)
console.log(questions[index]?.correct_answers);
        return(
        <>
        <div className="w-3/6 m-auto">

    <h1>{convert(questions[index]?.question)}</h1>
    <div className="grid grid-cols-2"> 
        {
            questions[index].incorrect_answers.map(answer => {
                return <button  onClick={()=>setIndex(prev=>(prev+1))} className="bg-gray-950 text-green-500 border border-gray-800 hover:opacity-20">{answer}</button>
            })
        }
        <button onClick={()=>setIndex(prev=>(prev+1))} className="bg-gray-950 text-green-500 border border-gray-800 hover:opacity-20">{ questions[index]?.correct_answer}</button>
    </div>
        </div>
        </>
    )
}