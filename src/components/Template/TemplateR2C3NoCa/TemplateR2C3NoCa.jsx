import React from "react";
import Link from "next/link";

const RenderImage = img => {
    if (typeof img === "object") {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    }
    return <img src={img} alt="image" />;
};

export default function TemplateR2C3NoCa(props) {
    const { title, options } = props;
    return (
        <section className="products-area pt-60 pb-30">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <span className="dot" /> {title}
                    </h2>
                </div>

                <div className="row">
                    {options.map((data, idx) => (
                        <div className="col-lg-4 col-sm-6" key={idx}>
                            <div className="single-product-box single-product-two">
                                <div className="product-image">
                                    <Link href="" as="">
                                        <a>
                                            {RenderImage(data.image)}
                                            {RenderImage(data.image)}
                                        </a>
                                    </Link>

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
                                        <li />
                                    </ul>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="" as="">
                                            <a>{data.title}</a>
                                        </Link>
                                    </h3>

                                    <div className="product-price" />

                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                    </div>
                                    <Link href={data.titleUrl} target="_blank">
                                        <a className="btn btn-light">
                                            Check the Price{" "}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
