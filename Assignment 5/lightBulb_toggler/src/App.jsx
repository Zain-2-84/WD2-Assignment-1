import { useState } from 'react'
// import
import './App.css'

function App() {
  const [onBulb, setOnBulb] = useState(false);

  function toggle() {
    setOnBulb(!onBulb);
  }

  return (
    <>

    <div className={ 'lightBulb-with-button'} style={ { backgroundColor: onBulb ? 'white' : 'black'} }>

    <h1 className={"heading"} style={ {color: onBulb ? 'black' : 'white'} }>
      Light bulb
    </h1>
      <div className='lightBulb-Holder'>
        {onBulb === false ? (
            <img src="../images/Light-bulb-off-Bg-removed.png" alt="Light bulb off" srcset=""/>
          ) : (
            <img src="../images/Light-bulb-on-Bg-removed.png" alt="Light bulb on" srcset="" />
          )
        }
      </div>
      
        <div className='toggleButton-Holder'>
          <div onClick={toggle}>{ onBulb === false ? <img src='../images/toggle-button/toggle-button-Off-Bg-removed.png' /> : <img src='../images/toggle-button/toggle-button-On-Bg-removed.png'/> }</div>
        </div>
    </div>
    </>
  );
}

export default App