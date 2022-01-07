import React, {useState, useEffect, useRef } from "react" 

const Dropdown = ({ label,opt, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    // useEffect(() => {
    //     const onBodyClick = (event) => {
    //         if (ref.current.contains(event.target)) {
    //             return 
    //         }
    //         setOpen(false)
    //     }
        
    //     document.body.addEventListener('click', onBodyClick, { capture: true})

    //     return () => {
    //         document.body.removeEventListener('click', onBodyClick)
    //     }

    // },) 


    const renderedOptions = opt.map((option) => {
        return (
            <div onClick={() => onSelectedChange(option)} class="item" key= {option.value}  >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} class="ui form">
            <div class="field" > 
                <label class="label">{label} </label>
                <div class={`ui selection dropdown ${open ? "visible active" : ""}`}
                     onClick={() => setOpen(!open)} 
                      >
                    <i class="dropdown icon" ></i>
                    <div class="text" > {selected.label} </div>
                    <div class={`menu ${open ? "visible transition" : ""}`}> 
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown

// <h1 class={`ui ${selected.value} header`}  >Text Showing Color</h1>
        