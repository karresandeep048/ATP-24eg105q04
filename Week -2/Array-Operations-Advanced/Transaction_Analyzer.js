//Bank Transaction Analyzer
    const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//1. filter() all credit transactions
let credit=transactions.filter(transaction=>transaction.type=="credit")
console.log(credit)
//2. map() to extract only transaction amounts
let tamount=transactions.map(transaction=> transaction.amount)
    
console.log(tamount)
//3. reduce() to calculate final account balance
const finalBalance = transactions.reduce(
  (bal, t) => t.type === "credit" ? bal + t.amount : bal - t.amount,
  0
);
console.log(finalBalance)
// 4. find() the first debit transaction
let transaction=transactions.find(transaction=>transaction.type=="debit")
console.log(transaction)
//5. findIndex() of transaction with amount 10000
let index=transactions.findIndex(transaction=>transaction.amount==10000)
console.log(index)