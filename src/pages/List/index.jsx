// import React, { useState, useEffect } from 'react';

// import {
//     Layout,
//     // TopAppBar
// } from 'mdc-react'


// import { actions } from '../../store';
// import DataContext from '../../contexts/data'


// import TodoList from '../../components/TodoList/index';
// import TodoForm from '../../components/TodoForm';
// import TodoDetails from '../../components/TodoDetails';

// import './index.scss';

// export default function ListPage({ match }) {
//     const { state, actions } = useStore();
//     const [selectedTodo, setSelectedTodo] = useState(null);

//     useEffect(() => {
//         if (match.params.listId) {
//             actions.getListTodos(match.params.listId, dispatch);
//         } else {
//             actions.getTodos(dispatch);
//         }
//     }, [match.params.listId, dispatch]);


//     function handleSubmit(title) {
//         actions.createTodo({
//             title,
//             listId: list.id
//         });
//     }


//     function handleDelete(todoId) {
//         actions.deleteTodo(todoId, dispatch);
//     }

//     function handleUpdate(todoId, data) {
//         actions.updateTodo(todoId, data, dispatch);
//     }

//     function handleSelect(todo) {
//         setSelectedTodo(todo, dispatch);
//     }

//     const list = state.lists.find(list => list.id === match.params.listId);


//     return (
//         <Layout id="todo-list-page" className="page" row>
//             {/* <TopAppBar
//                 title={list.title}
//             /> */}

//             <Layout>
//                 <TodoList
//                     list={list}
//                     todos={state.todos}
//                     onSelect={handleSelect}
//                     onDelete={handleDelete}
//                     onUpdate={handleUpdate}
//                 />

//                 <TodoForm
//                     onSubmit={handleSubmit}
//                 />
//             </Layout>
//             {selectedTodo &&
//                 <TodoDetails
//                     todo={selectedTodo}
//                     onClose={() => setSelectedTodo(null)}
//                 />
//             }
//         </Layout>
//     );
// }









import React, { useState, useEffect } from 'react';
import {
    Icon,
    IconButton,
    Layout,
    SideSheet,
    Spinner,
    TopAppBar,
    Typography
} from 'mdc-react';

import useStore from '../../hooks/store';

import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoDetails from '../../components/TodoDetails';

import './index.scss';

export default function ListPage({ match }) {
    const { state, actions } = useStore();
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
        setSelectedTodo(null);
        
        if (match.params.listId) {
            actions.getListTodos(match.params.listId);
        } else {
            actions.getTodos();
        }
    }, [actions, match.params.listId]);

    function handleSubmit(title) {
        actions.createTodo({
            title,
            userId: state.user.uid,
            listId: list.id
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId);
    }

    function handleUpdate(todoId, data) {
        actions.updateTodo(todoId, data);
    }

    function handleSelect(todo) {
        setSelectedTodo(todo);
    }

    const list = state.lists.find(list => list.id === match.params.listId);

    if (!list || !state.todos) return <Spinner />;

    return (
        <Layout id="list-page" className="page">
            <TopAppBar
                title={list.title}
            />

            <Layout row>
                <SideSheet
                    open={selectedTodo}
                    dismissible
                    appContentSelector=".mdc-side-sheet-app-content"
                >
                    <Layout row justifyContent="between" alignItems="center">
                        <Typography noMargin>Детали задачи</Typography>

                        <IconButton onClick={() => setSelectedTodo(null)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Layout>

                    {selectedTodo &&
                        <TodoDetails
                            todo={selectedTodo}
                        />
                    }
                </SideSheet>

                <Layout column className="mdc-side-sheet-app-content">
                    <TodoList
                        list={list}
                        todos={state.todos}
                        onSelect={handleSelect}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />

                    <TodoForm
                        onSubmit={handleSubmit}
                    />
                </Layout>
            </Layout>
        </Layout>
    );
}