import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerProducts, footerHelp, footerCompany, socialMedia } from "../constants"


const Footer = () => {
    return (
        <section className="max-container">
            <div className="flex flex-col sm:flex-row justify-between items-start flex-wrap">
                <div className="flex flex-1">
                    {footerProducts.map((section) => (
                        <div key={section}>
                            <h6 className="text-white text-xs font-bold p-2">
                                {section.title}
                            </h6>
                            <ul>
                                {section.links.map((link) => (
                                    <li className="text-white text-xs font-bold p-2 cursor-pointer"
                                        key={link.name}>
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-1">
                    {footerHelp.map((section) => (
                        <div key={section}>
                            <h6 className="text-white text-xs font-bold p-2">
                                {section.title}
                            </h6>
                            <ul>
                                {section.links.map((link) => (
                                    <li className="text-slate-gray text-xs font-semibold p-2 hover:text-white cursor-pointer"
                                        key={link.name}>
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-1">
                    {footerCompany.map((section) => (
                        <div key={section}>
                            <h6 className="text-white text-xs font-bold p-2 ">
                                {section.title}
                            </h6>
                            <ul>
                                {section.links.map((link) => (
                                    <li className="text-slate-gray text-xs font-semibold p-2 hover:text-white cursor-pointer"
                                        key={link.name}>
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} width={100} height={50}/>
                    </a>
                    <p className="mt-6 text-xs text-white w-40">
                        Looking to start the new term on the right foot? 
                        Head to your nearest Nike store to get your hands on the perfect pair of shoes.
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon) => (
                            <div className="flex justify-center items-center w-6 h-6 bg-slate-gray rounded-full">
                                <img
                                src={icon.src}
                                alt={icon.alt}
                                width={15}
                                height={15}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="flex justify-between text-slate-gray mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 gap-2 cursor-pointer">
                    <img src={copyrightSign}
                        alt="copy right sign"
                        width={10}
                        height={10}/>
                    <p className=" text-xs font-semibold">
                        2024 Nike, Inc. All Rights Reserved
                    </p>
                </div>
                <div className="flex flex-row font-semibold text-xs gap-3 cursor-pointer">
                    <p className="hover:text-white">Terms of Sale</p>
                    <p className="hover:text-white">Terms of Use</p>
                    <p className="hover:text-white">Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}

export default Footer