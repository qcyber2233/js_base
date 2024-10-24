// СТр 52
let str52_1 = 'abcde';
let [ num_contstr_52a, num_contstr_52c, num_contstr_52e ]= [0, 2, 4];
alert(str52_1[num_contstr_52a] + ' ' + str52_1[num_contstr_52c] + ' ' + str52_1[num_contstr_52e]);

let str52_2 = 'abcde';
let [num_contstr_52_2a, num_contstr_52_2b, num_contstr_52_2c, num_contstr_52_2d, num_contstr_52_2e] = [0, 1, 2, 3, 4];
alert(str52_2[num_contstr_52_2e] + ' ' + str52_2[num_contstr_52_2d] + ' ' + str52_2[num_contstr_52_2c]+ ' ' + str52_2[num_contstr_52_2b] + ' ' + str52_2[num_contstr_52_2a]);

let str52_3 = 'abcde';
let number_str52_3 = 2;
alert(str52_3[number_str52_3]);


// СТр 54
let str54 = 'shanxai';
alert(str54[str54.length - 1] + ' ' + str54[str54.length - 2] + ' ' + str54[str54.length - 3]);


// Стр 55
let str55 = 'qwert';
alert(Number(str55[0]) + Number(str55[1]) + Number(str55[2]) + Number(str55[3]) + Number(str55[4]));


// Стр 56
let str56 = String(12345);
alert(Number(str56[0]) + Number(str56[1]) + Number(str56[2]) + Number(str56[3]) + Number(str56[4]));

alert((str56[0]) * (str56[1]) * (str56[2]) * (str56[3]) * (str56[4]));

alert((str56[4]) + (str56[3]) + (str56[2]) + (str56[1]) + (str56[0]));


// Стр 58
let num_58 = 47;
num_58 += 7;
num_58 -= 18;
num_58 *= 10;
num_58 /= 15;
alert(num_58);

// СТр 59
let num_59 = 10;
num_59++;
num_59++;
num_59--;
alert(num_59);

// Стр 61
alert(0.1 * 0.2);

alert(0.3 - 0.1);


// Стр 62
alert('Ваш возраст: ' + prompt('Ваш возраст?'));




// СТр 63
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
alert(Number(num1) + Number(num2)); 

let side_63 = Number(prompt('Введите значение стороны квадрата?'));
alert('Площадь квадрата равна: ' + (side_63 ** 2)  );

let height_63 = Number(prompt('Введите значение высоты прямоугольника?'));
let width_63 = Number(prompt('Введите значение ширины прямоугольника?'));
alert('Площадь прямоугольника равна: ' + (height_63 * width_63));

// Стр 64

let str64_1 = 'olegi';
document.write('<b>' + str64_1 + '</i>');

let str64_2 = 'olegi18';
document.write('<i>' + str64_2 + '</i>');

let str64_3 = 'crown';
document.write('<i>' + str64_3 + '</i>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');

// СТр 66
alert('Количество секунд в сутках: ' + (60 * 60 * 24) + ' секунд.');
alert('Количество секунд в 30 сутках: ' + (86400 * 30) + ' секунд.');
alert('Количество секунд в году (без учёта високосных годов): ' + (86400 * 365) + ' секунд.');
alert('Количество минут в сутках: ' + (60 * 24) + ' минут.');
alert('Количество минут в году: ' + (1440 * 365) + ' минут.');
alert('Количество байт в мегабайте: '+ (1024 * 1024) + ' байт.');
alert('Количество байт в гигабайте: ' + (1048576 * 1024) + ' байт.');
alert('Количество байт в 10 гигабайтах: ' + (1073741824 * 10) + ' байт.');
alert('Количество байт в терабайте: ' + (1073741824 * 1024) + ' байт.');
alert('Количество килобайт в терабайте: ' + (1099511627776 / 1024) + ' килобайта.');



// Стр 67
let r67 = 5; 
let s_res67_1 = Math.PI * r67 * r67; 
console.log(s_res67_1); 

let a_side67 = 4; 
let s_res67_2 = a_side67 * a_side67; 
console.log(s_res67_2); 

let a_side67_p = 3; 
let b_height67_p = 5; 
let s_res67_3 = a_side67_p * b_height67_p; 
console.log(s_res67_3); 

let a_side67_p4 = 3; 
let b_height67_p4 = 5; 
let p_res67_4 = 2 * (a_side67_p4 + b_height67_p4); 
console.log(p_res67_4); 

let tc67_5 = 25; 
let tf67_5 = (tc67_5 * (9 / 5)) + 32; 
console.log(tf67_5); 

let tf67_6 = 77; 
let tc67_6 = (tf67_6 - 32) * (5 / 9); 
console.log(tc67_6);  