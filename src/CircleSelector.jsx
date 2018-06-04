import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            <button className={props.selectedCircle === "1" ? 'selected' : ''} onClick={()=> props.handleSelectedCircle('1')}>{props.selectedCircle === "1" ? 'CIRCLE ' + props.selectedCircle + ' SELECTED' :  'SELECT CIRCLE ' + props.selectedCircle}</button>
            <button className={props.selectedCircle === "2" ? 'selected' : ''} onClick={()=> props.handleSelectedCircle('2')}>{props.selectedCircle === "2" ? 'CIRCLE ' + props.selectedCircle + ' SELECTED' :  'SELECT CIRCLE ' + props.selectedCircle}</button>
            <button className={props.selectedCircle === "3" ? 'selected' : ''} onClick={()=> props.handleSelectedCircle('3')}>{props.selectedCircle === "3" ? 'CIRCLE ' + props.selectedCircle + ' SELECTED' :  'SELECT CIRCLE ' + props.selectedCircle}</button>
            <button className={props.selectedCircle === "4" ? 'selected' : ''} onClick={()=> props.handleSelectedCircle('4')}>{props.selectedCircle === "4" ? 'CIRCLE ' + props.selectedCircle + ' SELECTED' :  'SELECT CIRCLE ' + props.selectedCircle}</button>
        </div>
    )
}

export default CircleSelector;