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
    <div className='hidden max-lg:block'>
          <img src={arrowRight} width={200} height={200} 
          className="absolute left-72 top-[850px] rotate-90"/>
      </div>
      <Hero />
      <div className="pt-40">
          <img src={ landscape }/>
      </div>
    </section>
    <section className="padding">
      <Popular />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
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