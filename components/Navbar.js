'use client'
import { useState } from 'react';
import CalendarPicker from './DateRangePicker/CalendarPicker'

const disabledDates = [
  new Date(2024, 4, 20),
  new Date(2024, 4, 25),
  new Date(2024, 5, 10),
  new Date(2024, 5, 20)
]

const Navbar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClick = () => {
    console.log(startDate,endDate)
  }
  return (
    <nav className='flex-center border-shadow-lite '>

      <CalendarPicker
        selectedStartDate={startDate}
        setSelectedStartDate={setStartDate}
        selectedEndDate={endDate}
        setSelectedEndDate={setEndDate} 
        format='DD-monthName'
        inputbox={2}                
        disabledDates={disabledDates}   
        monthOffset={2}                 
        daysbar={true}                 
        actionbar={true}             
        runFn={handleClick}
        onbodyclick= {true}
      />

    </nav>
  )
}

export default Navbar