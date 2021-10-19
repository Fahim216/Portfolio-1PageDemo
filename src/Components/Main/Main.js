import React from 'react';
import '../Main/Main.css';

const Main = () => {
    return (
        <div> 
            <section id="hero" className="d-flex flex-column ">
              <div className="hero-container" >
              <h1 className='fs-2 '>Fahim Ahmed</h1>
                <p>I am a <span className="change_content"></span></p>
              </div>
            </section>
           
        </div>
    );
};

export default Main;