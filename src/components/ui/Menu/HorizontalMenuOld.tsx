import React, { useEffect, useRef, useState } from "react";
import { Box, Button, List, ListItem, ListItemButton, Popover } from "@mui/material";

const menuItems = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Contact",
  "Blog",
  "Careers",
  "FAQ",
  "Terms",
  "Privacy",
  "Sitemap",
  "Settings",
  "Logout",
  "Login",
  "Sign Up",
  "Pricing",
  "Features",
];

const HorizontalMenu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);

  const [visibleCount, setVisibleCount] = useState(menuItems.length);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const recompute = () => {
    if (!containerRef.current || !measureRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    const itemEls = Array.from(
      measureRef.current.querySelectorAll<HTMLElement>(".menu-measure-item")
    );
    const widths = itemEls.map((el) =>
      Math.ceil(el.getBoundingClientRect().width)
    );

    const moreWidth = moreRef.current
      ? Math.ceil(moreRef.current.getBoundingClientRect().width)
      : 0;

    let used = 0;
    let visible = widths.length;

    for (let i = 0; i < widths.length; i++) {
      used += widths[i];

      const need = used + (i < widths.length - 1 ? moreWidth : 0);

      if (need > containerWidth + 4) {
        visible = i;
        break;
      }
    }

    setVisibleCount(visible);
  };

  useEffect(() => {
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{ display: "flex", alignItems: "center", overflow: "hidden", flex: 1 }}
    >
      {/* Visible menu items */}
      {menuItems.slice(0, visibleCount).map((item) => (
        <Button key={item} color="inherit">
          {item}
        </Button>
      ))}

      {/* More button (only if hidden items exist) */}
      {visibleCount < menuItems.length && (
        <>
          <Button
            ref={moreRef}
            color="inherit"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            More
          </Button>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <List sx={{ minWidth: 180 }}>
              {menuItems.slice(visibleCount).map((item) => (
                <ListItem disablePadding key={item}>
                  <ListItemButton onClick={() => setAnchorEl(null)}>
                    {item}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Popover>
        </>
      )}

      {/* Hidden measure box (off-screen) */}
      <Box
        ref={measureRef}
        sx={{
          position: "absolute",
          visibility: "hidden",
          height: 0,
          overflow: "hidden",
        }}
      >
        {menuItems.map((item) => (
          <Button key={item} className="menu-measure-item">
            {item}
          </Button>
        ))}
        <Button className="menu-measure-more">More</Button>
      </Box>
    </Box>
  );
};

export default HorizontalMenu;
