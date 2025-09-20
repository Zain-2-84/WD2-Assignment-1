import { Routes, Route } from 'react-router-dom'
import CalisthenicsPlanner from './components/calisthenicsPlanner'
import FAQs from './components/FAQs'
import MuscleGainFatLoss from './components/muscleGainFatLoss'
import NutritionAdvice from './components/nutritionAdvice'
import Navbar from './components/navbar'
import noMatch from './components/noMatch'
import Home from './components/home'

function App() {
  return (
    <>
      <Navbar/>
      <main className='main-area'>
        <Routes>
          <Route path='*' element={ <noMatch/> } />
          {/* <Route path='/components/' element={ <App /> } /> */}
          <Route path='/components/home' element={ <Home/> }/>
          <Route path='/components/calisthenicsPlanner' element={ <CalisthenicsPlanner /> }/>
          <Route path='/components/FAQs' element={ <FAQs /> }/>
          <Route path='/components/muscleGainFatLoss' element={ <MuscleGainFatLoss /> }/>
          <Route path='/components/nutrtionAdvice' element={ <NutritionAdvice /> }/>
          {/* <Route path='/components/navbar'/> element={ <Navbar/> } */}
        </Routes>
      </main>
    </>
  )
}

export default App