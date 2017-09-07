export function onlyNumbers(event) {
  let regex = /[0-9]/;
  let key = event.keyCode || event.which;
  let isNumber = true;
  key = String.fromCharCode( key );

  if(!regex.test(key) ) {
    isNumber = false;
  }
  return isNumber
};

export function rubDeclension(count) {
  let options = ['рублей', 'рубль', 'рубля'];
  let declension;

 if (count === 0 || count % 100 > 10 && count % 100 < 21) {
    declension = 'рублей'
  } else {
   if (count % 10 === 0 || count % 10 > 4) {
     declension = 'рублей'
   }
   if (count % 10 === 1) {
     declension = 'рубль'
   }
   if (count % 10 > 1 && count % 10 < 5 ) {
     declension = 'рубля'
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