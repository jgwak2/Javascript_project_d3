// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      var row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);
        }
      );
    }
    );
  }

function handleClick(){
  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  var date = d3.select("#datetime").property("value");
  console.log(date)
  var filteredData = tableData;  

   // Check to see if a date was entered and filter the
  // data using that date.
 
  if (date) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
  // === equals the same type as well
  
  filteredData = filteredData.filter(row => row.datetime === date);
  console.log(filteredData);

  }
  buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);


// building table
buildTable(tableData);
console.log(buildTable);




