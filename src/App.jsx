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
      <Developer></Developer>
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
    <div className="teacher">
      <h2>Teacher</h2>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

function Developer() {
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={devStyle}>
      <h1>Hello</h1>
    </div>
  )
}

export default App
