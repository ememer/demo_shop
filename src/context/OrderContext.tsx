import { createContext } from 'react';

import { OrderTypes } from '../types/OrderTypes';

export const OrderContext = createContext<OrderTypes | null>(null);
