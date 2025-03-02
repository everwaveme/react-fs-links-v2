
function Stack() {
  const stack = [
    'HTML',
    'CSS',
    'Sass',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Node.js',
    'Webpack',
    'Gulp',
    'Anime.js',
    'Git',
    'Github',
    'Wordpress',
    'Figma',
    'Adobe Photoshop',
  ];

  return (
    <section className="stack">
      <div className="stack-container">
        <h2 className="stack-title">
          Skills & Technologies
        </h2>
        <ul className="stack-list">
          {stack.map(item => {
            return (
              <li className="stack-item">
                <span className="stack-text">
                  {item}
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