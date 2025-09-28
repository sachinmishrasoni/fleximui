import React, { useState, cloneElement, type ReactElement } from "react";
import { Menu, MenuItem, ListItemIcon, styled, Typography, Divider, alpha } from "@mui/material";

type PaletteColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

interface StyledMenuProps {
    // ownerState: { color: PaletteColor };
}

interface StyledMenuItemProps {
    ownerState: { color: PaletteColor };
}

interface MenuItemType {
    key: string;
    type?: "item" | "divider";
    icon?: React.ReactNode;
    label?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    color?: PaletteColor;
    children?: MenuItemType[];
}

interface DropDownProps {
    children: ReactElement<{ onClick?: (event: React.MouseEvent<HTMLElement>) => void }>;
    menuItems: MenuItemType[];
    width?: number;
    height?: number;
}

const StyledMenu = styled(Menu)<StyledMenuProps>(({ theme }) => {

    return {
        // marginTop: theme.spacing(1),
        "& .MuiPaper-root": {
            width: 180,
            minWidth: 180,
            maxHeight: 180,
            borderRadius: 8,
            marginTop: theme.spacing(1),
            padding: theme.spacing(0.8),
            color:
                theme.palette.mode === "light"
                    ? "rgb(55, 65, 81)"
                    : theme.palette.grey[300],
            border: `1px solid ${theme.palette.grey[200]}`,
            boxShadow:
                "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            "& .MuiMenu-list": {
                padding: "4px 0",
                display: "flex",
                flexDirection: "column",
                gap: '4px',
            },
            "& .MuiDivider-root": {
                margin: 0,
            },
            '& .MuiListItemIcon-root': {
                minWidth: 25,
            },
        },
    }
});

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>(({ theme, ownerState }) => {
    const paletteColor = theme.palette[ownerState.color] || theme.palette.primary;
    return {
        borderRadius: 8,
        padding: theme.spacing(1, 1.5),
        '&.Mui-selected': {
            backgroundColor: paletteColor.main,
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

const DropDown: React.FC<DropDownProps> = ({ children, menuItems }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Clone child and inject onClick */}
            {cloneElement(children, {
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                    // Run child's own onClick if it exists
                    children.props.onClick?.(e);
                    handleOpen(e);
                },
            })}

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock
            >
                {menuItems.map((item) => {

                    if (item.type === "divider") {
                        return <Divider key={item.key} />;
                    }

                    const itemColor = item.color ?? "primary";

                    return (
                        <StyledMenuItem
                            key={item.key}
                            disabled={item.disabled}
                            onClick={() => {
                                item.onClick?.();
                                handleClose();
                            }}
                            ownerState={{ color: itemColor }}
                            // selected={["1", "2"].includes(item.key)}
                        >
                            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                            {/* <ListItemText>{item.label}</ListItemText> */}
                            <Typography variant="body2" noWrap>{item.label}</Typography>
                        </StyledMenuItem>
                    )
                })}
            </StyledMenu>
        </>
    );
};

export default DropDown;
