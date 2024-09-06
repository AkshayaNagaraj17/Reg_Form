var tab2=document.getElementById("tab2")
var tab2_tbody=document.getElementById("tab2_tbody")
var name1=document.getElementById("name")
var age=document.getElementById("age")
var gender=document.getElementById("gender")
var course=document.getElementById("course")
var email=document.getElementById("email")
function add()
{
   var det=document.createElement("tr")
    var det1=document.createElement("td")
    det1.innerHTML=name1.value
    var det2=document.createElement("td")
    det2.innerHTML=age.value

    var det3=document.createElement("td")
    det3.innerHTML=gender.value

    var det4=document.createElement("td")
    det4.innerHTML=course.value

    var det5=document.createElement("td")
    det5.innerHTML=email.value+"<button onclick='delete1(event)'>delete<button>"
    det.append(det1);
    det.append(det2);
    det.append(det3);
    det.append(det4);
    det.append(det5);
    tab2_tbody.append(det);
}
function delete1()
{
    var row=event.target.closest("tr")
    if(row){
        row.remove()
    }
}