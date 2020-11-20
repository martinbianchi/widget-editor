import React, { useEffect, useState } from 'react'
import JsonEditor from '../JsonEditor'
import everyMonthDefaultOptions from '../defaultConfig'


const EveryMonth = () => {
    const [wgOptions, setWgOptions] = useState(everyMonthDefaultOptions);

    useEffect(() => {
       if(window.everyMonthWidget) {
           window.everyMonthWidget.setOptions(wgOptions)
        //    window.everyMonthWidget.show()
       }
    }, [wgOptions])

    const handleChange = (val) => {
        console.log(val)
        setWgOptions(val)
    }

    const openWidget = () => {
        window.everyMonthWidget.show()
    }

    return (
        <div className="home">
            <JsonEditor onChange={handleChange} />

            <button className="btn" onClick={openWidget}>OPEN WIDGET</button>
        </div>
    )
}

export default EveryMonth
