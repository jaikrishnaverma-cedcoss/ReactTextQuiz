import React from 'react';
import Countdown from 'react-countdown';

function Timer() {
    
    return ( 
        <>
         <Countdown
    date={Date.now() + 120000}
    intervalDelay={0}
    precision={3}
    
    renderer={props =><div className="btn-danger" style={{width:props.total/1200+'%',textAlign:"left",borderRadius:"20px",height:"13px"}}><p style={{fontSize:"12px",padding:"0px 10px",fontWeight:"900"}}>{parseInt(props.total/1200)}%</p></div>}
  />
        </>
     );
}

export default Timer;
