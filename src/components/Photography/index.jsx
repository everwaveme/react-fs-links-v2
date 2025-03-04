
function Photography() {
  const phArray = [{
    id: 1,
    title: 'Portfolio',
    link: 'https://everwave.ru/',
    background: {
      backgroundImage: 'url(/ph-img-1.png)',
    }
  }, {
    id: 2,
    title: 'Exhibitions',
    link: 'https://everwave.ru/exhibitions',
    background: {
      backgroundImage: 'url(/ph-img-2.png)',
    }
  }, {
    id: 3,
    title: 'Latest works',
    link: 'https://flickr.com/',
    background: {
      backgroundImage: 'url(/ph-img-3.png)',
    }
  }, {
    id: 4,
    title: 'Modern Color Podcast',
    link: 'https://moderncolor.ru/category/podcast/',
    background: {
      backgroundImage: 'url(/ph-img-4.png)',
    }
  }];

  return (
    <section className="ph">
      <div className="ph-container">
        <h2 className="ph-title">
          Photography
        </h2>
        <ul className="ph-list">
          {phArray.map(item => {
            return (
              <li key={item.id} className="ph-item">
                <a href={item.link} className="ph-link" style={item.background}>
                  <h3 className="ph-link-title">
                    {item.title}
                  </h3>
                  <img src="/arrow.svg" className="ph-link-arrow" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Photography;