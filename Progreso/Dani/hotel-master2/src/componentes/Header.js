import React from 'react'
import {AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, makeStyles, Toolbar, Typography} from "@material-ui/core"
import {useState, useEffect} from "react"
import logo from "../imagenes/logo.svg"
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import {Link} from "react-router-dom"

const Header = () => {

    const [tablet, setTablet] = useState(true)
    const [draweropen, setDrawerOpen] = useState(false)
    const classes = useStyle()

    useEffect(() => {
        const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
        responsiveness();
        window.addEventListener("resize", () => responsiveness())
    }, [])

    const displayTablet = () => {

        const handleDrawerOpen = () => {
            setDrawerOpen(true)
        }
        const handleDrawerClose = () => {
            setDrawerOpen(false)
        }

        const headersData = ["My account", "Previous bookings", "Log out"]
        const getDrawerChoices = () => {
            return headersData.map((data) => {
                return (
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }

        return (
        <Toolbar classesName = {classes.toolbar}>
            <IconButton {...{
                edge: "start", 
                color: "#ccc",
                "aria-label": "menu", 
                "aria-haspopup": "true",
                onClick: handleDrawerOpen, 
                }}>
                <MenuIcon fontSize = "large"/>  
            </IconButton>
            <Drawer {...{
                anchor: "left",
                open: draweropen,
                onClose: handleDrawerClose,
            }}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <Link to ="/">
            <img src = {logo} className= {classes.logo} alt = "logo"/>
            </Link>
            
            <div className = {classes.right} >
                <Typography>Sign In </Typography>
                <Avatar className = {classes.avatar} />
            </div> 
        </Toolbar>

    )
            }
    const displayDesktop = () => {
        return (
            <Toolbar className = {classes.Toolbar}>
            <Link to ="/">
            <img src = {logo} className= {classes.logo} alt = "logo"/>
            </Link>
            <div className = {classes.center}>
            <InputBase fullWidth placeholder = "Search Here ..." inputProps = {{className: classes.input}}/>
            <SearchIcon />
            </div>
            <div className = {classes.right} >
                <Typography>Sign In </Typography>
                <Avatar className = {classes.avatar} />
            </div> 
            </Toolbar>
        )
     }
    return (
        <AppBar className = {classes.root}>
            {
            tablet ? displayTablet() : displayDesktop()
            }
        </AppBar>
    )
}

const useStyle = makeStyles((theme) => ({
    root : {
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 99,
        width: "100vw",
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo : {
        height: "100px",
        margin: theme.spacing(0,0,0,0),
        objectFit: "contain",
    },
    center : {
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        minWidth: "300px",
        borderRadius: "999px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        marginLeft: theme.spacing(40),
    },

    input : {
        fontSize: "1.2rem",
        padding: theme.spacing(1,5,1,5)

    },
    right : {
        color: "#333",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(45)
    },
    avatar : {
        marginLeft: theme.spacing(2),
    }
}))

export default Header