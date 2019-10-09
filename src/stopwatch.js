import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


const containet_style ={
    width: '100%',
    border: '2px solid black'
}

const containet2_style ={
    width: '100%',
    border: '2px solid green',
    marginBottom:'3%'
}
const input_style ={
    width: '30%',
   align: 'center'
}

const p_style= {
    display: 'inline',
    color : 'white'
}

const h3_style ={
    marginLeft:'40%',
    marginTop: '5%',

}

const btn_style = {
   
    marginTop: '3%',
    marginBottom: '3%'
}

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          seconds: 0 ,
          minutes: 25,
          pattern : 'session',
          goingBack: 'true'

        };

   // this.handleClick = this.handleClick.bind(this);
    this.format = this.format.bind(this);
    this.set_session = this.set_session.bind(this);
    this.startTime = this.startTime.bind(this);
  //  this.timeBack = this.timeBack.bind(this);

      
    }

    componentDidMount() {
       // document.addEventListener("keydown",this.play);
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

    format(num){
if(num <10){return '0'+ num}
return num;
    }

    set_session(){
        let mins = $('#session_length')[0].value;
        console.log(mins);
        this.setState({
            minutes : mins
        });
    }

    

    startTime(){
      //  while (this.state.goingBack === 'true'){
        setTimeout( () =>{
                let backSecs = this.state.seconds;
                this.setState({
                    seconds: backSecs -1
                });
                if(backSecs === 0){
                    this.setState({ seconds:59});
                }
                 //this.timeBack();
            }
            
        
        ,1000);
   // }
}
   

    render() {
        return (
           <div style={containet_style}>

               <h1> StopWatch </h1>
               <div className='container' style={containet2_style} >

<div className='row' style={{marginTop:'3%'}}>
 <div className='col-md-4 col-4'><pre style={p_style}> Break length    </pre>   <input  defaultValue='5' style={input_style} type='number' ></input></div>
 <div className='col-md-4 col-4'></div>
 <div className='col-md-4 col-4'> <pre style={p_style}>Session length    </pre> <input type='number' min="1" max="99" onChange={this.set_session} id='session_length' name='session_length'  defaultValue='25' style={input_style}  ></input></div>

</div>


<div className='row'>
<div className='col-md-4 col-4'> </div>
<div className='col-md-4 col-4' >
<div className='row'> <h2 style={h3_style}> Session </h2> </div>
<div className='row'> <h1 style={h3_style}>{this.format(this.state.minutes)}:{this.format(this.state.seconds)}</h1> </div>
</div>
<div className='col-md-4 col-4'> </div>
</div>


<div className='row'>
<div className='col-md-4 col-4' style={btn_style} ><button  onClick={this.startTime} >Start</button> </div>
<div className='col-md-4 col-4' style={btn_style} ><button  >Pause</button> </div>
<div className='col-md-4 col-4' style={btn_style} ><button  >Reset</button> </div>

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