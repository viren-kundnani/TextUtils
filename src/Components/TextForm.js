import { text } from 'framer-motion/client'
import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const handleOnChange = (event) => {
        setInputText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = inputText.toUpperCase();
        setInputText(newText);
    }

    
    const [inputText, setInputText] = useState('');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control"
                    value={inputText}
                    onChange={handleOnChange}
                    id="myBox" rows="8"></textarea>
            </div>
            <button type="submit"
                className="btn btn-primary"
                onClick={handleUpClick}>
                Capitalize
            </button>
        </div>    
    )
}

