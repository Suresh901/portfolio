import AboutPage from '@/components/AboutPage'
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection';

const Page = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl ">
      <HeroSection />
      <AboutPage />
      <ProjectSection />
      <Footer />

    </main>

  )
}

export default Page;
