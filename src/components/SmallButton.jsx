const SmallButton = ({ label }) => {
    return (
        <button className="flex-row
        items-center px-4 py-2 text-xs leading-none
        text-white font-bold bg-black rounded-full hover:bg-slate-600">
            {label}
        </button>
    )
}

export default SmallButton