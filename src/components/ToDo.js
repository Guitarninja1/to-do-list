import React from 'react';


class ToDo extends React.Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ol>
                    <li>{this.listItems}</li>
                </ol>
            </div>
        )
    }
}

export default ToDo;