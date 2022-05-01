const imprimir = function () {

    const courses = [
        { _id: 1, title: "JavaScript I" },
        { _id: 2, title: "HTML y CSS I" },
        { _id: 3, title: "GitHub"}
    ]
  
    const students = [
        { _id: 1, name: "Pedro Perez" },
        { _id: 2, name: "Maria Gomez" },
        { _id: 3, name: "Bob Marley" }
    ]
  
    const enrollments = [
        { course_id: 1, student_id: 1 },
        { course_id: 2, student_id: 1 },
        { course_id: 2, student_id: 2 },
        { course_id: 2, student_id: 3 },
        { course_id: 3, student_id: 1 },
        { course_id: 3, student_id: 3 }
    ]
  
    return {
    // ref = .name o .title
    // list = {
    //   Print curso/estudiante => courses-students
    //   Print estudiante/curso => students-courses
    // }
    // id = course_id o student_id
    // id2 = solo en ultimo id de relleno, contrario a id

        arr: [],

        titulo: function (ref, list, id) {
            enrollments.forEach((obj) => {
                if (this.arr[obj[id] - 1] === undefined) {
                    this.arr[obj[id] - 1] = `- ${list.find(item => item._id === obj[id])[ref]}`; 
                }
            });
        },
        relleno: function (ref, list, id, id2) {
            enrollments.forEach((obj) => {
                this.arr[obj[id] - 1] = this.arr[obj[id] - 1].concat( '\n   * ', `${list.find(item => item._id === obj[id2])[ref]}`);
                
            });
        },
        cursos: function () {
            this.arr = [];
            this.titulo('title', courses, 'course_id');
            this.relleno('name', students, 'course_id', 'student_id');
            //return `${this.arr.forEach((item) => {console.log(item);})}`;
            return this.arr.join('\n');
        },
        estudiantes: function () {
            this.arr = [];
            this.titulo('name', students, 'student_id');
            this.relleno('title', courses, 'student_id', 'course_id');
            //return `${this.arr.forEach((item) => {console.log(item);})}`;
            return this.arr.join('\n');
        },
    }
}

const prueba = imprimir();
console.log(prueba.cursos());
console.log(prueba.estudiantes());