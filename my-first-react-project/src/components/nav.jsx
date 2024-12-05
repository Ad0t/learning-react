export default function NavBar () {
    return (
        <nav className="navbar">
            <span className="navleft">
                <img className="navlogo" src="src/assets/images/rock-logo.png" alt="Logo" />
            </span>
            <span className="navright">
                <ul className="navlist">
                    <li className="navlistitem"><a href="">Home</a></li>
                    <li className="navlistitem"><a href="">About Us</a></li>
                    <li className="navlistitem"><a href="">Contact Us</a></li>
                </ul>
                <img className="userpic" src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png" alt="user" />
            </span>
        </nav>
    )
}