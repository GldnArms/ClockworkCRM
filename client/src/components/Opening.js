import Axios from 'axios'
import React, { useState, useEffect, useRef, useCallback } from 'react'

export default function Opening({ locationOptions, changeModal, showModal }) {

  const [optionElements, setOptionElements] = useState([]) 
  const [newOpening, setNewOpening] = useState({ 
    "city": '',
    "state": '',
    "position": '',
    "manager": '',
    "managerEmail": '',
    "idLocations": '',
  })
  
  useEffect(() => {
    getOptionElements()
  }, [locationOptions])

  function setValues(selectedLocation){
    if(locationOptions.length !== 0) {
      if(!selectedLocation) return
      const locationElement = locationOptions.find(location => location.idLocations === parseInt(selectedLocation))
      setNewOpening(prevOpening => {
        return{
          ...prevOpening,
          city: locationElement.city,
          state: locationElement.state,
          idLocations: locationElement.idLocations
        }
      })
    }
  }

  function getOptionElements(){
    setOptionElements (locationOptions.map((option, index) => {
      if(index === 0) setValues(option.idLocations)
        return(
          <option key={option.name} value={option.idLocations}>{option.name}</option>
        )
    }))
  }


  const modalRef = useRef()

  function closeModal(event){
    if(modalRef.current === event.target){
      changeModal('')
    }
  }

  const keyPress = useCallback(event => {
    if(event.key === 'Escape' && showModal === 'newOpening'){
      changeModal('')
    }
    if(event.key === 'Enter' && showModal === 'newOpening'){
      submitForm()
    }
  }, [showModal, changeModal, submitForm])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  function handleChange(event){
    const { name, value } = event.target

    if(name === 'idLocations'){
      setValues(value)
    }
    
    setNewOpening(prevOpeningData => {
        return{
          ...prevOpeningData,
          [name]: value
        }
      }
    )
  }

  async function submitForm(){
    const blank = element => !element
    let values = Object.values(newOpening)
    
    if(values.some(blank)){ return }

    await Axios.post('http://localhost:3001/opening/create', {newOpening}).then(() => alert("Opening Created"))
    
    changeModal('')
    return
  
  }

  return (
    <div className='modal-form' ref={modalRef} onClick={closeModal}>
      <div className='modal-form-main'>
        <button className='btn close' onClick={() => changeModal('')}>X</button>
        <h2 className='modal-form-header'>New Opening</h2>

        <div className='modal-form-body'>
          
          <label htmlFor='idLocations'>Location ID</label>
          <select required type='text' name='idLocations' id='idLocations' value={newOpening.idLocations} onChange={handleChange}>
            {optionElements}
          </select>

          <label htmlFor='city'>City</label>
          <input required type='text' name='city' id='city' value={newOpening.city} onChange={handleChange}/>
          
          <label htmlFor='state'>State</label>
          <input required type='text' name='state' id='state' value={newOpening.state} onChange={handleChange}/>
          
          <label htmlFor='position'>Position</label>
          <input required type='text' name='position' id='position' value={newOpening.position} onChange={handleChange}/>

          <label htmlFor='manager'>Manager</label>
          <input required type='text' name='manager' id='manager' value={newOpening.manager} onChange={handleChange}/>

          <label htmlFor='managerEmail'>Manager's Email</label>
          <input required type='email' name='managerEmail' id='managerEmail' value={newOpening.managerEmail} onChange={handleChange}/>

          
          
          <button className='btn submit' onClick={submitForm}>Submit</button>
        </div>

      </div>
    </div>
  )
}
