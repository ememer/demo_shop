export type BestSellerQuery = {
  products: {
    data: {
      attributes: {
        Product: {
          title: string;
          stock: string;
          price: number;
          bestseller: boolean;
          phone_models: {
            data: {
              attributes: {
                phone_model: string;
              };
            }[];
          };
          category: {
            data: {
              attributes: {
                name: string;
              };
            };
          };
          photos: {
            data: {
              attributes: {
                alternativeText: string;
                url: string;
              };
            }[];
          };
        };
      };
    }[];
  };
};
