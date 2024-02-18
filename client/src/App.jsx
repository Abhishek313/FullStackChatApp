import socketIO from "socket.io-client"
import './App.css'

const ENDPOINT = 'http://localhost:3000/'

const socket = socketIO(ENDPOINT, {transports: ['websocket']})

function App() {
  
  socket.on("connect" , () =>{
    console.log("New connection")
  } )
  return (
    <>
      <h1> Working </h1>
    </>
  )
}

export default App
