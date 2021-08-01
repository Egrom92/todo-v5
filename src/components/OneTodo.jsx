import React, {useMemo, useState} from 'react'
import Form from './Form';
import {add, doneToggle, edit, remove as taskRemove} from '../store/todos';
import Filter from './Filter';
import TodoList from './TodoList';
import {useDispatch, useSelector} from 'react-redux';
export default function OneTodo(props) {

    const {onDestroy, onCreate, tasks, id} = props

    const [status, setStatus] = useState("All");

    const dispatch = useDispatch();

    const filteredTodos = useMemo(() => {
        if (status === "completed") {
            return tasks.filter((todo) => todo.completed);
        }

        if (status === "uncompleted") {
            return tasks.filter((todo) => !todo.completed);
        }

        return tasks;
    }, [status, tasks]);

    return (
        <>
            <h2 style={{textAlign: 'center'}}>#{id}</h2>
            <Form onValue={(content)=>onCreate(content)}>
                <Filter onStatusChange={setStatus} status={status} />
                <button onClick={onDestroy} className="remove"><i className="fas fa-window-close"/></button>
            </Form>

            <TodoList
                onDoneToggle={(id) => dispatch(doneToggle(id))}
                onDelete={(id) => dispatch(taskRemove(id))}
                onEdit={(id, text) => dispatch(edit({ id, text }))}
                filteredTodos={filteredTodos}
            />
        </>
    )
}