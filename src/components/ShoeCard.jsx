const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    
    
    return(
        <div className={`border-2
            ${bigShoeImg === imgURL.bigShoe
                ? 'border-slate-600'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1
        `}
        onClick={handleClick}
        >
            <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={170}
                    height={150}
                    className="object-contain"
                />
            </div>

        </div>
    )
}

export default ShoeCard