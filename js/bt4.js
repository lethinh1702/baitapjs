/**
 * +khối 1:input
 * +chiều dài
 * + chiều rộng
 * 
 * 
 * khối 2:
 * +diện tích = chiều dài* chiều rộng
 * +chu vi = (chiều dài + chiều rộng)/2
 * 
 * khối 3;
 * +xuất kết quả
 * 
 */
// B1:
var chieudai = 5;
var chieurong = 10;
var dientich = 0;
var chuvi = 0;
// b2:
dientich = chieudai * chieurong;
console.log("diện tích hình chữ nhật:" + dientich)
chuvi = (chieudai + chieurong) / 2;
console.log("chu vi hình chữ nhật :" + chuvi)
