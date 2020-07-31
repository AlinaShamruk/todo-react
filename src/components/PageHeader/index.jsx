import React, { useState } from 'react';
import {
    Icon,
    IconButton,
    Menu, MenuItem, MenuSurface,
    TopAppBar
} from 'mdc-react';

export default function PageHeader({ title, onSortChange, sortBy }) {
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = event => {
        // setSelectedSection(section);
        setMenuOpen(true);
        setMenuAnchor(event.target);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setMenuAnchor(null);
    };

    return (
        <>
            <TopAppBar
                title={title}
                actionItems={[
                    <IconButton onClick={openMenu}>
                        <Icon>sort</Icon>
                    </IconButton>
                ]}
            />
            <MenuSurface
                open={isMenuOpen}
                anchor={menuAnchor}
                onClose={closeMenu}
                right
            >
                <Menu>
                    <MenuItem onClick={() => onSortChange('title')} selected={sortBy === 'title'}>По названию</MenuItem>
                    <MenuItem onClick={() => onSortChange('date')} selected={sortBy === 'date'}>По дате</MenuItem>
                    <MenuItem onClick={() => onSortChange('completed')} selected={sortBy === 'completed'}>По завершенным</MenuItem>
                    <MenuItem onClick={() => onSortChange('important')} selected={sortBy === 'important'}>По важным</MenuItem>

                </Menu>
            </MenuSurface>




        </>
    );
}