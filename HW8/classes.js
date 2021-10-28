class Student {
 constructor(university, course, fullName) {
     this.university = university;
     this.course = course;
     this.fullName = fullName;
     this.marks = [5, 4, 4, 5];
     this.dismis = [];
 }
   getInfo() {
       return `Університет: ${this.university}, Курс: ${this.course}, Повне ім*я: ${this.fullName}`;
 }
   get getMarks() {
    return this.marks;
 } 
   set setMark(mark) {
       this.marks.push(mark);
 }
   getAvarageMark() {
    return this.marks.reduce((sum, arg) => sum + arg, 0) / this.marks.length;
 }
   dismiss() {
    this.dismis = this.marks;
    this.marks = null;
   }
   recover() {
       this.marks = this.dismis;
   }
}

student1 = new Student(' Харківський національний університет радіоелектроніки ', ' 3 курс ', ' Василь Негідник ' )
console.log(`Інформація про студента: ${student1.getInfo()}`);
console.log(`Оцінки студента: ${student1.getMarks}`);
student1.setMark = 5;
console.log(`Оцінки студениа після доставленої оцінки: ${student1.getMarks}`);
console.log(`Cередній бал студента: ${student1.getAvarageMark()}`)
student1.dismiss();
console.log(`Після виключення у студента нема оцінок: ${student1.getMarks}`);
student1.recover()
console.log(`Після поновлення студента повертаються всі оцінки які були : ${student1.getMarks}`);
//Advanced
 class BudgetStudent extends Student{
     constructor(university, course, fullName){
       super(university, course, fullName)
       setInterval(() => this.getSchoolarShip() , 30000);
    }
     getSchoolarShip() {
        if(this.getAvarageMark() >= 4.0){
        return `Ви отримали 1400 грн. стипендії`
        }
     }
  
 }
 studentWithScoolarShip = new BudgetStudent(' Харківський національний університет радіоелектроніки ', ' 2 курс ', ' Федір Ленькович')
 console.log(studentWithScoolarShip.getInfo());
 console.log(`Як бачимо, студент отриимує стипендію: ${studentWithScoolarShip.getSchoolarShip()}`)
