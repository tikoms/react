/*
const student1 = {
    id: 1,
    name: "Reed",
    subjects: [],
    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
    },
};
*/

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
};

const student1 = new Student(1, "Reed");
console.log(student1);

const student2 = new Student(2, "Gregory");
console.log(student2);

student1.addSubject("Astrophysics");
student2.addSubject("Chemistry");

console.log(student1);
console.log(student2);

/*
console.log(student1);
student1.addSubject("Math");
console.log(student1);
*/