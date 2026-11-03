import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
