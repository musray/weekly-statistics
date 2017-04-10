import React from 'react';

const Task = (props) => {
    return (
        <div>
            <select name="project">
                <option value="">placeholder</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <textarea name="description" cols="30" rows="10"/>
            <input type="text"/>
            <button onClick={() => props.remove(props.task.id)}>
                删除
            </button>
        </div>
    )
};

const TaskList = (props) => {
    const taskNode = props.tasks.map(task => {
        return (<Task key={task.id} task={task} remove={props.remove}/>)
    });
    return (<ul>{taskNode}</ul>)
};

window.id = 0;
class DayEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    addTask(val) {
        const task = {id: window.id++};
        this.state.data.push(task);
        this.setState({data: this.state.data});
    }

    removeTask(id) {
        const remainder = this.state.data.filter((task) => {
            if (task.id !== id) {
                return task;
            }
        });
        this.setState({data: remainder});
    }

    render() {
        return (
            <div>
                <TaskList
                    tasks={this.state.data}
                    remove={this.removeTask.bind(this)}/>
                <button onClick={this.addTask.bind(this)}>
                    增加
                </button>
            </div>
        )
    }
}

export default DayEntry;