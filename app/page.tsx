import FAQ from 'components/sections/faq'
import Footer from 'components/sections/footer'
import Header from 'components/sections/header'
import Hero from 'components/sections/hero'
import Testimonials from 'components/sections/testimonials'
import Courses from '~/components/sections/courses'
import ExistingCohorts from '~/components/sections/existing-cohorts'

export default function Home() {
   return (
      <main>
         <Header />
         <Hero />
         <Courses />
         <ExistingCohorts />
         <Testimonials />
         <FAQ />
         <Footer />
      </main>
   )
}
