import AboutMeSection from '@/components/AboutMeSection'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'

const HomePage = () => {
  return (
    <div className="h-full pt-16 md:pt-20 bg-black">
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
    </div>
  )
}

export default HomePage