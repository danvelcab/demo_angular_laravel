
export class OrderHelper {
    static order(orders: any, field: string) {
        for (let f in orders ) {
            if (field === f) {
                if (orders[f] === '+') {
                    orders[f] = '-';
                } else {
                    orders[f] = '+';
                }
            } else {
                orders[f] = null;
            }
        }
        return orders;
    }
}
