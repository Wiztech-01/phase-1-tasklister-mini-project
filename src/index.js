document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let input = document.getElementById("new-task-description").value 
      console.log(input);
   let ul = document.getElementById("tasks")
   let li = document.createElement("li")
   li.textContent = input
   let button = document.createElement("button")
   button.textContent = "X"
   button.addEventListener("click",(event)=>{
    event.target.parentNode.remove()
   })
   li.appendChild(button);
   ul.appendChild(li);
   form.reset();
  }); 
});
