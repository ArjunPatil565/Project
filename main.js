Student_Array=[];
function Submit(){
    var Name_1=document.getElementById("Student_Name_1").value; 
    var Name_2=document.getElementById("Student_Name_2").value;
    var Name_3=document.getElementById("Student_Name_3").value;
    var Name_4=document.getElementById("Student_Name_4").value;
    Student_Array.push(Name_1);
    Student_Array.push(Name_2);
    Student_Array.push(Name_3);
    Student_Array.push(Name_4);
    document.getElementById("Display").innerHTML=Student_Array;
    document.getElementById("Button_Submit").style.display="none";
    document.getElementById("Button_Sort").style.display="inline-block";

}
function Sorting(){
    Student_Array.sort();
    document.getElementById("Display").innerHTML=Student_Array;
}