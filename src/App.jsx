import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import axios from 'axios'
import { useTrivia } from './components/ques'
import { Link } from 'react-router-dom'
import Layout from './Layout'


function App() {
return(
  <>
  <Header/>
  <Layout/>
  </>
)
}

export default App
