let idin=document.getElementById("id");
let namein=document.getElementById("name");
let agein=document.getElementById("age");
let genderin=document.getElementById("gender");
let designationin=document.getElementById("role");
let photoin=document.getElementById("img");

let invalid_id=document.querySelector("#disp_id");
let invalid_name=document.querySelector("#disp_name");
let invalid_age=document.querySelector("#disp_age");
let invalid_gender=document.querySelector("#disp_gender");
let invalid_designtion=document.querySelector("#disp_role");
let invalid_photo=document.querySelector("#disp_img");

function validate() {
      let value_id = idin.value;
      let value_name = namein.value;
      let value_age = agein.value;
      let value_gender = genderin.value;
      let value_designation = designationin.value;
      let value_photo = photoin.value;

      // Validation
      let a=true;
      if(value_id == "") {
        invalid_id.innerHTML = "*Please enter valid id";
        a=false;
      }else if(empid.includes(value_id)){
        invalid_id.innerHTML = "*Id already existed";
        a=false;
      }else{
        invalid_id.innerHTML = "";
      }

      if(value_name == "") {
        invalid_name.innerHTML = "*Please enter valid name";
        a=false;
      }else{
        invalid_name.innerHTML = "";
      }

      if((value_age == "" ) || (value_age<45 && value_age>35)) {
        invalid_age.innerHTML = "*Please enter valid age";
        a=false;
      }else{
        invalid_age.innerHTML = "";
      }

      if(value_gender == ""){
        invalid_gender.innerHTML = "*Please select valid gender";
        a=false;
      }else{
        invalid_gender.innerHTML = ""; 
      }

      if(value_designation == ""){
        invalid_designtion.innerHTML = "*Please select valid designation";
        a=false;
      }else{
        invalid_designtion.innerHTML = "";
      }

      if(value_photo == ""){
        invalid_photo.innerHTML = "*Please enter self-photo url";
        a=false;
      }else{
        invalid_photo.innerHTML = "";
      }
      return a; 
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table-body");
  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
    for (j = 0; j < tr.length; j++) {
      td = tr[i].getElementsByTagName("td")[j];
      console.log(td);
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function validationEdit() {
    let t = true;
    let name = document.getElementById("namee").value;
    let age = document.getElementById("agee").value;
    let gender = document.getElementById("gendere").value;
    let designation = document.getElementById("rolee").value;
    let photo = document.getElementById("imge").value;
    console.log(name,age,gender,designation, photo)


    if (name == "" || name == null) {
        document.getElementsByClassName("editNameErr")[0].innerText = "Fill this field.";
        // invalid_name.innerHTML="ENTER"
        t = false;
    } else {
        document.getElementsByClassName("editNameErr")[0].innerText = "";
    }



    if (age == "" || age == null) {
        document.getElementsByClassName("editAgeErr")[0].innerText = "Fill this field.";
        t = false;
    } else if (Number(age) < 18 || Number(age) > 60) {
        document.getElementsByClassName("editAgeErr")[0].innerText = "range between 18-60";
        t = false;
    } else {
        document.getElementsByClassName("editAgeErr")[0].innerText = "";
    }


    if (gender == "" || gender == null) {
        document.getElementsByClassName("editGenderErr")[0].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("editGenderErr")[0].innerText = "";

    }


    if (designation == "" || designation == null) {
        document.getElementsByClassName("editDesignationErr")[0].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("editDesignationErr")[0].innerText = "";

    }


    if (photo == "" || photo == null) {
        document.getElementsByClassName("editImageErr")[0].innerText = "Fill this field.";
        t = false;
    } else {
        document.getElementsByClassName("editImageErr")[0].innerText = "";

    }

    return t;
}