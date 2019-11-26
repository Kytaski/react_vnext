import { bool, func } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import People from '@material-ui/icons/People'
import React, { useState } from 'react'
import ViewCompact from '@material-ui/icons/ViewCompact'

import FileDocumentEdit from 'assets/icons/FileDocumentEdit.svg'
import FileDownload from 'assets/icons/FileDownload.svg'
import { Link } from 'react-router-dom'
// import {useStateValue} from 'state'

// import {Link} from 'gatsby'

const useStyles = makeStyles({
    list: {
        width: 250,
        paddingTop: '64px',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
                color: '#3069ff',
                '& svg': {
                    fill: '#3069ff',
                },
            },
        },
    },
    icons: {
        transform: 'scale(0.9)',
        marginRight: '4px',
    },
    nested: {
        paddingLeft: '20px',
    },
})

const Menu = ({ toggleMenu, open }) => {
    const classes = useStyles()
    //   const [{session, status}] = useStateValue()

    //   const {user} = session

    const [openDataImport, setOpenDataImport] = useState(true)

    const handleOpenDataImport = () => {
        setOpenDataImport(!openDataImport)
    }

    return (
        <Drawer open={open} onClose={toggleMenu(true)}>
            <div
                className={classes.list}
                role="presentation"
                onKeyDown={toggleMenu(false)}
            >
                <List>
                    <Link to="/Home">
                        <ListItem button key="accueil">
                            <ViewCompact className={classes.icons} />
                            <ListItemText primary="Accueil" />
                        </ListItem>
                    </Link>
                    <Collapse in={openDataImport} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/importer-fichier">
                                <ListItem button key="importer-fichier">
                                    <ListItemText
                                        primary="Importer un fichier"
                                        className={classes.nested}
                                    />
                                </ListItem>
                            </Link>
                            <Link to="/liste-declarations">
                                <ListItem button key="liste-declarations">
                                    <ListItemText
                                        primary="Liste des déclarations"
                                        className={classes.nested}
                                    />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                </List>
            </div>
        </Drawer>
    )
}

Menu.defaultProps = {
    open: false,
    toggleMenu: Function.prototype,
}
Menu.propTypes = {
    open: bool,
    toggleMenu: func,
}

export default Menu
