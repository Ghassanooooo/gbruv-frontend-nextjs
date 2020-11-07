import React from 'react';
import Link from 'next/link';

export default function CollectionC3CardBlog({ currentPayloads }) {
  return (
    currentPayloads.length > 0 && (
      <section className="news-area ptb-60">
        <div className="container">
          <div className="row">
            {currentPayloads.map(payload => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/viewDoc/[viewDoc]" as={'/viewDoc/' + payload.contentType + '_' + payload._id}>
                      <a>
                        <img src={payload.image} alt={payload.title} />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="#">
                        <a>{payload.categorie} </a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">{payload.date} </span>
                    <h3>
                      <Link href="/blog-details">
                        <a>{payload.title} </a>
                      </Link>
                    </h3>
                    <p>{payload.description}</p>

                    <Link href="/viewDoc/[viewDoc]" as={'/viewDoc/' + payload.contentType + '_' + payload._id}>
                      <a className="read-more-btn">
                        Read More <i className="icofont-double-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}
