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
  {
    pid: 104,
    name: "Sharpner",
    price: 15,
    status: "active",
  },
  {
    pid: 105,
    name: "Scale",
    price: 20,
    status: "inactive",
  },
  {
    pid: 106,
    name: "Book",
    price: 200,
    status: "active",
  },
  {
    pid: 107,
    name: "Bag",
    price: 500,
    status: "inactive",
  },
  {
    pid: 108,
    name: "Bottle",
    price: 100,
    status: "active",
  },
  {
    pid: 109,
    name: "Lunch Box",
    price: 150,
    status: "inactive",
  },
  {
    pid: 110,
    name: "Tiffin",
    price: 300,
    status: "active",
  },
];

const tbody = document.querySelector("tbody");

const refresh = () => {
  search.value = "";
  tbody.innerHTML = "";
  fetchdata();
};

function fetchdata(arr = temp) {
  for (let i = 0; i < arr.length; i++) {
    tbody.innerHTML += `
      <tr style=${
        arr[i].status === "active" ? "background:green" : "background:red"
      }>
        <td>${arr[i].pid}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td><button onClick="Delete(${i})">Delete</button></td>
        <td>
          <select>
            <option value="active" ${
              arr[i].status === "active" ? "selected" : ""
            }>active</option>

            <option value="inactive" ${
              arr[i].status === "inactive" ? "selected" : ""
            }>inactive</option>
          </select>
        </td>

      </tr>
      `;
  }
}

fetchdata();

function Delete(i) {
  temp.splice(i, 1);
  tbody.innerHTML = "";
  fetchdata();
  console.log("delete successfully");
}

const input = document.querySelector("#search");

input.addEventListener("keyup", () => {
  const value = input.value.toLowerCase();
  tbody.innerHTML = "";
  const filteredData = temp.filter((item) =>
    item.name.toLowerCase().includes(value)
  );
  tbody.innerHTML = "";
  fetchdata(filteredData);
  updateStatusListeners();
});

// logic to add new product

const add = document.querySelector("#add");
const name = document.querySelector("#name");
const price = document.querySelector("#price");

add.addEventListener("click", () => {
  const obj = {
    pid: temp[temp.length - 1].pid + 1,
    name: name.value,
    price: price.value,
    status: "active",
  };
  temp.push(obj);
  tbody.innerHTML = "";
  fetchdata();
  name.value = "";
  price.value = "";
  console.log("product added successfully");
});

// logic to update status

function updateStatusListeners() {
  const select = document.querySelectorAll("select");

  for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", () => {
      const value = select[i].value;
      const index = i;
      temp[index].status = value;
      tbody.innerHTML = "";
      fetchdata();
      updateStatusListeners();
      console.log("status updated successfully");
    });
  }
}

updateStatusListeners();
