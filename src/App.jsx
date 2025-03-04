import './index.scss';
import About from './components/About';
import Stack from './components/Stack';
import SelectedProject from './components/SelectedProjects';
import Photography from './components/Photography';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <About />
        <Stack />
        <SelectedProject />
        <Photography />
        <Info />
      </main>
      <Footer />
    </>
  );
}

export default App;
