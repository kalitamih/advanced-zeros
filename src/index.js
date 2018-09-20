module.exports = function getZerosCount(number, base) {
	
function withoutRest( base, theBiggerMultiplyMember)
{
  // How many times does base divide by theBiggerMultiplyMember?
  
  var counter = 0;
  var i = 1;

  while (i)
  {
  i = 0;

  if ( base % theBiggerMultiplyMember == 0 ) { counter++; base = base / theBiggerMultiplyMember; i = 1; }

  }

  return counter;

  }



function simplicity(N) {
	
	// Find prime number

var counter = 0;

for (var j = 2; j <= Math.sqrt(N); j++) if (N % j == 0) counter++;

if (counter == 0) return 1;
else return -1;

    }
	


function multiplyMembers(N) {
	
//Look for prime divider for base

var multiply = [];

var counter = 0;

for ( i=2; i <= N / 2; i++ ) if ( (N % i) == 0 && simplicity(i) == 1 )  multiply[counter++] = i;

if ( counter == 0 ) multiply[0] = N;

return multiply;

}

var array = multiplyMembers(base); // All of prime divider for base

var possibleZeros = [];

   for ( i = 0; i < array.length; i++ )
   {

  zero_count = 0;

   number2018 = number;

   while ( Math.floor(number2018) > 0 )
 
   {

  number2018 = number2018 / array[i];

  zero_count = zero_count + Math.floor(number2018);

  }
   possibleZeros[i] = Math.floor ( zero_count / withoutRest( base, array[i]) ) ;
 
 }
 

 
   var min = possibleZeros[0];
 
   for  ( i = 1; i < possibleZeros.length; i++ )
   {
  if ( min > possibleZeros[i] ) min = possibleZeros[i];
   }

 return min;

}