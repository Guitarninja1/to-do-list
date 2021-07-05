import React from 'react';

class ListAdd extends React.Component {
    render () {
        return (
            <form>
                <h1>Add Task</h1>
                <label htmlFor='title'>Task Title:</label>
                <input id='title' type='text' placeholder='Title'/>
                <label htmlFor='desc'>Please Describe The Task:</label>
                <textarea id='desc' placeholder='Description'></textarea>
                <label htmlFor='priority'>Task Priority:</label>
                <select id='priority'>
                    <option value='high-priority'>High Priority</option>
                    <option value='medium-priority'>Medium Priority</option>
                    <option value='low-priority'>Low Priority</option>
                </select>
                <label htmlFor='date'>Needs To Be Completed By:</label>
                <input id='date' type='datetime-local'/>
                <button type='submit'>Submit New Task</button>
            </form>
        )
    }
}

export default ListAdd;