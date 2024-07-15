import * as shipserv from "./shipping-service.js";

export function total(order)
{
   const total = order.basic - ((order.discount / 100) * order.basic);

   return total + shipserv.shipment(order);
}