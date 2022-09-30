import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
const Main2 = (props) => {
    const ref = useRef();
    const [state, setState] = useState({
        paper: [
            {
                question: "Why the color of blood is RED?",
                options: ["Hemoglobin", "Chlorophyll", "Acid Property", "None of these", "Base property"],
                CorrectAnswer: 0,
                status: "NotVisited",
                answer: -1
        
            },
            {
                question: "Who is the Founder of Nucleus?",
                options: ["Robert Hook", "Chandwik", "Einstine", "None of these", "Thomson"],
                CorrectAnswer: 1,
                status: "NotVisited",
                answer: -1
            },
            {
                question: "Who is the Founder of Proton?",
                options: ["Robert Hook", "Chandwik", "Rutherford", "None of these", "Thomson"],
                CorrectAnswer: 2,
                status: "NotVisited",
                answer: -1
            },
            {
                question: "Who is the Founder of Electron?",
                options: ["Robert Hook", "Chandwik", "Einstine", "None of these", "Thomson"],
                CorrectAnswer: 4,
                status: "NotVisited",
                answer: -1
            },
            {
                question: "Who is the Founder of Cells?",
                options: ["Robert Hook", "Chandwik", "Einstine", "None of these", "Thomson"],
                CorrectAnswer: 0,
                status: "NotVisited",
                answer: -1
            },
            {
                question: "Who Descoverd Electric Bulb?",
                options: ["Robert Hook", "T. A. Adission", "Einstine", "None of these", "Thomson"],
                CorrectAnswer: 1,
                status: "NotVisited",
                answer: -1
            }
        ], current: 0, answer: [0, 0, 0, 0, 0, 0], result: ""
    });
    

    const Closedd = () => {
        if (ref.current.answer.value !== "") {
            state.paper[state.current].answer = parseInt(ref.current.answer.value)
            state.paper[state.current].status = "SaveNext"
        } else {
            state.paper[state.current].status = "NotAnswered"
        }
        state.result="result"
        if(state.current!==5)
        state.current += 1
        props.changer()
        ref.current.reset();
        setState({ ...state })
    }
    const Navigate = (i) => {
        state.current = i
        setState({ ...state })
    }
    const SaveNext = () => {
        if (ref.current.answer.value !== "") {
            state.paper[state.current].answer = parseInt(ref.current.answer.value)
            state.paper[state.current].status = "SaveNext"
        } else {
            state.paper[state.current].status = "NotAnswered"
        }
       
        if(state.current!==5)
        state.current += 1
        ref.current.reset();
        setState({ ...state })
    }
    const clearR = () => {
        state.paper[state.current].answer = -1
        state.paper[state.current].status = "NotAnswered"
        ref.current.reset();
        setState({ ...state })
    }
    const makeReview = () => {
        if (ref.current.answer.value !== "") {
            state.paper[state.current].answer = parseInt(ref.current.answer.value)
            state.paper[state.current].status = "MakeReview"
        } else {
            state.paper[state.current].status = "NotAnswered"
        }
        if(state.current!==5)
        state.current += 1
        ref.current.reset();
        setState({ ...state })
    }
    const saveMakeReviewNext = () => {
        if (ref.current.answer.value !== "") {
            state.paper[state.current].answer = parseInt(ref.current.answer.value)
            state.paper[state.current].status = "SaveMakeReviewNext"
        } else {
            state.paper[state.current].status = "NotAnswered"
        }
        if(state.current!==5)
        state.current += 1
        ref.current.reset();
        setState({ ...state })
    }

   const Calculations=(arr,sign)=>{
     let cnt=0
    for(let p=0;p<state.paper.length;p++)
    {
        let flg=0
         for(let i=0;i<arr.length;i++)
      {
        if(state.paper[p].status===arr[i])
         flg++
      }
      console.log("flg",flg)
      if(sign==="AND" && flg===arr.length-1)
      cnt++
      if(sign==="OR" && (flg>0))
      cnt++
   }
   return cnt
}
   let resulter=()=>{
    let arr=[0,[]]
    state.paper.map((x,i)=>
        {
            if(x.answer===x.CorrectAnswer && (x.status==="SaveMakeReviewNext"||x.status==="SaveNext"))
            {
            arr[0]+=5
            }
            if(x.answer!==x.CorrectAnswer && (x.status==="SaveMakeReviewNext"||x.status==="SaveNext"))
            {
            arr[1].push(i)
            }
        })
        return arr;
        
}
useEffect(() => {
    const timer = setTimeout(() => {
      state.result="declare"
      alert("Time Out..!")
      props.changer()
     setState({...state})
    }, 120000);
    return () => clearTimeout(timer);
  }, []);

    console.log(state.paper)
    if (state.result === "" && (state.current < 6)) {
        return (

            <>
                <div className="col w100">

                    <div className="col bgWhite bRd5  p1 flexSB" style={{ margin: ".5% 3%" }}>
                        <div className="row bgWhite bRd5 m3 p1 flexSB" style={{ marginTop: "5px", marginBottom: "1%", width: "90%" }}><h2 >Quiz</h2><h2 className='btn-info bRd5 p1'>{state.result}</h2></div>
                    </div>

                    <div className="row flexSB">
                        <div className="col w50  m3 p1 bgWhite card">
                            <h2 className='m1'>Question {state.current + 1}</h2>
                            <div className="row" style={{ border: "1px solid grey" }}></div>
                            <p className="m1" style={{ fontSize: "22px" }}>{state.paper[state.current].question}</p>
                            <form onSubmit={(e) => { e.preventDefault() }} ref={ref}>
                                <div className="row" style={{ marginBottom: "20px" }}>
                                    <div className="col">
                                        {
                                            state.paper[state.current].options.map((x, i) => {
                                                if (state.paper[state.current].answer === i) {
                                                    return <div className="row flexAIC"><input type="radio" name="answer" value={i} index={i} checked="true" /><label htmlFor="">{x}</label></div>
                                                }
                                                else {
                                                    return <div className="row flexAIC"><input type="radio" name="answer" value={i} index={i} /><label htmlFor="">{x}</label></div>

                                                }
                                                //  return ""
                                            })}

                                    </div>
                                </div>

                                <div className="row">
                                    <button className="btn btn-success" type='button' onClick={SaveNext}>SAVE & NEXT</button>
                                    <button className="btn" type="reset" onClick={clearR} style={{ backgroundColor: "#bababa" }}>CLEAR RESPONSE</button>
                                    <button className="btn btn-warning" type='button' onClick={makeReview}>MAKE FOR REVIEW</button>
                                </div>
                                <div className="row">
                                    <button className="btn btn-info" type='button' onClick={saveMakeReviewNext}>SAVE & MAKE FOR REVIEW & NEXT</button>
                                    <button className="btn btn-black" type='button' onClick={Closedd}>SUBMIT & CLOSE</button>
                                </div>
                            </form>
                        </div>

                        <div className="col w33 m3  flexSB">
                            <div className="col  bgWhite card">
                                <div className="row flexSB m1">
                                    <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC" style={{ backgroundColor: "#bababa", color: "black" }}>{(Calculations(["NotVisited"],"OR")-1<0)?0:Calculations(["NotVisited"],"OR")-1}</div><p className='p3'>Not Visited</p></div>
                                    <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC">{Calculations(["NotAnswered","NotVisited"],"OR")}</div><p className='p3'>Not Answerd</p></div>
                                </div>
                                <div className="row flexSB m1">
                                    <div className="row flexAIC w50"><div className="square btn-success  row flexJCC flexAIC" >{Calculations(["SaveNext","SaveMakeReviewNext"],"OR")}</div><p className='p3'>Answerd</p></div>
                                    <div className="row flexAIC w50"><div className="square btn-warning  row flexJCC flexAIC">{Calculations(["MakeReview"],"OR")}</div><p className='p3'>Marked For Review</p></div>
                                </div>
                                <div className="row flexSB m1">
                                   <div className="row flexAIC w100"><div className="square btn-info row flexJCC flexAIC">{Calculations(["SaveMakeReviewNext"],"OR")}</div><p className='p3'>Answerd & Marked For Review</p></div>
                                </div>


                            </div>
                            <div className="col bgWhite card" style={{ marginBottom: "20px" }}>
                                <div className="row flexAIC flexSB w100">
                                    {
                                        state.paper.map((x, i) => { return <div className={(i === state.current) ? "square btn-black row flexJCC flexAIC" : "square row flexJCC flexAIC bgr "+state.paper[i].status} onClick={() => Navigate(i)}>{i + 1}</div> })
                                    }


                                </div>

                            </div>


                        </div>
                    </div>
                </div>


            </>
        );
    } else {
        return (
            <>
  <div className="col w100">

<div className="col bgWhite bRd5  p1 flexSB" style={{ margin: ".5% 3%" }}>
    <div className="row bgWhite bRd5 m3 p1 flexSB" style={{ marginTop: "5px", marginBottom: "1%", width: "90%" }}><h2 >Quiz</h2><h2 className={`btn-${(resulter()[0]< 10) ? "danger" : "success"} bRd5 p1`}>{(resulter()[0]< 10) ?"Failed":"Pass"}</h2></div>
</div>

<div className="row flexSB">
    <div className="col w50  m3 p1 bgWhite card">
        <h2 className='m1'>Result Decleration</h2>
        <div className="row flexSB">
        <div className='resulter col flexJCC flexAIC w50' style={{minHeight:"220px"}}>
            <h1 className='' style={{ color: "red", fontSize: "50px" }}>{resulter()[0]}/30</h1>
        </div>
        <div className="col w33">

        <h2 className='m1'>Wrong Answers</h2>
        <div className="w100 row" >
                                    {
                                        resulter()[1].map((x, i) => { return <div className="square btn-danger row flexJCC flexAIC m1">{x+1}</div> })
                                    }


                                </div>
        </div>
        </div>
        
       

    </div>

    <div className="col w33 m3  flexSB">
        <div className="col  bgWhite card">
       
        <div className="row flexSB m1">
                                    <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC" style={{ backgroundColor: "#bababa", color: "black" }}>{(Calculations(["NotVisited"],"OR")-1<0)?0:Calculations(["NotVisited"],"OR")-1}</div><p className='p3'>Not Visited</p></div>
                                    <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC">{Calculations(["NotAnswered","NotVisited"],"OR")}</div><p className='p3'>Not Answerd</p></div>
                                </div>
                                <div className="row flexSB m1">
                                    <div className="row flexAIC w50"><div className="square btn-success  row flexJCC flexAIC" >{Calculations(["SaveNext","SaveMakeReviewNext"],"OR")}</div><p className='p3'>Answerd</p></div>
                                    <div className="row flexAIC w50"><div className="square btn-warning  row flexJCC flexAIC">{Calculations(["MakeReview"],"OR")}</div><p className='p3'>Marked For Review</p></div>
                                </div>
                                <div className="row flexSB m1">
                                   <div className="row flexAIC w100"><div className="square btn-info row flexJCC flexAIC">{Calculations(["SaveMakeReviewNext"],"OR")}</div><p className='p3'>Answerd & Marked For Review</p></div>
                                </div>

        </div>
        <div className="col bgWhite card" style={{ marginBottom: "20px" }}>
            <div className="row flexAIC flexSB w100">
             
{/* Nav Heads */}

            </div>
        </div>


    </div>
</div>
</div>


            </>
        )
    }
}

export default Main2