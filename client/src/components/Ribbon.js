import React from 'react'
import SearchBar from './SearchBar'
export default function Ribbon({ setResultLimit, setFilterOptions, filterOptions, getData }) {
  function changeLimit(event){
    setResultLimit(event.target.value)
  }
  return (
    <nav className="horizontal-navbar">
        <SearchBar setFilterOptions={setFilterOptions} filterOptions={filterOptions}/>
        
        <div className='limit function'>
          <h5 className='function-title'>Limit Results</h5>
          <select className='limit-select' defaultValue={50} onChange={changeLimit}>
                <option value={1} >1</option>
                <option value={5} >5</option>
                <option value={10} >10</option>
                <option value={15} >15</option>
                <option value={30} >30</option>
                <option value={50} >50</option>
                <option value={100} >100</option>
                <option value={200} >200</option>
          </select>
        </div>

        <button className='btn refresh' onClick={getData}>
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M54.6 9.4C48.8 3.6 40.84 0 32 0C14.32 0 0.0400009 14.32 0.0400009 32C0.0400009 49.68 14.32 64 32 64C46.92 64 59.36 53.8 62.92 40H54.6C51.32 49.32 42.44 56 32 56C18.76 56 8 45.24 8 32C8 18.76 18.76 8 32 8C38.64 8 44.56 10.76 48.88 15.12L36 28H64V0L54.6 9.4Z" fill="white"/>
          </svg>
        </button>
    </nav>
  )
}
