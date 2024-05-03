import SmallButton from "../components/SmallButton"
import { offer } from '../assets/images'

const SpecialOffer = () => {
    return (
        <section>
            <div className="m-10">
                <h1 className="text-4xl text-center font-klien pb-5">NEW THIS WEEK</h1>
                <div className="flex justify-center items-center gap-5">
                    <a href="https://www.nike.com/w/new-mens-3n82yznik1">
                        <SmallButton label="Shop Men's New Arrivals"/>
                    </a>
                    <a href="https://www.nike.com/w/new-womens-3n82yz5e1x6">
                        <SmallButton label="Shop Women's New Arrivals"/>
                    </a>
                    <a href="https://www.nike.com/w/new-kids-3n82yzv4dh">
                        <SmallButton label="Shop Kids' New Arrivals"/>
                    </a>
                </div>
            </div>
            <div>
                <img src={ offer }/>
            </div>
        </section>
    )
}

export default SpecialOffer