    $(".expand").toggle(function (){
        $(".content").animate({"margin-left": "0%"}, "slow");
        $(this).text("Less")
    	.stop();
	}, function(){
        $(".content").animate({"margin-left": "-40%"}, "slow");
		$(this).text("More")
		.stop();
	});