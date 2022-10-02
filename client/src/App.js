import Form from "./components/Form";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Scheduler from "./components/Scheduler";
import Contacts from "./components/Contacts"
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Position from "./components/Position";
import Opening from "./components/Opening";
import Axios from 'axios'
import React, { useState, useEffect } from 'react'

//Show Please Click List if show list is false, 
//Fix hashing
//My queue route ????? based on logged in recruiter ID
//Show Info on candidates

function App() {
  const LOCAL_STORAGE_LAST_LIST = 'clockwork.list'
  const [formType, setFormType] = useState('create')
  const [showList, setShowList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_LAST_LIST)) || {listName: 'readCandidates', status: true})
  const [showModal, setShowModal] = useState('')
  const [listStatus, setListStatus] = useState(false)
  const [selectedDatabase, setSelectedDatabase] = useState('default')
  const [selectedId, setSelectedId] = useState('')
  const [targetCandidate, setTargetCandidate] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState([])
  const [contactForm, setContactForm] = useState({})
  const [paginationData, setPaginationData] = useState({})
  const [filterOptions, setFilterOptions] = useState({filterKey: '', filterBy: 'ID'})
  const [resultLimit, setResultLimit] = useState(50)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredList, setFilteredList] = useState([])
  const [locationOptions, setLocationOptions] = useState([])
  const [LoggedInRecruiter, setLoggedInRecruiter] = useState(
    {
        "idRecruiters": 0,
        "recruiterFirstName": "",
        "recruiterLastName": "",
        "email": "",
        "assignedAccounts": ""
    })
  
  useEffect(()=>{
    Axios.get('http://localhost:3001/locations').then(res => {
      setLocationOptions(res.data)
    }) 
  }, [])

  useEffect(() => {
    setFilterOptions({filterKey: '', filterBy: 'ID'})
    setData([])
    getData()
  }, [currentPage, resultLimit, showList])

  useEffect(() => {
    setCurrentPage(1)
  }, [showList.listName])
   
  useEffect(() => {
    filterList()
  }, [filterOptions.filterKey, filterOptions.filterBy])

  useEffect(() => {
    getPaginationData()
  }, [currentPage, resultLimit, showList.listName])

  useEffect(() => {
    setListStatus(prevListStatus => !prevListStatus)
    saveLastUsedList()
    
  }, [showList.status, showList.listName])

  function saveLastUsedList(){
    localStorage.setItem(LOCAL_STORAGE_LAST_LIST, JSON.stringify(showList))
  }
  async function getData(){
    let route 
    if(showList.listName === 'readCandidates') route = 'candidates'
    if(showList.listName === 'readContacts') route = 'contacts'
    if(showList.listName === 'readApplications') route = 'applications'
    await Axios.get(`http://localhost:3001/${route}?page=${currentPage}&limit=${resultLimit}`)
    .then(res => {
      setData(res.data.data)
    })
  }

// MAJOR BUG FIX
async function checkRecruiterLogin(recruiterEmail, password){
  await Axios.get(`http://localhost:3001/recruiters/${recruiterEmail}&${password}`)
  .then(res => {
    
    if(res.data.login == true ){
      console.log(LoggedInRecruiter)
      setLoggedInRecruiter(res.data)
      setLoggedIn(res.data.login)
    }
    
  })
}

  async function getPaginationData(){
    let route 
    if(showList.listName === 'readCandidates') route = 'candidates'
    if(showList.listName === 'readContacts') route = 'contacts'
    if(showList.listName === 'readApplications') route = 'applications'
    await Axios.get(`http://localhost:3001/${route}?page=${currentPage}&limit=${resultLimit}`)
    .then(res => {
      setPaginationData(res.data.paginationData)
    })
  }
  
  function filterList(){
    setFilteredList(data)
    setFilteredList(prevFiltered => {
        return(
          prevFiltered.filter(application =>{
              //Use Keys to get these values
              let keys = []
              if(filterOptions.filterBy === 'Name'){
                keys = ["firstName", "lastName"]
              }

              else if(filterOptions.filterBy === 'Location'){
                keys = ["city", "state", "streetAddress"]
              }

              else if(filterOptions.filterBy === 'Email'){
                keys = ["emailAddress", "managerEmail"]
              }

              else if(filterOptions.filterBy === 'ID'){
                keys = ["idApplications","idOpenings", "idContacts", "PersonID", "OpeningId", "ContactRecruiterId", "ApplicationPersonId", "ContactApplicationsId"]
              }

              else if(filterOptions.filterBy === 'Phone Number'){
                keys = ["phoneNumber"]
              }
              
              else if(filterOptions.filterBy === 'Status'){
                keys = ["currentStatus", "ApplicationStatus", "ContactStatus"]
              }
              
              else if(filterOptions.filterBy === 'Other'){
                keys = ["ContactTimeStamp", "ApplicationDate", "position", "manager"]
              }
              
              return keys.some((key) => {
                if(application[key]){
                  return application[key].toString().toLowerCase().includes(filterOptions.filterKey.toLowerCase())
                } else return
              })

            })
            )  
    })
  
    if(!filterOptions.filterKey){
      setFilteredList(['No Data'])
    }
    
  }
  
  async function addCandidate(newCandidate){
    await Axios.post('http://localhost:3001/candidate/create', {newCandidate}).then(() => alert("Candidate Created"))
    getData()
  }

  async function updateCandidate(employeeId, updatedCandidate){
    if(!updatedCandidate){
      setSelectedId(employeeId)
      setFormType('update')
      return
    }
    await Axios.put(`http://localhost:3001/candidate/update/${employeeId}`, {updatedCandidate}).then(() => alert("Candidate Updated"))
    getData()
  }

  async function deleteCandidate(employeeId){
    const confirmation = confirm(`You are about to delete Candidate: #${employeeId}`)
    if(confirmation){
      await Axios.delete(`http://localhost:3001/candidate/delete/${employeeId}`).then(() => alert("Candidate Deleted"))
    }
    getData()
  }

  function contactCandidate(applicationId){
    Axios.get(`http://localhost:3001/applications/${applicationId}`).then(res => {
      setContactForm(res.data)
    })
    changeModal('newContact')
  }
  


async function parseCandidate(){

  let newEmployee = {
    firstName:"Christof",
    lastName : "Guy",
    city : "Aurora",
    state : "IL",
    position : "Programmer",
    emailAddress:"cguy@gmail.com",
    phoneNumber:9999999
  }
  await Axios.post(`http://localhost:3001/candidate/create`, {newEmployee}).then(res => {
   
    newEmployee.ApplicationPersonId = res.data
    })
   
    var queryString = Object.keys(newEmployee).map(key => key + '=' + newEmployee[key]).join('&');
    queryString = queryString.replace(/ /g,"%20")
    console.log(queryString) 
    
    await Axios.get(`http://localhost:3001/openings?${queryString}`).then(res => {
      console.log(res.data)
      newEmployee.OpeningId = res.data[0].idOpenings
    })
    
    await Axios.post(`http://localhost:3001/application/create`, {newEmployee}).then(res => {
    })
    getData()
   
}

  function scheduleCandidate(employeeId){
    setTargetCandidate(data.find( employee => employee.id === employeeId))
    if(targetCandidate.scheduled){
      console.log('Rescheduled Candidate')
      setOpenScheduler(true)
    }else{
      console.log('Schedule Candidate')
      setOpenScheduler(true)
    }
  }

  function changeForm(formType){
    if(formType !== 'read' || formType !== 'readContacts'){
      setFormType(formType)
    }
    else{
       setShowList(true)
    }
  }

  function changeList(listName){
    if(listName === showList.listName){
      setShowList(prevShowList => {
        return{
            listName: prevShowList.listName,
            status: !prevShowList.status
        }
      })
      setListStatus("false")
    }
    else{
      setShowList({listName: listName, status: true})
      setListStatus("true")
    }
  }

  function changeModal(modalName){
    setShowModal(prevShowModal => {
      if(prevShowModal === modalName){
        return ''
      }
      return modalName
    })
  }

  return (
    <div className="App">
      { !loggedIn ? 
        <LandingPage setLoggedIn={checkRecruiterLogin}/> :
        <>
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          <aside className="left-section">
          <Navbar handleClick={changeForm} showList={showList}changeDatabase={setSelectedDatabase} changeList={changeList} listType={showList.listName} parseCandidate={parseCandidate} changeModal={changeModal}/>
          {/* <Form listType={showList.listName} formType={formType} handleDelete={deleteCandidate} handleUpdate={updateCandidate} handleAdd={addCandidate} selectedId={selectedId} selectedDatabase={selectedDatabase}/> */}
          </aside>
          {showList.status && <Main 
            listType={showList.listName}
            listStatus={listStatus}
            listData={filteredList[0] !== 'No Data' ? filteredList : data} 
            currentPage={currentPage}
            paginationData={paginationData}
            filterOptions={filterOptions}
            deleteCandidate={deleteCandidate} 
            updateCandidate={updateCandidate} 
            scheduleCandidate={scheduleCandidate}
            contactCandidate={contactCandidate} 
            setFilterOptions={setFilterOptions}
            setResultLimit={setResultLimit}
            setCurrentPage={setCurrentPage}
            getData={getData}
            />}
          {showModal === 'newContact' && <Contacts showModal={showModal} changeModal={changeModal} data={contactForm} LoggedInRecruiter={LoggedInRecruiter}/>} 
          {showModal === 'newOpening' && <Opening showModal={showModal} changeModal={changeModal} locationOptions={locationOptions}/>}
          {showModal === 'newPosition' && <Position showModal={showModal} changeModal={changeModal} />}
          {/* {showModal === 'newSchedule' && <Scheduler targetCandidate={targetCandidate} showModal={showModal} changeModal={changeModal} setTargetCandidate={setTargetCandidate} />} */}
        </>
      }
    </div>
  );
}

export default App;
