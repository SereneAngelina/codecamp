// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.charCodeAt()
// String.fromCharCode()

//Answer:

function rot13(str) { // LBH QVQ VG!
   str2 = [];
  var count=0;
  while(count < str.length)
    {
      var alpnum = str.charCodeAt(count);
      if(alpnum >= 65 && alpnum <= 77)
        {
          str2.push(String.fromCharCode(alpnum + 13));
          count++;

        }
      else if(alpnum >= 78 && alpnum <= 90)
        {
          str2.push(String.fromCharCode(alpnum - 13));
          count++;

        }
      else
        {
          str2.push(str[count]);
          count++;
        }


    }
  str2 = str2.join("");

  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
