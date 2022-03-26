function handleSubmit() {
  console.log($("#name").val());
  localStorage.setItem("nameUser", $("#name").val());
  $("#name").val("");
}
function deleteName() {
  localStorage.removeItem("nameUser");
}
function changeBanner(event) {
  // var loadFile = function(event) {
  var output = document.getElementById("output");
  output.src = URL.createObjectURL(event.target.files[0]);
  // output.onload = function() {
  //   URL.revokeObjectURL(output.src) // free memory
  // }
  //   };
}

// function loadFile(event) { 
//     localStorage.setItem("banner",URL.createObjectURL(event.target.files[0]));
//     console.log(URL.createObjectURL(event.target.files[0]))
//     $("#output").attr("src",URL.createObjectURL(event.target.files[0]))
// };

let feedback = [
    {
        title: "Very Effective!",
        content: "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John",
        job: "Develop",
        avatar:""
    },
    {
        title: "Very Well!",
        content: "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Lisa",
        job: "Develop",
        avatar:""
    },
    {
        title: "Good job!",
        content: "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Mei",
        job: "Develop",
        avatar:""
    },
    {
        title: "Love you!",
        content: "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Losa",
        job: "Develop",
        avatar:""
    }
] 
localStorage.setItem("listFeedBack",JSON.stringify(feedback));
console.log(JSON.parse(localStorage.getItem("listFeedBack")));
function changeTitleFirst() {
    console.log($("#titleFirst").val());
    feedback[0].title = $("#titleFirst").val();
    localStorage.setItem("listFeedBack",JSON.stringify(feedback));
}