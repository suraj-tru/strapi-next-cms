import React from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
const About = ({ about }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                            {about.attributes.Heading}
                        </h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            {about.attributes.content}
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <img
                            className="w-full h-full"
                            src={getStrapiMedia(about.attributes.aboutBanner)}
                            alt="A group of People"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                            {about.attributes.ourStory.title}
                        </h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            {about.attributes.ourStory.content}
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            {about.attributes.ourStory.team.map(
                                (abt, index) => {
                                    return (
                                        <div
                                            className="p-4 pb-6 flex justify-center flex-col items-center"
                                            key={index}
                                        >
                                            <img
                                                className="md:block hidden"
                                                src={getStrapiMedia(abt.image)}
                                                alt="Alexa featured Img"
                                            />

                                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                                                {abt.name}
                                            </p>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
export async function getServerSideProps(context) {
    let res = await fetchAPI(
        "/about?populate=*&populate=aboutBanner&populate=ourStory.team.image"
    );
    return {
        props: { about: res.data },
    };
}
