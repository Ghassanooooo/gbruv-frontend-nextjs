import React from 'react';
import Link from 'next/link';
import { InfoPageEnum } from './Navbar.types';

function TopHeader() {
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <ul className="top-header-nav">
                <li>
                  <Link href="/info/[info]" as={InfoPageEnum.About}>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/info/[info]" as={InfoPageEnum.OurTeam}>
                    <a>Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/info/[info]" as={InfoPageEnum.QAndA}>
                    <a>FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/info/[info]" as={InfoPageEnum.Contact}>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6">
              <ul className="top-header-right-nav">
                <li>
                  <Link href="/info/[info]" as={InfoPageEnum.PrivacyPolicy}>
                    <a>privacy policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/info/[info]" as={InfoPageEnum.Affiliate}>
                    <a>
                      {' '}
                      affiliate <i className="fas fa-balance-scale" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
