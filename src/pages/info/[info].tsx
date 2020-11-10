import React from 'react';
import dynamic from 'next/dynamic';
import { getInfoPage } from '../../shared/fetchers';
import useSWR from 'swr';
import { InfoPageEnum } from '../../components/Layout/Navbar/Navbar.types';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Info = ({ pageInitData, currentPath, backendApiURL, frontendURL, infoPageURL }) => {
  const { data: page } = useSWR(infoPageURL, getInfoPage, { initialData: pageInitData });
  const about = () => {
    const About = dynamic(import('../../infoComponents/about/about'));
    return <About page={page} />;
  };

  const infoContainer = () => {
    const InfoContainer = dynamic(import('../../infoComponents/container/container'));
    return <InfoContainer page={page} />;
  };

  const contact = () => {
    const Contact = dynamic(import('../../infoComponents/contact/contact'));
    return <Contact page={page} />;
  };
  const faq = () => {
    const Faq = dynamic(import('../../infoComponents/faq/faq'));
    return <Faq page={page} />;
  };

  const ourTeam = () => {
    const OurTeam = dynamic(import('../../infoComponents/OurTeam'));
    return <OurTeam page={page} />;
  };

  const renderInfoPage = () => {
    if (currentPath == InfoPageEnum.About) {
      return about();
    }
    if (currentPath == InfoPageEnum.Contact) {
      return contact();
    }
    if (currentPath == InfoPageEnum.QAndA) {
      return faq();
    }
    if (currentPath == InfoPageEnum.OurTeam) {
      return ourTeam();
    }
    return infoContainer();
  };
  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        {!!page && (
          <LayoutSEOana frontendURL={frontendURL} page={page}>
            {page && renderInfoPage()}
          </LayoutSEOana>
        )}
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const params = Object.values(InfoPageEnum).map(path => {
    let pathToArray = path.split('/').filter(i => i != '');
    let extParam = pathToArray[pathToArray.length - 1];
    return { params: { info: extParam } };
  });
  return {
    paths: params,
    fallback: true,
  };
}

export async function getStaticProps(props: any) {
  const {
    asPath,
    params: { info },
  } = props;

  console.log('getStaticProps ==> ', props);
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  let infoPageURL = `${backendApiURL}info/${info}`;

  const pageInitData = await getInfoPage(infoPageURL);

  return {
    props: {
      infoPageURL,
      frontendURL,
      backendApiURL: backendApiURL,
      pageInitData,
      currentPath: asPath || null,
    },
    revalidate: 1,
  };
}

export default Info;
