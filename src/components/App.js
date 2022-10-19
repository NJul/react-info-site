function App() {
  return (
    <>
      <header className='container'>
        <img className='sun' src={require('../images/sun.png')} alt='sun' />
        <nav>
          <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className='container'>
        <h1>Welcome to Webpack</h1>
      </main>
      <footer className='container'>2022</footer>
    </>
  );
}

export default App;
