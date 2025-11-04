import CoursesShowcase from '../components/CoursesShowcase'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonials from '../components/Testinomials'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <CoursesShowcase />
      <Testimonials />
    </div>
  )
}

export default Home