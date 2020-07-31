// import React, { useEffect, useMemo, useReducer } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';

// import { reducer, initialState, actions } from './store';
// import DataContext from './contexts/data'

// import AppDrawer from './components/AppDrawer';
// import AppContent from './components/AppContent';
// import TodoList from './pages/List';
// import LoginPage from './pages/Auth'

// import './App.scss'



// export default function App() {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const contextValue = useMemo(() => {
//         return { state, dispatch };
//     }, [state, dispatch]);

//     useEffect(() => {
//         actions.getLists(dispatch);
//         actions.setAuth(dispatch);
//     }, []);

//     if (!state.user) return <LoginPage />;

//     return (
//         <DataContext.Provider value={contextValue}>


//             <div className="app" >

//                 <AppDrawer
//                     lists={state.lists}
//                 />
//                 <AppContent>
//                     <Switch>
//                         <Route exact path="/" component={TodoList} />
//                         <Route exact path="/login" component={LoginPage} />
//                         <Route exact path="/important" render={TodoList} />
//                         <Route exact path="/planned" component={TodoList} />
//                         <Route path="/:listId/:todoId?" component={TodoList} />
//                     </Switch>
//                 </AppContent>
//             </div>
//         </DataContext.Provider>
//     );
// }

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import useStore from './hooks/store';

import AppDrawer from './components/AppDrawer';
import AppContent from './components/AppContent';
import ListPage from './pages/List';
import AuthPage from './pages/Auth';

import './App.scss';

export default function App() {
    const { state, actions } = useStore();

    useEffect(() => {
        actions.initAuth();
        actions.getLists();
    }, []);

    if (!state.user) {
        return (
            <Route component={AuthPage} />
        );
    } else {
        return (
            <div className="app">
                <AppDrawer
                    lists={state.lists}
                />

                <AppContent>
                    <Switch>
                        <Route exact path="/" component={ListPage} />
                        <Route exact path="/important" component={ListPage} />
                        <Route exact path="/planned" component={ListPage} />
                        <Route path="/:listId/:todoId?" component={ListPage} />
                    </Switch>
                </AppContent>
            </div>
        );
    }
}