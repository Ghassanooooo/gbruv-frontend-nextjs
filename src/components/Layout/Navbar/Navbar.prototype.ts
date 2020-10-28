import { v4 as uuid } from "uuid";
import { LinkType } from "./Navbar.types";

export const proteinOptions = [
    {
        key: uuid(),
        title: "whey protein",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/protein/whey-protein",
    },
    {
        key: uuid(),
        title: "casein protein",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/protein/casein-protein",
    },
    {
        key: uuid(),
        title: "mass gainers",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/protein/mass-gainers",
    },
    {
        key: uuid(),
        title: "plant protein",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/protein/plant-protein",
    },
];

export const performanceOptions = [
    {
        key: uuid(),
        title: "pre workout",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/performance/pre-workout",
    },
    {
        key: uuid(),
        title: "post workout recovery",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/performance/post-workout-recovery",
    },
    {
        key: uuid(),
        title: "energy endurance",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/performance/energy-endurance",
    },
    {
        key: uuid(),
        title: "creatine",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/performance/creatine",
    },
    {
        key: uuid(),
        title: "amino & bcaa",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/performance/amino-and-bcaa",
    },
];

export const weightManagementOptions = [
    {
        key: uuid(),
        title: "fat burners",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/weight-management/fat-burners",
    },
    {
        key: uuid(),
        title: "l-carnitine, keto & cla",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/weight-management/l-carnitine-keto-and-cla",
    },
    {
        key: uuid(),
        title: "low carb protein",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/weight-management/low-carb-protein",
    },
];

export const vitaminsAndHealthOptions = [
    {
        key: uuid(),
        title: "multivitamins",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/vitamins-and-health/multivitamins",
    },
    {
        key: uuid(),
        title: "fish oil & omegas",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/vitamins-and-health/fish-oil-and-omegas",
    },
    {
        key: uuid(),
        title: "greens food",
        affiliate: true,
        type: LinkType.Link,
        path: "/supplements/vitamins-and-health/greens-food",
    },
];

export const supplementsOptions = [
    {
        key: uuid(),
        title: "protein",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/supplements/protein",
        options: proteinOptions,
    },
    {
        key: uuid(),
        title: "performance",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/supplements/performance",
        options: performanceOptions,
    },
    {
        key: uuid(),
        title: "weight management",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/supplements/weight-management",
        options: weightManagementOptions,
    },
    {
        key: uuid(),
        title: "vitamins & health",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/supplements/vitamins-and-health",
        options: vitaminsAndHealthOptions,
    },
];

export const mensClothesOptions = [
    {
        key: uuid(),
        title: "baselayers",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/baselayers",
    },
    {
        key: uuid(),
        title: "hoodies & jackets",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/hoodies-and-jackets",
    },
    {
        key: uuid(),
        title: "shorts",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/shorts",
    },
    {
        key: uuid(),
        title: "pants",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/pants",
    },
    {
        key: uuid(),
        title: "stringers",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/stringers",
    },
    {
        key: uuid(),
        title: "t-Shirts & tops",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/t-shirts-and-tops",
    },
    {
        key: uuid(),
        title: "sleeveless & tank tops",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/sleeveless-and-tank-tops",
    },
    {
        key: uuid(),
        title: "underwear & socks",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/clothes/underwear-and-socks",
    },
];

export const mensAccessoriesOptions = [
    {
        key: uuid(),
        title: "belts",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/belts",
    },
    {
        key: uuid(),
        title: "sunglasses & eyewear",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/sunglasses-and-eyewear",
    },
    {
        key: uuid(),
        title: "scarves & wraps",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/scarves-and-wraps",
    },
    {
        key: uuid(),
        title: "gloves & mittens",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/gloves-and-mittens",
    },
    {
        key: uuid(),
        title: "hats & caps",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/hats-and-caps",
    },
    {
        key: uuid(),
        title: "earmuffs",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/earmuffs",
    },
    {
        key: uuid(),
        title: "handbag ",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/handbag ",
    },
    {
        key: uuid(),
        title: "keyrings & keychains",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/keyrings-and-keychains",
    },
    {
        key: uuid(),
        title: "wallets & card cases",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/wallets-and-card-cases",
    },
    {
        key: uuid(),
        title: "suspenders",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/accessories/suspenders",
    },
];

export const mensSportShoesOptions = [
    {
        key: uuid(),
        title: "running",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/sport-shoes/running",
    },
    {
        key: uuid(),
        title: "fitness & body building",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/sport-shoes/fitness-and-body-building",
    },
    {
        key: uuid(),
        title: "long distance running",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/sport-shoes/long-distance-running",
    },
    {
        key: uuid(),
        title: "light weight",
        affiliate: true,
        type: LinkType.Link,
        path: "/mens/sport-shoes/light-weight",
    },
];

export const mensOptions = [
    {
        key: uuid(),
        title: "clothes",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/mens/clothes",
        options: mensClothesOptions,
    },
    {
        key: uuid(),
        title: "accessories",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/mens/accessories",
        options: mensAccessoriesOptions,
    },
    {
        key: uuid(),
        title: "sport shoes",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/mens/sport-shoes",
        options: mensSportShoesOptions,
    },
];
export const womensClothesOptions = [
    {
        key: uuid(),
        title: "crop tops",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/crop-tops",
    },
    {
        key: uuid(),
        title: "hoodies & jackets",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/hoodies-and-jackets",
    },
    {
        key: uuid(),
        title: "shorts",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/shorts",
    },
    {
        key: uuid(),
        title: "pants & leggings",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/pants-and-leggings",
    },
    {
        key: uuid(),
        title: "swimwear",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/swimwear",
    },
    {
        key: uuid(),
        title: "t-Shirts & tops",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/t-shirts-and-tops",
    },
    {
        key: uuid(),
        title: "sleeveless & tank tops",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/sleeveless-and-tank-tops",
    },
    {
        key: uuid(),
        title: "underwear & socks",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/clothes/underwear-and-socks",
    },
];
export const womensAccessoriesOptions = [
    {
        key: uuid(),
        title: "sunglasses & eyewear",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/sunglasses-and-eyewear",
    },
    {
        key: uuid(),
        title: "scarves & wraps",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/scarves-and-wraps",
    },
    {
        key: uuid(),
        title: "gloves & mittens",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/gloves-and-mittens",
    },
    {
        key: uuid(),
        title: "hats & caps",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/hats-and-caps",
    },
    {
        key: uuid(),
        title: "earmuffs",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/earmuffs",
    },
    {
        key: uuid(),
        title: "handbag ",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/handbag ",
    },
    {
        key: uuid(),
        title: "keyrings & keychains",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/keyrings-and-keychains",
    },
    {
        key: uuid(),
        title: "wallets & card cases",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/accessories/wallets-and-card-cases",
    },
];
export const womensSportShoesOptions = [
    {
        key: uuid(),
        title: "running",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/sport-shoes/running",
    },
    {
        key: uuid(),
        title: "fitness",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/sport-shoes/fitness",
    },
    {
        key: uuid(),
        title: "long distance running",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/sport-shoes/long-distance-running",
    },
    {
        key: uuid(),
        title: "light weight",
        affiliate: true,
        type: LinkType.Link,
        path: "/womens/sport-shoes/light-weight",
    },
];

export const womensOptions = [
    {
        key: uuid(),
        title: "clothes",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/womens/clothes",
        options: womensClothesOptions,
    },
    {
        key: uuid(),
        title: "accessories",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/womens/accessories",
        options: womensAccessoriesOptions,
    },
    {
        key: uuid(),
        title: "sport shoes",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/womens/sport-shoes",
        options: womensSportShoesOptions,
    },
];

export const navbarConfig = [
    {
        key: uuid(),
        title: "supplements",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/supplements",
        options: supplementsOptions,
    },
    {
        key: uuid(),
        title: "mens",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/mens",
        options: mensOptions,
    },
    {
        key: uuid(),

        title: "womens",
        affiliate: true,
        type: LinkType.Collapse,
        path: "/womens",
        options: womensOptions,
    },
];
