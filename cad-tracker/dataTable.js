/*
Bootstable
 @description  Javascript library to make HMTL tables editable, using Bootstrap
 @version 1.1
 Credit: @autor Tito Hinostroza
*/
"use strict";
//Global variables
var params = null;  		//Parameters
var colsEdi =null;
var newColHtml = '<div class="btn-group pull-right">'+
'<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="butRowEdit(this);">' +
'<span class="glyphicon glyphicon-pencil" text="abc" > Edit </span>'+
'</button>'+
// '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="butRowDelete(this);">' +
// '<span class="glyphicon glyphicon-trash" > </span>'+
'</button>'+
'<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="butRowAcep(this);">' + 
'<span class="glyphicon glyphicon-ok" >Save </span>'+
'</button>'+
'<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="butRowCancel(this);">' + 
'<span class="glyphicon glyphicon-remove" > Cancel</span>'+
'</button>'+
  '</div>';
  //Without Bootstrap
  var newColHtml2 = '<div class="btn-group pull-right">'+
  '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="butRowEdit(this);">' +
  '<span class="glyphicon glyphicon-pencil" > ✎ </span>'+
  '</button>'+
  '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="butRowDelete(this);">' +
  '<span class="glyphicon glyphicon-trash" > X </span>'+
  '</button>'+
  '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="butRowAcep(this);">' + 
  '<span class="glyphicon glyphicon-ok" > ✓ </span>'+
  '</button>'+
  '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="butRowCancel(this);">' + 
  '<span class="glyphicon glyphicon-remove" > → </span>'+
  '</button>'+
    '</div>';
var colEdicHtml = '<td name="buttons">'+newColHtml+'</td>'; 
$.fn.SetEditable = function (options) {
  var defaults = {
      columnsEd: null,         //Index to editable columns. If null all td editables. Ex.: "1,2,3,4,5"
      $addButton: null,        //Jquery object of "Add" button
      bootstrap: true,         //Indicates bootstrap is present.
      onEdit: function() {},   //Called after edition
      onBeforeDelete: function() {}, //Called before deletion
      onDelete: function() {}, //Called after deletion
      onAdd: function() {}     //Called when added a new row
  };
  params = $.extend(defaults, options);
  var $tabedi = this;   //Read reference to the current table.
  $tabedi.find('thead tr').append('<th name="buttons"></th>');  //Add empty column
  if (!params.bootstrap) {
    colEdicHtml = '<td name="buttons">'+newColHtml2+'</td>'; 
  }
  //Add column for buttons to all rows.
  $tabedi.find('tbody tr').append(colEdicHtml);
  //Process "addButton" parameter
  if (params.$addButton != null) {
      params.$addButton.click(function() {
          rowAddNew($tabedi.attr("id"));
      });
  }
  //Process "columnsEd" parameter
  if (params.columnsEd != null) {
      //Extract felds
      colsEdi = params.columnsEd.split(',');
  }
};
function IterarCamposEdit($cols, action) {
//Iterate through editable fields in a row
  var n = 0;
  $cols.each(function() {
      n++;
      if ($(this).attr('name')=='buttons') return;  //Exclude buttons column
      if (!IsEditable(n-1)) return;   //It's not editable
      action($(this));
  });
  
  function IsEditable(idx) {
  //Indicates if the passed column is set to be editable
      if (colsEdi==null) {  
          return true;  
      } else {  
          for (var i = 0; i < colsEdi.length; i++) {
            if (idx == colsEdi[i]) return true;
          }
          return false;  
      }
  }
}
function ModoEdicion($row) {
  if ($row.attr('id')=='editing') {
      return true;
  } else {
      return false;
  }
}
//Set buttons state
function SetButtonsNormal(but) {
  $(but).parent().find('#bAcep').hide();
  $(but).parent().find('#bCanc').hide();
  $(but).parent().find('#bEdit').show();
  $(but).parent().find('#bElim').show();
  var $row = $(but).parents('tr'); 
  $row.attr('id', ''); 
}
function SetButtonsEdit(but) {
  $(but).parent().find('#bAcep').show();
  $(but).parent().find('#bCanc').show();
  $(but).parent().find('#bEdit').hide();
  $(but).parent().find('#bElim').hide();
  var $row = $(but).parents('tr');  
  $row.attr('id', 'editing');  
}
//Events functions
function butRowAcep(but) {

  var $row = $(but).parents('tr');  
  var $cols = $row.find('td'); 
  if (!ModoEdicion($row)) return;  
  IterarCamposEdit($cols, function($td) {  
    var cont = $td.find('input').val(); 
    $td.html(cont); 
    document.getElementById("cstName").innerHTML = document.getElementById("cstName4").innerHTML;
    document.getElementById("cstName1").innerHTML = document.getElementById("cstName4").innerHTML;
    document.getElementById("cstName2").innerHTML = document.getElementById("cstName4").innerHTML;
    document.getElementById("cstName5").innerHTML = document.getElementById("cstName4").innerHTML;
    document.getElementById("cstName6").innerHTML = document.getElementById("cstName4").innerHTML;
    //document.getElementById("splCondition1").innerHTML = document.getElementById("splCondition").innerHTML;
    document.getElementById("cstName7").innerHTML = document.getElementById("cstName4").innerHTML;
    document.getElementById("cstName8").innerHTML = document.getElementById("cstName4").innerHTML;

    document.getElementById("rsum").innerHTML = document.getElementById("rsum3").innerHTML;
    document.getElementById("rsum1").innerHTML = document.getElementById("rsum3").innerHTML;

    document.getElementById("cstAdr1").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    document.getElementById("cstAdr1_1").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    document.getElementById("cstAdr1_4").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    document.getElementById("cstAdr1_6").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    document.getElementById("cstAdr1_7").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    document.getElementById("cstAdr1_8").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    //document.getElementById("cstAdr1_1").innerHTML = document.getElementById("cstAdr1_5").innerHTML;
    document.getElementById("cstAdr2").innerHTML = document.getElementById("cstAdr1_51").innerHTML;
    document.getElementById("cstAdr1_2").innerHTML = document.getElementById("cstAdr1_51").innerHTML;
    document.getElementById("cstAdr1_3").innerHTML = document.getElementById("cstAdr1_51").innerHTML;
    document.getElementById("cstAdr1_61").innerHTML = document.getElementById("cstAdr1_51").innerHTML;
    document.getElementById("cstAdr1_71").innerHTML = document.getElementById("cstAdr1_51").innerHTML;
    document.getElementById("cstAdr1_81").innerHTML = document.getElementById("cstAdr1_51").innerHTML;

    document.getElementById("splCondition2").innerHTML = document.getElementById("splCondition").innerHTML;
    document.getElementById("splCondition3").innerHTML = document.getElementById("splCondition").innerHTML;
    document.getElementById("splCondition4").innerHTML = document.getElementById("splCondition").innerHTML;
    //document.getElementById("vhMade1").innerHTML = document.getElementById("vhMade").innerHTML;
    //console.log(cont["vhMade"]);
  });
  SetButtonsNormal(but);
  params.onEdit($row);
  
}
function butRowCancel(but) {
  var $row = $(but).parents('tr'); 
  var $cols = $row.find('td');  
  if (!ModoEdicion($row)) return;  

  IterarCamposEdit($cols, function($td) {  
      var cont = $td.find('div').html();
      $td.html(cont);  
  });
  SetButtonsNormal(but);
}
function butRowEdit(but) {  
  //Start the edition mode for a row.
  var $row = $(but).parents('tr');  
  var $cols = $row.find('td');  
  if (ModoEdicion($row)) return;
  var focused=false;  //flag
  IterarCamposEdit($cols, function($td) {  
      var cont = $td.html(); 
      //Save previous content in a hide <div>
      var div  = '<div style="display: none;">' + cont + '</div>';  
      var input= '<input class="form-control  input-sm"  value="' + cont + '">';
      $td.html(div + input);  //Set new content: ;
      //Set focus to first column
      if (!focused) {
        $td.find('input').focus();
        focused = true;
      }
  });
  SetButtonsEdit(but);
}
function butRowDelete(but) {  
  var $row = $(but).parents('tr');  
  params.onBeforeDelete($row);
  $row.remove();
  params.onDelete();
}
//Functions to be called directly
function rowAddNew(tabId, initValues=[]) {  
  /* Add a new row to a editable table. 
   Parameters: 
    tabId       -> Id for the editable table.
    initValues  -> Optional. Array containing the initial value for the 
                   new row.
  */
  var $tab_en_edic = $("#"+tabId);  //Table to edit
  var $row = $tab_en_edic.find('tbody tr');
  //if ($rows.length==0) {
      var $row = $tab_en_edic.find('thead tr');  
      var $cols = $row.find('th');  
      var htmlDat = '';
      var i = 0;
      $cols.each(function() {
          if ($(this).attr('name')=='buttons') {
              htmlDat = htmlDat + colEdicHtml; 
          } else {
              if (i<initValues.length) {
                htmlDat = htmlDat + '<td>'+initValues[i]+'</td>';
              } else {
                htmlDat = htmlDat + '<td></td>';
              }
          }
          i++;
      });
      $tab_en_edic.find('tbody').append('<tr>'+htmlDat+'</tr>');
  params.onAdd();
}
function rowAddNewAndEdit(tabId, initValues=[]) {
/* Add a new row an set edition mode */  
  rowAddNew(tabId, initValues);
  var $lastRow = $('#'+tabId + ' tr:last');
  butRowEdit($lastRow.find('#bEdit'));  //Pass a button reference
}
function TableToCSV(tabId, separator) {  //Convert table to CSV
  var datFil = '';
  var tmp = '';
  var $tab_en_edic = $("#" + tabId);  //Table source
  $tab_en_edic.find('tbody tr').each(function() {
      //Termina la edición si es que existe
      if (ModoEdicion($(this))) {
          $(this).find('#bAcep').click();  //acepta edición
      }
      var $cols = $(this).find('td');  //lee campos
      datFil = '';
      $cols.each(function() {
          if ($(this).attr('name')=='buttons') {
              //Es columna de botones
          } else {
              datFil = datFil + $(this).html() + separator;
          }
      });
      if (datFil!='') {
          datFil = datFil.substr(0, datFil.length-separator.length); 
      }
      tmp = tmp + datFil + '\n';
  });
  return tmp;
}
function TableToJson(tabId) {   //Convert table to JSON
  var json = '{';
  var otArr = [];
  var tbl2 = $('#'+tabId+' tr').each(function(i) {        
     var x = $(this).children();
     var itArr = [];
     x.each(function() {
        itArr.push('"' + $(this).text() + '"');
     });
     otArr.push('"' + i + '": [' + itArr.join(',') + ']');
  })
  json += otArr.join(",") + '}'
  return json;
}