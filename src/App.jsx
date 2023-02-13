import React from 'react'
import { Navbar, Hero, Companies, Courses, Achievement, Categories, Feedback } from "./components"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
    </div>
  )
}

export default App
