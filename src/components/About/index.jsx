
function About() {

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-wrap">
          <div className="about-pic-pulse">
            <div className="about-pic">
              <img src="fs-avatar.png" alt="Farhad Sadykov" className="about-img" />
            </div>
          </div>
          <div className="about-info-wrap">
            <h1 className="about-info-title">
              Farhad Sadykov
            </h1>
            <p className="about-info-desc">
              Front-end developer, web designer and monochrome photographer from St.Petersburg.
            </p>
            <ul className="about-info-links-list">
              <li className="about-info-links-item">
                <a href="https://t.me/everwaveme" className="about-info-links-link" target="_blank" rel="noopener noreferrer">
                  <span>
                    Telegram
                  </span>
                  <img src="arrow.svg" />
                </a>
              </li>
              <li className="about-info-links-item">
                <a href="https://github.com/everwaveme" className="about-info-links-link" target="_blank" rel="noopener noreferrer">
                  <span>
                    Github
                  </span>
                  <img src="arrow.svg" />
                </a>
              </li>
              <li className="about-info-links-item">
                <a href="https://www.behance.net/everwave" className="about-info-links-link" target="_blank" rel="noopener noreferrer">
                  <span>
                    Behance
                  </span>
                  <img src="arrow.svg" />
                </a>
              </li>
              <li className="about-info-links-item">
                <a href="mailto:purestate@yandex.ru" className="about-info-links-link" target="_blank" rel="noopener noreferrer">
                  <span>
                    Email
                  </span>
                  <img src="arrow.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;