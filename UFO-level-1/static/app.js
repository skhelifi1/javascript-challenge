// let tableData = data;
let tbody= d3.select("tbody");
function createRows(ufoReport){
    console.log(ufoReport);
    let row= tbody.append("tr"); 
    Object.entries(ufoReport).forEach(([key,value])=> {
        console.log(key, value);
        let cell= row.append("td");
        cell.text(value);});
};
// update table
data.forEach(ufoReport => {
    createRows(ufoReport)});
    
// // event handler
// d3.selectAll("body").on("change", updateInfo);
// function updateInfo() {
//     let dropdownMenu = d3.selectAll(".table-head").node();
//     let dropdownMenuValue= dropdownMenu.property("datetime");
//     // let selectedData= dropdownMenu.value;
//     console.log(dropdownMenuValue);
//     // console.log(selectedData);
// }

let ufo = data;
// Select the button
let button = d3.select("#filter-btn");
// Select the form
let form = d3.select("form");
// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
// Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  console.log(inputValue);
//   console.log(ufo);
  let filteredData = ufo.filter(object => {
    object.datetime === inputValue;});
    console.log(filteredData)
filteredData.forEach(ufoReport => {
    createRows(ufoReport)});
};

// d3.selectAll("body").on("change", updateInfo);
//     function updateInfo() {tbody.
// };
// d3.selectAll("body").on("change", filterOption);
// funtion filterOption(column) {
//     let output= "";
//     switch (column) {
//         case "date":
//             output= Object.entries(data).forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "city":
//             output= Object.entries(data).forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "state":
//             output= Object.entries(data).forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "country":
//             output= Object.entries(data).forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "shape":
//             output= Object.entries(data).forEach(([Key,value])=> {
//                 console.log(key, value);
            
//     };
// };
