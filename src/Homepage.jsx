import {Link} from 'react-router-dom'

const Homepage = () => {
    const homepageStyle = {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
    }

    const homepageHeaderStyle = {
        margin: '0',
        height: '10%',
        width: '100%',
        textAlign: 'center',
        alignContent: 'center'
    }

    const LinkStyle = {
        alignContent: 'center'
    }

    return (
        <>
        <div id="homepage" style={homepageStyle}>
            <h1 id="homepage_header" style={homepageHeaderStyle}>Welcome to RandomShops!</h1>
            <Link to='/shop'>Proceed to Shop</Link>
        </div>
        </>
    )
}

export default Homepage