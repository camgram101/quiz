function tileClicked(tileName)
{
	//alert(tileName);
}


$(function () {
	$( "#dialog1" ).dialog({
	  autoOpen: false,
	  buttons: {
		        "RNA": function() {
		            $(this).dialog("close");
		            processResult(true);
		        },
		        "DNA": function() {
		            $(this).dialog("close");
		            processResult(false);
		        },
				"Giraffe": function() {
		            $(this).dialog("close");
		            processResult(false);
		        },
		        "42": function() {
		            $(this).dialog("close");
		            processResult(false);
		        }
		    }
	});
	
	$("#div1a").click(function() {
	  $("#dialog1").dialog('open');
	});
  });

function processResult(result) {
    alert(result);
}
