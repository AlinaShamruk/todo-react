import React from 'react';
import {
    MenuItem,
    TopAppBar
} from 'mdc-react';

export default function PageHeader({ title, onSortChange }) {
    return (
        <>
            <TopAppBar
                title={title}
            />
            {title === 'Задачи' || title === 'Важно' || title === 'Завершенные' ?
                <div></div> :
                <div>
                    <MenuItem onClick={() => onSortChange('title')}>По названию</MenuItem>
                    <MenuItem onClick={() => onSortChange('completed')}>По завершенным</MenuItem>
                    <MenuItem onClick={() => onSortChange('important')}>По важным</MenuItem>
                </div>
            }
        </>
    );
}