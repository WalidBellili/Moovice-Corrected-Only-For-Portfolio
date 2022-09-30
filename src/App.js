import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Popular from './pages/Popular'
import Weekly from './pages/Weekly'
import NotFound from './pages/NotFound'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className='container my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/weekly' element={<Weekly />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
