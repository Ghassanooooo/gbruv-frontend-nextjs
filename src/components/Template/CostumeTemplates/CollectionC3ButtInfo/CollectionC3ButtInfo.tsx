import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import Image from 'next/image'
import { backendApiURL } from '../../../../baseApiURL';

enum Category {
  Supplements = 'supplements',
  Mens = 'mens',
  Womens = 'womens',
}

enum Platform {
  UxManager = 'ux-manager',
  ContentManager = 'content-manager',
}
const ProductsCollections = (props: any) => {
  const { pathname } = props;
  const pathToArray = pathname
    .split('/')
    .filter((item: any) => item != '')
    .map((item: any) => item.replace('-', ' '));
  const [products, setProducts] = useState([]);

  const [isCollection, setIsCollection] = useState(false);

  const errorsHandler = (error: any) => {
    if (error.response) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      //  console.log({ ...error.response });
    }
  };
  const findProducts = async () => {
    const pullAndFilterCurrentPath = pathname.split('/').filter((item: any) => item !== '');

    const categorie = pullAndFilterCurrentPath[0];
    const subCategorie = pullAndFilterCurrentPath[1];
    const subSubCategorie = pullAndFilterCurrentPath[2];
    console.log('findProducts ==> pullAndFilterCurrentPath ==>', pullAndFilterCurrentPath);
    try {
      const productsData = await Axios(
        `${backendApiURL}products?categorie=${categorie}&subCategorie=${subCategorie}&subSubCategorie=${subSubCategorie}`
      );
      console.log('products ==> ProductsCollections ==>', productsData);
      setProducts(productsData.data);
    } catch (ex) {
      errorsHandler(ex);
    }
  };
  const checkCategory = (mainPath: string) => {
    if (mainPath === Category.Supplements || mainPath === Category.Mens || mainPath === Category.Womens) {
      return true;
    }
    return false;
  };

  const checkPlatform = (mainPath: string, subPath: string) => {
    if ((mainPath === Platform.ContentManager || mainPath === Platform.UxManager) && checkCategory(subPath)) {
      return true;
    }
    return false;
  };
  const onCollectionHandler = () => {
    if (pathToArray.length !== 0 && checkCategory(pathToArray[0])) {
      setIsCollection(true);
    }

    if (pathToArray.length !== 1 && checkPlatform(pathToArray[0], pathToArray[1])) {
      setIsCollection(true);
    }

    console.log('onCollectionHandler ==> ', pathToArray);
  };
  useEffect(() => {
    onCollectionHandler();
    findProducts();
  }, [findProducts, onCollectionHandler]);
  return isCollection && products.length > 0 ? (
    <section className="products-collections-area ptb-60">
      <div className="container">
        <div className="section-title">
          <h2>
            <span className="dot" /> {pathToArray[pathToArray.length - 1]}
          </h2>
        </div>
        <div className="row">
          {products.map((product: any, idx: any) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <Link href={`/product-article/${product._id}`}>
                <a>
                  <div className="collections-box">
                    <Image src={product.image} {product.title}  width={350} height={350}  />

                    <div className="category">
                      <h4>{product.title}</h4>
                      <span>{product.brand}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default ProductsCollections;
