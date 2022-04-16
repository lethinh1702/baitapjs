/** 
 * +khối 1:input
 * var num1...num5
 * 
 * khối 2:
 * +tb = num1 + num2 +.....num5/5
 * 
 * Khối 3:
 * tính trung bình
 */
// B1:
var num1 = 1.234;
var num2 = 5.23;
var num3 = 10.96;
var num4 = 2.32;
var num5 = 1.02;
var tb = 0;
// B2:
tb = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("giá trị trung bình:" + tb);
console.log("giá trị trung bình:" + Math.round(tb));
console.log("giá trị trung bình:" + tb.toFixed(2));
