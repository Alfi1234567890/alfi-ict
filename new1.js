


   for (let i = 0; i < 10; i++) {
    console.log(i+1);
   }


   // Function to check prime number

function checkPrime(num) {
    let i, flag = true;
    for (i = 1; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(1);
checkPrime(2);

