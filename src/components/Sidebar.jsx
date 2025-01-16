import React from "react";
import PropTypes from "prop-types";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Collapse,
  Popover,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  PeopleAlt as PeopleAltIcon,
  GridView as GridViewIcon,
  VerifiedUser as VerifiedUserIcon,
  Compare as CompareIcon,
  Logout as LogoutIcon,
  ExpandLess,
  ExpandMore,
  Close as CloseIcon,
} from "@mui/icons-material";
import fat from "../assets/fat.png";
import surgeryroom from "../assets/surgery-room.png";
import homebutton from "../assets/home-button.png";
import orthopedics from "../assets/orthopedics.png";
import eyeexam from "../assets/eye-exam.png";
import phone from "../assets/phone.png";
import { FaBars } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import logo from "../assets/image2.jpeg";
import "../App.css";

const NAVIGATION = [

  {
    title: "Home",
    titleAr: "الصفحة الرئيسية",
    icon: <img src={homebutton} className="w-[25px] h-[25px]" />,
    path: "/",
  },
  {
    title: "Orthopedic Surgeries Center",
    titleAr: "مركز جراحات العظام ",
    icon: <img src={orthopedics} className="w-[25px] h-[25px]" />,
    path: "/orthopedicsurgery",
  },
  {
    title: "Male Fertility Surgeries Center",
    titleAr: "مركز جراحات المسالك والذكورة",
    icon: <img src={surgeryroom} className="w-[25px] h-[25px]" />,
    path: "/malefertility",
  },
  {
    title: "Obesity Surgeries Center",
    titleAr: "مركز جراحات السمنة",
    icon: <img src={fat} className="w-[25px] h-[25px]" />,
    path: "/obesitysurgery",
  },
  {
    title: "Ophthalmology and Eye Surgery Center",
    titleAr: "مركز جراحات العيون",
    icon: <img src={eyeexam} className="w-[25px] h-[25px]" />,
    path: "/eyesurgery",
  },
  {
    title: "Contact Us",
    titleAr: "تواصل معنا",
    icon: <img src={phone} className="w-[25px] h-[25px]" />,
    path: "/contact",
  },
 
];

function DashboardLayoutBasic({ language, setLanguage, ...props }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [adminOpen, setAdminOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const [activeSubMenu, setActiveSubMenu] = React.useState(null);

  const toggleSubMenu = (submenuIndex) => {
    setActiveSubMenu((prevIndex) =>
      prevIndex === submenuIndex ? null : submenuIndex
    );
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "EN" ? "AR" : "EN";
      return newLanguage;
    });
    console.log(language);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    setMobileOpen(false);
    setAdminOpen(false);
  }, [location]);


  const open = Boolean(anchorEl);
  const id = open ? "user-popover" : undefined;

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        {/* You can add a logo here if needed */}
      </Box>
      <Divider />
      <List sx={{ paddingTop: "45px", width: "320px" }}>
        {NAVIGATION.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={item.children ? () => toggleSubMenu(index) : undefined}
              component={item.children ? undefined : Link}
              to={item.path}
              sx={{
                padding: "15px",
                "&:hover": {
                  backgroundColor: "#007bff", // Light blue on hover
                  transition: " all 0.4s ease-in-out",
                },
              }}
              className="hvr-wobble-horizontal"
            >
              <ListItemIcon
                sx={{
                  minWidth: "40px",
                  position: "absolute",
                  right: language == "AR" ? "20px" : "auto",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={language == "EN" ? item.title : item.titleAr}
                sx={{
                  fontWeight: "500",
                  textAlign: language == "AR" ? "right" : "left",
                  marginLeft:
                    !item.children && language === "EN" ? "40px" : "40px",
                  marginRight:
                    !item.children && language === "AR" ? "40px" : "40px",
                }}
              />
              {item.children &&
                (activeSubMenu === index ? (
                  <ExpandLess
                    sx={{
                      position: "absolute",
                      right: language == "AR" ? "288px" : "10px",
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      position: "absolute",
                      right: language == "AR" ? "288px" : "10px",
                    }}
                  />
                ))}
            </ListItem>
            {item.children && activeSubMenu === index && (
              <Collapse
                in={activeSubMenu === index}
                timeout="auto"
                unmountOnExit
                sx={{
                  height: activeSubMenu === index ? "auto" : 0, // Adjust height on open/close
                  overflow: "hidden", // Hide content when collapsed
                  transition: "height 0.3s ease", // Smooth transition for height change
                }}
              >
                {item.children.map((subItem, subIndex) => (
                  <ListItem
                    button
                    key={subIndex}
                    component={Link}
                    to={subItem.path}
                    sx={{
                      borderTop: "1px solid #ddd",
                      "&:hover": {
                        backgroundColor: "#007bff",
                        transition: "background-color 0.3s",
                      },
                    }}
                    className="hvr-wobble-horizontal"
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "40px",
                        position: "absolute",
                        left: language === "AR" ? 245 : 35,
                      }}
                    >
                      {subItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        language === "EN" ? subItem.title : subItem.titleAr
                      }
                      sx={{
                        textAlign: language === "AR" ? "right" : "left",
                        fontWeight: "400",
                        marginRight: language === "AR" ? "60px" : null,
                        marginLeft: language === "EN" ? "60px" : null,
                      }}
                    />
                  </ListItem>
                ))}
              </Collapse>
            )}

            <Divider />
          </React.Fragment>
        ))}

      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          backgroundColor: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
<Toolbar
  sx={{
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  }}
>
  {/* Translate Button on the left */}
  <IconButton
    onClick={toggleLanguage}
    sx={{ position: "absolute", left: language === "EN" ? 45 : 9 }}
    title={language == "EN" ? "Translate to arabic" : "ترجم إلى الإنجليزية"}
  >
    <MdGTranslate style={{ fontSize: "30px", color: "#1488bc" }} />
  </IconButton>

  <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerToggle}
    edge={language === "AR" ? "end" : "start"}
    sx={{
      position: language === "AR" ? "absolute" : "relative",
      right: language === "AR" ? 20 : "auto",
      left: language === "EN" ? -3 : "auto",
      zIndex: 2,
      transition: "transform 0.3s ease", // Smooth transition for rotation
      "&:hover": {
        transform: "rotate(180deg)", // Rotate icon on hover
      },
    }}
  >
    {mobileOpen ? (
      <CloseIcon className="text-[#222]" style={{ fontSize: "24px" }} />
    ) : (
      <FaBars className="text-[#222]" style={{ fontSize: "24px" }} />
    )}
  </IconButton>

  <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
    <img
      src={logo}
      alt="Logo"
      style={{ maxHeight: "55px", marginLeft: "auto" , marginTop: "10px", marginBottom: "10px", marginRight: language === "EN" ? "-20px" : "20px", }} // Align logo to the right
    />
  </Box>
</Toolbar>


      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        anchor={language === "EN" ? "left" : "right"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#f5f5f5" } }}
      >
        {drawer}
      </Drawer>

      {/* Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          padding: "16px",
          marginTop: "64px", // Adjust for AppBar
        }}
      >
        <Outlet /> {/* This is where the page content will be rendered */}
      </Box>
    </Box>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
