import './main.scss'
import {lazy, Suspense} from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import CategoryDetail from './pages/CategoryDetail'
import LazyFn from './LazyFn'
const LazyAbout = lazy(() => import('./pages/About'))
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Đây là trang Chủ</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <button onClick={() => {
        navigate('/')
      }}>Chuyển qua home</button>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={
              <Suspense fallback={<>Loading...</>}>
                <LazyAbout/>
              </Suspense>
          }></Route>
          <Route path='/products/:productId/:abc' element={LazyFn(() => import('./pages/Product'))()}></Route>
          <Route path='/categories' element={LazyFn(() => import('./pages/Category'))()}>
            <Route path=':categoryId' element={<CategoryDetail/>}></Route>
          </Route>
      </Routes>
      <h1>Đây end là trang Chủ</h1>
    </div>
  )
}

export default App
