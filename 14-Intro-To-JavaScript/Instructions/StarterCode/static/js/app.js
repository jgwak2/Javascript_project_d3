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

// building table
buildTable(tableData);
console.log(buildTable);



