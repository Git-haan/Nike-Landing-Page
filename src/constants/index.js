import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#reviews", label: "Reviews" },
    { href: "#sign-up", label: "Sign Up" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Stores' },
    { value: '700+', label: 'Products' },
    { value: '100m+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        rating: 4.2,
        name: "Nike Air Max Pulse",
        price: "$89.97",
    },
    {
        imgURL: shoe5,
        rating: 5.0,
        name: "Nike Blazer",
        price: "$105.00",
    },
    {
        imgURL: shoe6,
        rating: 4.8,
        name: "Nike Revolution 7",
        price: "$50.33",
    },
    {
        imgURL: shoe7,
        rating: 4.5,
        name: "Nike Air Max 97",
        price: "$105.97",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "LOW COST SHIPPING",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "SECURE PAYMENT",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "QUALITY & COMFORT",
        subtext: "Our dedicated team prioritizes the quality and comfort of our products."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.7,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.9,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerProducts = [
    {
        title: "PRODUCTS",
        links: [
            { name: "NIKE DUNK", link: "/" },
            { name: "AIR FORCE", link: "/" },
            { name: "AIR MAX", link: "/" },
            { name: "AIR JORDAN", link: "/" },
            { name: "NIKE INFINITY", link: "/" },
            { name: "NIKE BLAZER", link: "/" },
        ],
    },
];
export const footerHelp = [
    {
        title: "HELP",
        links: [
            { name: "Get Help", link: "/" },
            { name: "Order Satus", link: "/" },
            { name: "Shipping/Delivery", link: "/" },
            { name: "Order Cancellation", link: "/" },
            { name: "Payment Options", link: "/" },
            { name: "Contact Us", link: "/" },
        ],
    },
];
export const footerCompany = [
    {
        title: "COMPANY",
        links: [
            { name: "About Nike", link: "/" },
            { name: "News", link: "/" },
            { name: "Careers", link: "/" },
            { name: "Investors", link: "/" },
            { name: "Sustainability", link: "/" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];