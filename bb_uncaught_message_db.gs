function doPost(request) {
  var sheets = SpreadsheetApp.openById('18aRmYqGx-5hZDc-gLMZBJX-9-il-c05UB0h7kX7hwBc');
  var response = request

  function nextRow(sheets) {
    var firstColumn = sheets.getRangeByName('date').getValues();
    for (cell in firstColumn) {
      if(firstColumn[cell][0] == "") {
        return Number(cell);
        break;
      }
    }
  }

  /* This is the script to receive variable from RapidPro */
  var nextRow = nextRow(sheets) + 1;
  var date = request.parameters.date;
  var id = request.parameters.id;
  var message = request.parameters.message;
  var flow = request.parameters.flow;

  /* This is to put the value into your GoogleSheet */
  sheets.getRangeByName('date').getCell(nextRow,1).setValue(date);
  sheets.getRangeByName('id').getCell(nextRow,1).setValue(id);
  sheets.getRangeByName('message').getCell(nextRow,1).setValue(message);
  sheets.getRangeByName('flow').getCell(nextRow,1).setValue(flow);
}

