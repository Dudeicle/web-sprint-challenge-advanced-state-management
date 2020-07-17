import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions/actionsIndex.js';

const SmurfForm = props => {
    console.log(props.smurfs)

    const [ smurfs, setSmurfs ] = useState(props.smurfs)
    const [ newSmurfName, setNewSmurfName ] = useState('')    
    const [ newSmurfAge, setNewSmurfAge ] = useState('')
    const [ newSmurfHeight, setNewSmurfHeight ] = useState('')

    console.log(smurfs)

const addItem = (smurfName, smurfAge, smurfHeight) => {
        let newSmurf = {
            name: smurfName,
            age: smurfAge,
            height: smurfHeight,
            id: new Date()
        };
        setSmurfs([...smurfs, newSmurf])
    }

const handleSubmit = e => {
    e.preventDefault();
    addItem(newSmurfName, newSmurfAge, newSmurfHeight)
    setNewSmurfName('')
    setNewSmurfAge('')
    setNewSmurfHeight('')
}

const handleNameChange = e => {
    setNewSmurfName(e.target.value);
};
const handleAgeChange = e => {
    setNewSmurfAge(e.target.value);
};
const handleHeightChange = e => {
    setNewSmurfHeight(e.target.value);
};



    return (
        <div>
            <form>
                {/* SMURF NAME */}
                <div>
                    <label className="smurfName">
                        Name:
                    </label>
                    <input 
                        type="text"
                        name="smurfName"
                        value={newSmurfName}
                        onChange={handleNameChange}
                    />
                </div>
                <br></br>
                {/* SMURF AGE */}
                <div>
                    <label className="smurfAge">
                        Age: 
                    </label>
                    <input 
                        type="text"
                        name="smurfAge"
                        value={newSmurfAge}
                        onChange={handleAgeChange}
                    />
                </div>
                <br></br>
                {/* SMURF HEIGHT */}
                <div>
                    <label className="smurfHeight">
                        Height: 
                    </label>
                    <input 
                        type="text"
                        name="smurfHeight"
                        value={newSmurfHeight}
                        onChange={handleHeightChange}
                    />
                </div>
                {/* ADD SMURF BUTTON */}
                <div>
                    <button onClick={handleSubmit}>Add Smurf to Village</button>
                </div>
                {/* RENDER LIST OF SMURFS CURRENTLY IN VILLAGE */}
                <div>
                    <h3>Smurfs Currently In Village</h3>
                    {props.smurfs.map(smurf => {
                        return (`${smurf.name} is a ${smurf.age} year old Smurf, and is ${smurf.height} tall`)
                    })}
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfForm)
