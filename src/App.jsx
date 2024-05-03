import { 
  Hero, Popular, SuperQuality, Services, 
  SpecialOffer, Reviews, Subscription, Footer
} from './sections'
import Nav from './components/Nav'

import { arrowRight } from "../src/assets/icons" 
import { landscape } from '../src/assets/images'

const App = () => (
  <main className="relative">
    <Nav />
    <br /> <br /> <br />
    <p className="relative w-full text-center font-semibold bg-slate-100">Summer Collections: Extra 15% Off</p>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="sm:pb-24 pb-12">
      <SpecialOffer />
    </section>
    <section className="padding">
      <Popular />
    </section>
    <div>
      <img src={ landscape }/>
    </div>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-12">
      <Services />
    </section>
    <section className="bg-slate-100 padding">
      <Reviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscription />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;