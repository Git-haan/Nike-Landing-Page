import  { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const Popular = () => {
    return (
        <section id="products"
        className="max-container">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="bg-white text-4xl font-klien">
                    SHOP BY CLASSICS
                </h2>
                <p>
                    Explore the pinnacle of excellence in quality and style with our highly coveted selections. 
                    Unveil a universe of unparalleled comfort, exquisite design, and exceptional value.                
                </p>
                <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                sm:gap-4 gap-14">
                    {products.map((product) => (
                        <PopularProductCard key= {product.name} {...product} />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Popular