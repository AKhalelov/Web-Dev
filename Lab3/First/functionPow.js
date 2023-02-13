function pow(x, n){
    while(n){
        x *= x;
        n--;
    }
    return x;
}
let x = +prompt('Enter x', '');
let n = +prompt('Enter n', '');

if(n < 1){
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert(pow(x, n));
}