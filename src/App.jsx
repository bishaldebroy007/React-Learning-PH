// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Teacher></Teacher>
    </>
  )
}

{/* I made my first component */}

function Person (){
  // const age = 26;
  const person = {name: 'Rakib', age: 27};
  return <h3>I am {person.name} and my age is {person.age} </h3>
}

function Teacher(){
  return (
    <>
      <h2>Teacher</h2>
      <p>Name:</p>
      <p>Age:</p>
    </>
  )
  
}

export default App
