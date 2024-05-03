

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl px-20 py-16">
            <h3 className="text-4xl font-klien">{label}</h3>
            <p className="text-xs mt-2 mb-8">{subtext}</p>
            <div className="w-16 h-10 flex justify-center items-center bg-black rounded-3xl">
                <img src={imgURL} alt={label} width={20} height={20}/>
            </div>
        </div>
    )
}

export default ServiceCard