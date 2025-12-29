export type RootStackParamList = {
  Shop: undefined;
  Splash: undefined;
  Onboarding: undefined;
  Auth: undefined;


  ProductDetails: {
    Product: {
      id: number;
      name: string;
      image: any;
    };
  };

  ProductCategory: {
    id: number,
    name: String,
    backgroundColor: String,
    image: String,
    Product: []

  }
};
