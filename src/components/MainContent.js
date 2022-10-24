function MainContent() {
  return (
    <main className='main'>
      <div className='container'>
        <article>
          <h2 className='main-title'>Welcome to Webpack</h2>

          <p className='main-text clearfix'>
            <span className='morphing-glowing'>
              <span className='image-news-1 image-wrap'></span>
            </span>
            Webpack 4 was released in February 2018. Since then we shipped a lot
            of features without breaking changes. We know that people dislike
            major changes with breaking changes. Especially with webpack, which
            people usually only touch twice a year, and the remaining time it
            "just works". But shipping features without breaking changes also
            has a cost: We can't do major API or architectural improvements.
          </p>

          <p className='main-text'>
            Today (2020-10-10) webpack 5.0.0 is released, but this doesn't mean
            it's done, bugfree or even feature-complete. As with webpack 4 we
            continue development by fixing problems and adding features. In the
            next days there will probably be a lot bugfixes. Features will come
            later.
          </p>
        </article>
        <article>
          <h2 className='main-title'>About Sun</h2>

          <p className='main-text clearfix'>
            <span className='morphing-glowing'>
              <span className='image-news-2 image-wrap'></span>
            </span>
            The Sun is the largest object in our solar system. The Sun’s volume
            would need 1.3 million Earths to fill it. Its gravity holds the
            solar system together, keeping everything from the biggest planets
            to the smallest bits of debris in orbit around it. The hottest part
            of the Sun is its core, where temperatures top 27 million degrees
            Fahrenheit (15 million degrees Celsius). The Sun’s activity, from
            its powerful eruptions to the steady stream of charged particles it
            sends out, influences the nature of space throughout the solar
            system.
          </p>

          <p className='main-text'>
            Our Sun is a 4.5 billion-year-old star – a hot glowing ball of
            hydrogen and helium at the center of our solar system. The Sun is
            about 93 million miles (150 million kilometers) from Earth, and
            without its energy, life as we know it could not exist here on our
            home planet.
          </p>
        </article>
      </div>
    </main>
  );
}

export default MainContent;
