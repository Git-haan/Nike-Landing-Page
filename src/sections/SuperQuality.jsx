import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
    return (
        <section id="about-us" 
        className="flex justify-between items-center gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl font-klien lg:max-w-lg">
                    SUSTAINABLE MATERIALS + INNOVATION
                </h2>
                <p className="text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-lg">
                From sweat-wicking fabrics to the bouncy foam under your feet, materials make up more than 70% of any product's footprint. 
                </p>
                <p className="text-slate-600 text-lg leading-8 mt-6 mb-14 max-w-lg">
                By inventing more efficient materials and reusing existing plastics, yarns and textiles, 
                we're making big strides on our journey to zero carbon and zero waste.
                </p>
                <a className="mt-10 mb-10" href="https://www.nike.com/sustainability/materials">
                    <Button
                        label="Details"
                        iconURL={ arrowRight }>
                    </Button>
                </a>
            </div>
            <div className='max-lg:hidden'>
                <img src={shoe8} alt="shoe8" 
                className="flex flex-1 justify-end items-end object-contain"/>
            </div>
        </section>
    )
}

export default SuperQuality