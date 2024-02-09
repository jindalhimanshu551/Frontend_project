function openModel(){
    document.getElementById("add_student").style.display = "block";
}
function closeModel(){
    document.getElementById("add_student").style.display = "none";
}
function selectFn(){
    var stream = document.getElementById("std_course").value;
    if(stream == "medical"){
        document.getElementById("std_subject").value = "PCB";
    }
    else if(stream == "non-medical"){
        document.getElementById("std_subject").value = "PCM";
    }
    else{
        document.getElementById("std_subject").value = "";
    }
}