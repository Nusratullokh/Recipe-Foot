import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './routes/admin/Admin'
import Products from './routes/products/Products'
import Users from './routes/users/Users'
import Promoted from './routes/promoted/Promoted'
function App() {


  return (
   <Routes>
      <Route path="/" element={<Admin/>}>
        <Route path='/admin/products' element={<Products/>} />
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/promoted' element={<Promoted/>}/>
      </Route>
     
   </Routes>
  )
}

export default App
