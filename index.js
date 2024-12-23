var websiteNameInput=document.getElementById("websiteName")
var websiteURLInput=document.getElementById("websiteURL")
var allwebsites=[]
allwebsites=JSON.parse(localStorage.getItem("allwebsites"))||[]
displaydata()

// console.log(websiteURL);
// console.log(websiteNameInput);

function addwebsite() {
   
   
   if(validateAllInput()){
        var website = {
        sitename:websiteNameInput.value,
        siteURL:websiteURLInput.value,
    }
    allwebsites.push(website)
    displaydata()
    localStorage.setItem("allwebsites",JSON.stringify(allwebsites))
    clearform()
    Swal.fire({
        title: "Good job!",
        text: "Your work has been saved ",
        icon: "success"
      });
   }else{
    Swal.fire({
        title: "Ooops...",
        text: "name must be from 3 to 20 character && Site URL must be a valid one",
        icon: "error"
      });
   }

}

function displaydata() {
var cartoona=""
for (var i = 0; i < allwebsites.length; i++) {
    cartoona+=`<tr>
    <th scope="row">${i + 1}</th>
    <td>${allwebsites[i].sitename}</td>
            
    <td><a href="http://${allwebsites[i].siteURL}" target="_blank"><button class="btn visitbtn" ><i class="bi bi-eye-fill"></i>Visit</button></a></td>
    <td><button class="btn deletebtn" onclick="deleteweb(${i})"><i class="bi bi-trash-fill"></i>Delete</button></td>
  </tr>`
}
document.getElementById("datadisplay").innerHTML=cartoona
}


function deleteweb(index){
    allwebsites.splice(index,1)
    displaydata()
    localStorage.setItem("allwebsites",JSON.stringify(allwebsites))
}

function clearform(){
    websiteNameInput.value=null
    websiteURLInput.value=null

}

function validate(regex,inputvalue,alert,input){
if(regex.test(inputvalue)){
    alert.classList.add('d-none')
    input.classList.replace("is-invalid","is-valid")
    return true
}else{
    alert.classList.remove('d-none')
    input.classList.add('is-invalid')
    return false
}
}
function validateAllInput(){
    if(validate(/^\w{3,20}$/,websiteName.value,alertname,websiteName)&&validate(/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,websiteURL.value,alerturl,websiteURL)){
        return true
    }else{
        return false
    }
}