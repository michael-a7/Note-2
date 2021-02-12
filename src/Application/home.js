import React from 'react'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            <h1>Non-Comp Branch</h1>
            <button clasName="push1">
                <Link to="/notes">
                    New Note
                </Link>
            </button>
        </div>
    )
}
export default Home
