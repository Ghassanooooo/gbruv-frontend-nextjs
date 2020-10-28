import React from "react";
import Link from "next/link";

import OwlCarousel from "react-owl-carousel3";

import VisibilitySensor from "react-visibility-sensor";
import OwlCarouselOptions from "./options";

export default function TemplateHeaderCarAPD(props) {
    const { options } = props;
    return (
        <>
            {true ? (
                <OwlCarousel
                    className="home-slides owl-carousel owl-theme"
                    {...OwlCarouselOptions}
                >
                    {options.map((data, idx) => (
                        <div
                            key={idx}
                            className="main-banner item-bg2"
                            style={{
                                backgroundImage: `url(${data.image})`,
                            }}
                        >
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <VisibilitySensor>
                                            {({ isVisible }) => (
                                                <div className="main-banner-content">
                                                    <span
                                                        className={
                                                            isVisible
                                                                ? "animated fadeInUp opacityOne"
                                                                : "opacityZero"
                                                        }
                                                    >
                                                        New Inspiration 2020
                                                    </span>
                                                    <h1
                                                        className={
                                                            isVisible
                                                                ? "animated fadeInUp opacityOne"
                                                                : "opacityZero"
                                                        }
                                                    >
                                                        {data.title}
                                                    </h1>
                                                    <p
                                                        className={
                                                            isVisible
                                                                ? "animated fadeInUp opacityOne"
                                                                : "opacityZero"
                                                        }
                                                    >
                                                        {data.description}
                                                    </p>

                                                    <Link
                                                        href={data.titleUrl}
                                                        className={`btn btn-primary ${
                                                            isVisible
                                                                ? "animated fadeInUp opacityOne"
                                                                : "opacityZero"
                                                        }`}
                                                    >
                                                        <a> Shop Women's</a>
                                                    </Link>

                                                    <Link
                                                        href={
                                                            data.descriptionUrl
                                                        }
                                                        className={`btn btn-light ${
                                                            isVisible
                                                                ? "animated fadeInUp opacityOne"
                                                                : "opacityZero"
                                                        }`}
                                                    >
                                                        <a> Shop Men's</a>
                                                    </Link>
                                                </div>
                                            )}
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            ) : (
                ""
            )}
        </>
    );
}
