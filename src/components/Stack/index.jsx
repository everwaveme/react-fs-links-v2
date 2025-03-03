
function Stack() {
  const stackArray = [{
    id: 1,
    text: 'HTML',
  }, {
    id: 2,
    text: 'CSS',
  }, {
    id: 3,
    text: 'Sass',
  }, {
    id: 4,
    text: 'JavaScript',
  }, {
    id: 5,
    text: 'TypeScript',
  }, {
    id: 6,
    text: 'React',
  }, {
    id: 7,
    text: 'React Native',
  }, {
    id: 8,
    text: 'Node.js',
  }, {
    id: 9,
    text: 'Webpack',
  }, {
    id: 10,
    text: 'Gulp',
  }, {
    id: 11,
    text: 'Anime.js',
  }, {
    id: 12,
    text: 'Git',
  }, {
    id: 13,
    text: 'Github',
  }, {
    id: 14,
    text: 'Wordpress',
  }, {
    id: 15,
    text: 'Figma',
  }, {
    id: 16,
    text: 'Adobe Photoshop',
  }];

  return (
    <section className="stack">
      <div className="stack-container">
        <h2 className="stack-title">
          Skills & Technologies
        </h2>
        <ul className="stack-list">
          {stackArray.map(item => {
            return (
              <li key={item.id} className="stack-item">
                <span className="stack-text">
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Stack;