import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const Homepage = () => {

    const homepageStyle = {
        height: '90%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'end' 
    }

    const homepageHeaderStyle = {
        margin: '0',
        marginTop: '200px',
        marginRight: '50px',
        height: '10%',
        width: '100%',
        textAlign: 'end',
        alignContent: 'center',
        
    }

    const linkStyle = {

        marginRight: '50px',
    }

    return (
        <>
        <Navbar />
        <div id="homepage" style={homepageStyle}>
            <h1 id="homepage_header" style={homepageHeaderStyle}>Welcome to BasketPal!</h1>
            <Link to='/shop/all' style={linkStyle}>Proceed to Shop</Link>
        </div>
        </>
    )
}

export default Homepage