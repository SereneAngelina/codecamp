// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
// Otherwise, return change in coin and bills, sorted in highest to lowest order.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Global Object
// Answer:

function checkCashRegister(price, cash, cid) {
  var change;
  change = (cash * 100) - (price * 100);
  var denomination = { "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000 };

  var total = cid.reduce(function(acc, curr){
        var res = acc + curr[1];
        return res;
  },0);

  var cashindraw = cid.reverse().map(function(elem){
    return [elem[0], Math.round(elem[1] * 100)];
  });

  total *= 100;
  if(change > total)
     {
     return "Insufficient Funds";
     }
  if(change == total)
    {
      return "Closed";
    }


  var partial;
  var changeDue;
  changeDue = cashindraw.reduce(function(acc, elem){
        partial = Math.min(elem[1], (Math.floor(change / denomination[elem[0]]) * denomination[elem[0]]));
        if ( partial > 0 ) {
          change -= partial;
          acc.push([elem[0], partial / 100]);
        }
    return acc;
    },[]);


  if (change > 0 ) return "Insufficient Funds";

  return changeDue;
  // Here is your change, ma'am.

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
