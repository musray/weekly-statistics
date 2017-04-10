import React from 'react';
import DayControls from '../components/DayControls';

class ControlForms extends React.Component {
    render() {
        return (
            <div id="MainContainer">
                <div id="monday">
                    <h2>周一</h2>
                    <DayControls />
                </div>
                <div id="tuesday">
                    <h2>周二</h2>
                    <DayControls />
                </div>
                <div id="wednesday">
                    <h2>周三</h2>
                    <DayControls />
                </div>
                <div id="thursday">
                    <h2>周四</h2>
                    <DayControls />
                </div>
                <div id="friday">
                    <h2>周五</h2>
                    <DayControls />
                </div>
                <div id="saturday">
                    <h2>周六</h2>
                    <DayControls />
                </div>
                <div id="sunday">
                    <h2>周日</h2>
                    <DayControls />
                </div>
            </div>
        );
    }
}

export default ControlForms;