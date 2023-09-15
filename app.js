const input = document.getElementById("text");
const pass = document.getElementById("password");
const div = document.getElementById("edit-box");
const resultArray = [];
console.log(resultArray);


function cons(e) {
  e.preventDefault();
  div.innerHTML = "";
  const user = {
    Email: input.value,
    Password: pass.value,
  };
  resultArray.push(user);
  for (let i = 0; i < resultArray.length; i++) {
    div.innerHTML += `<p>Email: ${resultArray[i].Email}</p>
 <p>Password:${resultArray[i].Password}</p>
 <button onclick="edit(${i})">Edit</button>
 <button onclick="del(${i})">Delete</button>
 `;
    input.value = "";
    pass.value = "";
  }
}

function edit(index) {
  
  div.innerHTML = "";
  const newEmail = prompt("Change Old Email");
  const newPass = prompt("Update Password");
  resultArray[index].Email = newEmail;
  resultArray[index].Password = newPass;
  for (let i = 0; i < resultArray.length; i++) {
    div.innerHTML += `
<p>Email: ${resultArray[i].Email}</p>
<p>Password:${resultArray[i].Password}</p>
<button onclick="edit(${i})">Edit</button>
<button onclick="del(${i})">Delete</button>`;
  }
  console.log(resultArray);
}



function del(index) {
  div.innerHTML = "";

  resultArray.splice(index, 1);
  for (let i = 0; i < resultArray.length; i++) {
    div.innerHTML += `<p>Email: ${resultArray[i].Email}</p>
    <p>Password:${resultArray[i].Password}</p>
    <button onclick="edit(${i})">Edit</button>
    <button onclick="del(${i})">Delete</button>
    `;
  }

  input.value = "";
  pass.value = "";
}
