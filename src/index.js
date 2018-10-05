module.exports = function getZerosCount(number, base) {
	
  function withoutRest(base, theBiggerMultiplyMember){   // How many times does base divide by theBiggerMultiplyMember?
    let  counter = 0;
    let i = 1;
   
    while (i){
      i = 0;
      if (base % theBiggerMultiplyMember == 0){
        counter++; 
		base = base / theBiggerMultiplyMember; 
		i = 1; 
	  }
    }
    return counter;
  }

  function simplicity(N){ // Find prime number
    let counter = 0;
    for (let j = 2; j <= Math.sqrt(N); j++) 
	  if (N % j == 0) counter++;

    if (counter == 0) return 1;
      else return -1;
  }
	
  function multiplyMembers(N) { //Look for prime divider for base
    let multiply = [];
    let counter = 0;
    
	for (let i=2; i <= N / 2; i++) 
	  if ( (N % i) == 0 && simplicity(i) == 1 )  
	    multiply[counter++] = i;

    if (counter == 0) multiply[0] = N;

   return multiply;
  }

  let array = multiplyMembers(base); // All of prime divider for base
  let possibleZeros = [];

  for (let i = 0; i < array.length; i++){
    let zero_count = 0;
    let number2018 = number;

    while (Math.floor(number2018) > 0){
      number2018 = number2018 / array[i];
      zero_count = zero_count + Math.floor(number2018);
    }
    possibleZeros[i] = Math.floor( zero_count / withoutRest( base, array[i]) ) ;
  }
  let min = possibleZeros[0];
 
  for  (let i = 1; i < possibleZeros.length; i++)
    if ( min > possibleZeros[i] ) min = possibleZeros[i];
 
  return min;
}