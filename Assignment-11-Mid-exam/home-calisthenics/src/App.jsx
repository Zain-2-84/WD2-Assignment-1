import { Routes, Route } from 'react-router-dom'
import CalisthenicsPlanner from './components/calisthenicsPlanner'
import FAQs from './components/FAQs'
import BuildAndBurn from './components/buildAndBurn'
import NutritionAdvice from './components/nutritionAdvice'
import Navbar from './components/navbar'
import NoMatch from './components/noMatch'
import Home from './components/home'

function App() {
  return (
    <>
      <Navbar/>
      <main className='main-area'>
        <Routes>
          <Route path='*' element={ <noMatch/> } />
          <Route path='/components/home' element={ <Home/> }/>
          <Route path='/components/calisthenicsPlanner' element={ <CalisthenicsPlanner /> }/>
          <Route path='/components/FAQs' element={ <FAQs /> }/>
          <Route path='/components/buildAndBurn' element={ <BuildAndBurn /> }/>
          <Route path='/components/nutritionAdvice' element={ <NutritionAdvice /> }/>
          <Route path='/components/noMatch' element={ <NoMatch /> }/>
        </Routes>
      </main>
    </>
  )
}

export default App