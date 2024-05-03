import Button from "../components/Button"

const Subscription = () => {
    return (
        <section>
            <h1 className="text-4xl font-klien">
                NIKE MEMBERSHIP
            </h1>
            <p className="text-slate-600 text-lg leading-8 pb-10">
                Sign Up for Updates and a Weekly Newsletter
            </p>
            <div className="flex flex-row w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-600">
                <input type="text"
                placeholder="subscribe@nike.com"
                className="pt-2 pb-2 w-full leading-6"/>
                <Button label="REGISTER"/>
            </div>
        </section>
    )
}

export default Subscription