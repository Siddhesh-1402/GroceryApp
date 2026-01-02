export type RootStackParamList = {
  Shop: undefined;
  Splash: undefined;
  Onboarding: undefined;
  Auth: undefined;
  orderAccept: undefined
  errorScreen: undefined
 

  ProductDetails: {
    Product: {
      id: number;
      name: string;
      image: any;
      price: number
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
