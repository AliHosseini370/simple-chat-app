import { useState } from 'react'
import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'
import './App.css'

function App() {
  const [user, setUser] = useState(undefined)
  return (
    <>
      {!user ? <AuthPage onAuth={(user) => setUser(user)} /> : <ChatsPage user={user} />}
    </>
  )
}

export default App
