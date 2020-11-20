import React from 'react'
import JSONInput from 'react-json-editor-ajrm/index';
import locale from 'react-json-editor-ajrm/locale/en';
import everyMonthDefaultOptions from '../defaultConfig'


const JsonEditor = ({ onChange }) => {
    return (
        <JSONInput
            id='a_unique_id'
            placeholder={everyMonthDefaultOptions}
            // colors      = 'light_mitsuketa_tribute'
            locale={locale}
            height='90vh'
            width='700px'
            onChange={value => {
                console.log(value);
                if(!value.error){
                    onChange(value.jsObject)
                }
              }}
        />
    )
}

export default JsonEditor
