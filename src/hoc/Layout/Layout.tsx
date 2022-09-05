import { Theme } from "@mui/material/styles";
import { format } from "date-fns";
import { FunctionComponent, useState } from "react";
import {
  // AppBar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import {
  AddCircleOutline,
  SubjectOutlined,
  Menu,
  ChevronLeft,
} from "@mui/icons-material";
import IMenuItem from "../../models/IMenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useAppBarHeight from "../../hooks/useAppBarHeight";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${theme.layout.drawer.width}px)`,
    marginLeft: `${theme.layout.drawer.width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const appBarHeight = useAppBarHeight();
  const [open, setOpen] = useState(false);
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

  const handleClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
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
        <AppBar elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                flexGrow: 1,
                "@media (max-width:600px)": {
                  fontSize: "1.25rem",
                },
                "@media (max-width:350px)": {
                  fontSize: "1.1rem",
                },
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
        <SwipeableDrawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          anchor="left"
          sx={{
            width: theme.layout.drawer.width,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: theme.layout.drawer.width },
          }}
        >
          <DrawerHeader>
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: theme.layout.drawer.heading.textAlign,
              }}
              variant="h5"
              component="h3"
            >
              Mew Note
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </DrawerHeader>

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
        </SwipeableDrawer>

        <Box
          component="main"
          sx={{
            background: theme.pages.background,
            flexGrow: 1,
            height: "100vh",
          }}
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
