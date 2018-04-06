
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryTerm 	= "";
var numResults 	= 0;
var startYear 	= 0;
var endYear		= 0;

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var articleCounter = 0;

function runAPIQuery(numArticles, queryURL){
	$.ajax({url: queryURL, method: "GET"})
	.done(function(NYTData) {

			console.log("------------------------------------")
			console.log("URL: " + queryURL);
			console.log("------------------------------------")

			console.log(NYTData);
			console.log("------------------------------------")

			
            console.log(numArticles);
            
            for (var i=0; i<numArticles; i++) {

			
					articleCounter++;

					
					var wellSections = $("<div>");
					wellSections.addClass('well');
					wellSections.attr('id', 'articleWell-' + articleCounter)
					$('#wellSections').append(wellSections);

                    console.log(NYTData.response)
					if(NYTData.response.docs[i].headline != "null")
					{
						$("#articleWell-"+ articleCounter).append('<h3><span class="label label-default">' + articleCounter + '</span><strong>   ' + NYTData.response.docs[i].headline.main + "</strong></h3>");

						console.log(NYTData.response.docs[i].headline.main);
					}

					if( NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original"))
					{
						$("#articleWell-"+ articleCounter).append('<h5>' + NYTData.response.docs[i].byline.original + "</h5>");

						console.log(NYTData.response.docs[i].byline.original);
					}

					$("#articleWell-"+ articleCounter).append('<h5>Section: ' + NYTData.response.docs[i].section_name + "</h5>");
					$("#articleWell-"+ articleCounter).append('<h5>' + NYTData.response.docs[i].pub_date + "</h5>");
					$("#articleWell-"+ articleCounter).append("<a href='" + NYTData.response.docs[i].web_url + "'>" + NYTData.response.docs[i].web_url + "</a>");

					console.log(NYTData.response.docs[i].pub_date);
					console.log(NYTData.response.docs[i].section_name);
					console.log(NYTData.response.docs[i].web_url);
			}
		});

}

	$('#runTwo').on('click', function(){
		articleCounter = 0;
		$("#wellSections").empty();

		var searchTerm = $('#searchTerm').val().trim();
        queryURL = queryURLBase + searchTerm;
        
        numResults = $("#numRecordsSelect").val();

		runAPIQuery(numResults, queryURL);
	});

$('#clearAll').on('click', function(){
	articleCounter = 0;
	$("#wellSections").empty();
})


$('#customDonald').on('click', function(){
	articleCounter = 0;

	var searchTerm = "Donald Trump"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2018"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}
	runAPIQuery(numResults, queryURL);
	return false;
});

$('#customNRA').on('click', function(){
	articleCounter = 0;

	var searchTerm = "NRA"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2017"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	runAPIQuery(numResults, queryURL);
	return false;
});

$('#customRussia').on('click', function(){
	articleCounter = 0;

	var searchTerm = "Russia"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2017"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	runAPIQuery(numResults, queryURL);
	return false;
});

$('#customTwitter').on('click', function(){
	articleCounter = 0;

	var searchTerm = "Twitter"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2017"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	runAPIQuery(numResults, queryURL);
	return false;
});

$('#customImmigration').on('click', function(){
	articleCounter = 0;

	var searchTerm = "Immigration"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2017"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	runAPIQuery(numResults, queryURL);
	return false;
});

$('#customFacebook').on('click', function(){
	articleCounter = 0;

	var searchTerm = "Facebook"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2017"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	runAPIQuery(numResults, queryURL);
	return false;
});

$('#customVaccines').on('click', function(){
	articleCounter = 0;

	var searchTerm = "Vaccines"
	queryURL = queryURLBase + searchTerm;

	numResults = "5"
	startYear = "2017"
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	runAPIQuery(numResults, queryURL);
	return false;
});