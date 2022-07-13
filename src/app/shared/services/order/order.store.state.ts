import { Order } from "src/app/features/order/types/order";


export class OrderState {

  orders: Order[] = [];
  filterOrder: {cuisine: string, type: string,  value: string} = {cuisine: '', type: '', value: ''}
}
