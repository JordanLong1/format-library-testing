import React, {useState} from 'react'
import ComposePage from '../components/composePage';



const ComposePageContainer = () => {
    const [inputValue, setInputValue] = useState('')

    const onFormUpdate = (text) => {
        console.log('yo', text)
    }

    return (
        <ComposePage />
    )
}


export default ComposePageContainer
