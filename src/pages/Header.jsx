import '../pages/Header.css'

const Header = () => {
    return (

        <div className='header'>
            <div className='nav'>
                <div className='nav-logo'>
                    <img src="/images/Frame (8).png" alt="" />
                </div>
                <div className='nav-list'>
                    <h2>
                        Home
                    </h2>
                    <h3>
                        Pricing
                    </h3>
                    <h4>
                        Support
                    </h4>
                </div>
            </div>
            <div className='hero-list'>
                <h3>
                    Green Revolution?
                </h3>
                <h4>
                    It’sa team  effort.
                </h4>
            </div>
            <div className='hero-logo-pn'>
             <img src="/images/logo.png" alt="" />
            </div>
        </div>
     

    )
}

export default Header