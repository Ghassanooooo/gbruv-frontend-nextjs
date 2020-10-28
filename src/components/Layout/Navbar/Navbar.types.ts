export type NavbarItemsType = "modal" | "link" | "button" | "collapse";
export interface NavbarConfig {
    key: string;
    title: string;
    affiliate: boolean;
    type: NavbarItemsType;
    path: string;
    options: [];
}

export enum LinkType {
    Link = "link",
    Button = "button",
    Collapse = "collapse",
}

export enum InfoPageEnum {
    About = "/info/about",
    QAndA = "/info/faq",
    Affiliate = "/info/affiliate",
    OurTeam = "/info/our-team",
    PrivacyPolicy = "/info/privacy-policy",
    Contact = "/info/contact",
}

export enum PageEnum {
    // UxManager = 'ux-manager',
    //  ContentManager = '/content-manager',
    WheyProtein = "/supplements/protein/whey-protein",
    // Modal = 'modal',
    //  Link = 'link',
    // Button = 'button',
    // Collapse = 'collapse',
    // GoogleCallbackToken = '/auth/oauth2/callback/accessToken/',
    // BackendBase = '/api/v1',
    WorkoutPlan = "/WorkoutPlan",
    Blogs = "/blogs",
    OurCommunity = "/our-community",
    Sarms = "/sarms",
    Supplements = "/supplements",
    // Home = '/',
    Account = "/account",
    SupplementReview = "/supplements/review",
    FishOil = "/supplements/vitamins-and-health/fish-oil-and-omegas",
    Multivitamins = "/supplements/vitamins-and-health/multivitamins",
    LCarnitine = "/supplements/weight-management/l-carnitine",
    FatBurners = "/supplements/weight-management/fat-burners",
    PostWorkoutRecovery = "/supplements/performance/post-workout-recovery",
    PreWorkout = "/supplements/performance/pre-workout",
    CaseinProtein = "/supplements/protein/casein-protein",
    GreensFood = "/supplements/vitamins-and-health/greens-food",
    SupplementsPerformanceEnergyEndurance = "/supplements/performance/energy-endurance",
    VitaminsAndHealth = "/supplements/vitamins-and-health",
    WeightManagement = "/supplements/weight-management",
    Performance = "/supplements/performance",
    Protein = "/supplements/protein",
    WeightGainersProtin = "/supplements/protein/weight-gainers",
    MassGainers = "/supplements/protein/mass-gainers",
    MealReplacementsProtin = "/supplements/protein/meal-replacements",
    ProteinBarsProtin = "/supplements/protein/protein-bars",
    PlantProtein = "/supplements/protein/plant-protein",
    Creatine = "/supplements/performance/creatine",
    AminoAndBcaa = "/supplements/performance/amino-and-bcaa",
    LCarnitineKetoAndCla = "/supplements/weight-management/l-carnitine-keto-and-cla",
    LowCarbProtein = "/supplements/weight-management/low-carb-protein",
    Womens = "/womens",
    WomensClothes = "/womens/clothes",
    WomensClothesPantsAndLeggings = "/womens/clothes/pants-and-leggings",
    WomensClothesCropTops = "/womens/clothes/crop-tops",
    WomensClothesHoodiesAndJackets = "/womens/clothes/hoodies-and-jackets",
    WomensClothesShorts = "/womens/clothes/shorts",
    WomensClothesSportsBras = "/womens/clothes/sports-bras",
    WomensClothesSwimwear = "/womens/clothes/swimwear",
    WomensClothesTShirtsAndTops = "/womens/clothes/t-shirts-and-tops",
    WomensClothesSleevelessandTankTops = "/womens/clothes/sleeveless-and-tank-tops",
    WomensClothesUnderwearAndSocks = "/womens/clothes/underwear-and-socks",

    WomensAccessories = "/womens/accessories",
    WomensAccessoriesSunglassesAndEyewearAccessories = "/womens/accessories/sunglasses-and-eyewear",
    WomensAccessoriesScarvesAndWraps = "/womens/accessories/scarves-and-wraps",
    WomensAccessoriesGlovesAndMittens = "/womens/accessories/gloves-and-mittens",
    WomensAccessoriesHatsAndCaps = "/womens/accessories/hats-and-caps",
    WomensAccessoriesEarmuffs = "/womens/accessories/earmuffs",
    WomensAccessoriesHandbagAccessories = "/womens/accessories/handbag-accessories",
    WomensAccessoriesKeyringsAndKeychains = "/womens/accessories/keyrings-and-keychains",
    WomensAccessoriesWalletsAndCardCases = "/womens/accessories/wallets-and-card-cases",
    WomensAccessoriesHandBag = "/womens/accessories/handbag",
    WomensSportShoes = "/womens/sport-shoes",

    WomensSportShoesRunning = "/womens/sport-shoes/running",
    WomensSportShoesFitness = "/womens/sport-shoes/fitness",
    WomensSportShoesLongDistanceRunning = "/womens/sport-shoes/long-distance-running",
    WomensSportShoesLightWeigt = "/womens/sport-shoes/light-weight",
    Mens = "/mens",
    MensClothes = "/mens/clothes",
    MensClothesBaselayers = "/mens/clothes/baselayers",
    MensClothesHoodiesAndJackets = "/mens/clothes/hoodies-and-jackets",
    MensClothesShorts = "/mens/clothes/shorts",
    MensClothesPants = "/mens/clothes/pants",
    MensClothesStringers = "/mens/clothes/stringers",
    MensClothesTShirtsAndTops = "/mens/clothes/t-shirts-and-tops",
    MensClothesSleevelessandTankTops = "/mens/clothes/sleeveless-and-tank-tops",
    MensClothesUnderwearAndSocks = "/mens/clothes/underwear-and-socks",
    MensAccessoriesHandBag = "/mens/accessories/handbag",
    MensAccessories = "/mens/accessories",
    MensAccessoriesBelts = "/mens/accessories/belts",
    MensAccessoriesSunglassesAndEyewearAccessories = "/mens/accessories/sunglasses-and-eyewear",
    MensAccessoriesScarvesAndWraps = "/mens/accessories/scarves-and-wraps",

    MensAccessoriesGlovesAndMittens = "/mens/accessories/gloves-and-mittens",
    MensAccessoriesHatsAndCaps = "/mens/accessories/hats-and-caps",
    MensAccessoriesEarmuffs = "/mens/accessories/earmuffs",
    MensAccessoriesHandbagAccessories = "/mens/accessories/handbag-accessories",
    MensAccessoriesKeyringsAndKeychains = "/mens/accessories/keyrings-and-keychains",
    MensAccessoriesWalletsAndCardCases = "/mens/accessories/wallets-and-card-cases",
    MensAccessoriesSuspenders = "/mens/accessories/suspenders",

    MensSportShoes = "/mens/sport-shoes",
    MensSportShoesLightWeigt = "/mens/sport-shoes/light-weight",

    MensSportShoesRunning = "/mens/sport-shoes/running",
    MensSportShoesFitnessAndBodyBuilding = "/mens/sport-shoes/fitness-and-body-building",
    MensSportShoesLongDistanceRunning = "/mens/sport-shoes/long-distance-running",
}

export enum ActivePathes {
    Home = "/",
    WheyProtein = "/supplements/protein/whey-protein",
    FishOil = "/supplements/vitamins-and-health/fish-oil-and-omegas",
    Multivitamins = "/supplements/vitamins-and-health/multivitamins",
    LCarnitine = "/supplements/weight-management/l-carnitine",
    FatBurners = "/supplements/weight-management/fat-burners",
    PostWorkoutRecovery = "/supplements/performance/post-workout-recovery",
    PreWorkout = "/supplements/performance/pre-workout",
    CaseinProtein = "/supplements/protein/casein-protein",
    GreensFood = "/supplements/vitamins-and-health/greens-food",
    SupplementsPerformanceEnergyEndurance = "/supplements/performance/energy-endurance",

    WeightGainersProtin = "/supplements/protein/weight-gainers",
    MassGainers = "/supplements/protein/mass-gainers",
    MealReplacementsProtin = "/supplements/protein/meal-replacements",
    ProteinBarsProtin = "/supplements/protein/protein-bars",
    PlantProtein = "/supplements/protein/plant-protein",
    Creatine = "/supplements/performance/creatine",
    AminoAndBcaa = "/supplements/performance/amino-and-bcaa",
    LCarnitineKetoAndCla = "/supplements/weight-management/l-carnitine-keto-and-cla",
    LowCarbProtein = "/supplements/weight-management/low-carb-protein",

    WomensClothesPantsAndLeggings = "/womens/clothes/pants-and-leggings",
    WomensClothesCropTops = "/womens/clothes/crop-tops",
    WomensClothesHoodiesAndJackets = "/womens/clothes/hoodies-and-jackets",
    WomensClothesShorts = "/womens/clothes/shorts",
    WomensClothesSportsBras = "/womens/clothes/sports-bras",
    WomensClothesSwimwear = "/womens/clothes/swimwear",
    WomensClothesTShirtsAndTops = "/womens/clothes/t-shirts-and-tops",
    WomensClothesSleevelessandTankTops = "/womens/clothes/sleeveless-and-tank-tops",
    WomensClothesUnderwearAndSocks = "/womens/clothes/underwear-and-socks",

    WomensAccessoriesSunglassesAndEyewearAccessories = "/womens/accessories/sunglasses-and-eyewear",
    WomensAccessoriesScarvesAndWraps = "/womens/accessories/scarves-and-wraps",
    WomensAccessoriesGlovesAndMittens = "/womens/accessories/gloves-and-mittens",
    WomensAccessoriesHatsAndCaps = "/womens/accessories/hats-and-caps",
    WomensAccessoriesEarmuffs = "/womens/accessories/earmuffs",
    WomensAccessoriesHandbagAccessories = "/womens/accessories/handbag-accessories",
    WomensAccessoriesKeyringsAndKeychains = "/womens/accessories/keyrings-and-keychains",
    WomensAccessoriesWalletsAndCardCases = "/womens/accessories/wallets-and-card-cases",
    WomensAccessoriesHandBag = "/womens/accessories/handbag",

    WomensSportShoesRunning = "/womens/sport-shoes/running",
    WomensSportShoesFitness = "/womens/sport-shoes/fitness",
    WomensSportShoesLongDistanceRunning = "/womens/sport-shoes/long-distance-running",
    WomensSportShoesLightWeigt = "/womens/sport-shoes/light-weight",

    MensClothesBaselayers = "/mens/clothes/baselayers",
    MensClothesHoodiesAndJackets = "/mens/clothes/hoodies-and-jackets",
    MensClothesShorts = "/mens/clothes/shorts",
    MensClothesPants = "/mens/clothes/pants",
    MensClothesStringers = "/mens/clothes/stringers",
    MensClothesTShirtsAndTops = "/mens/clothes/t-shirts-and-tops",
    MensClothesSleevelessandTankTops = "/mens/clothes/sleeveless-and-tank-tops",
    MensClothesUnderwearAndSocks = "/mens/clothes/underwear-and-socks",
    MensAccessoriesHandBag = "/mens/accessories/handbag",

    MensAccessoriesBelts = "/mens/accessories/belts",
    MensAccessoriesSunglassesAndEyewearAccessories = "/mens/accessories/sunglasses-and-eyewear",
    MensAccessoriesScarvesAndWraps = "/mens/accessories/scarves-and-wraps",

    MensAccessoriesGlovesAndMittens = "/mens/accessories/gloves-and-mittens",
    MensAccessoriesHatsAndCaps = "/mens/accessories/hats-and-caps",
    MensAccessoriesEarmuffs = "/mens/accessories/earmuffs",
    MensAccessoriesHandbagAccessories = "/mens/accessories/handbag-accessories",
    MensAccessoriesKeyringsAndKeychains = "/mens/accessories/keyrings-and-keychains",
    MensAccessoriesWalletsAndCardCases = "/mens/accessories/wallets-and-card-cases",
    MensAccessoriesSuspenders = "/mens/accessories/suspenders",

    MensSportShoesLightWeigt = "/mens/sport-shoes/light-weight",

    MensSportShoesRunning = "/mens/sport-shoes/running",
    MensSportShoesFitnessAndBodyBuilding = "/mens/sport-shoes/fitness-and-body-building",
    MensSportShoesLongDistanceRunning = "/mens/sport-shoes/long-distance-running",
}

export enum NavBarCategories {
    Supplements = "supplements",
    Mens = "mens",
    Womens = "womens",
}
export enum SupplementsCategories {
    Protein = "protein",
    WeightManagement = "weight-management",
    Performance = "performance",
    VitaminsAndHealth = "vitamins-and-health",
}
// sum//
export enum SupplementsProteinCategories {
    Whey = "whey-protein",
    Casein = "casein-protein",

    MassGainers = "mass-gainers",

    Plant = "plant-protein",
}
export enum SupplementsWeightManagementCategories {
    LCarnitine = "l-carnitine",
    FatBurners = "fat-burners",
    LCarnitineKetoAndCla = "l-carnitine-keto-and-cla",
    LowCarbProtein = "low-carb-protein",
}
export enum SupplementsPerformanceCategories {
    PostWorkoutRecovery = "post-workout-recovery",
    PreWorkout = "pre-workout",
    Creatine = "creatine",
    AminoAndBcaa = "amino-and-bcaa",
    EnergyEndurance = "energy-endurance",
}
export enum SupplementsVitaminsAndHealthCategories {
    FishOil = "fish-oil-and-omegas",
    Multivitamins = "multivitamins",
    GreensFood = "greens-food",
}

// end Sub //

export enum MensCategories {
    Clothes = "clothes",
    Accessories = "accessories",
    SportShoes = "sport-shoes",
}

export enum WomensCategories {
    Clothes = "clothes",
    Accessories = "accessories",
    SportShoes = "sport-shoes",
}

export enum MensClothesCategories {
    Baselayers = "baselayers",
    HoodiesAndJackets = "hoodies-and-jackets",
    Shorts = "shorts",
    Pants = "pants",
    Stringers = "stringers",
    TShirtsAndTops = "t-shirts-and-tops",
    SleevelessandTankTops = "sleeveless-and-tank-tops",
    UnderwearAndSocks = "underwear-and-socks",
}
export enum MensAccessoriesCategories {
    HandBag = "handbag",
    Belts = "belts",
    SunglassesAndEyewearAccessories = "sunglasses-and-eyewear",
    ScarvesAndWraps = "scarves-and-wraps",
    GlovesAndMittens = "gloves-and-mittens",
    HatsAndCaps = "hats-and-caps",
    Earmuffs = "earmuffs",
    HandbagAccessories = "handbag-accessories",
    KeyringsAndKeychains = "keyrings-and-keychains",
    WalletsAndCardCases = "wallets-and-card-cases",
    Suspenders = "suspenders",
}
export enum MensSportShoesCategories {
    LightWeigt = "light-weight",

    Running = "running",
    FitnessAndBodyBuilding = "fitness-and-body-building",
    LongDistanceRunning = "long-distance-running",
}

export enum WomensClothesCategories {
    PantsAndLeggings = "pants-and-leggings",
    CropTops = "crop-tops",
    HoodiesAndJackets = "hoodies-and-jackets",
    Shorts = "shorts",
    SportsBras = "sports-bras",
    Swimwear = "swimwear",
    TShirtsAndTops = "t-shirts-and-tops",
    SleevelessandTankTops = "sleeveless-and-tank-tops",
    UnderwearAndSocks = "underwear-and-socks",
}
export enum WomensAccessoriesCategories {
    SunglassesAndEyewear = "sunglasses-and-eyewear",
    ScarvesAndWraps = "scarves-and-wraps",
    GlovesAndMittens = "gloves-and-mittens",
    HatsAndCaps = "hats-and-caps",
    Earmuffs = "earmuffs",
    HandbagAccessories = "handbag-accessories",
    KeyringsAndKeychains = "keyrings-and-keychains",
    WalletsAndCardCases = "wallets-and-card-cases",
    HandBag = "handbag",
}
export enum WomensSportShoesCategories {
    Running = "running",
    Fitness = "fitness",
    LongDistanceRunning = "long-distance-running",
    LightWeigt = "light-weight",
}

export type PageType =
    | "home"
    | "supplements"
    | "review"
    | "vitamins-and-health"
    | "fish-oil"
    | "weight-management"
    | "l-carnitine"
    | "fat-burners"
    | "performance"
    | "pre-workout"
    | "protein"
    | "casein-protein"
    | "whey-protein"
    | "weight-gainers"
    | "meal-replacements"
    | "protein-bars"
    | "womens"
    | "clothes"
    | "pants-and-leggings"
    | "crop-tops"
    | "hoodies-and-jackets"
    | "shorts"
    | "sports-bras"
    | "swimwear"
    | "t-shirts-and-tops"
    | "sleeveless-and-tank-tops"
    | "underwear-and-socks"
    | "accessories"
    | "sunglasses-and-eyewear-accessories"
    | "scarves-and-wraps"
    | "gloves-and-mittens"
    | "hats-and-caps"
    | "earmuffs"
    | "handbag-accessories"
    | "keyrings-and-keychains"
    | "wallets-and-card-cases"
    | "mens"
    | "baselayers"
    | "hoodies-and-jackets"
    | "shorts"
    | "pants"
    | "stringers"
    | "t-shirts-and-tops"
    | "sleeveless-and-tank-tops"
    | "underwear-and-socks"
    | "belts"
    | "handbag-accessories"
    | "suspenders";
