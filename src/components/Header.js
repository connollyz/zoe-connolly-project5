import React from 'react';

function Header() {
    return (
        <div className='headerDiv'>
            <div className='wrapper'>
                {/* <p>sweet designs</p>  */}
                <label className='toggle' htmlFor='toggle'>?</label>
                <input id="toggle" type='checkbox'/>
                <div className='info'>
                    <p><span>Design your own donut!</span></p>
                    <p>step one: chose a donut flavor</p>
                    <p>step two: chose a  icing flavor</p>
                    <p>step three: repeat</p>
                </div>
            </div>
        </div>
    );
};

//exports header component to App.js
export default Header; 