let numberN;
let numberM;
let pairedNumberConfirm;
let sumOfNumbers =0;

do{
numberN= +prompt('Пожалуйста, введите первое целое число');
}
while (!Number.isInteger(numberN) || numberN ===0);

do{
numberM= +prompt('Пожалуйста, введите второе целое число');
}
while(!Number.isInteger(numberM) || numberM ===0);

pairedNumberConfirm= confirm('Пропускать парные числа?');

for(let number= numberN; number <= numberM; number++){
   if(pairedNumberConfirm && (number %2=== 0)){
    continue;
   }
   sumOfNumbers +=number;
}
alert(`Сумма : ${sumOfNumbers}`);