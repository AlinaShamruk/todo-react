import React from 'react';
import {
    MenuItem,
    TopAppBar
} from 'mdc-react';

export default function PageHeader({ title, onSortChange, sortBy }) {
    return (
        <>
            <TopAppBar
                title={title}
            />
            {title === 'Задачи' || title === 'Важно' || title === 'Завершенные' ?
                <div></div> :
                <div>
                    <MenuItem onClick={() => onSortChange('title')} selected={sortBy === 'title'}>По названию</MenuItem>
                    <MenuItem onClick={() => onSortChange('completed')} selected={sortBy === 'completed'}>По завершенным</MenuItem>
                    <MenuItem onClick={() => onSortChange('important')} selected={sortBy === 'important'}>По важным</MenuItem>
                </div>
            }
        </>
    );
}