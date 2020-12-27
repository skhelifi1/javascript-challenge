// let tableData = data;
let tbody= d3.select("tbody");
data.forEach((ufoReport) => {
    console.log(ufoReport);
    let row= tbody.append("tr"); 
    Object.entries(ufoReport).forEach(([Key,value])=> {
        console.log(key, value);
        let cell= row.append("td");
        cell.text(value);});
});
