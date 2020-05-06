import React,{Component} from 'react';
import IndescisionApp from './components/IndescisionAppHome';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class IApp extends Component{
  render(){
    return(
      <div>   
     <IndescisionApp option={['guns be with you','enimies ahead']}/>
     </div>
  )
}
}

export  default IApp ;



/*
class Counter extends Component{
   constructor(props){
     super(props);
     this.AddOne=this.AddOne.bind(this);
     this.MinusOne=this.MinusOne.bind(this);
     this.Reset=this.Reset.bind(this);

     this.state={
       count:props.count
     };
   }

   componentDidMount(){
    let count=parseInt(localStorage.getItem('realnum')) 
       if(!isNaN(count)){ 
       this.setState(()=>({count:count})) 
     }    
   }
   componentDidUpdate()
   {
     
    localStorage.setItem('realnum',this.state.count);
     
   }
  
  AddOne(){
    this.setState((prevState)=>{ 
      return{ 
      count:prevState.count+1 
    }
    });
  }
  MinusOne(){
    this.setState((prevState)=>{

      return{
        count:prevState.count-1  
      }
    });
  }
  Reset(){
    this.setState(()=>{
      return{
        count:0
      }
    })
  }

  render(){
      return(
          <div>
              <h1>Counter: {this.state.count}</h1>
              <button onClick={this.AddOne}>+1</button>
              <button onClick={this.MinusOne}>-1</button>
              <button onClick={this.Reset}>Reset</button>
          </div>
      );
  }
}

Counter.defaultProps={
  count:0
}
*/

/*
class VisibilityToggle extends Component{
   
  constructor(props){
    super(props);
    this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
    this.state ={
      visibility:false,

    }
  }
  handleToggleVisibility(){

    this.state.visibility ===false?
    this.setState(()=>{
      return{
       visibility:true 
      }
    }):this.setState(()=>{
      return{
        visibility:false
      }
    })
  }

  render(){
    return(
     <div>
       <h1>Visibility Toggle</h1>
       <button onClick={this.handleToggleVisibility}>
        {this.state.visibility===true ? 'Hide Visibility':'Show Visibility'}
       </button>
       {
         this.state.visibility ===true && <p>visibility toggle is active</p>
       }
     </div>

    );
  }

}*/