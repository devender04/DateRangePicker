const Days = ({ onDays, error }) => {

    return (
        <div className='flex flex-col justify-between mx-10 border-bottom py-10' style={{height:'80px'}}>

            <div className='w-full' style={{height:'40px'}}>
                <p style={{ color: 'red'}}>{error}</p>
            </div>

            <div className='w-full'>
                <button onClick={() => onDays(1)} className='days-button'>+1 day</button>
                <button onClick={() => onDays(2)} className='days-button'>+2 day</button>
                <button onClick={() => onDays(3)} className='days-button'> +3 day</button>
                <button onClick={() => onDays(7)} className='days-button'>+7 day</button>
                <button onClick={() => onDays(14)} className='days-button'>+14 day</button>
            </div>
        </div>
    )
}

export default Days