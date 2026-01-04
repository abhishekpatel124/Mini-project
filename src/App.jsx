import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Card from './components/card.jsx'  
function App() {

  

  return (
    <>
      <Header></Header>
      <div className="card-container">
        <Card img="https://images.unsplash.com/photo-1767360307225-7dcdcaabe71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" username="Abhishek Patel" Contact={987654321} category="snow" ></Card>
        <Card img="https://images.unsplash.com/photo-1767290645350-dcb4e6bf9d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" username="Aman" Contact={123456789} category="mountain-sunset"></Card>
        <Card img="https://images.unsplash.com/photo-1764377847910-72d7800421b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" username="Rahul" Contact={987654345} category="forest"></Card>
        <Card img="https://images.unsplash.com/photo-1767099181762-17142d05ddcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D" username="Shani" Contact={1122334455} category="beach"></Card>
      </div>
    </>
  )
}

export default App
