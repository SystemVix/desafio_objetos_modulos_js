export function shipment(order)
{
   const value = order.basic;
   if (value < 100.00)
   {
      return 20.00;
   }
   else if (value < 200.00)
   {
      return 12.00;
   }
   else
   {
      return 0.0;
   }
}

