function add(num1, num2) {
	return num1 + num2;
}

assert( add( 5, 20 ) == 25, 'Checking the add function: 5+20=25');
assert( add( 1, 1 ) == 2, 'Checking the add function: 1+1=2');
assert( add( 5, 20 ) == 24, 'Checking the add function: 5+20=24');

function assert( passed, description ) {
	let status = passed ? 'PASS' : 'FAIL';
  let message = status + ': ' + description;
  if (!passed) {
  	throw message || "Assertion failed";
  }
  console.log(message);
};
