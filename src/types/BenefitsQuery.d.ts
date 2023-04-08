export type BenefitQuery = {
  benefitsSections: {
    data: {
      attributes: {
        Shipping: {
          title: string;
          description: string;
        };
        Support: {
          title: string;
          description: string;
        };
        Returns: {
          title: string;
          description: string;
        };
      };
    }[];
  };
};
