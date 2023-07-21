var arr = [];
var empid = [];
function addEmp(){
    event.preventDefault();
    let x=validate();
    console.log(x);
    // if(validate()==false) return false;
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let designation = document.getElementById("role").value;
    let image = document.getElementById("img").value;
    let table = document.getElementById("table");
    let add = {};

    add['id'] = id;
    add['name'] = name;
    add['age'] = age;
    add['gender'] = gender;
    add['designation'] = designation;
    add['img'] = image;
    add['table'] = table;
    if(x){
        arr.push(add);
        empid.push(id);
    }
    console.log(arr);    
    bindTable();
       
}

function bindTable (){
     let str = " ";
        for(let i = 0; i< arr.length; i++) {
            str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "viewEmp(${i})" class = "btn btn-view btn-info btn-sm">View</button>
                <button onclick = "updateEmp(${i})" class="btn btn-edit btn-success btn-sm">Edit</button>
                <button onclick = "deleteEmp(${i})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
            </td>
            </tr>`;
        }
        document.getElementById("table-body").innerHTML=str;
}

function viewEmp(id) {
    // console.log("sasd",arr,id);
    let pop = document.getElementById("view-popup");
    pop.style.display = 'flex';
    let back = document.getElementsByClassName("overlay")[0];
    back.style.display = 'flex';

    document.getElementById("idv").innerHTML =arr[id].id;
    document.getElementById("namev").innerHTML=arr[id].name;
    document.getElementById("agev").innerHTML=arr[id].age;
    document.getElementById("genderv").innerHTML=arr[id].gender;
    document.getElementById("rolev").innerHTML=arr[id].designation;
    document.getElementById("viewimg").src = arr[id].img;
    console.log(arr)
}

function updateEmp(id) {
    let pop = document.getElementById("popup");
    pop.style.display = 'flex';
    
    let back = document.getElementsByClassName("overlay")[0];
    console.log(back);
    back.style.display = 'flex';

    document.getElementById("e").value=id;
    document.getElementById("ide").value=arr[id].id;
    document.getElementById("namee").value=arr[id].name;
    document.getElementById("agee").value=arr[id].age;
    document.getElementById("gendere").value=arr[id].gender;
    document.getElementById("rolee").value=arr[id].designation;
    document.getElementById("imge").value=arr[id].img;

}

function addupdateEmp(){
        event.preventDefault();
        console.log("addupdateEmp",validationEdit());
        
    if (validationEdit()) {
        // let id = document.getElementById("emp-id-update").value;
        let id = document.getElementById("id").value;
        let name = document.getElementById("namee").value;
        let age = document.getElementById("agee").value;
        let gender = document.getElementById("gendere").value;
        let designation = document.getElementById("rolee").value;
        let photo = document.getElementById("imge").value;
        // let tbl = document.getElementById("tbl-body");
        // let add = {};
        // console.log(id, name, age, gender, designation, photo);
        // arr[idx]['id'] = id;
        console.log(arr,id);
        let index = document.getElementById("e").value;
        console.log(photo);
        arr[index]['name'] = name;
        arr[index]['age'] = age;
        arr[index]['gender'] = gender;
        arr[index]['designation'] = designation;
        arr[index]['img'] = photo;
        // arr.push(add);

        bindTable();

        let pop = document.getElementById("popup");
        pop.style.display = 'none';
    }
}
        
function deleteEmp(id) {
    console.log(id);
    let index = arr.findIndex((e)=>parseInt(id)===id);
    arr.splice(index, 1);
    
    let str = " ";
    for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "updateEmp(${arr[i].id})" class="btn btn-edit btn-success btn-sm">EDIT</button>
                <button onclick = "deleteEmp(${arr[i].id})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
                <button class = "btn btn-view btn-info btn-sm">View</button>
            </td>
            </tr>`;
}

document.getElementById("table-body").innerHTML=str;
}

function shut() {
    let pop_edit=document.getElementById("popup");
    let pop_view=document.getElementById("view-popup");
    let back = document.getElementsByClassName("overlay")[0];
   
    back.style.display = 'none';
    pop_edit.style.display = 'none';
    pop_view.style.display = 'none';

}