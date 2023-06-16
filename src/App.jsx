import { Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter , Route,  Routes} from 'react-router-dom'
import Cryptocurrencies from './pages/Cryptocurrencies'
import WhyUs from './pages/WhyUs'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'

function App() {


  return (
    <BrowserRouter>
      <div className='app'> 
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/why_us' element={<WhyUs/>}/>
            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
