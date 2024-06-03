import { useEffect } from "react";
import { useTrivia } from "../../components/ques";
import { Link } from "react-router-dom";

export function convert(str) {
    const tex = document.createElement("textarea")
    tex.innerHTML = str
    return tex.value
  }

export default function Home() {
    const questions = useTrivia(state => state.questions) || []
  const getQuestions = useTrivia(state => state.getQuestions)
  useEffect(() => {
    getQuestions()
  }, [])
  console.log(questions);
  return (
    <>
      <div>
        <main>
          <section className='container mx-auto'>
            <h1 className='italic font-bold text-xl'>Questions</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
              {questions.map(ques => {
                return <article className='flex flex-col justify-between border border-gray-500 rounded-md shadow-xl' key={ques.question}>
                  <h2 className='text-green-900'>
                    {convert(ques.question)}
                  </h2>
                  <div>
                    Answers:
                    {ques.incorrect_answers.map((ans, i) => {
                      return <h3 className='border border-blue-600 shadow-lg hover:bg-red-200 cursor-pointer'><span>{i}: </span>{convert(ans)}</h3>
                    })
                    }
                  </div>
                  <div className='text-green-600'>
                    {ques.correct_answer}
                  </div>
                </article>
              }
              )
              }
            </div>
          </section>
        </main>
        <Link to={"/quiz"}>
        Start a Quiz
        </Link>
      </div>
    </>
  )
}