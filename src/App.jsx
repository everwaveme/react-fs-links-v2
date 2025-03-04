import './index.scss';
import About from './components/About';
import Stack from './components/Stack';
import SelectedProject from './components/SelectedProjects';
import Photography from './components/Photography';

function App() {
  return (
    <>
      <main>
        <About />
        <Stack />
        <SelectedProject />
        <Photography />

      </main>
    </>
  );
}

export default App;
