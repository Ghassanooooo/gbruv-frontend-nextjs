import React from 'react';

// third-party
import Link from 'next/link';

export default function FooterLinks(props) {
  const linksList =
    props.items &&
    props.items.map((item, index) => (
      <li key={index} className="footer-links__item">
        <Link href={item.url} className="footer-links__link">
          <a>{item.title}</a>
        </Link>
      </li>
    ));

  return (
    <div className="site-footer__widget footer-links">
      <h5 className="footer-links__title">{props.title && props.title}</h5>
      <ul className="footer-links__list">{linksList}</ul>
    </div>
  );
}
