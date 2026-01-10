import '../styles/Header.css'

const Header = () => {
    return (
      
            <div className='header'>
                <div className='nav-logo'>
                    <h1>
                        <img src="/images/Frame (8).png" alt="" />
                    </h1>
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
                    <div className='hero-logo'>
                        <img src="/images/Rectangle (7).png" alt="" />
                    </div>
                    <div className='hero-logo-png'>
                        <img src="/images/salat.png" alt="" />
                    </div>
                    <div className='hero-logo-npm'>
                        <img src="/images/logo.png" alt="" />

                    </div>
                </div>
                <div className='hero-logo-nmp'>
                    <img src="/images/Frame (12).png" alt="" />
                </div>
                <div className='hero-logo-pmn'>
                    <img src="/images/Rectangle (8).png" alt="" />
                </div>
            </div>
   

    )
}

export default Header