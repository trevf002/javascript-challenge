// from data.js
var tableData = data;

function createTable(tdata)
{
  var tbody = d3.select("tbody");
  tbody.html("");
  tdata.forEach(row=>{
    var currentRow=tbody.append("tr");
    Object.values(row).forEach(cell=>{
      currentRow.append("td").text(cell);
    })
  })


}
function updateTable(){
  var filter = d3.select("#datetime").property("value");
  var filterData = tableData
  if(filter){
      filterData = filterData.filter(obj=>obj.datetime==filter);

  }
  createTable(filterData);
}
createTable(tableData);
d3.select("#filter-btn").on("click", updateTable);