import React from 'react'
import Accounts from './Accounts'
export default function Navbar({ handleClick, showList, changeDatabase, changeList, listType, parseCandidate, changeModal}) {
    const buttonType = listType === 'readCandidates' ? 'Candidate' : listType === 'readContacts' ? 'Contact' : null
    return (
        <nav className='navbar'>
            <Accounts changeDatabase={changeDatabase}/>

            {/* <button className='btn' onClick={() => handleClick('create')} >New Candidate</button>
            <button className='btn' onClick={() => handleClick('update')} >Update Candidate</button>
            <button className='btn' onClick={() => handleClick('delete')} >Delete Candidate</button> */}
            <button className={`btn ${showList.listName == "readCandidates" ? "disabled": " "}`} onClick={() => changeList('readCandidates')} >Candidate List</button>  
            <button className={`btn ${showList.listName == "readContacts" ? "disabled": " "}`} onClick={() => changeList('readContacts')} >Contact List</button> 
            <button className={`btn ${showList.listName == "readApplications" ? "disabled": " "}`} onClick={() => changeList('readApplications')} >Application List</button> 
            <button className='btn' onClick={() => parseCandidate()} >Parse Candidates</button> 
            <button className='btn' onClick={() => changeModal('newOpening')} >New Opening</button> 
            <button className='btn' onClick={() => changeModal('newPosition')} >New Position</button> 


            {/* {buttonType && <button className='btn' onClick={() => handleClick('create')} >New {buttonType}</button>}   */}
        </nav>
    )
}
