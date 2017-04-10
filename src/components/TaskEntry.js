import React from 'react';
import Select from './Select';
import TextArea from './TextArea';
import SingleInput from './SingleInput';

const Task({task, remove}) {
    return (
        <div>
            <Select />
            <TextArea />
            <SingleInput />
            <button
                onClick={() => remove(task.id)}>
                删除
            </button>
        </div>
    )
}

const TaskList(props) {

}

class TaskEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // ownerName: '',
            projectOptions: [],
            projectSelection: '',
            workDescription: '',
            workHour: '',
            // workDay: {date: '', project: '', content: ''}
        };
        this.handleProjectSelection = this.handleProjectSelection.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleWorkHourChange = this.handleWorkHourChange.bind(this);
        this.handleRemoveEntry = this.handleRemoveEntry.bind(this);
    }
    componentWillMount() {
        fetch('./fake_db.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    projectOptions: data.projectOptions,
                });
            });
    }
    handleProjectSelection(e) {
        this.setState({projectSelection: e.target.value}
            , () => console.log('projectSelection', this.state.projectSelection));
    }
    handleDescriptionChange(e) {
        this.setState({workDescription: e.target.value}
            , () => console.log('workDescription', this.state.workDescription));
    }
    handleWorkHourChange(e) {
        this.setState({workHour: e.target.value}, () => console.log('workHour', this.state.workHour));
    }
    handleRemoveEntry(id) {
        const remainder = this.state.data.filter(taskEntry => {
            if(taskEntry.id !== id) return todo;
        })
    }


    render() {
        return (
            <div className="dayEntry">
                <Select
                    name={'project'}
                    placeholder={'选择项目'}
                    controlFunc={this.handleProjectSelection}
                    options={this.state.projectOptions}
                    selectedOption={this.state.ownerProjectSelection} />
                <TextArea
                    title={'请输入工作内容'}
                    rows={5}
                    resize={false}
                    content={this.state.workDescription}
                    name={'workDescription'}
                    controlFunc={this.handleDescriptionChange}
                    placeholder={'工作内容'}/>
                <SingleInput
                    inputType={'number'}
                    title={'工时'}
                    name={'workHour'}
                    controlFunc={this.handleWorkHourChange}
                    content={this.state.workHour}
                    placeholder={'工时(纯数字)'} />
            </div>
        );
    }
}

export default TaskEntry;