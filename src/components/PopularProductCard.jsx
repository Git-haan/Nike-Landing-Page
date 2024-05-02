import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, rating, name, price }) => {
    return(
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name}/>
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="star"/>
                <p className="text-lg font-semibold mt-1 leading-normal">{rating}</p>
            </div>
            <h3 className="text-lg font-semibold mt-4">{name}</h3>
            <p className="text-lg font-semibold mt-1">{price}</p>
        </div>

    )
}

export default PopularProductCard