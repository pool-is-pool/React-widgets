import React, {useState} from "react"

const Accordian = ({items}) => {
    const[activeIndex, setActiveIndex] = useState(null)
    
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    
    
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : ""
        
        return (
            <div key={item.title} >
                <div class= {`title ${active}`} onClick={() => onTitleClick(index)} >
                    <i class="dropdown icon"></i>
                    {item.title}
                </div>
                <div class={`${active} content`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })
    return (
        <div class="ui styled accordion"> 
            {renderedItems }
        </div>
    ) 
  
}

export default Accordian