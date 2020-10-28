import uuid from 'uuid/v4';
const protein = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => ({
    views: 20,
    date: '01-07-2018',
    Updated: true,
    Updated_by: 'Issac',
    // we should add creatre id and updater id
    Updated_date: '22-10-2019',
    brand: 'Optimum Nutrition',
    source_origin: 'Amazon',
    creator_name: 'Ghassan Aldarwish',
    creator_icon: 'https://secure.webtoolhub.com/static/resources/icons/set70/155c896f.png',
    creator_title: 'Web Developer',
    price: '50$',
    order: '1',
    _id: uuid(),
    user_id: '56789',
    title: 'Whey Protein Powder 2.27kg',
    image:
        'https://cdn.gymbeam.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/u/n/untitled_design_3__1_2.png',
    sub_title: `Optimum Nutrition Gold Standard 100% Whey French Vanilla Crème
    Protein Powder 2.27kg`,
    categorie: 'protein',
    sub_categorie: 'whey protein',
    link:
        'https://www.amazon.de/gp/product/B000GISU1M/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=ghassanclassi-21&creative=6742&linkCode=as2&creativeASIN=B000GISU1M&linkId=23ebd4d6841b5608d4c0900ad0ea4947',
    html_code: `  <a
    target="_blank"
    rel="amazon"
    href="https://www.amazon.de/gp/product/B000QSO3FO/ref=as_li_tl?ie=UTF8&camp=1638&creative=6742&creativeASIN=B000QSO3FO&linkCode=as2&tag=ghassanclassi-21&linkId=1d2629d103d4d6aa52fb4e0fbb4f78b9"
  >
    <img
      alt=" Optimum Nutrition Gold Standard 100% Whey French Vanilla Crème Protein
  Powder 2.27kg"
      src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=DE&ASIN=B000QSO3FO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=ghassanclassi-21"
    />
  </a>`,
    review_1:
        'review 1 bla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjp',
    review_2:
        'review 2 bla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjp',
    description:
        'description bla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjp',
    product_photo_1:
        'https://cdn.gymbeam.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/u/n/untitled_design_3__1_2.png',
    product_photo_2: 'https://images-na.ssl-images-amazon.com/images/I/71mf0ICrMdL._SL1500_.jpg',
    product_photo_3:
        'https://i0.wp.com/zeesouq.com/wp-content/uploads/2018/12/Optimum-Nutrition-Gold-Standard-100-Whey-Double-Rich-Chocolate-5-lbs-74-Servings.jpg?fit=800%2C800&ssl=1',
    people_photo_1:
        'https://media1.popsugar-assets.com/files/thumbor/gNPMqznk7wYWIs_g8w9QWDeIg-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/18/748/n/1922729/tmp_g13kI4_210fdc7e610ec25d_GettyImages-891326080.jpg',
    people_photo_2: 'https://newarkironboundfitness.com/wp-content/uploads/2019/02/Depositphotos_82158134_m-2015.jpg',
    description_photo: 'https://is2.ecplaza.com/ecplaza2/products/3/37/374/1638463743/4298351.jpg',
}));

export const oneProdect = {
    views: 20,
    date: '01-07-2018',
    Updated: true,
    Updated_by: 'Issac',
    // we should add creatre id and updater id
    Updated_date: '22-10-2019',
    brand: 'Optimum Nutrition',
    source_origin: 'Amazon',
    creator_name: 'Ghassan Aldarwish',
    creator_icon: 'https://secure.webtoolhub.com/static/resources/icons/set70/155c896f.png',
    creator_title: 'Web Developer',
    price: '50$',
    order: '1',
    _id: uuid(),
    user_id: '56789',
    title: 'Whey Protein Powder 2.27kg',
    image:
        'https://cdn.gymbeam.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/u/n/untitled_design_3__1_2.png',
    sub_title: `Optimum Nutrition Gold Standard 100% Whey French Vanilla Crème
    Protein Powder 2.27kg`,
    categorie: 'protein',
    sub_categorie: 'whey protein',
    link:
        'https://www.amazon.de/gp/product/B000GISU1M/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=ghassanclassi-21&creative=6742&linkCode=as2&creativeASIN=B000GISU1M&linkId=23ebd4d6841b5608d4c0900ad0ea4947',
    html_code: `  <a
    target="_blank"
    rel="amazon"
    href="https://www.amazon.de/gp/product/B000QSO3FO/ref=as_li_tl?ie=UTF8&camp=1638&creative=6742&creativeASIN=B000QSO3FO&linkCode=as2&tag=ghassanclassi-21&linkId=1d2629d103d4d6aa52fb4e0fbb4f78b9"
  >
    <img
      alt=" Optimum Nutrition Gold Standard 100% Whey French Vanilla Crème Protein
  Powder 2.27kg"
      src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=DE&ASIN=B000QSO3FO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=ghassanclassi-21"
    />
  </a>`,
    review_1:
        'review 1 bla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjp',
    review_2:
        'review 2 bla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjpbla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjp',
    description:
        'description bla bla bla jnj  jhjo  ojo jkjkjk  jkpj  kpjkp jkp jkpj  kpj kpjkp jkpj  pkjk  jkpj  kpjpk jpk jkpj  k kpjk  jpkj  kpnk  lnk nkn kpn pkn kpn knk nkp nkp npk nkp nkp nkpn  kpn kpn kpnkp nkp nkp nkp nkp nkpn  k nkpn  pkn kpn kpnkp nbjob joö hjkb  kjb lbö bl  nklönl  ölkn  änjö  jäkl  nlkn  lnkpjkpjp',
    product_photo_1:
        'https://cdn.gymbeam.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/u/n/untitled_design_3__1_2.png',
    product_photo_2: 'https://images-na.ssl-images-amazon.com/images/I/71mf0ICrMdL._SL1500_.jpg',
    product_photo_3:
        'https://i0.wp.com/zeesouq.com/wp-content/uploads/2018/12/Optimum-Nutrition-Gold-Standard-100-Whey-Double-Rich-Chocolate-5-lbs-74-Servings.jpg?fit=800%2C800&ssl=1',
    people_photo_1:
        'https://media1.popsugar-assets.com/files/thumbor/gNPMqznk7wYWIs_g8w9QWDeIg-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/18/748/n/1922729/tmp_g13kI4_210fdc7e610ec25d_GettyImages-891326080.jpg',
    people_photo_2: 'https://newarkironboundfitness.com/wp-content/uploads/2019/02/Depositphotos_82158134_m-2015.jpg',
    description_photo: 'https://is2.ecplaza.com/ecplaza2/products/3/37/374/1638463743/4298351.jpg',
};

export default protein;
