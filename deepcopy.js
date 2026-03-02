const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
let copyorder=structuredClone(order)
copyorder.customer.address.city="knr"
copyorder.items[0].price=24444
console.log(order)
console.log(copyorder)
