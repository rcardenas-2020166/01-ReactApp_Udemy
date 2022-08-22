//Props//
import PropTypes from 'prop-types';

//Hooks//
import { useState } from 'react';

export const CounterApp = ({value}) => 
{

    const [counter, setCounter] = useState( value );
    const [state, setState] = useState( true );

    const handleAdd = () => 
    {
        setCounter(counter + 1)
    }

    const handleRest = () => 
    {
        setCounter(counter - 1)
    }

    const resetCounter = () =>
    {
        setCounter(value)
    }

    const changeState = () => 
    {
        setState(!state)
    }
    
    return(
        <>
           <h1>CounterApp</h1>
           <h2> { counter } </h2>
           {
                state === true && 
                <h2>True</h2>
           }
           {
                state === false && 
                <h2>False</h2>
           }
           <button onClick={ handleAdd }>
            +1
           </button>
           <button onClick={ handleRest }>
            -1
           </button>
           <button onClick={ resetCounter }>
            Reset
           </button>
           <button onClick={ changeState }>
            Change
           </button>
        </>
    )
}


CounterApp.propTypes = 
{
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = 
{
    value: 20,
}