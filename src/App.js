import "./App.css";
import OneTodo from './components/OneTodo';
import {useDispatch, useSelector} from 'react-redux';
import {add as addOneTodo, remove} from './store/oneTodo'
import {add as addTask, doneToggle, edit, remove as taskRemove} from './store/todos';


function App() {

    const oneTodos = useSelector(state => state.oneTodo.list)
    const allTasks = useSelector((state) => state.todos.items);

    const dispatch = useDispatch()

    return (
        <div className="App">
            <header>
                <h1>Best ToDo</h1>
                <button onClick={() => dispatch(addOneTodo())} className="remove">
                    <i className="fas fa-plus-square"/>
                </button>
            </header>

            {oneTodos.map(todo => {
                const tasks = allTasks.filter(task => task.list === todo.id)

                return (<OneTodo
                    key={todo.id}
                    tasks={tasks}
                    id={todo.id}
                    onDestroy={() => dispatch(remove(todo.id))}
                    onCreate={(content) => dispatch(addTask({content, list: todo.id}))}
                />)}
            )}

        </div>
    );
}

export default App;
