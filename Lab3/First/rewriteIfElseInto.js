// before 
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// after
let message = (login == 'Employee') ? 'Hello' : 
            (login == 'Direcotr') ? 'Greetings' : 
            (login == '') ? 'No login' : '';