import React, { useState, useRef, type ReactNode } from "react";
import {
    Box,
    Paper,
    Popper,
    ClickAwayListener,
    List,
    ListItemButton,
    ListItemIcon,
    styled,
    alpha,
    Typography,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

type PaletteColor =
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";

interface StyledMenuItemProps {
    ownerState: { color: PaletteColor };
}

export interface MenuItem {
    key: string;
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    color?: PaletteColor;
    children?: MenuItem[];
}

interface NestedDropdownProps {
    menuItems: MenuItem[];
    children: ReactNode; // element that will trigger the dropdown
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    // marginTop: theme.spacing(1),
    // marginLeft: theme.spacing(2),
    padding: theme.spacing(0.8),
    borderRadius: 10,
    border: `1px solid ${theme.palette.grey[200]}`,
    color:
        theme.palette.mode === "light"
            ? "rgb(55, 65, 81)"
            : theme.palette.grey[400],
    boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
}));

const StyledList = styled(List)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: '4px',
}));

const StyledListButton = styled(ListItemButton)<StyledMenuItemProps>(({ theme, ownerState }) => {
    const paletteColor = theme.palette[ownerState.color] || theme.palette.primary;
    return {
        borderRadius: 8,
        padding: theme.spacing(1, 1.5),
        '& .MuiListItemIcon-root': {
            minWidth: 25,
            color: paletteColor.main
        },
        '& .MuiListItemText-root': {
            margin: 0,
            fontSize: 14
        },
        '&.Mui-selected': {
            backgroundColor: `${paletteColor.main} !important`,
            color: theme.palette.primary.contrastText,
            '& .MuiListItemIcon-root': {
                color: theme.palette.primary.contrastText,
            }
        },
        '&:hover:not(.Mui-selected)': {
            backgroundColor: alpha(paletteColor.main, 0.2),
            color: paletteColor.main,
            '& .MuiListItemIcon-root': {
                color: paletteColor.main,
            }
        },
    }
});

const NestedDropdown: React.FC<NestedDropdownProps> = ({ menuItems, children }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    // Store refs for each menu item
    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpenKeys([]);
    };

    const handleCloseAll = () => {
        setAnchorEl(null);
        setOpenKeys([]);
    };

    const renderMenu = (items: MenuItem[], parentKeys: string[] = []) => (
        <StyledList sx={{ p: 0, minWidth: 180 }}>
            {items.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = openKeys.includes(item.key);

                const itemColor = item.color ?? "primary";

                const handleMouseEnter = () => {
                    if (hasChildren) {
                        setOpenKeys([...parentKeys, item.key]);
                    } else {
                        setOpenKeys(parentKeys);
                    }
                };

                const handleMouseLeave = () => {
                    setOpenKeys(parentKeys);
                };

                return (
                    <Box
                        key={item.key}
                        sx={{ position: "relative" }}
                        // ref={(el: HTMLDivElement | null) => (itemRefs.current[item.key] = el)}
                        ref={(el: HTMLDivElement | null) => {
                            itemRefs.current[item.key] = el;
                        }}
                    >
                        <StyledListButton
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => {
                                if (!hasChildren) {
                                    item.onClick?.();
                                    handleCloseAll();
                                }
                            }}
                            ownerState={{ color: itemColor }}
                        // selected={true}
                        >
                            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                            {/* <ListItemText primary={item.label} /> */}
                            <Box flexGrow={1}><Typography variant="body1">{item.label}</Typography></Box>
                            {hasChildren && <IoIosArrowForward fontSize="small" />}
                        </StyledListButton>

                        {hasChildren && isOpen && itemRefs.current[item.key] && (
                            <Popper
                                open
                                anchorEl={itemRefs.current[item.key]}
                                placement="right-start"
                                style={{ zIndex: 1300 }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <StyledPaper elevation={3} sx={{ ml: 2 }}>
                                    {renderMenu(item.children!, [...parentKeys, item.key])}
                                </StyledPaper>
                            </Popper>
                        )}
                    </Box>
                );
            })}
        </StyledList>
    );

    return (
        <Box display="inline-block">
            <Box onClick={handleOpen}>{children}</Box>

            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="bottom-start"
            >
                <ClickAwayListener onClickAway={handleCloseAll}>
                    <StyledPaper elevation={3}>
                        {renderMenu(menuItems)}
                    </StyledPaper>
                </ClickAwayListener>
            </Popper>
        </Box>
    );
};

export default NestedDropdown;
