var script_url = "https://script.google.com/macros/s/AKfycby9zVlpoh4rU9tRrUql-_SHP13eEMe2gWt3ow51T363h3OKBew/exec";
function insert_value() 
{

    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');
  
    var row1 = $("#Create_date").val();
    var row2 = $("#Phone").val();
    var row3 = $("#Name").val();
    var row4 = $("#Address").val();
    var row5 = $("#Description").val();
  
    var url = script_url + "?callback=ctrlq&Create_date"+ row1 +"&Phone=" + row2 + "&Name="+ row3 + 
     +"&Address=" + row4 + "&Description="+ row5 +"&action=insert";
    console.log(url);
  
  
    var request = jQuery.ajax({
  
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    console.log(request);
  }

  function read_value() {

    var url = script_url + "?action=read";
  
    $.getJSON(url, function(json) {
  
      // Set the variables from the results array
  
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
  
  
  
      var header = table.createTHead();
      //Es el correspondiente a una columna en la tabla
      var row = header.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
    
  
      // Es el Titulo de cada columna
      cell1.innerHTML = "<b>Create_date</b>";
      cell2.innerHTML = "<b>Phone</b>";
      cell3.innerHTML = "<b>Name</b>";
      cell4.innerHTML = "<b>Address</b>";
      cell5.innerHTML = "<b>Description</b>";
  
      // ADD JSON DATA TO THE TABLE AS ROWS
      //LOS NOMBRES DEBEN CORRESPONDER AL NOMBRE DE LAS COLUMNAS
      //DEL SHEET
    for (var i =0; i < json.records.length; i++)
      {
        tr = table.insertRow(-1);
  
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Create_date;
  
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Phone;
  
        tabCell = tr.insertCell(-1);
        console.log(json);
        tabCell.innerHTML = json.records[i].Name;
  
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Address;
  
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Description;
  
  
      }
  
  
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    });
  }
  