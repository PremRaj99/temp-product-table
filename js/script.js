const temp = [
  {
    pid: 101,
    name: "Pen",
    price: 100,
    status: "active",
  },
  {
    pid: 102,
    name: "Pencil",
    price: 50,
    status: "active",
  },
  {
    pid: 103,
    name: "Rubber",
    price: 25,
    status: "inactive",
  },
];



const tbody = document.querySelector("tbody");

function fetchdata() {
  for (let i = 0; i < temp.length; i++) {
    temp[i].status === "active" ?
      (tbody.innerHTML += `
          <tr style="background-color : green">
              <td>${temp[i].pid} </td>
              <td>${temp[i].name} </td>
              <td>${temp[i].price} </td>
              <td><button onClick="Delete(${i})">Delete</button></td>
              <td> 
                <select >
                  <option value="acitve"> active </option>
                  <option value="inacitve"> inactive </option>
                </select> 
              </td>
          </tr>
      `)
      : (
          tbody.innerHTML += `
          <tr style="background-color : red">
              <td>${temp[i].pid} </td>
              <td>${temp[i].name} </td>
              <td>${temp[i].price} </td>
              <td><button onClick="Delete(${i})">Delete</button></td>
              <td> 
                <select>
                  <option value="acitve"> active </option>
                  <option value="inacitve"> inactive </option>
                </select> 
              </td>
          </tr>
      `)
  }
}

fetchdata()

function Delete(i) {
  document.querySelectorAll("tr")[i+1].remove();
  console.log("delete successfully")
}

const input = document.querySelector("#serach");

input.addEventListener("keyup", () => {
  const value = input.value;
  if (value === "") {
    tbody.innerHTML = "";
    fetchdata()
  } else {
    for (let i = 0; i < temp.length; i++) {
      tbody.innerHTML = "";
        temp[i].name === value &&
        (tbody.innerHTML += `
          <tr style="background-color : red">
              <td>${temp[i].pid} </td>
              <td>${temp[i].name} </td>
              <td>${temp[i].price} </td>
              <td><button onClick="Delete(${i})">Delete</button></td>
              <td> 
                <select>
                  <option value="acitve"> active </option>
                  <option value="inacitve"> inactive </option>
                </select> 
              </td>
          </tr>
      `);
    }
  }
});
