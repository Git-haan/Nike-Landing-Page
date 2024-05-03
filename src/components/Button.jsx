const Button = ({ label, iconURL }) => {
    return (
        <button className="flex justify-center 
        items-center gap-2 px-7 py-4 border border-black text-lg leading-none
        text-white font-semibold bg-black rounded-full hover:bg-slate-600 hover:border-slate-600">
            {label}

            {iconURL && <img 
                src={iconURL} 
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

export default Button