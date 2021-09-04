function doGet(e) {

var sheets = SpreadsheetApp.openById('1Xc9hTm9lLfMFhLuusPiMjdYroZ5Epc3_ye_M6xxSLKs').getSheetByName('Sheet3');

// var queryStr = "string=relrel"; //e.queryString;

var queryStr = e.queryString;
  
function getSearchString(){
  if(queryStr){
    var arr = queryStr.split("=");
    var search = decodeURIComponent(arr[1]);
    return search;
  }
  return "null";
}


function OnSearch(searchString) {
  
  //searchString = "relrel";
  //var match;
 
  var range = "A2:D";
  var lastColumn = sheets.getLastColumn();
  var lastRow = getLastRow(sheets, range);
  var responseString;
  var replies_count = 0;
  var arrayString;
  
  //Loop through first column and find match
  var increment = 0;
  var cell;
  var matchingFlowArray = new Array();
  var flowIdArray = new Array();
  var flowtitleArray = new Array();
  
  var secondaryArray = new Array();
  var matchingWord = 'null'; 
  var flowIncrement = 1;
  
  for(var i=2;i<=lastRow+1;i++){
    cell = sheets.getRange(i,1).getValue(); //Put cell value in matching word array
    if (cell == searchString)
    {
      matchingFlowArray[increment] = sheets.getRange(i,2).getValue(); //Put cell value in matching word array
      flowIdArray[increment] = sheets.getRange(i,3).getValue();
      flowtitleArray[increment] = sheets.getRange(i,4).getValue();
      matchingWord = sheets.getRange(i,1).getValue();
      replies_count ++;
      increment ++;
      flowIncrement++;
      if(replies_count == 5){
        break;
      }
    }
  } 
  if (matchingWord != 'null'){
    var params = JSON.stringify({
      'flow1': matchingFlowArray[0], 'flow2': matchingFlowArray[1], 'flow3': matchingFlowArray[2],
      'flow4': matchingFlowArray[3], 'flow5': matchingFlowArray[4],
      'ID1': flowIdArray[0], 'ID2': flowIdArray[1], 'ID3': flowIdArray[2], 'ID4': flowIdArray[3], 'ID5': flowIdArray[4],
      'flowtitle1': flowtitleArray[0], 'flowtitle2': flowtitleArray[1], 'flowtitle3': flowtitleArray[2],
      'flowtitle4': flowtitleArray[3], 'flowtitle5': flowtitleArray[4],
      'MatchingWord': matchingWord
    });
    return ContentService.createTextOutput(params).setMimeType(ContentService.MimeType.JSON);
  } 
  else{
    return ContentService.createTextOutput(JSON.stringify({
      'flow1' : '', 'flow2' : '', 'flow3' : '', 'flow4' : '', 'flow5' : '',
      'flowtitle1' : '', 'flowtitle2' : '', 'flowtitle3' : '', 'flowtitle4' : '', 'flowtitle5' : '',
      'ID1' : '', 'ID2' : '', 'ID3' : '', 'ID4' : '', 'ID5' : '',
      'MatchingWord' : ''
    })).setMimeType(ContentService.MimeType.JSON);
  }
}


function joinArrayElements(first_string, second_string, third_string, loop)
{
  var value = concatString = first_string[loop].concat(" ",second_string[loop]).concat(" ",third_string[loop]);  
  return value;
}


function getLastRow(sheet, rangeString) //This function should deal with a case where we have a blank row in-between
  {
    var range = sheet.getRange(rangeString).getValues();
    var i = range.length;

    var lastRowIndex;
    for (var i = range.length-1;i>=0;i--){
      lastRowIndex = i;
      var row = range[i];
      var isBlank = row.every(function(c){ return c == "";});

      if(!isBlank){
        break;
      }
    }
    return lastRowIndex +1;
  }
  return OnSearch(getSearchString())
}

