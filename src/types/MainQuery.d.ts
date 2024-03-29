export type MainQuery = {
  products: {
    data: {
      attributes: {
        name: string;
        price: number;
        model_products: {
          data: {
            attributes: {
              product_model: string;
            };
          }[];
        };
        product_images: {
          data: {
            attributes: {
              url: string;
              alternativeText: string;
              formats?: {
                [key: string]: any;
              };
            };
          }[];
        };
        product_configurations: {
          data: {
            attributes: {
              configuration: string;
              configuration_picture?: {
                data: {
                  attributes: {
                    formats?: {
                      [key: string]: any;
                    };
                  };
                };
              };
            };
          }[];
        };
      };
    }[];
  };
};
