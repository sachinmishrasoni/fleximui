import React, { useLayoutEffect, useRef, useState } from "react";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

type MenuItemType = { key: string; label: string; icon: React.ReactNode };

const menuItems: MenuItemType[] = [
    { key: "1", label: "Home", icon: <FaHome /> },
    { key: "2", label: "About", icon: <FaHome /> },
    { key: "3", label: "Services", icon: <FaHome /> },
    { key: "4", label: "Contact", icon: <FaHome /> },
    { key: "5", label: "Blog", icon: <FaHome /> },
    { key: "6", label: "Careers", icon: <FaHome /> },
    { key: "7", label: "Help", icon: <FaHome /> },
    { key: "8", label: "Privacy", icon: <FaHome /> },
    { key: "9", label: "Terms", icon: <FaHome /> },
];

const HorizontalMenu: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const measureRef = useRef<HTMLDivElement | null>(null);

    const [visibleCount, setVisibleCount] = useState(menuItems.length);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleMoreOpen = (e: React.MouseEvent<HTMLDivElement>) =>
        setAnchorEl(e.currentTarget as HTMLElement);
    const handleMoreClose = () => setAnchorEl(null);

    const recompute = () => {
        if (!containerRef.current || !measureRef.current) return;

        const containerWidth = containerRef.current.clientWidth;

        const itemEls = Array.from(
            measureRef.current.querySelectorAll<HTMLElement>(".menu-measure-item")
        );
        const moreEl = measureRef.current.querySelector<HTMLElement>(
            ".menu-measure-more"
        );

        const widths = itemEls.map((el) =>
            Math.ceil(el.getBoundingClientRect().width)
        );
        const moreWidth = moreEl
            ? Math.ceil(moreEl.getBoundingClientRect().width)
            : 0;

        let used = 0;
        let visible = widths.length;

        for (let i = 0; i < widths.length; i++) {
            used += widths[i];
            // Add buffer so items don’t overflow unexpectedly
            const need = used + (i < widths.length - 1 ? moreWidth : 0) + 8;

            if (need > containerWidth) {
                visible = i;
                break;
            }
        }

        setVisibleCount(visible);
    };

    useLayoutEffect(() => {
        recompute();
        const ro = new ResizeObserver(() => {
            window.requestAnimationFrame(recompute);
        });
        if (containerRef.current) ro.observe(containerRef.current);
        window.addEventListener("resize", recompute);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", recompute);
        };
    }, []);

    const visible = menuItems.slice(0, visibleCount);
    const hidden = menuItems.slice(visibleCount);

    return (
        <>
            <Box ref={containerRef} sx={{
                // width: "100%" 
                flex: 1,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
            }}>
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        p: 0,
                        m: 0,
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    {visible.map((item) => (
                        <ListItem
                            key={item.key}
                            disablePadding
                            sx={{ width: "auto", whiteSpace: "nowrap" }}
                        >
                            <ListItemButton sx={{ px: 2 }}>
                                {item.icon}
                                <ListItemText
                                    primary={item.label}
                                    sx={{ ml: 1 }}
                                    primaryTypographyProps={{ noWrap: true }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    {hidden.length > 0 && (
                        <ListItem disablePadding sx={{ width: "auto" }}>
                            <ListItemButton onClick={handleMoreOpen} sx={{ px: 2 }}>
                                <ListItemText
                                    primary="More"
                                    primaryTypographyProps={{ noWrap: true }}
                                />
                                <IoIosArrowDown />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Box>

            {/* More dropdown */}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMoreClose}>
                {hidden.map((item) => (
                    <MenuItem key={item.key} onClick={handleMoreClose}>
                        {item.icon}
                        <span style={{ marginLeft: 8 }}>{item.label}</span>
                    </MenuItem>
                ))}
            </Menu>

            {/* Hidden measurement box */}
            <div
                ref={measureRef}
                style={{
                    position: "absolute",
                    top: -9999,
                    left: -9999,
                    visibility: "hidden",
                }}
            >
                {menuItems.map((item) => (
                    <div
                        key={item.key}
                        className="menu-measure-item"
                        style={{ display: "inline-block" }}
                    >
                        <ListItem sx={{ width: "auto", whiteSpace: "nowrap" }}>
                            <ListItemButton sx={{ px: 2 }}>
                                {item.icon}
                                <ListItemText
                                    primary={item.label}
                                    sx={{ ml: 1 }}
                                    primaryTypographyProps={{ noWrap: true }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </div>
                ))}
                <div className="menu-measure-more" style={{ display: "inline-block" }}>
                    <ListItem sx={{ width: "auto", whiteSpace: "nowrap" }}>
                        <ListItemButton sx={{ px: 2 }}>
                            <ListItemText primary="More" primaryTypographyProps={{ noWrap: true }} />
                            <IoIosArrowDown />
                        </ListItemButton>
                    </ListItem>
                </div>
            </div>
        </>
    );
};

export default HorizontalMenu;
