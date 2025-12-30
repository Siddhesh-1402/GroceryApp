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
    name: string,
    backgroundColor: string,
    image: any,
    Product: Array<{
      id: number;
      name: string;
      price: number;
      image: string;
      categoryId: number;
    }>
  }
};
