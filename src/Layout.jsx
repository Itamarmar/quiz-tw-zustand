import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

export default function Layout() {
    return(
        <>
        <Routes>
<Route path="/" element={<Home />}/>
<Route path="/quiz" element={<Quiz/>}/>
        </Routes>
        </>
    )
}