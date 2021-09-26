const apples= 15.678;
const avokado= 90.2345;
const pineapple= 123.965;
const MaxPrice= Math.max(apples, avokado, pineapple)
const MinPrice= Math.min(apples, avokado, pineapple)
console.log(MaxPrice);
console.log(MinPrice);
const sum= apples+avokado+pineapple;
console.log(sum);
const applesFloor= Math.floor(apples);
const avokadoFloor= Math.floor(avokado);
const pineappleFloor= Math.floor(pineapple);
const sumFloor= applesFloor+avokadoFloor+pineappleFloor;
console.log(sumFloor);
const sumFloorTo100= Math.floor(sumFloor/100)*100;
console.log(sumFloorTo100);
function boooleanSum1(sum1){
    if (sumFloor % 2 == 0)
      return true;
    else
      return false;
}
console.log(boooleanSum1(sumFloor));
const cash= 500;
const change= cash-sum;
console.log(change);
const applesFloor2 = Math.floor(apples*100)/100;
const avokadoFloor2 = Math.floor(avokado*100)/100;
const pineappleFloor2 = Math.floor(pineapple*100)/100;
const sumFloor2= applesFloor2+avokadoFloor2+pineappleFloor2;
const avarage= sumFloor2/3;
console.log(avarage);
const randomDiscount = Math.random();
const totalDiscount= Math.floor(((randomDiscount))*100)/100;
const totalSum= Math.floor((sumFloor*totalDiscount)*100)/100;
console.log(totalSum);
const clearProfitAllProducts= (sumFloor/2)-totalSum;
console.log(clearProfitAllProducts);
const AllInOne= `Максимальна ціна : ${MaxPrice} 
Мінімальна ціна : ${MinPrice} 
Вартість всіх товарів : ${sum} 
Сума товарів при округленні до цілих чисел : ${sumFloor} 
Сума товарів округлена до сотень : ${sumFloorTo100} 
Округлена сума є парним числом : ${boooleanSum1(sumFloor)} 
Решта при оплаті клієнтом 500 гривнями : ${change} 
Середнє значення цін : ${avarage} 
Ціна зі знижкою : ${totalSum} 
Чистий прибуток : ${clearProfitAllProducts}`;
console.log(AllInOne);