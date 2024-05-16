const Button = ({ children, onClick, bgcolor, error, start, end}) => {
    return (
        <button
            onClick={onClick}
            className='button'
            style={{
                background: `${bgcolor}`,
                pointerEvents: `${error || (!start && !end) ? 'none' : ''}`,
            }}
        >
            {children}
        </button>
    )
}

const ActionBar = ({ onReset, onConfirm, error, start, end }) => {
    return (
        <div className='flex justify-end gap-10 mx-10 '>
            <Button onClick={onReset} bgcolor={'#FF4942'} start={true} end={true} >Reset</Button>
            <Button onClick={onConfirm} bgcolor={`${error || (!start && !end) ? '#ccc' : '#457AFF'}`} error={error} start={start} end={end}>Confirm</Button>
        </div>
    )
}

export default ActionBar
