import { primaryColor, white, grayDark } from '../../theme/colors'

export default {
    container: {
        backgroundColor: white,
        display: 'flex',
        height: '64px',
        boxSizing: 'border-box',
        position: 'fixed',
        left: 0,
        zIndex: 1301,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        width: '100vw',
        top: 0,
        padding: '15px',
        '@media (max-width: 515px)': {
            padding: '15px 0',
        },
    },
    headerLeft: {
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        height: '34px',
    },
    alignText: {
        display: 'flex',
        alignItems: 'baseline',
        position: 'relative',
        top: -1,
        '@media (max-width:767px)': {
            top: 0,
        },
        '@media (max-width:515px)': {
            alignItems: 'center',
            top: -1,
        },
    },
    menuButton: {
        '@media (min-width:516px)': {
            marginRight: '15px',
        },
    },
    linkLogo: {
        display: 'flex',
        alignItems: 'center',
    },
    svgLogo: {
        width: '60px',
        marginRight: '15px',
        '@media (max-width:767px)': {
            width: '50px',
        },
        '@media (max-width:515px)': {
            width: '40px',
            marginRight: '12px',
        },
    },
    logoHR: {
        margin: 0,
        paddingRight: '15px',
        '@media (max-width:767px)': {
            fontSize: '18px',
        },
        '@media (max-width:515px)': {
            fontSize: '16px',
        },
    },
    appTitle: {
        margin: '0',
        fontSize: '20px',
        '@media (max-width:767px)': {
            fontSize: '14px',
        },
        '@media (min-width: 516px)': {
            whiteSpace: 'nowrap',
        },
        typo: 'regular',
        color: { grayDark },
    },
    account: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        color: primaryColor,
        '& svg': {
            width: '27px',
            height: '27px',
            color: primaryColor,
        },
    },
}
