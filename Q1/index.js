console.log("hi");

document.getElementById("demo").innerHTML = "Q1";

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

let sumUS = 0;
let sumEU = 0;
let sumCA = 0;
const CalculateSum = (() => {
  for (let obj in data) {
    //   console.log(data[obj]);
    if (data[obj].region === "US") {
      sumUS += data[obj].sales;
    } else if (data[obj].region === "EU") {
      sumEU += data[obj].sales;
    } else if (data[obj].region === "CA") {
      sumCA += data[obj].sales;
    }
  }
})();

data.forEach((element) => {
  tr = document.createElement("tr");
  let td = document.createElement("td");

  if (element.region === "US" && element.model === "A") {
    td = document.createElement("td");
    td.innerHTML = element.region;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = "sum";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = sumUS;
    tr.appendChild(td);
    table.appendChild(tr);
  } else if (element.region === "EU" && element.model === "A") {
    td = document.createElement("td");
    td.innerHTML = element.region;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = "sum";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = sumEU;
    tr.appendChild(td);
    table.appendChild(tr);
  } else if (element.region === "CA" && element.model === "A") {
    td = document.createElement("td");
    td.innerHTML = element.region;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = "sum";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = sumCA;
    tr.appendChild(td);
    table.appendChild(tr);
  }
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
