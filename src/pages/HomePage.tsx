import HeroSlider from '../components/sections/home/HeroSlider'
import StatsBar from '../components/sections/home/StatsBar'
import QuickLinks from '../components/sections/home/QuickLinks'
import FeaturedSection from '../components/sections/home/FeaturedSection'
import Announcements from '../components/sections/home/Announcements'
import CustomerLogos from '../components/sections/home/CustomerLogos'
import QuickContact from '../components/sections/home/QuickContact'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <QuickLinks />
      <FeaturedSection />
      <Announcements />
      <CustomerLogos />
      <QuickContact />
    </>
  )
}
