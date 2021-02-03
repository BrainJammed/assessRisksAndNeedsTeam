/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$( document ).ready(function() {
    
    $("#statutoryYes").click(function(){
      $(".hiddenSectionOffences").show();
      $(".hiddenDate").hide();
  });

  $("#statutoryNo").click(function(){
      $(".hiddenSectionOffences").hide();
      $(".hiddenDate").show();
  });

	$("#motivationYes").click(function(){
    	$(".hiddenSectionOffences").show();
	});

	$(".previousConvictionsYes").click(function(){
    	$(".previousConvictionsDiv").show();
    	$(".carryingWeapon").show();
	});

	$(".previousConvictionsNo").click(function(){
    	$(".previousConvictionsDiv").hide();
    	$(".carryingWeapon").hide();
	});

	$(".accomOffendingBehaviourYes").click(function(){
    	$(".accommodationType").show();
	});


	$(".accomOffendingBehaviourNo").click(function(){
    	$(".accommodationType").hide();
	});

	$(".educationIssuesYes").click(function(){
    	$(".educationStatus").show();
    	$(".skillsforlife").show();
  	});


	$("#educationIssuesNo").click(function(){
    	$(".educationStatus").hide();
    	$(".skillsforlife").hide();
	});

	$("#suicidalThoughtsYes").click(function(){
    	$(".evidenceofmentalhealth").show();
	});

	$("#suicidalThoughtsNo").click(function(){
    	$(".evidenceofmentalhealth").hides();
	});

	$("#drugMisuseYes").click(function(){
    	$(".drugMisuse").show();
    	$(".tackledrugmisuse").show();
  	});

  	$("#drugMisuseNo").click(function(){
    	$(".drugMisuse").hide();
    	$(".tackledrugmisuse").hide();
  	});


//ORAL PSR

  $("#otherOffencesYes").click(function(){
      $(".hiddenSetQuestions").show();
  });

  $("#commitedSexualOffence").click(function(){
      $(".hiddenSetQuestions").show();
  });

  $("#otherOffencesNo").click(function(){
      $(".hiddenSetQuestions").hide();
  });

  $("#commitedSexualOffenceNo").click(function(){
      $(".hiddenSetQuestions").hide();
  });

  $("#previousConvicitonsYes").click(function(){
      $(".hiddenSection").show();
  });

  $("#previousConvicitonsNo").click(function(){
      $(".hiddenSection").hide();
  });

  $("#accommodationYes").click(function(){
      $(".hiddenRadiosA").show();
  });

  $("#accommodationNo").click(function(){
      $(".hiddenRadiosA").hide();
  });

  $("#educationYes").click(function(){
      $(".hiddenCheckboxes").show();
  });

  $("#educationNo").click(function(){
      $(".hiddenCheckboxes").hide();
  });

  $("#perpetratorYes").click(function(){
      $(".hiddenRadiosA").show();
  });

  $("#perpetratorNo").click(function(){
      $(".hiddenRadiosA").hide();
  });

  $("#drugYes").click(function(){
      $(".hiddenSetQuestions").show();
  });

  $("#drugNo").click(function(){
      $(".hiddenSetQuestions").hide();
  });


  	



	







	







});