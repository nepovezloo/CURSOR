const apples= 15.678;
const avokado= 90.2345;
const pineapple= 123.965;
const MaxPrice= Math.max(apples, avokado, pineapple);
const MinPrice= Math.min(apples, avokado, pineapple);
console.log(MaxPrice);
console.log(MinPrice);
const sum= apples+avokado+pineapple;
console.log(sum);
const sumFloor= Math.floor(apples)+Math.floor(avokado)+Math.floor(pineapple);
console.log(sumFloor);
const sumFloorTo100= Math.floor(sumFloor/100)*100;
console.log(sumFloorTo100);
const evenNumber= sumFloor % 2 === 0;
console.log(evenNumber);
const cash= 500;
const change= cash-sum;
console.log(change);
const sumFloor2= Math.floor(apples*100)/100 +Math.floor(avokado*100)/100+Math.floor(pineapple*100)/100;
const avarage= sumFloor2/3;
console.log(avarage);
const randomDiscount = Math.random();
const totalDiscount= Math.floor(((randomDiscount))*100)/100;
const totalSum= Math.floor((sumFloor*totalDiscount)*100)/100;
console.log(totalSum);
const clearProfitAllProducts= (sumFloor/2)-totalSum;
console.log(clearProfitAllProducts);
console.log(`Максимальна ціна : ${MaxPrice} 
Мінімальна ціна : ${MinPrice} 
Вартість всіх товарів : ${sum} 
Сума товарів при округленні до цілих чисел : ${sumFloor} 
Сума товарів округлена до сотень : ${sumFloorTo100} 
Округлена сума є парним числом :  ${evenNumber}
Решта при оплаті клієнтом 500 гривнями : ${change} 
Середнє значення цін : ${avarage} 
Ціна зі знижкою : ${totalSum} 
Чистий прибуток : ${clearProfitAllProducts}`);
