var user = {}
var arr = ['userID','passWord','name','address']
var regex=/^[0-9]+$/;
function handleSubmit() { 
    if( document.getElementsByClassName("form_demo")[0].value.length > 4 && 
        document.getElementsByClassName("form_demo")[1].value.length > 4 && 
        document.getElementsByClassName("form_demo")[2].value.length > 0  &&
        !document.getElementsByClassName("form_demo")[2].value.match(regex) &&
        document.getElementsByClassName("form_demo")[4].value !=='' &&
        document.getElementsByClassName("form_demo")[5].value.match(regex) &&
        (
        document.getElementsByClassName("form_demo")[6].checked ||
        document.getElementsByClassName("form_demo")[7].checked
        )
    ) {
        for(var i = 0; i < document.getElementsByClassName("form_demo").length; i++) { 
                user[arr[i]] = document.getElementsByClassName("form_demo")[i].value 
        } 
    }
    else {
        console.log("Nhập lại dcm")
    }
    console.table(user) 
}

function toggleCheckbox(x, y) {
    if (document.getElementById(x).checked) {
      document.getElementById(y).checked = false;  
    }
    if (document.getElementById(x).checked) {
      document.getElementById(y).checked = false; 
    }
  }