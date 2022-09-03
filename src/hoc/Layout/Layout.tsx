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

interface LayoutProps {
  children?: React.ReactNode;
}

const drawerWidth = 240;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
        height: "100vh",
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
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          <Typography variant="h5" component="h3">
            Mew Note
          </Typography>

          {/* list links */}

          <List>
            {menuItems.map((item, index) => (
              <ListItemButton
                sx={{
                  background:
                    item.path === location.pathname ? "#f4f4f4" : null,
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
        <Box component="main" sx={{ background: "#f9f9f9", flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
