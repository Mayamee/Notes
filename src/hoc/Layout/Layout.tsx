import { Theme } from "@mui/material/styles";
import { format } from "date-fns";
import { FunctionComponent } from "react";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import IMenuItem from "../../models/IMenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useAppBarHeight from "../../hooks/useAppBarHeight";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const appBarHeight = useAppBarHeight();

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
        <AppBar
          elevation={0}
          sx={{
            width: theme.layout.appbar.width,
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                flexGrow: 1,
              }}
            >
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            <Typography sx={{ marginLeft: 1 }}>Mew</Typography>
            <Avatar
              src="/images/avatar.png"
              sx={{
                marginLeft: 1.5,
              }}
            />
          </Toolbar>
        </AppBar>
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
          <Box
            className="appBarSpacer"
            component="div"
            sx={{
              height: appBarHeight,
            }}
          />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
