import React from "react";
import Link from "next/link";

const TemplateFlash = props => {
    const { options, isUxManager, showEditComponentModal } = props;
    const component = options[0];
    console.log("TemplateFlash ==> ", props);
    return (
        <section
            className="products-offer-area ptb-60"
            style={{
                backgroundImage: `url(${"https://i5.walmartimages.com/asr/d5d4529a-438c-4719-a8e4-28dc1afbc502_1.03993aa308ee392eb3e7a713985d607d.jpeg"})`,
            }}
        >
            <div className="container">
                <div className="products-offer-content">
                    <h1>{component.title}</h1>
                    <p>{component.description}</p>
                    <Link href={component.titleUrl} target="_blank">
                        <a className="btn btn-primary">Discover Now</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TemplateFlash;
