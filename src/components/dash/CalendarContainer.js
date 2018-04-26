import React, { Component } from 'react';
import './Detail.css';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

class CalendarContainer extends Component {
    render() {
        return (
            <div >
                <Calendar onPanelChange={onPanelChange} />
            </div>
        )
    }
}
export default CalendarContainer;