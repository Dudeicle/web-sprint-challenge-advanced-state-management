import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, handleChange, handleSubmit } from '../store/actions/actionsIndex.js';

const SmurfForm = props => {
    console.log(props)
    console.log(props.smurfs)
    console.log(props.handleSubmit)
    console.log(props.handleChange)
    console.log(props.fetchSmurfs)


    useEffect(() => {
        props.fetchSmurfs()
    }, [])

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
                        onChange={props.handleChange}
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
                        onChange={props.handleChange}
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
                        onChange={props.handleChange}
                    />
                </div>
                {/* ADD SMURF BUTTON */}
                <div>
                    <button onClick={props.handleSubmit(props.newSmurf.name, props.newSmurf.age, props.newSmurf.height)}>Add Smurf to Village</button>
                </div>
                {/* RENDER LIST OF SMURFS CURRENTLY IN VILLAGE */}
                <div>
                    <h3>Smurfs Currently In Village</h3>
                    {props.smurfs.map(smurf => {
                        return (`${smurf.name} is a ${smurf.age} year old Smurf, and is ${smurf.height} tall. `)
                    })}
                </div>
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
    { fetchSmurfs, handleChange, handleSubmit }
)(SmurfForm)
