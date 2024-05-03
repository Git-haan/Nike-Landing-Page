import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const Reviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-klien text-4xl text-center">CUSTOMER REVIEWS</h3>
            <p className="text-center text-lg leading-8 mt-6 mb-14">
                Listen to heartfelt accounts from our delighted clients about their extraordinary encounter with us.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard 
                        key={review.customerName}
                        imgURL={review.imgURL} 
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
}
export default Reviews