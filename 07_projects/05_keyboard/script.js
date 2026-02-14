// my approach
// const insert = document.querySelector("#insert");
// window.addEventListener("keydown", (e) => {
//   let key = e.key;
//   const addKey = document.createElement("p");
//   addKey.innerHTML = `You pressed ${key}`;
//   insert.appendChild(addKey);
// });

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td> 
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
