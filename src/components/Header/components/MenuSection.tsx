import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'

import Menu from './Menu'
// import styles from '../styles'

const MenuSection = () => {
  const [open, setOpen] = React.useState(false);
  const toggleMenu = openProps => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(!openProps)
  }

  return (
    <>
      <IconButton aria-label="Clear" onClick={toggleMenu(open)}>
        <MenuIcon />
      </IconButton>
      <Menu toggleMenu={toggleMenu} open={open} />
    </>
  )
}

export default MenuSection
