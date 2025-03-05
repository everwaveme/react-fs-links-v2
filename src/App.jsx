import './index.scss';
import About from './components/About';
import Stack from './components/Stack';
import SelectedProject from './components/SelectedProjects';
import Photography from './components/Photography';
import Info from './components/Info';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [isShowApp, setIsShowApp] = useState(false);

  useEffect(() => {
    setIsShowApp(true);
  },[])

  return (
    <div className={!isShowApp ? "hide-app" : "show-app"}>
      <main>
        <About />
        <Stack />
        <SelectedProject />
        <Photography />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
