import React from 'react';

import Link from 'next/link';
import pagesCrawled from '../../../../crawlPages/pages.json';
export default function CrawlPages() {
  return (
    pagesCrawled &&
    pagesCrawled.map((page, idx) => (
      <li key={idx} style={{ display: 'none' }}>
        <Link href={page}>
          <a>{page}</a>
        </Link>
      </li>
    ))
  );
}
