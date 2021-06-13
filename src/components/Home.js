import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home () {
    const history = useHistory()

    return(
        <div>
            <button onClick={()=> history.push('/pizza')}>Order Online</button>
            
        </div>
    )
}