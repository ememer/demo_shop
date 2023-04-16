export type BestSellerQuery = {
  products: {
    data: {
      attributes: {
        publishedAt: Date;
        Product: {
          title: string;
          stock: string;
          price: number;
          bestseller: boolean;
          configuration: {
            configuration_type: string;
            configuration_picture: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
          }[];
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
