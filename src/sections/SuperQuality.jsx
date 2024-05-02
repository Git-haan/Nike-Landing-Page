import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
    return (
        <section id="about-us" 
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl font-klien lg:max-w-lg">
                    SUSTAINABLE MATERIALS + INNOVATION
                </h2>
                <p className="text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                From sweat-wicking fabrics to the bouncy foam under your feet, materials make up more than 70% of any product's footprint. 
                </p>
                <p className="text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
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
            <div className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="shoe8" hieght={470} className="object-contain"/>

            </div>
        </section>
    )
}

export default SuperQuality