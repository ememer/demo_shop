export type ProductStoresQuery = {
  productsStores: {
    data: {
      attributes: {
        leftImage: {
          title: string;
          image: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
        rightImage: {
          title: string;
          image: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    }[];
  };
};
