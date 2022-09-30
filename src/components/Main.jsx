
import React, { Component } from 'react';
import Timer from './Timer';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0, answer: [0, 0, 0, 0, 0, 0], choosed: -1, answered: 0, notVisited: 6, makeRev: 0, ansMarReview: 0, review: [], saveReview: [], result: "" }
        this.ref = React.createRef();
    }

    Navigate = (i) => {
        this.state.current = i
        this.setState(this.state)
    }
    Choosed = (i) => {
        this.state.choosed = i;
        this.setState(this.state)
    }
    SaveNext = () => {
        if (this.state.choosed !== -1) {
            if (this.props.paper[this.state.current].answer === this.state.choosed) {
                // this.state.answer+=1
                this.state.answer[this.state.current] = 5
            }
            this.state.answered += 1
        }
        else {

        }
        this.state.notVisited -= 1
        this.state.choosed = -1
        this.state.current += 1
        this.ref.current.reset();
        this.setState(this.state)
    }
    clearR = () => {
        this.state.choosed = -1
        this.setState(this.state)
    }
    makeReview = () => {
        this.state.review.push(this.state.current)
        this.state.current += 1
        this.state.notVisited -= 1
        this.ref.current.reset();
        
        this.setState(this.state)

    }
    saveMakeReviewNext = () => {
        if (this.state.choosed !== -1) {
            if (this.props.paper[this.state.current].answer === this.state.choosed) {
                // this.state.answer+=1
                this.state.answer[this.state.current] = 5
            }
            this.state.answered += 1
            this.state.saveReview.push(this.state.current)
            this.state.current += 1
            this.state.notVisited -= 1
            this.ref.current.reset();
            this.setState(this.state)
        }
    }
    Closedd = () => {
        if (this.state.choosed !== -1) {
            if (this.props.paper[this.state.current].answer === this.state.choosed) {
                // this.state.answer+=1
                this.state.answer[this.state.current] = 5
            }
            this.state.answered += 1

        }
        this.state.notVisited -= 1
        this.state.result = "result"
        this.ref.current.reset();
        this.setState(this.state)
    }

    render() {

        if (this.state.result === "" && (this.state.current < 6)) {
            return (
                <>
                    <div className="col w100">

                        <div className="col bgWhite bRd5  p1 flexSB" style={{ margin: ".5% 3%" }}>
                            <div className="row bgWhite bRd5 m3 p1 flexSB" style={{ marginTop: "5px", marginBottom: "1%", width: "90%" }}><h2 >Quiz</h2><h2 className='btn-info bRd5 p1'>{this.state.result}</h2></div>
                        </div>

                        <div className="row flexSB">
                            <div className="col w50  m3 p1 bgWhite card">
                                <h2 className='m1'>Question {this.state.current + 1}</h2>
                                <div className="row" style={{ border: "1px solid grey" }}></div>
                                <p className="m1" style={{ fontSize: "22px" }}>{this.props.paper[this.state.current].question}</p>
                                <form onSubmit={(e) => { e.preventDefault() } } ref={this.ref}>
                                    <div className="row" style={{ marginBottom: "20px" }}>
                                        <div className="col">
                                            {
                                                this.props.paper[this.state.current].options.map((x, i) => <div className="row flexAIC"><input type="radio" onClick={() => this.Choosed(i)} name="answer" value={x} index={i} /><label htmlFor="">{x}</label></div>)
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
                                        <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC" style={{ backgroundColor: "#bababa", color: "black" }}>{this.state.notVisited}</div><p className='p3'>Not Visited</p></div>
                                        <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC">{6 - this.state.answered}</div><p className='p3'>Not Answerd</p></div>
                                    </div>
                                    <div className="row flexSB m1">
                                        <div className="row flexAIC w50"><div className="square btn-success  row flexJCC flexAIC" >{this.state.answered}</div><p className='p3'>Answerd</p></div>
                                        <div className="row flexAIC w50"><div className="square btn-warning  row flexJCC flexAIC">{this.state.review.length}</div><p className='p3'>Marked For Review</p></div>
                                    </div>
                                    <div className="row flexSB m1">
                                        {/* <div className="row flexAIC w50"><div className="square btn-info" ></div><p className='p3'>Not Visited</p></div> */}
                                        <div className="row flexAIC w100"><div className="square btn-info row flexJCC flexAIC">{this.state.saveReview.length}</div><p className='p3'>Answerd & Marked For Review</p></div>
                                    </div>


                                </div>
                                <div className="col bgWhite card" style={{ marginBottom: "20px" }}>
                                    <div className="row flexAIC flexSB w100">
                                        {
                                            this.props.paper.map((x, i) => { return <div className={(i === this.state.current) ? "square btn-black row flexJCC flexAIC" : (this.state.review.includes(i)) ? "square btn-warning row flexJCC flexAIC" : "square row flexJCC flexAIC bgr"} onClick={() => this.Navigate(i)}>{i + 1}</div> })
                                        }

                                        {/* <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                            <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div> */}
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
                            <div className="row bgWhite bRd5 m3 p1 flexSB" style={{ marginTop: "5px", marginBottom: "1%", width: "90%" }}><h2 >Quiz</h2><h2 className={`btn-${(this.state.answer.reduce((a, b) => a + b, 0) < 10) ? "danger" : "success"} bRd5 p1`}>{(this.state.answer.reduce((a, b) => a + b, 0) < 10) ? "Faild" : "Pass"}</h2></div>
                        </div>

                        <div className="row flexSB">
                            <div className="col w50  m3 p1 bgWhite card">
                                <h2 className='m1'>Result Decleration</h2>
                                <div className='resulter col flexJCC flexAIC w50'>
                                    <h1 className='' style={{ color: "red", fontSize: "50px" }}>{
                                        this.state.answer.reduce((a, b) => a + b, 0)
                                    }/30</h1>
                                </div>

                            </div>

                            <div className="col w33 m3  flexSB">
                                <div className="col  bgWhite card">
                                    <div className="row flexSB m1">
                                        <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC" style={{ backgroundColor: "#bababa", color: "black" }}>{this.state.notVisited}</div><p className='p3'>Not Visited</p></div>
                                        <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC">{6 - this.state.answered}</div><p className='p3'>Not Answerd</p></div>
                                    </div>
                                    <div className="row flexSB m1">
                                        <div className="row flexAIC w50"><div className="square btn-success  row flexJCC flexAIC" >{this.state.answered}</div><p className='p3'>Answerd</p></div>
                                        <div className="row flexAIC w50"><div className="square btn-warning  row flexJCC flexAIC">{this.state.review.length}</div><p className='p3'>Marked For Review</p></div>
                                    </div>
                                    <div className="row flexSB m1">
                                        {/* <div className="row flexAIC w50"><div className="square btn-info" ></div><p className='p3'>Not Visited</p></div> */}
                                        <div className="row flexAIC w100"><div className="square btn-info row flexJCC flexAIC">{this.state.saveReview.length}</div><p className='p3'>Answerd & Marked For Review</p></div>
                                    </div>


                                </div>
                                <div className="col bgWhite card" style={{ marginBottom: "20px" }}>
                                    <div className="row flexAIC flexSB w100">
                                        {
                                            this.props.paper.map((x, i) => { return <div className={(i === this.state.current) ? "square btn-black row flexJCC flexAIC" : "square row flexJCC flexAIC bgr"} onClick={() => this.Navigate(i)}>{i + 1}</div> })
                                        }

                                        {/* <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                           <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                           <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                           <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div>
                           <div className="square btn-danger" style={{ backgroundColor: "#bababa" }}></div> */}
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                </>
            );
        }
    }
}

export default Main;