import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { fetchSmurfs, handleChange } from '../store/actions/actionsIndex.js';

const SmurfForm = props => {
    console.log(props)

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
    
    axios.post('http://localhost:3333/smurfs', {
        name: newSmurfName, age: newSmurfAge, height: newSmurfHeight
    }, {
        headers: {
            'content-type': 'application/json',
        }
    }
    )
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })
}


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
                        name="name"
                        value={props.newSmurf.name}
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
                        name="age"
                        value={props.newSmurf.age}
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
                        name="height"
                        value={props.newSmurf.height}
                        onChange={handleHeightChange}
                    />
                </div>
                {/* ADD SMURF BUTTON */}
                <div>
                    <button onClick={handleSubmit}>Add Smurf to Village</button>
                </div>
                {/* RENDER LIST OF SMURFS CURRENTLY IN VILLAGE */}
                {/* <div>
                    <h3>Smurfs Currently In Village</h3>
                    {props.smurfs.map(smurf => {
                        return (`${smurf.name} is a ${smurf.age} year old Smurf, and is ${smurf.height} tall`)
                    })}
                </div> */}
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        newSmurf: state.newSmurf
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurfs, handleChange }
)(SmurfForm)
