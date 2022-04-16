/**
 * khối 1: input
 * +nhập vào số có 2 chữ số
 * 
 * khối 2:
 * +var num = số có 2 chữ số
 * var ten=0;
 * var unit=0;
 * var tong=0;
 * +xây dựng công thức
 * +tổng =ten +unit
 * +khối 3: xuất kết quả
 */
// b1:
var num = 15;
var ten = 0;
var unit = 0;
var tong = ten + unit;
// b2:
ten = Math.floor(num / 10);
console.log("hàng chục:" + ten);
unit = num % 10;
console.log("hàng đon vị:" + unit)
tong = ten + unit;
console.log("kết quả:" + tong)