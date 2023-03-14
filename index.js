const table = document.getElementById("data");
const allainces = document.getElementById("alliances");
const regions = document.getElementById("regions");
const categories = document.getElementById("categories");
const communities = document.getElementById("communities");
const rallies = document.getElementById("rallies");

let doneData = [];

const fullData = async () => {
  let response = await fetch("db.json");
  let data = await response.json();
  doneData = [...data.Cand_Wise];
  appendFullData(data.Cand_Wise, "All_Alliances");
};

function appendFullData(main_data, first_option) {
  table.innerHTML = null;
  for (let i = 3; i <= main_data.length; i++) {
    if (
      first_option === "All_Alliances" ||
      first_option === main_data[i].Column15
    ) {
      const tr = document.createElement("tr");
      const state = document.createElement("td");
      state.innerHTML = main_data[i].Column2;
      const month = document.createElement("td");
      month.innerHTML = main_data[i].Column3;
      const year = document.createElement("td");
      year.innerHTML = main_data[i].Column4;
      const pcn = document.createElement("td");
      pcn.innerHTML = main_data[i].Column5;
      const pcname = document.createElement("td");
      pcname.innerHTML = main_data[i].Column6;
      const pctype = document.createElement("td");
      pctype.innerHTML = main_data[i].Column7;
      const cname = document.createElement("td");
      cname.innerHTML = main_data[i].Column8;
      const csex = document.createElement("td");
      csex.innerHTML = main_data[i].Column9;
      const ccateg = document.createElement("td");
      ccateg.innerHTML = main_data[i].Column10;
      const cage = document.createElement("td");
      cage.innerHTML = main_data[i].Column11;
      const pabb = document.createElement("td");
      pabb.innerHTML = main_data[i].Column12;
      const vpolled = document.createElement("td");
      vpolled.innerHTML = main_data[i].Column13;
      const position = document.createElement("td");
      position.innerHTML = main_data[i].Column14;
      const alliance = document.createElement("td");
      alliance.innerHTML = main_data[i].Column15;
      tr.append(
        state,
        month,
        year,
        pcn,
        pcname,
        pctype,
        cname,
        csex,
        ccateg,
        cage,
        pabb,
        vpolled,
        position,
        alliance
      );
      table.append(tr);
    }
  }
}

allainces.addEventListener("change", () => {
  const value = allainces.value;
  console.log(value);
  appendFullData(doneData, value);
});

fullData();
