    $(".expand").toggle(function (){
        $(".content").animate({"margin-left": "60%"}, "slow");
        $(this).text("Less")
    	.stop();
	}, function(){
        $(".content").animate({"margin-left": "19.5%"}, "slow");
		$(this).text("More")
		.stop();
	});