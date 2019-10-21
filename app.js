class Teacher {
    constructor(name, subject, firstYear) {
        this.name = name;
        this.subject = subject;
        this.firstYear = firstYear;


    this.firstYearTeaching = function(){
        console.log(new Date().getFullYear() - this.firstYear); 
}
    }}


//Class for the UI which contains methods 

class UI {
     addTeacherToList(teacher) {   
        let html = '<div class="display-teacher"><div class="display-name">%name%</div><div class = "display-subject">%subject%</div><div class="display-firstYear">%firstYear%</div><div class="display-firstYearTeaching"> %firstYearTeaching% years at Tech</div><div class = "remove-movie">X</div>'
        const currentYear = new Date().getFullYear();

    const firstYearTeaching = currentYear - firstYear.value;

        let newHtml = html.replace('%name%', teacher.name);
        newHtml = newHtml.replace('%subject%', teacher.subject);
        newHtml = newHtml.replace('%firstYear%', teacher.firstYear); 
        newHtml = newHtml.replace('%firstYearTeaching%', firstYearTeaching); 
        document.querySelector(".display").insertAdjacentHTML('beforeend', newHtml); 
        console.log(firstYearTeaching);
     }
     
     clearFields () {
        document.getElementById('name').value = "";
        document.getElementById('subject').value =""; 
        document.getElementById('firstYear').value =""; 
         
     } 
    
   deleteTeacher (target){
       if (target.className === "remove-movie") {
           target.parentElement.remove(); 
       }
    }
}
        

document.getElementById('teacher-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const firstYear = document.getElementById('firstYear').value;
    const teacher = new Teacher(name, subject, firstYear);
    const ui = new UI();
    if(name === '' || subject === '' ||  firstYear === '' ) {
        alert ('Oops it seems like you have left something blank!'); 
    } else {
        ui.addTeacherToList(teacher);
        ui.clearFields();
    }

    e.preventDefault();
});
    
document.querySelector(".display").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteTeacher(e.target);
    ui.clearFields();
     e.preventDefault();
});