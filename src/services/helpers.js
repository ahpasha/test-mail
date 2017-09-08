export function onlyNumbers(key) {
  let regex = /[0-9]/;
  let isNumber = true;
  let char = String.fromCharCode(key);

  if(!regex.test(char) ) {
    isNumber = false;
  }
  return isNumber
}

export function rubDeclension(count) {
  let options = ['рублей', 'рубль', 'рубля'];
  let declension;

 if (count === 0 || count % 100 > 10 && count % 100 < 21) {
    declension = options[0]
  } else {
   if (count % 10 === 0 || count % 10 > 4) {
     declension = options[0]
   }
   if (count % 10 === 1) {
     declension = options[1]
   }
   if (count % 10 > 1 && count % 10 < 5 ) {
     declension = options[2]
   }
 }
 return declension
}


export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export function validatePopupInput(object) {
  let {num, sum} = object;
  let result = true;

  if (num.length < 10 || sum > 5000 || sum <= 0) {
    result =  false
  }
  return result
}