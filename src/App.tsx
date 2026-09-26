
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Statement } from './components/sections/Statement';
import { Work } from './components/sections/Work';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Gallery } from './components/sections/Gallery';
import { ContactFooter } from './components/sections/ContactFooter';

function App() {
  return (
    <Layout>
      <Hero />
      <Statement />
      <Work />
      <Experience />
      <Skills />
      <Gallery />
      <ContactFooter />
    </Layout>
  );
}

export default App;
