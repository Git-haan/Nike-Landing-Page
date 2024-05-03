import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return(
        <div className="flex justify-center items-center flex-col
        bg-white p-10 shadow-xl">
            <img 
            src={imgURL} 
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"/>
            
            <div className=" flex flex-row pt-3 pb-3 gap-5">
                <img src={star}/>
                <p className="text-lg font-semibold mt-1">{rating}</p>
            </div>
            
            <p className="max-w-md font-semibold text-center">{feedback}</p>

            <h3 className="text-lg font-semibold pt-5">{customerName}</h3>
        </div>
    )
}

export default ReviewCard