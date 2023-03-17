import React from "react";
import Link from "next/link";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
const Product = ({ products }) => {
    return (
        <div className="conatiner mx-auto px-4">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Product List - MyShop
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
                            Buy from the list of our products
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {products &&
                            products.map((prd, index) => {
                                return (
                                    <div
                                        className="xl:w-1/4 md:w-1/2 p-4"
                                        key={index}
                                    >
                                        <div className="bg-gray-100 p-6 rounded-lg">
                                            <img
                                                className="h-40 rounded w-full object-cover object-center mb-6"
                                                src={getStrapiMedia(
                                                    prd.attributes.image
                                                )}
                                                alt="content"
                                            />
                                            <Link
                                                href={`product/${prd.attributes.slug}`}
                                            >
                                                <h1 className="text-lg text-gray-900 font-medium title-font mb-4">
                                                    {prd.attributes.title}
                                                </h1>
                                            </Link>
                                            <p className="leading-relaxed text-base">
                                                {prd.attributes.description.substring(
                                                    0,
                                                    50
                                                )}
                                            </p>
                                            <Link
                                                href={`product/${prd.attributes.slug}`}
                                            >
                                                <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                                                    Buy Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
export async function getServerSideProps(context) {
    let res = await fetchAPI("/products?populate=*");
    return {
        props: { products: res.data },
    };
}
