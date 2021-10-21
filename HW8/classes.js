class Student {
 constructor(university, course, fullName) {
     this.university = university;
     this.course = course;
     this.fullName = fullName;
     this.marks = [5, 4, 4, 5];
     this.dismis = [];
 }
   getInfo() {
       return this.university + this.course + this.fullName;
 }
   get getMarks() {
    return this.marks;
 } 
   set setMark(mark) {
       this.marks.push(mark);
 }
   getAvarageMark() {
    return this.marks.reduce(sum, arg => sum + arg, 0) / this.marks.length;
 }
   dismiss() {
    this.dismis = this.marks;
    this.dismis = null;
   }
   recover() {
       this.dismis = this.marks;
   }
}

student1 = new Student('Культурное заведение "Zabegailovka"', '1 - й столик', 'Васыль Нигадяев' )

//Advanced
 class BudgetStudent extends Student{
     constructor(university, course, fullName)
       super(university, course, fullName)
   getSchoolarShip() {
       return console.log(`Ви отримали стипендію`)
   }
 }
