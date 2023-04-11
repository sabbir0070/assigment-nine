
import './App.css'
import ErrorPage from './Component/ErrorPage/ErrorPage'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <div className="px-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl p-10" >
    <Header></Header>
    <Outlet></Outlet>
    <div>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default App
