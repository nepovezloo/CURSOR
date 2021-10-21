const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary) {
   return (1 - this.tax) * salary;
}

const getMiddleTaxes = function () {
    return  this.tax * this.middleSalary;
}

const getTotalTaxes = function () {
    return  this.tax * this.middleSalary * this.vacancies;
}

const getMySalary = 
    function () {
    const salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    const taxes = Math.floor(this.tax * salary);
    const profit = salary - taxes;
    return console.log(`salary: ${salary}, taxes: ${taxes}, profit: ${profit}`)
    }
console.log(getMyTaxes.call(ukraine, 1007));
console.log(getMiddleTaxes.call(litva));
console.log(getTotalTaxes.call(latvia));
let Interval = setInterval(() => {
    getMySalary.call(ukraine);
}, 10000); 
setTimeout(() => { clearInterval(Interval)}, 30000);
