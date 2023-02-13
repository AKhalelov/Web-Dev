let number = +prompt('Enter a number', '');

prime = true;
for(let i = 2; i < number; i++){
    if(number % i == 0){
        alert(`Number ${prime} is not prime!`);
        prime = false;
        break;
    }
}
if(prime) alert(`Number ${number} is prime!`);