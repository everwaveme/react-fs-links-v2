
function SelectedProject() {
  const spArray = [{
    id: 1,
    image: '/epic.png',
    title: 'Earth Polychromatic Imaging Camera',
    desc: 'Daily images of the Planet Earth taken by the EPIC camera on board the DSCOVR spacecraft',
    link: 'https://epicnasa.ru/',
  }, {
    id: 2,
    image: '/ssc.png',
    title: 'Snooker Shots Counter App',
    desc: 'React App that allows to count stats during a snooker match',
    link: 'https://c.homeofsnooker.ru/',
  }, {
    id: 3,
    image: '/snooker-quiz.png',
    title: 'Snooker Quiz',
    desc: 'Make Ronnie O’Sullivan great again',
    link: 'https://q.homeofsnooker.ru/',
  }];

  return (
    <section className="sp">
      <div className="sp-container">
        <h2 className="sp-title">
          Selected Projects
        </h2>

        <ul className="sp-list">
          {spArray.map(item => {
            return (
              <li key={item.id} className="sp-item">
                <a href={item.link} className="sp-link" target="_blank" rel="noopener noreferrer">
                  <div className="sp-link-pic">
                    <img src={item.image} className="sp-link-img" />
                  </div>
                  <div className="sp-link-info">
                    <h3 className="sp-link-title">
                      {item.title}
                    </h3>
                    <p className="sp-link-desc">
                      {item.desc}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <a href="https://github.com/everwaveme" className="sp-more-link" target="_blank" rel="noopener noreferrer">
          <span>
            More projects
          </span>
          <img src="/right-arrow.svg" />
        </a>
      </div>
    </section>
  );
}

export default SelectedProject;