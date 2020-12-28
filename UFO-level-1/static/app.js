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
    
// let ufo = data;
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
//   let filteredTable= d3.select("#ufo-table");
  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  console.log(inputValue);
//   console.log(data);
  let filteredData = data.filter(object => {
    object.datetime === inputValue;});
    console.log(filteredData);
    filteredData.forEach(ufoReport => {createRows(ufoReport)});
  };



// };
// d3.selectAll("body").on("change", filterOption);
// funtion filterOption(column) {
//     let output= "";
//     switch (column) {
//         case "date":
//             output= filteredData.forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "city":
//             output= filteredData.forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "state":
//             output= filteredData.forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "country":
//             output= filteredData.forEach(([Key,value])=> {
//                 console.log(key, value);
//             break;
//         case "shape":
//             output= filteredData.forEach(([Key,value])=> {
//                 console.log(key, value);
            
//     };
// };
