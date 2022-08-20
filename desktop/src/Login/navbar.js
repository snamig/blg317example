import './navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="logo">
                    <p>Sikko Logo</p>
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