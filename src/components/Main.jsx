
import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { current:0,answer:[-1,-1,-1,-1,-1,-1],choosed:-1,answered:0,notVisited:6,makeRev:0,ansMarReview:0,review:[]}
    }

    // -2 wrong answer
   Choosed=(i)=>{
    this.state.choosed=i;
    this.setState(this.state)  
   }
   SaveNext=()=>{
    if(this.state.choosed!==-1)
    {
      this.state.answerd+=1;
      if(this.props.paper[this.state.current].answer===this.state.choosed)
      {
        // this.state.answer+=1
        this.state.answer[this.state.current]=5
      }
      this.state.answered+=1
   }
   else{

   }
   this.state.notVisited-=1
   this.state.choosed=-1
   this.state.current+=1
   this.setState(this.state)  
}
   clearR=()=>{
    
    this.state.choosed=-1
    
    this.setState(this.state) 
   }
   makeReview=()=>{
    this.state.review.push(this.state.current)
    this.state.current+=1
    this.state.notVisited-=1
    this.setState(this.state)  

   }
   saveMakeReviewNext=()=>{

   }
   Closedd=()=>{

   }

    render() { 
        return ( 
            <>
             <div className="col w100">
                <div className="row bgWhite bRd5 m3 p1"><h2 >Quiz</h2></div>

                <div className="row flexSB">
                    <div className="col w50  m3 p1 bgWhite card">
                        <h2 className='m1'>Question {this.state.current+1}</h2>
                        <div className="row" style={{ border: "1px solid grey" }}></div>
                        <p className="m1" style={{ fontSize: "22px" }}>{this.props.paper[this.state.current].question}</p>
                        <form onSubmit={(e)=>{e.preventDefault() }}>
                            <div className="row" style={{marginBottom:"20px"}}>
                                <div className="col">
                                    {
                                        this.props.paper[this.state.current].options.map((x,i)=> <div className="row flexAIC"><input type="radio" onClick={()=>this.Choosed(i)} name="answer" value={x} index={i} /><label htmlFor="">{x}</label></div>)
                                    }
                             
                                </div>
                            </div>

                            <div className="row">
                                <button className="btn btn-success" type='button' onClick={this.SaveNext}>SAVE & NEXT</button>
                                <button className="btn" type="reset" onClick={this.clearR} style={{ backgroundColor: "#bababa" }}>CLEAR RESPONSE</button>
                                <button className="btn btn-warning" type='button' onClick={this.makeReview}>MAKE FOR REVIEW</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-info" type='button' onClick={this.saveMakeReviewNext}>SAVE & MAKE FOR REVIEW & NEXT</button>
                                <button className="btn btn-black" type='button' onClick={this.Closedd}>SUBMIT & CLOSE</button>
                            </div>
                        </form>
                    </div>

                    <div className="col w33 m3  flexSB">
                        <div className="col  bgWhite card">
                            <div className="row flexSB m1">
                                <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC" style={{ backgroundColor: "#bababa" }}>{this.state.notVisited}</div><p className='p3'>Not Visited</p></div>
                                <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC">{6-this.state.answered}</div><p className='p3'>Not Answerd</p></div>
                            </div>
                            <div className="row flexSB m1">
                                <div className="row flexAIC w50"><div className="square btn-success  row flexJCC flexAIC" >{this.state.answered}</div><p className='p3'>Answerd</p></div>
                                <div className="row flexAIC w50"><div className="square btn-info  row flexJCC flexAIC">{this.state.review.length}</div><p className='p3'>Marked For Review</p></div>
                            </div>
                            <div className="row flexSB m1">
                                {/* <div className="row flexAIC w50"><div className="square btn-info" ></div><p className='p3'>Not Visited</p></div> */}
                                <div className="row flexAIC w100"><div className="square btn-warning"></div><p className='p3'>Answerd & Marked For Review</p></div>
                            </div>
                            

                        </div>
                        <div className="col bgWhite card" style={{marginBottom:"20px"}}>
                        <div className="row flexAIC flexSB w100">
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                        </div>
                               
                        </div>


                    </div>
                </div>
            </div>

            </>
         );
    }
}
 
export default Main;