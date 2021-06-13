import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navigation () {
    const history = useHistory()
    return(
        <div>
            <button onClick={()=> history.push('/')}>Home</button>
        </div>
    )
}