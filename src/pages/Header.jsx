import '../styles/Header.css'

const Header = () => {
    return (

        <div className='header'>
            <div className='nav'>
                <div className='nav-logo'>
                    <img src="/images/Frame (8).png" alt="" />
                </div>
            </div>
            <div className='hero-list'>
                <h3>
                    Green <br /> Revolution? <br />
                    It’s a <span className='color'>team</span> <br />
                      effort.
                </h3>
            </div>
            <div className='hero-logo-pn'>
             <img src="/images/logo.png" alt="" />
            </div>
        </div>
     

    )
}

export default Header