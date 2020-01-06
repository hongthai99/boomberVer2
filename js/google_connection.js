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
