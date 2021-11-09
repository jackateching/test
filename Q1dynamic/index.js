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
  { region: "TW", model: "A", sales: 400 },
  { region: "TW", model: "B", sales: 400 },
];

class Items {
  constructor(region, model, sales) {
    this.region = region;
    this.model = model;
    this.sales = sales;
  }
}
const constructRow = (item, sum = 0) => {
  let table = document.getElementById("table");
  let tr = table.insertRow();
  let td = document.createElement("td");
  td.innerHTML = item.region;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = item.model;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = item.sales;
  tr.appendChild(td);
  table.appendChild(tr);
};

const createTableRow = (item) => {
  constructRow(item);
};

const CalculateSum = (item) => {
  let sum = 0;
  for (let obj in data) {
    if (data[obj].region === item.region) {
      sum += data[obj].sales;
    }
  }
  return sum;
};

const createSumTr = (item, sum) => {
  const newItem = { region: item.region, model: "sum", sales: sum };
  constructRow(newItem, sum);
};

const render = (() => {
  let map = {};
  data.forEach((d) => {
    const item = new Items(d.region, d.model, d.sales);
    if (!map[item.region]) {
      map[item.region] = item.region;
      let sum = CalculateSum(item);
      createSumTr(item, sum);
    }
    createTableRow(item);
  });
})();
