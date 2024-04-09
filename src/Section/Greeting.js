import React from 'react'
import happy from './img/sahil.gif';
import year from './img/gif.gif';
import './greeting.css'
import './Messages'
import Messages from './Messages';
import { useNavigate } from 'react-router';

function Greeting() {
    const navigate = useNavigate()
    const queryParameters = new URLSearchParams(window.location.search)
    console.log(queryParameters)
    const name = queryParameters.get("n");
    const fromName = queryParameters.get("f");
    console.log("data form URL", name, fromName);
    return (
        <>
            <div className='container-fluid'>
                <div className='row block'>
                    <div className='col-md-12 text'>
                        <div className='content relative'>
                            {name && <span className='greeting-name'>Hey {name}</span>}
                            <img className='new-year' src={happy} alt='Not Found'></img>
                            <img className='year absolute' src={year} alt='not found' />
                        </div>
                    </div>
                    <div className='msg'>
                        <Messages fromName={fromName} />
                    </div>
                    <div className='own'>
                        <button onClick={() => navigate("/")}>Create Your own</button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Greeting
