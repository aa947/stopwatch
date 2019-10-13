/* eslint-disable no-eval */
import React,  {Component}  from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


const containet_style = {
    width: '100%',
    border: '2px solid black'
}

const containet2_style = {
    width: '100%',
    border: '2px solid green',
    marginBottom: '3%'
}
const input_style = {
    width: '30%',
    align: 'center'
}

const p_style = {
    display: 'inline',
    color: 'white'
}

const h3_style = {
    marginLeft: '40%',
    marginTop: '5%',

}

const btn_style = {

    marginTop: '3%',
    marginBottom: '3%'
}


// var interval= setInterval( (x) =>{
//     let backSecs = x.state.seconds;
//     this.setState({
//         seconds: backSecs -1
//     });
//     if(backSecs === 0){
//         x.setState({ seconds:59})
//     }

// } ,1000);

var interval;

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 25,
            pattern: 'session',
            mins_to_break: 25,
            mins_to_session: 5,
            count : 1, 
            another_count: 1

        };

        // this.handleClick = this.handleClick.bind(this);
        this.format = this.format.bind(this);
        this.set_session = this.set_session.bind(this);
        this.startTime = this.startTime.bind(this);
        //  this.timeBack = this.timeBack.bind(this);
        this.pauseTime = this.pauseTime.bind(this);
        //this.initalize = this.initalize.bind(this);
       this.reset = this.reset.bind(this);
       this.setBreak = this.setBreak.bind(this);


    }

    componentDidMount() {
        // document.addEventListener("keydown",this.play);
        //  console.log(window.performance);
        // this.initalize();

    }
    //componentWillUnmount() {
    //document.removeEventListener("keydown",this.handleKeyPress);
    //this.setState({style: inactiveStyle});
    //  }

    // handleChange(event) {
    //     this.setState({
    //         input: event.target.value
    //     });
    // }

    // initalize (){
    //     this.setState({
    //         minutes: $('#session_length')[0].value,
    //         pattern : 'session',
    //         mins_to_break: $('#session_length')[0].value,

    //     });
    // }

    format(num) {
        if (num < 10) { return '0' + num }
        return num;
    }

    set_session() {
        let mins = $('#session_length')[0].value;
        //console.log(mins);
        this.setState({
            minutes: mins,
            mins_to_break: mins
        });
    }



    reset() {
        this.setState = ({
            seconds: 0,
            minutes: 25,
            pattern: 'session',
            mins_to_break: 25

        });
    }

    startTime() {
       
   
        if (this.state.pattern === 'session') {
           // console.log('start Time');
            
            interval = setInterval(() => {
                let mins = this.state.minutes; 
                let remainedSessionMins = this.state.mins_to_break;
                let remainedBreakMins = this.state.mins_to_session;
                let backSecs = this.state.seconds;
                let count = this.state.count;
                let another_count = this.state.another_count;
                

                this.setState({
                    seconds:backSecs - 1,
                    count: this.state.count +1
                });

                console.log('session   '+ remainedSessionMins);
                console.log('break   '+ remainedBreakMins);
                console.log('diff   '+ eval(0- remainedSessionMins))




                if (backSecs === 0) {
                    this.setState({ seconds: 59,
                        minutes : mins -1
                    });

                  //  console.log('remained to session' + remainedBreakMins);
                    //console.log( 'remained to break' + remainedSessionMins);
                   // console.log(backSecs);
                   // return interval;

                }

               // console.log('count  '+count);


                if (count%60 ===0){
                   // console.log('inside%60');
                    this.setState({
                        mins_to_break: remainedSessionMins -1
                    });
                    console.log('idex%60  session  '+remainedSessionMins);

                }
               //console.log('remained to session' + remainedBreakMins);
               //console.log( 'remained to break' + remainedSessionMins);
               if (remainedSessionMins === 0 ){
                   this.setState({
                       pattern : 'break'
                     // minutes: remainedBreakMins -1,
                      // another_count: 1
                   });
                }
                 // this.pauseTime();
                //  if(another_count === 60 ){
                //      this.setState({
                //          remainedBreakMins: remainedBreakMins-1
                //      });
                //  }

         //        console.log('anothe count  '+another_count);
               //  console.log('remained break mins  '+remainedBreakMins);
                 if ((remainedBreakMins + remainedSessionMins ) ===0 ){
                     console.log('finishef');
                    this.pauseTime();
                 }
                    
               
            }, 1000);

        }

        //   if ( this.state.mins_to_break === 0 ){
        //       this.setState({
        //         pattern: 'break',

        //       });
        //   }

    }




    pauseTime() {
        window.clearInterval(interval);
        //this.setState({goingBack: false});
    }

    setBreak(){
        let brk = $('#break_length')[0].value;
        this.setState({
            mins_to_session:brk
        });
    }


    render() {
        return (
            <div style={containet_style}>

                <h1> StopWatch </h1>
                <div className='container' style={containet2_style} >

                    <div className='row' style={{ marginTop: '3%' }}>
                        <div className='col-md-4 col-4'><pre style={p_style}> Break length    </pre>   <input defaultValue='5' onChange={this.setBreak} id='break_length' style={input_style} type='number' ></input></div>
                        <div className='col-md-4 col-4'></div>
                        <div className='col-md-4 col-4'> <pre style={p_style}>Session length    </pre> <input type='number' min="1" max="99" onChange={this.set_session} id='session_length' name='session_length' defaultValue='25' style={input_style}  ></input></div>

                    </div>


                    <div className='row'>
                        <div className='col-md-4 col-4'> </div>
                        <div className='col-md-4 col-4' >
                            <div className='row'> <h2 style={h3_style}> {this.state.pattern} </h2> </div>
                            <div className='row'> <h1 style={h3_style}>{this.format(this.state.minutes)}:{this.format(this.state.seconds)}</h1> </div>
                        </div>
                        <div className='col-md-4 col-4'> </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-4 col-4' style={btn_style} ><button onClick={this.startTime} >Start</button> </div>
                        <div className='col-md-4 col-4' style={btn_style} ><button onClick={this.pauseTime}  >Pause</button> </div>
                        <div className='col-md-4 col-4' style={btn_style} ><button onClick={this.reset} >Reset</button> </div>

                    </div>
                    <div className='row'></div>
                    <div className='row'></div>
                    <div className='row'></div>


                </div>
            </div>
        );
    }
};



export default Watch;