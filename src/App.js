import './BaseUI.css';
import './App.css';
import Main2 from './components/Main2';
import Timer from './components/Timer';
import { useRef } from 'react';
function App() {
  const keys = useRef();

  const changer=()=>{
    console.log(keys.current.style.display="none")
  }
  return (

    <div className="App " style={{backgroundColor:"#dbdbdb"}}>
   <div className='row flexAIC  w100 flexEnd btn-trans'  style={{height:"13px",border:"2px solid white",borderRadius:"20px"}}><div className='row flexAIC  w100 flexEnd btn-trans' style={{height:"13px",width:"100%",borderRadius:"20px"}} ref={keys} ><Timer /></div> </div>
                
     <Main2 changer={changer}/>
    </div>
  );
}

export default App;
