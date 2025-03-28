import './App.css'
import Header from './components/header'
import UserListIndex from './components/userList/userListIndex'
// import UserList from './components/userList/userListIndex'

function App() {

  return (
    <>
      <div className='min-h-screen w-full bg-gray-100 items-center justify-center flex'>
        <Header />
        <UserListIndex />
      </div>
    </>
  )
}

export default App
