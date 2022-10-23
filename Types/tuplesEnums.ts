// const stuff: (string | number)[] = ["asd", "asdsadsa", "dsadsa", 2];

// const color: number[] = [23, 45, 12, 45];
/**
 * tuples an array that have validation on length
 */
const color: [number, number, number] = [255, 0, 45];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, "OK"];
// goodRes[0] = "200";
/**
 * limitation on tuples, when it added with this it would be successfull
 * even if u pop it will not use the tuples anymore, this question have been quesionate on stackoverflow community
 *  */
// goodRes.push(123);
// goodRes.pop();
// goodRes.pop();
// goodRes.pop();

const response: HttpResponse[] = [[404, "Not Found"], [200, "OK"]]

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
};

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234,
};

ArrowKeys.LEFT