import { Drawer, ListItemButton, ListSubheader, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { StyledList } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 270;

interface SidebarProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

type MenuItem = {
    label: string;
    path?: string;
    type?: 'group';
}
const navItems: MenuItem[] = [
    { type: 'group', label: 'Components' },
    { label: 'All Components', path: '/components' },
    { label: 'Button', path: '/components/button' },
    { label: 'DropDown', path: '/components/dropdown' },
    { label: 'Menu', path: '/components/menu' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const handleClick = (path: MenuItem) => {
        if (path.path) {
            navigate(path.path);
            toggleDrawer();
        }
    }

    return (
        <Drawer
            open={isMobile ? isOpen : true}
            onClose={isMobile ? toggleDrawer : undefined}
            variant={isMobile ? 'temporary' : 'permanent'}
            anchor="left"
            ModalProps={{
                keepMounted: true, // Better mobile performance
            }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    // p: 1,
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    // backgroundColor: 'orange',
                    ...(isMobile
                        ? {
                            // Mobile: full screen overlay
                            top: 0,
                            height: '100vh',
                        }
                        : {
                            // Desktop: sit below AppBar
                            top: 61,
                            height: 'calc(100% - 60px - 1px)',
                        }),
                },
            }}
        >
            <StyledList>
                {navItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.type === 'group' && <ListSubheader>{item.label}</ListSubheader>}
                        {item.type !== 'group' && (
                            <ListItemButton
                                selected={location.pathname === item.path}
                                onClick={() => handleClick(item)}
                            >
                                <span>{item.label}</span>
                            </ListItemButton>
                        )}
                    </React.Fragment>
                ))}
            </StyledList>
        </Drawer>
    );
};

export default Sidebar;
