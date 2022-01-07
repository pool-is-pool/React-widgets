import React, {useState} from "react"
import Dropdown from "./Dropdown"
import Convert from "./Convert"

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"


const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div class="ui form">
                <div class="field">
                <label>Enter Text </label>
                <input value={text} onChange={(event) => setText(event.target.value)} />
                </div>    
            </div>
            
            <Dropdown 
            label="Select a language"
            selected={language} 
            onSelectedChange={setLanguage}  
            opt={options} 
            />
            <hr></hr>
            <h3 class="ui header"> Output </h3>
            <Convert text={text} language={language} /> 
        </div>
    )
}

export default Translate