function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
          <img
            className='nav-logo'
            src={require('../images/sun.png')}
            alt='sun'
          />
          <h1 className='header-title'>Facts</h1>
          <ul className='nav-items morphing-glowing'>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Pricing</li>
            <li className='nav-item'>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
