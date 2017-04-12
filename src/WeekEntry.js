import React from 'react';
import DayEntry from './DayEntry';

class WeekEntry extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log('用户提交');
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <DayEntry title="mon"/>
                <DayEntry title="tue"/>
                <DayEntry title="wen"/>
                <DayEntry title="thu"/>
                <DayEntry title="fri"/>
                <DayEntry title="sat"/>
                <DayEntry title="sun"/>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default WeekEntry;