import Axios from 'axios'
import React, { useState, useEffect, useRef, useCallback } from 'react'

export default function Position({ changeModal, showModal }) {
  
  const [newPosition, setNewPosition] = useState({ 
    "streetAddress": '',
    "city": '',
    "state": '',
    "name": '',
    "phoneNumber": '',
    "emailAddress": '',
    "locationAliases": '',
  })
 
  const modalRef = useRef()

  function closeModal(event){
    if(modalRef.current === event.target){
      changeModal('')
    }
  }

  const keyPress = useCallback(event => {
    if(event.key === 'Escape' && showModal === 'newPosition'){
      changeModal('')
    }
    if(event.key === 'Enter' && showModal === 'newPosition'){
      submitForm()
    }
  }, [showModal, changeModal, submitForm])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])
  
  function handleChange(event){
    const { name, value } = event.target
    
    setNewPosition(prevPositionData => {
        return{
          ...prevPositionData,
          [name]: value
        }
      }
    )
  }

  async function submitForm(){
    const blank = element => !element
    let values = Object.values(newPosition)
    
    if(values.some(blank)){ return }
  
    await Axios.post('http://localhost:3001/position/create', {newPosition}).then(() => alert("Position Created"))
    changeModal('')
    return
 
  }

  return (
    <div className='modal-form' ref={modalRef} onClick={closeModal}>
      <div className='modal-form-main'>
        <button className='btn close' onClick={() => changeModal('')}>X</button>
        <h2 className='modal-form-header'>New Position</h2>

        <div className='modal-form-body'>
          
          <label htmlFor='name'>Name</label>
          <input required type='text' name='name' id='name' value={newPosition.name} onChange={handleChange}/>
          
          <label htmlFor='streetAddress'>Street Address</label>
          <input required type='text' name='streetAddress' id='streetAddress' value={newPosition.streetAddress} onChange={handleChange}/>
          
          <label htmlFor='city'>City</label>
          <input required type='text' name='city' id='city' value={newPosition.city} onChange={handleChange}/>

          <label htmlFor='state'>State</label>
          <input required type='text' name='state' id='state' value={newPosition.state} onChange={handleChange}/>

          <label htmlFor='phoneNumber'>Director's Phone Number</label>
          <input required type='text' name='phoneNumber' id='phoneNumber' value={newPosition.phoneNumber} onChange={handleChange}/>

          <label htmlFor='emailAddress'>Director's Email</label>
          <input required type='email' name='emailAddress' id='emailAddress' value={newPosition.emailAddress} onChange={handleChange}/>
          
          <label htmlFor='locationAliases'>Location Aliases</label>
          <textarea required name='locationAliases' id='locationAliases' value={newPosition.locationAliases} onChange={handleChange}/>
          

          <button className='btn submit' onClick={submitForm}>Submit</button>
        </div>

      </div>
    </div>
  )
}
