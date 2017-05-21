import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';


// const renderHobbies = ({fields, meta: {error}}) => (
//     <ul>
//         <li>
//             <button type="button" onClick={() => fields.push()}>add hobby</button>
//         </li>
//         {fields.map((hobby, index) => (
//             <li key={index}>
//                 <button
//                     type="button"
//                     title="remove hobby"
//                     onClick={fields.remove(index)} />
//                 <Field
//                     name={hobby}
//                     type="text"
//                     component={renderField}
//                     label={`hobby: #${index+1}`} />
//             </li>
//         ))}
//         {error && <li className="error">{error}</li>}
//     </ul>
// );

const renderMembers = ({fields, meta: {touched, error, submitFailed}}) => {
    const durationOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 15.5, 16];
    return (
    <ul>
        <li key="button">
            <button
                type="button"
                onClick={() => fields.push({})}>
                增加工作内容
            </button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </li>

        {fields.map((member, index) => (
            <li key={index}>

                <button
                    type="button"
                    title="remove member"
                    onClick={() => fields.remove(index)}
                >删除</button>

                <h4>工作 #{index + 1}</h4>
                <Field
                    name={`${member}.projectName`}
                    component="select"
                >
                    <option />
                    <option value="HYH56">HYH56</option>
                    <option value="YJ56">YJ56</option>
                    <option value="FCG34">FCG34</option>
                    <option value="FCG34DEL">FCG34冷水机组</option>
                    <option value="FCG34">FCG34</option>
                    <option value="others">非项目工作</option>

                </Field>
                <Field
                    name={`${member}.docName`}
                    component="select"
                >
                    <option />
                    <option value="FD">FD</option>
                    <option value="WD">接线图</option>
                    <option value="ASSEMBLE">装配接线表</option>
                </Field>
                <div>
                    <label>工时</label>
                    <Field
                        name={`${member}.workload`}
                        component="select"
                    >
                        <option />
                        {durationOptions.map((hour, index) => (
                            <option value={hour} key={index}>{hour}</option>
                        ))}
                    </Field>

                </div>

            </li>
        ))}
    </ul>
)};

const FieldArraysForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            {/*<Field*/}
                {/*name="monday"*/}
                {/*type="text"*/}
                {/*component={renderField}*/}
                {/*label="周一"*/}
            {/*/>*/}
            <div>
                <label>周一</label>
                <FieldArray
                    name="monday"
                    component={renderMembers}
                    label="周一"
                />
            </div>
            <div>
                <label>周二</label>
                <FieldArray
                    name="tuesday"
                    component={renderMembers}
                    label="周二"
                />
            </div>
            <div>
                <label>周三</label>
                <FieldArray
                    name="wednesday"
                    component={renderMembers}
                    label="周三"
                />
            </div>
            <div>
                <label>周四</label>
                <FieldArray
                    name="thursday"
                    component={renderMembers}
                    label="周四"
                />
            </div>
            <div>
                <label>周五</label>
                <FieldArray
                    name="friday"
                    component={renderMembers}
                    label="周五"
                />
            </div>
            <div>
                <label>周六</label>
                <FieldArray
                    name="saturday"
                    component={renderMembers}
                    label="周六"
                />
            </div>
            <div>
                <label>周日</label>
                <FieldArray
                    name="sunday"
                    component={renderMembers}
                    label="周日"
                />
            </div>
            <button type="submit" disabled={submitting}>提交</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>清空</button>
        </form>
    )
};

export default reduxForm({
    form: 'FieldArrays'
})(FieldArraysForm);
