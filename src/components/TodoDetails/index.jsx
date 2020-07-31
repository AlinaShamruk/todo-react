// import React from 'react';
// import {
//     Checkbox,
//     Icon,
//     IconButton,
//     Layout,
//     List, ListItem, ListItemText,
//     TextField,
//     Typography
// } from 'mdc-react';

// import './index.scss';

// export default function TodoDetails({ todo, onClose }) {
//     return (
//         <aside className="todo-details">
//             <Layout row justifyContent="between">
//                 <Typography>Детали задачи</Typography>
//                 <IconButton onClick={onClose}>
//                     <Icon>close</Icon>
//                 </IconButton>
//             </Layout>
//             <Layout>
//                 <Layout row>
//                     <Checkbox
//                         checked={todo.completed}
//                         onChange={() => { }}
//                     />
//                     <TextField
//                         value={todo.title}
//                         onChange={() => { }}
//                         fullWidth
//                     />
//                 </Layout>

//                 {todo.steps && todo.steps.length > 0 && <List>
//                     {todo.steps.map((step, index) =>
//                         <ListItem key={index}>
//                             <listItemGraphic>
//                                 <Checkbox
//                                     checked={step.completed}
//                                 />
//                             </listItemGraphic>
//                             <ListItemText>{step}</ListItemText>
//                         </ListItem>
//                     )}
//                 </List>
//                 }
//             </Layout>

//         </aside>
//     );
// }





import React from 'react';
import {
    Checkbox,
    Layout,
    List, ListItem, ListItemText, ListItemGraphic,
    TextField,
    Typography
} from 'mdc-react';

import './index.scss';

export default function TodoDetails({ todo }) {
    return (
        <aside className="todo-details">
            <Layout row>
                <TextField
                    label="Название"
                    value={todo.title}
                    onChange={() => { }}
                />
            </Layout>

            <section className="todo-steps">
                <Typography variant="subtitle2" noMargin>Шаги</Typography>

                {todo.steps && todo.steps.length > 0 &&
                    <List className="todo-step-list" dense>
                        {todo.steps.map((step, index) =>
                            <ListItem key={index}>
                                <ListItemGraphic>
                                    <Checkbox
                                        checked={step.completed}
                                    />
                                </ListItemGraphic>

                                <ListItemText>{step.title}</ListItemText>
                            </ListItem>
                        )}
                    </List>
                }
            </section>
        </aside>
    );
}