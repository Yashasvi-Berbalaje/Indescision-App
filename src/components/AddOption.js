import React from 'react';

class AddOption extends React.Component{
     
   state ={
    error:undefined
   }
    handleAddOption= (event) =>{
      event.preventDefault();
      let option=event.target.elements.option.value.trim();
      let error=this.props.handleAddOption(option);
          if(error){
          this.setState(()=>({error:error}))
       }
    };
    render(){
      
      return(
        <div>
          {
          this.state.error && <p className='add-option-error'>{this.state.error }</p>
          }
          <form className='add-option' onSubmit={this.handleAddOption}>
            <input className='add-option__input' type='text' name='option'></input>
            <button
             className='button'
            >AddOption</button>
          </form>
        </div>
      )
    }
  }
  export default AddOption;
  