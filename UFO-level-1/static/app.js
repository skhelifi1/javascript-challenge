// let tableData = data;
let tbody = d3.select("tbody");

function createColumns(row){
    // console.log(row);
    let tr = tbody.append("tr"); 
    Object.entries(row).forEach(([key, value]) => {
        // console.log(value);
        let cell = tr.append("td");
        cell.text(value);
    });
};
// update table
data.forEach(row => createColumns(row));
    
// let ufo = data;
// Select the button
let button = d3.select("#filter-btn");
// Select the form
let form = d3.select("form");
// Create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// Complete the event handler function for the form
function filterTable() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    // // Select the input element and get the raw HTML node
    // let enterDate = d3.select("#datetime").property("value");
    // let enterCity = d3.select("#city").property("value");
    // let enterState = d3.select("#state").property("value");
    // let enterCountry = d3.select("#country").property("value");
    // let enterShape = d3.select("#shape").property("value");

    let filteredData = data;
    // if (enterDate) {
    //     filteredData = data.filter(object => object.datetime === enterDate);
    // }
    // if (enterCity) {
    //     filteredData = data.filter(object => object.city === enterCity);
    // }
    // if (enterState) {
    //     filteredData = data.filter(object => object.state === enterState);
    // }
    // if (enterCountry) {
    //     filteredData = data.filter(object => object.country === enterCountry);
    // }
    // if (enterShape) {
    //     filteredData = data.filter(object => object.shape === enterShape);
    // }
    // console.log(filteredData);
    [
        'datetime',
        'city',
        'state',
        'country',
        'shape'
    ].forEach(key => {
        filteredData = filterData(key, filteredData);
    })

    filteredData.forEach(row => {createColumns(row)});
};

function filterData (key, data) {
    let value = d3.select(`#${key}`).property("value");
    let filteredData = data;

    if (value) {
        filteredData = data.filter(object => object[key] === value);
    };

    return filteredData;    
}