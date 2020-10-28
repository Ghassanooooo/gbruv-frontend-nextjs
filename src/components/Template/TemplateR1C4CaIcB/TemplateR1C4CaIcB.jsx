import React from "react";
import Link from "next/link";

import OwlCarousel from "react-owl-carousel3";
import OwlCarouselOptions from "./options";

const RenderImage = img => {
    if (typeof img === "object") {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    }
    return <img src={img} alt="image" />;
};
const TemplateR1C4CaIcB = props => {
    const {
        title,
        options,

        description,
    } = props;
    return (
        <section className="popular-products-area pb-60">
            <div className="container">
                <div className="tab products-category-tab-style-2">
                    <div className="title">
                        <h2>
                            <span className="dot" /> {title}
                        </h2>
                    </div>

                    {/* Tabs Nav */}
                    <ul className="tabs">
                        <li className="current">
                            <span>{description}</span>
                        </li>
                    </ul>
                    {/* Tab Content */}
                    <div className="tab_content">
                        <div id="tab1" className="tabs_item_popular">
                            {true ? (
                                <OwlCarousel
                                    className="product-slides owl-carousel owl-theme"
                                    {...OwlCarouselOptions}
                                >
                                    {options.map((data, idx) => (
                                        <div key={idx}>
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link href="" as="">
                                                        <a>
                                                            {RenderImage(
                                                                data.image
                                                            )}
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="product-content">
                                                    <h3>
                                                        <Link href="" as="">
                                                            <a>{data.title}</a>
                                                        </Link>
                                                    </h3>

                                                    <div className="product-price">
                                                        <span className="new-price" />
                                                    </div>

                                                    <div className="row align-items-end">
                                                        <div className="col-lg-7 col-md-6 col-7">
                                                            <Link
                                                                style={{
                                                                    paddingTop: 4,
                                                                    paddingBottom4: 4,
                                                                }}
                                                                href={
                                                                    data.titleUrl
                                                                }
                                                                target="_blank"
                                                                className="btn btn-light"
                                                            >
                                                                Check price
                                                            </Link>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 col-5">
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a
                                                                            data-tip="Quick View"
                                                                            data-place="left"
                                                                        >
                                                                            <i className="far fa-eye" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a
                                                                            data-tip="Add to Wishlist"
                                                                            data-place="left"
                                                                        >
                                                                            <i className="far fa-heart" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TemplateR1C4CaIcB;
