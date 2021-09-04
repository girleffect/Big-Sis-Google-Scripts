function doGet(e) {
var sheets = SpreadsheetApp.openById('12fCBknpNgBW7Fm4Rw7VTxK3Ym1iOWjAUby_O3qSVOls');
var queryStr = "string=true%20love%20waits"; //e.queryString;

  function getSearchString(){
    if(queryStr){
      //assumes that there is one input value
      var arr  = queryStr.split("="); 
      var search = decodeURIComponent(arr[1]);
      return search;
    }
    return "please don't use straws";
  }
  
  function OnSearch(searchString) {
    var values = sheets.getSheetByName('Sheet1').getDataRange().getValues();

    for (var i = 1; i < values.length-1; i++) {
      var row = values[i];
      var searcharr = searchString.split(" ");
      for (var k = 0;k <=searcharr.length-1; k++){
        var word = searcharr[k].replace(/[^A-Za-z0-9\.]+/g, "");
        if (row[0].equalsIgnoreCase(word)) {
          var output = row[1];
          var params = JSON.stringify({'Category': output, 'Matching word': word});
          return ContentService.createTextOutput(params).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    return ContentService.createTextOutput(JSON.stringify({'Category': 'Dont use staws','Matching word': searchString})).setMimeType(ContentService.MimeType.JSON);
  }

  return OnSearch(getSearchString());
}

