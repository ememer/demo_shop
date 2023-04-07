export type ProductsQuery = {
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
          };
        };
        product_images: {
          data: {
            attributes: {
              url: string;
              alternativeText: string;
              formats?: unknown;
            };
          };
        };
        product_configuration: {
          data: {
            attributes: {
              configuration: string;
              configuration_picture?: {
                data: {
                  attributes: {
                    formats: unknown;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};
