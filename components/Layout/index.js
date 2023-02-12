import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import menu from "./menu";
import MyListItem from "@/components/Layout/ListItem";
import Link from "next/link";
import {useRouter} from "next/router";

const drawerWidth = 240;


export default function Layout({children}) {
    const router=useRouter();



    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Moodle-logo.svg/2560px-Moodle-logo.svg.png"} alt={"Logo"} style={{maxWidth:"100%"}}/>
                </Toolbar>
                <Divider />
                <List sx={{marginTop:3}}>
                    {menu.map((item, index) => (
                        <MyListItem key={item.title} className={(router.pathname.startsWith(item.path) && item.path!=="/") ||
                        router.pathname===item.path
                            ?"active":""} disablePadding onClick={()=>{router.push(item.path)}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </MyListItem>
                    ))}
                </List>
                
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <Link href={"/"} legacyBehavior>*/}
                {/*            <a>Dashboard</a>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link href={"/overview"} legacyBehavior>*/}
                {/*            <a>Overview</a>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );

}