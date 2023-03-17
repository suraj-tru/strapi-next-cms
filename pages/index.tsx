import Link from "next/link";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
const Home = ({ products }: any) => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="container my-24 px-6 mx-auto">
                    <section className="mb-32 text-gray-800">
                        <h2 className="text-2xl font-bold mb-12 text-center">
                            Featured Products{" "}
                            <Link
                                href="/product"
                                className=" text-white bg-indigo-500 border-0 py-1 px-4  hover:bg-indigo-600"
                            >
                                View All Products
                            </Link>
                        </h2>
                        <div className="flex flex-wrap mb-12">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                    style={{
                                        backgroundPosition: "50%",
                                    }}
                                >
                                    <img
                                        src={getStrapiMedia(
                                            products[0].attributes.image
                                        )}
                                        className="w-full"
                                        alt="Louvre"
                                    />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251, 251, 251, 0.2)",
                                            }}
                                        ></div>
                                    </a>
                                </div>
                            </div>

                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    {products[0].attributes.title}
                                </h3>
                                <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                        className="w-4 h-4 mr-2"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"
                                        />
                                    </svg>
                                    {products[0].attributes.category}
                                </div>
                                <p className="text-gray-500 mb-6 text-sm">
                                    Published On{" "}
                                    <u>
                                        {products[0].attributes.createdAt.substring(
                                            0,
                                            10
                                        )}
                                    </u>
                                </p>
                                <p className="text-gray-500 mb-6">
                                    {products[0].attributes.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap lg:flex-row-reverse mb-12">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                    style={{ backgroundPosition: "50%" }}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src={getStrapiMedia(
                                            products[1].attributes.image
                                        )}
                                        className="w-full"
                                        alt="Louvre"
                                    />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251, 251, 251, 0.2)",
                                            }}
                                        ></div>
                                    </a>
                                </div>
                            </div>

                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    {products[1].attributes.title}
                                </h3>
                                <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-4 h-4 mr-2"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                        />
                                    </svg>
                                    {products[1].attributes.category}
                                </div>
                                <p className="text-gray-500 mb-6 text-sm">
                                    Published On{" "}
                                    <u>
                                        {products[1].attributes.createdAt.substring(
                                            0,
                                            10
                                        )}
                                    </u>
                                </p>
                                <p className="text-gray-500">
                                    {products[1].attributes.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                    style={{ backgroundPosition: "50%" }}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src={getStrapiMedia(
                                            products[2].attributes.image
                                        )}
                                        className="w-full"
                                        alt="Louvre"
                                    />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251, 251, 251, 0.2)",
                                            }}
                                        ></div>
                                    </a>
                                </div>
                            </div>

                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    {products[2].attributes.title}
                                </h3>
                                <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        className="w-4 h-4 mr-2"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                                        />
                                    </svg>
                                    {products[2].attributes.category}
                                </div>
                                <p className="text-gray-500 mb-6 text-sm">
                                    Published On{" "}
                                    <u>
                                        {products[2].attributes.createdAt.substring(
                                            0,
                                            10
                                        )}
                                    </u>
                                </p>
                                <p className="text-gray-500">
                                    {products[2].attributes.description}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
export default Home;
export async function getServerSideProps(context: any) {
    let res = await fetchAPI(
        "/products?filters[featured][$eq]=true&populate=image"
    );
    return {
        props: { products: res.data },
    };
}
