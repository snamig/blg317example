import './navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    Sikko Logo
                </div>
                <div className="login"> 
                    <button>
                        Log in
                    </button>
                    <button>
                        Sign up
                    </button>
                </div>
            </div>
        </>
    )
}
export default Navbar