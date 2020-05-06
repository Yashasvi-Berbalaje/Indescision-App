import React from 'react';
const SubOption = (props)=>
    (
      <div className='option'>
        
     <p className='option__text'>{props.ListNumber+1+'.'} {props.optionSend}</p> 
      <button
      className='button button--modifier' 
      onClick={(e)=>{props.handleOptionToRemove(props.optionSend)}}
      >Remove</button> 
      </div>  
      );
  
   export default SubOption;