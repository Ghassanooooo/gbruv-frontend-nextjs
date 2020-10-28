import React from "react";
import Link from "next/link";

const RenderImage = img => {
    if (typeof img === "object") {
        return <img src={URL.createObjectURL(img)} alt="image" />;
    }
    return <img src={img} alt="image" />;
};
const TemplateR1C3Off = props => {
    const { options } = props;
    return (
        <section className="category-boxes-area pt-60">
            <div className="container-fluid">
                <div className="row">
                    {options.map((data, idx) => (
                        <div className="col-lg-4 col-sm-6" key={idx}>
                            <div className="category-boxes">
                                {RenderImage(data.image)}

                                <div className="content black-text">
                                    <p>{data.description}</p>
                                    <h3>{data.title}</h3>
                                    <Link href={data.titleUrl} target="_blank">
                                        <a className="shop-now-btn">
                                            Discover Now
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
};

export default TemplateR1C3Off;
