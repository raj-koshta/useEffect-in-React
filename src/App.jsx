import React, { useEffect, useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(()=>{
        alert("Effect Run");
    }, [])

    return (
        <div>
            <h1>Day 2 Of Learning Everday</h1>

            <button onClick={()=>{setNum(num+1)}}>
                Click Me! {num}
            </button>

            <br />

            <button onClick={()=>{setNum2(num2+1)}}>
                Click Me! {num2}
            </button>

        </div>
    )
}

export default App