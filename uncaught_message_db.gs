function doPost(request) {
  var sheets = SpreadsheetApp.openById('1w_Mw-fqZ_NI8TzDxg5-nLdT_1-xqUR79dUQFPvuWIsY');
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

  /* This is to put the value into your GoogleSheet */

  sheets.getRangeByName('date').getCell(nextRow,1).setValue(date);
  sheets.getRangeByName('id').getCell(nextRow,1).setValue(id);
  sheets.getRangeByName('message').getCell(nextRow,1).setValue(message);
}
