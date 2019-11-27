import React from 'react'
import MenuSection from './components/MenuSection'
import {
    createStyles,
    makeStyles,
    Theme,
    createMuiTheme,
} from '@material-ui/core/styles'
import { string } from 'prop-types'
import { Typography } from '@material-ui/core'
import LogoSvg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import styles from './styles'
import { grayDark, white } from '../../theme/colors'
import { Z_FIXED } from 'zlib'
// import { classes } from 'istanbul-lib-coverage'

// import {LinkDefault, Paragraph} from 'components-ui/Font'

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//         menuButton: {
//             marginRight: theme.spacing(2),
//         },
//         appBar: {
//             width: 1144,
//             height: 64,
//             background: 'rgb(255, 255, 255)',
//             bordeRadius: 0,
//         },
//         icon: {
//             width: 26,
//             height: 26,
//             // background: 'rgba(0, 0, 0, 0.54)',
//             borderRadius: 0,
//             opacity: 100,
//         },
//     })
// )
const HeaderStyle = {
    backgroundColor: white,
    display: 'flex',
    height: '64px',
    // position: 'fixed' as 'fixed',
    left: 0,
    zIndex: 1301,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    width: '100vw',
    top: 0,
    padding: '15px',
}

const HeaderLeft = {
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    height: '34px',
}

const AlignText = {
    display: 'flex',
    alignItems: 'baseline',
    // position: 'relative',
    top: -1,
}

const AppTitle = {
    margin: '0',
    fontSize: '24px',
    // '@media (max-width:767px)': {
    //     fontSize: '14px',
    // },
    // '@media (min-width: 516px)': {
    //     whiteSpace: 'nowrap',
    // },
    typo: 'regular',
    color: grayDark,
    // fontWeight: 'normal',
    height: '28px',
    width: '164px',
}

const HeaderTitle = {
    margin: '0',
    fontSize: '20px',
    typo: 'medium',
    color: grayDark,
    height: '48px',
    width: '613px',
    spacing: '0.25px',
    fontWeight: 500
}

const Header = ({ headerTitle }) => (
    <header style={HeaderStyle}>
        <div style={HeaderLeft}>
            <MenuSection />
            <Link to="/" css={styles.linkLogo}>
                {/* <LogoSvg /> */}
            </Link>
            <div style={AlignText}>
                <span style={AppTitle}>Cegid VNext</span>
                <span style={AppTitle}>&nbsp;|&nbsp;</span>
                <span style={HeaderTitle}>{headerTitle}</span>
            </div>
        </div>
    </header>
)

Header.defaultProps = {
    headerTitle: `Cegid VNext | ...`,
}
Header.propTypes = {
    headerTitle: string,
}

export default Header
