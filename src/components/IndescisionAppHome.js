import React,{Component} from 'react';
import AddOption from './AddOption';
import Option from './Option';
import Header from './Header';
import Action from './Action';
import Optionmodal from './OptionModal';


export default class IndescisionApp extends Component{
     
    state={
        options:[],
        selectOption : undefined
        
      }
    componentDidMount(){
       try{  
     const json = localStorage.getItem('options');
     const option=JSON.parse(json);
 
     if(option){
       this.setState(()=>({options:option}))
     }
   }catch(e){
 
   }
         
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
        const json =JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
        console.log('fired');
        } 
    }

     closeModal=()=>{
       this.setState(()=>({
         selectOption:undefined
       }))
     }


    handledeleteOption=()=>{
        this.setState(()=>({options:[]}));
    };
    handleOptionToRemove=(optionToRemove)=>{
      this.setState((prevState)=>({
        options:prevState.options.filter((option)=>optionToRemove!==option)
      }))
    };
 
    handlePick=()=>{
       let RandomNum=Math.floor(Math.random()*this.state.options.length);
       let option=this.state.options[RandomNum];
      this.setState(()=>({
        selectOption:option
      }))
    };
 
     handleAddOption=(option)=>{
       console.log('item added');
          if(!option)
          return 'Enter the valid string to add to item'
          else if(this.state.options.indexOf(option)>-1)
          return 'The item already exists'
         this.setState((prevState)=>({options:prevState.options.concat(option)}) );
     };
 
    render(){
     const subtitle='Put  your hands on Computer!!!';
      return(
       <div >
       <Header subtitle={subtitle}/>
       <div className="container">
       <Action hasOption={this.state.options.length <= 0} selectOption={this.handlePick}/>
       <div className='widget'>
       <Option options={this.state.options} handledeleteOption={this.handledeleteOption}
       handleOptionToRemove ={this.handleOptionToRemove}
       />
       <AddOption handleAddOption={this.handleAddOption}/>
       </div>
       </div>
       <Optionmodal selectOption={this.state.selectOption}
        closeModal={this.closeModal}
       />
       </div>
       
      )
    }
 }
 
 IndescisionApp.defaultProps={
 
   options:[]
 }