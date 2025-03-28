import './App.css'
import Header from './components/header'
import UserList from './components/userList'

function App() {

  return (
    <>
      <div className='min-h-screen w-full bg-gray-100 items-center justify-center flex'>
        <Header />
        <UserList />
      </div>
    </>
  )
}

export default App
