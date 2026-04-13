import { Navbar, Footer } from './components/layout';
import {
  HeroSection,
  WhoWeAreSection,
  ProjectsSection,
  ClientsSection,
  ContactSection,
} from './components/sections';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
