import React from 'react';
import SubOption from './SubOption'

const Option = (props) =>(
      <div>
        <div className='widget-header'>
        <h3
        className='widget-header__title'
        >Your Options</h3>
        <button 
        className='button button--modifier'
        onClick={props.handledeleteOption}
        >Remove all
        </button>
        </div>
        {
          props.options.map((option,index) =><SubOption key={index} ListNumber={index} optionSend={option} handleOptionToRemove={props.handleOptionToRemove}/>)
        }
        {
          props.options.length ===0 && <p className='widget__message'>Please add item to get started!!</p>
        }
      </div>
    )

  export default Option;