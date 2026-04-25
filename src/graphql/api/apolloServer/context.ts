import { NextRequest } from 'next/server';
import { BaseContext } from '@apollo/server';
import Orders from './dataSources/orders';
import Menu from './dataSources/menu';
import MenuAdmin from './dataSources/menuAdmin';
import Kitchen from './dataSources/kitchen';
import Reports from './dataSources/reports';
import Payments from './dataSources/payments';

export default class ContextValue implements BaseContext {
  public req: NextRequest;
  public res: Response | null;
  public dataSources: {
    orders: Orders;
    menu: Menu;
    menuAdmin: MenuAdmin;
    kitchen: Kitchen;
    reports: Reports;
    payments: Payments;
  };

  constructor({ req, res }: { req: NextRequest; res: Response | null }) {
    this.req = req;
    this.res = res;
    this.dataSources = {
      orders: new Orders({ contextValue: this }),
      menu: new Menu({ contextValue: this }),
      menuAdmin: new MenuAdmin({ contextValue: this }),
      kitchen: new Kitchen({ contextValue: this }),
      reports: new Reports({ contextValue: this }),
      payments: new Payments({ contextValue: this }),
    };
  }
}
