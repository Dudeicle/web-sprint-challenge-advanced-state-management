import React from 'react';
import axios from 'axios';

const SmurfForm = () => {
    return (
        <div>
            Hello This is SmurfForm
            {/* SMURF NAME */}
            <div>
                <label className="smurfName">
                    Name:
                </label>
                <input 
                
                />
            </div>
            <br></br>
            {/* SMURF AGE */}
            <div>
                <label className="smurfAge">
                    Age: 
                </label>
                <input 
                
                />
            </div>
            <br></br>
            {/* SMURF HEIGHT */}
            <div>
                <label className="smurfHeight">
                    Height: 
                </label>
                <input 
                
                />
            </div>
        </div>
    );
};

export default SmurfForm