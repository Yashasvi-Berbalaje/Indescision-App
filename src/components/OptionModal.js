import React from 'react';
import Modal from 'react-modal';

const  Optionmodal = (props)=>(
     <Modal
     isOpen={!!props.selectOption}
     onRequestClose={props.closeModal}
     contentLabel='Selected Option'
     closeTimeoutMS={20}
     className='modal'
     >
       <p className='modal__title'>Selected Option</p>
       {
           props.selectOption && <p className='modal__body'>{props.selectOption}</p>
       }
       <button className='button' onClick={props.closeModal}>okay</button>
     </Modal>

)
export default Optionmodal;