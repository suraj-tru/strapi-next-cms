import React, { useState } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

const Contact = ({ contact }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const contactFromData = {
            name,
            email,
            message,
        };
        console.log("contact data", contactFromData);
    };
    return (
        <div className="container mx-auto px-4">
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800">
                    <div
                        className="relative overflow-hidden bg-no-repeat bg-cover"
                        style={{
                            backgroundPosition: "50%",
                            backgroundImage: `url(${getStrapiMedia(
                                contact.attributes.backgroundImage
                            )})`,
                            height: "300px",
                        }}
                    ></div>
                    <div className="container text-gray-800 px-4 md:px-12">
                        <div
                            className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
                            style={{
                                marginTop: "-100px",
                                background: "hsla(0, 0%, 100%, 0.8)",
                                backdropFilter: "blur(30px)",
                            }}
                        >
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
                                {contact.attributes.info.map((elm, index) => {
                                    return (
                                        <div
                                            className="mb-12 lg:mb-0 text-center mx-auto"
                                            key={index + 1}
                                        >
                                            <img
                                                className="md:block hidden"
                                                src={getStrapiMedia(elm.image)}
                                                alt="Alexa featured Img"
                                            />
                                            <h6 className="font-medium">
                                                {elm.name}
                                            </h6>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="max-w-[700px] mx-auto">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput7"
                                            placeholder="Name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            value={name}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="email"
                                            className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput8"
                                            placeholder="Email address"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            value={email}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <textarea
                                            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                                            id="exampleFormControlTextarea13"
                                            rows="3"
                                            placeholder="Message"
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            value={message}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
export async function getServerSideProps(context) {
    let res = await fetchAPI(
        "/contact?populate=*&populate=backgroundImage&populate=info.image"
    );
    return {
        props: { contact: res.data },
    };
}
