import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'
function App() {

  return (
    <UserContextProvider>
      <h1>React Page for learning context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
