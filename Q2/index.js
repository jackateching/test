console.log("hi");

document.getElementById("demo").innerHTML = "Q2";

const data = [
  { region: "US", model: "A", sales: 150 },
  { region: "US", model: "B", sales: 120 },
  { region: "US", model: "C", sales: 350 },
  { region: "EU", model: "A", sales: 200 },
  { region: "EU", model: "B", sales: 100 },
  { region: "EU", model: "C", sales: 250 },
  { region: "CA", model: "A", sales: 200 },
  { region: "CA", model: "B", sales: 100 },
  { region: "CA", model: "C", sales: 230 },
  { region: "CA", model: "D", sales: 400 },
];

const createTableHead = (() => {
  let table = document.getElementById("table");
  let tr = table.insertRow();
  let th = document.createElement("th");
  th.innerHTML = "region";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "model";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "sales";
  tr.appendChild(th);
  table.appendChild(tr);
})();

let sumRegion = 0;
let sumModel = 0;
let sumSales = 0;
const CalculateSum = (() => {
  for (let obj in data) {
    //   console.log(data[obj]);
    if (data[obj].region === "US") {
      sumRegion += data[obj].sales;
    } else if (data[obj].region === "EU") {
      sumModel += data[obj].sales;
    } else if (data[obj].region === "CA") {
      sumSales += data[obj].sales;
    }
  }
})();

const render = (data) => {
  const list = data;
  table.innerHTML = "";
  list.forEach((element) => {
    tr = document.createElement("tr");
    let td = document.createElement("td");

    //   console.log(element);
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.innerHTML = element.region;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = element.model;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = element.sales;
    tr.appendChild(td);
    table.appendChild(tr);
  });
};
render(data);

let myList = document.getElementById("myList");
let myList2 = document.getElementById("myList2");

const generateOptionList = (() => {
  const setRegion = new Set(["ALL"]);
  const setModel = new Set(["ALL"]);
  for (let obj in data) {
    //   console.log(data[obj]);
    setRegion.add(data[obj].region);
    setModel.add(data[obj].model);
  }
  for (let element of setRegion) {
    let option = document.createElement("option");
    option.value = element;
    option.text = element;

    myList.appendChild(option);
  }
  for (let element of setModel) {
    let option2 = document.createElement("option");

    option2.value = element;
    option2.text = element;

    myList2.appendChild(option2);
  }
})();

myList.addEventListener("change", (e) => {
  const newData = data.filter((obj) => {
    return e.target.value === "ALL"
      ? myList2.value === "ALL"
        ? true
        : myList2.value === obj.model
      : myList2.value === "ALL"
      ? obj.region === e.target.value
      : obj.region === e.target.value && myList2.value === obj.model;
  });
  render(newData);
});

myList2.addEventListener("change", (e) => {
  const newData = data.filter((obj) => {
    return e.target.value === "ALL"
      ? myList.value === "ALL"
        ? true
        : myList.value === obj.region
      : myList.value === "ALL"
      ? obj.model === e.target.value
      : obj.model === e.target.value && myList.value === obj.region;
  });
  render(newData);
});
