import React from "react";
import Link from "next/link";

const RenderImage = img => {
    if (typeof img === "object") {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    }
    return <img src={img} alt="image" />;
};
export default function TemplateR1C2S(props) {
    const { title, options } = props;
    return (
        <section className="category-boxes-area pt-60">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <span className="dot" /> {title}
                    </h2>
                </div>

                <div className="row">
                    {options.map((data, idx) => (
                        <div className="col-lg-6 col-sm-6" key={idx}>
                            <div className="category-boxes">
                                {RenderImage(data.image)}

                                <div className="content black-text">
                                    <h3>{data.title}</h3>
                                    <span>{data.description}</span>

                                    <Link href={data.titleUrl} target="_blank">
                                        <a className="shop-now-btn">
                                            view more
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
