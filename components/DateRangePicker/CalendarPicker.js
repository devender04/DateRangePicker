'use client'

import { useState, useEffect } from 'react';
import "./Common.css"
import Input from './Input';
import DateRangePicker from './DateRangePicker';
import ActionBar from './ActionBar';
import Days from './Days';

const mountedStyle = {
    animation: "Animation 250ms ease-in-out"
};
const unmountedStyle = {
    animation: "outAnimation 250ms ease-out",
    animationFillMode: "forwards"
};
const CalendarPicker = ({ selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate, format, inputbox, disabledDates, monthOffset, actionbar, daysbar, runFn }) => {
    // const [isMounted, setIsMounted] = useState(false);
    const [show, setShow] = useState(false);
    console.log(show)
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (selectedStartDate && selectedEndDate) {
            handleError()
        } else {
            setError(null)
        }
    }, [selectedEndDate])

    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            if (!document.getElementById('navbar').contains(e.target)){
                console.log('hi')
                setSelectedStartDate(null)
                setSelectedEndDate(null)
                setShow(false)
            }        
        })
    },[])

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateSelect = (startDate, endDate) => {
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
    };

    const handleReset = () => {
        setSelectedStartDate(null)
        setSelectedEndDate(null)
    }
    const handleConfirm = () => {
        if (!selectedStartDate || !selectedEndDate) {
            return
        } else {
            showCalendar()
        }
        runFn ? runFn() : null
    }
    const handleAddDays = (selectedStartDate, day) => {
        if (selectedStartDate) {
            const newDate = new Date(selectedStartDate.getFullYear(), selectedStartDate.getMonth(), selectedStartDate.getDate())
            newDate.setDate(selectedStartDate.getDate() + day)
            return newDate
        }
    }
    

    const handleError = () => {
        if (disabledDates) {
            disabledDates.some(disabledDate => {
                if (selectedStartDate <= disabledDate && selectedEndDate >= disabledDate)
                    setError("Booking is not avilable for this date range")
            })
        }
    }
    const handleDays = (day) => {
        const date = new Date()
        switch (day) {
            case 1:
                setSelectedEndDate(handleAddDays(selectedStartDate, day))
                break;
            case 2:
                setSelectedEndDate(handleAddDays(selectedStartDate, day))
                break;
            case 3:
                setSelectedEndDate(handleAddDays(selectedStartDate, day))
                break;
            case 7:
                setSelectedEndDate(handleAddDays(selectedStartDate, day))
                break;
            case 14:
                setSelectedEndDate(handleAddDays(selectedStartDate, day))
                break;
        }
    }

    const showCalendar = () => {
        if(error){
            setSelectedStartDate(null)
            setSelectedEndDate(null)
        }
        setShow(!show) 
        
    }


    return (
        <div className='relative h-full flex-center' >
            <div onClick={showCalendar} className='h-full flex-center' >
                <Input inputbox={inputbox || 2} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} format={format}/>
            </div>

            {show &&
                <div className={`calendar-container flex flex-col justify-between p-10 absolute t-90`}
                    style={show ? mountedStyle : unmountedStyle}
                    onAnimationEnd={() => {
                        if (!show) {setShow(false)};
                    }}
                >   
                    <div className="w-full header">
                        <button onClick={handlePrevMonth}> {`${'<'}`} </button>
                        <button onClick={handleNextMonth}> {`${'>'}`} </button>
                    </div>
                    <div className='flex p-10 mx-10 gap-10'>
                        {[...Array(monthOffset).keys()].map(offset => (
                            <DateRangePicker
                                key={offset}
                                month={new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1)}
                                monthOffset={offset}
                                onPrevMonth={handlePrevMonth}
                                onNextMonth={handleNextMonth}
                                onDateSelect={handleDateSelect}
                                selectedStartDate={selectedStartDate}
                                selectedEndDate={selectedEndDate}
                                disabledDates={disabledDates}
                            />
                        ))}
                    </div>
                    {daysbar && <Days onDays={handleDays} error={error} />}
                    {actionbar && <ActionBar onReset={handleReset} onConfirm={handleConfirm} error={error} start={selectedStartDate} end={selectedEndDate} />}
                </div>
            }
        </div>
    );
};

export default CalendarPicker;
