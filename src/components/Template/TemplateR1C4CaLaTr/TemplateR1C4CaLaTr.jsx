import React, { Component } from "react";
import Link from "next/link";

import OwlCarousel from "react-owl-carousel3";

import OwlCarouselOptions from "./options";

const RenderImage = img => {
    if (typeof img === "object") {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    }
    return <img src={img} alt="image" />;
};
const TemplateR1C4CaLaTr = props => {
    const { title, options } = props;
    return (
        <section className="offer-area ptb-60">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <span className="dot" /> {title}
                    </h2>
                </div>

                <div className="row">
                    {true ? (
                        <OwlCarousel
                            className="offer-slides owl-carousel owl-theme"
                            {...OwlCarouselOptions}
                        >
                            {options.map((data, idx) => (
                                <div className="col-lg-12 col-md-12" key={idx}>
                                    <div className="single-offer-box">
                                        {RenderImage(data.image)}

                                        <div className="offer-content">
                                            <h3>{data.title}</h3>
                                            <span>{data.description}</span>
                                        </div>

                                        <Link href="#">
                                            <a />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};

export default TemplateR1C4CaLaTr;
