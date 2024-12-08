import { Link } from "react-router-dom"

const Navbar = () => {
    const navbarStyle = {
        height: '10%',
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        gap: '5%',
        boxSizing: 'border-box',
        paddingRight: '10%',
        
    }

    const linkStyle = {
    
    }

    return (
        <nav id="navbar" style={navbarStyle}>
            <Link to='/' className="routerLink" style={linkStyle}>Home</Link>
            <Link to='/shop' className="routerLink" style={linkStyle}>Shop</Link>
        </nav>
    )
}

export default Navbar