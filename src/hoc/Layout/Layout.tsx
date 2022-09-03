import { Theme } from "@mui/material/styles";
import { FunctionComponent } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import IMenuItem from "../../models/IMenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme() as Theme;

  const menuItems: IMenuItem[] = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];

  const handleClick = (path: string) => navigate(path);

  return (
    <Box
      component="div"
      className="wrapper"
      sx={{
        height: theme.layout.wrapperHeight,
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
        className="wrapper-container"
      >
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: theme.layout.drawer.width,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: theme.layout.drawer.width },
          }}
        >
          <Typography
            sx={{
              padding: theme.layout.drawer.heading.padding,
              textAlign: theme.layout.drawer.heading.textAlign,
            }}
            variant="h5"
            component="h3"
          >
            Mew Note
          </Typography>

          {/* list links */}

          <List>
            {menuItems.map((item, index) => (
              <ListItemButton
                sx={{
                  background:
                    item.path === location.pathname
                      ? theme.layout.drawer.activeButtonColor
                      : null,
                }}
                key={`${item.text}-${index}`}
                onClick={handleClick.bind(null, item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ background: theme.pages.background, flexGrow: 1 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
