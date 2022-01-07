import React, {useState, useEffect } from "react"
import axios from "axios"

const Search = () => {
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])

    // console.log(results)

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term,
                }
            })
            setResults(data.query.search)
        }
        if (term && !results.length) search()
        else {
            const timeoutId = setTimeout(() => {
                if(term) search()
            }, 1000)
    
            return () => {
                clearTimeout(timeoutId)
            }
        }

    },[term])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} class="item">
                <div class="right floated content" >
                    <a 
                        class="ui button" 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    > Go 
                    </a>
                </div>
                <div class="content">
                    <div class="header" >
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} ></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div class="ui form" > 
                <div class="field" >
                    <label> Enter Search term </label>
                    <input 
                        value={term}
                        onChange = {e => setTerm(e.target.value)}
                        class="input"
                     /> 
                </div>
            </div>
            <div class="ui celled list" >
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
