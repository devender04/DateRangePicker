import React from 'react'

const Input = ({ inputbox, selectedStartDate, selectedEndDate , format }) => {
    
    const getDate = (date, format) =>{
        let string ;
        if(format=== "MM/DD/YYYY"){
            string = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
        }
        if(format === "DD-monthName"){
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let month = monthNames[date.getMonth()];
            string = `${date.getDate()} ${month}`;
        }
        else{
            string = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
        }
        return string;

    }

    return (
        <>
            {inputbox === 1 ? (
                <>
                    <input type='text' name='inputDates' className='check-in-out long' value={(selectedStartDate && selectedEndDate) ? `${getDate(selectedStartDate,format)}     ---     ${getDate(selectedEndDate,format)}` : 'Check-In     ---     Check-Out'} readOnly />
                </>
            ) : (
                <>
                    <input type="text" name='firstdate' className='check-in-out' value={selectedStartDate ? getDate(selectedStartDate,format) : 'Check-In'} readOnly />


                    <input type="text" name='lastdate' className='check-in-out' value={selectedEndDate ? getDate(selectedEndDate,format) : 'Check-Out'} readOnly />
                </>
            )}
        </>
    )
}

export default Input