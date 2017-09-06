export function onlyNumbers(event) {
  let regex = /[0-9]|\./;
  let key = event.keyCode || event.which;
  let isNumber = true;
  key = String.fromCharCode( key );

  if(!regex.test(key) ) {
    isNumber = false;
  }
  return isNumber
};
