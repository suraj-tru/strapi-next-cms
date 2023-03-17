import React from "react";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import { toast } from "react-toastify";
import Link from "next/link";
const Slug = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast(`Product ${product.attributes.title} Added to cart`, {
            hideProgressBar: false,
            autoClose: 2000,
            type: "success",
            position: "top-right",
        });
    };
    return (
        <>
            <div className="container">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={getStrapiMedia(product.attributes.image)}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    Product Name
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.attributes.title}
                                </h1>
                                <p className="leading-relaxed">
                                    {product.attributes.description}
                                </p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ₹ {product.attributes.price}
                                    </span>
                                    <button
                                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add To Cart
                                    </button>
                                    <Link
                                        href="/product"
                                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                    >
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Slug;

export async function getServerSideProps(context) {
    const productSlug = context.params.slug;
    let response = await fetchAPI(
        `/products?populate=*&filters[slug][$eq]=${productSlug}`
    );
    return {
        props: { product: response.data[0] },
    };
}
