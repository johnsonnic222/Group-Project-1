
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

			// Here we are logging the URL so we have access to it for troubleshooting
			console.log("------------------------------------")
			console.log("URL: " + queryURL);
			console.log("------------------------------------")

			// Here we then log the NYTData to console, where it will show up as an object.
			console.log(NYTData);
			console.log("------------------------------------")

			
            console.log(numArticles);
            
            for (var i=0; i<numArticles; i++) {

			
					articleCounter++;

					
					var wellSections = $("<div>");
					wellSections.addClass('well');
					wellSections.attr('id', 'articleWell-' + articleCounter)
					$('#wellSections').append(wellSections);

					// Confirm that the specific JSON for the article isn't missing any details
                    // If the article has a headline include the headline in the HTML
                    console.log(NYTData.response)
					if(NYTData.response.docs[i].headline != "null")
					{
						$("#articleWell-"+ articleCounter).append('<h3><span class="label label-default">' + articleCounter + '</span><strong>   ' + NYTData.response.docs[i].headline.main + "</strong></h3>");

						// Log the first article's Headline to console.
						console.log(NYTData.response.docs[i].headline.main);
					}

					// If the article has a Byline include the headline in the HTML
					if( NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original"))
					{
						$("#articleWell-"+ articleCounter).append('<h5>' + NYTData.response.docs[i].byline.original + "</h5>");

						// Log the first article's Author to console.
						console.log(NYTData.response.docs[i].byline.original);
					}

					// Then display the remaining fields in the HTML (Section Name, Date, URL)
					$("#articleWell-"+ articleCounter).append('<h5>Section: ' + NYTData.response.docs[i].section_name + "</h5>");
					$("#articleWell-"+ articleCounter).append('<h5>' + NYTData.response.docs[i].pub_date + "</h5>");
					$("#articleWell-"+ articleCounter).append("<a href='" + NYTData.response.docs[i].web_url + "'>" + NYTData.response.docs[i].web_url + "</a>");

					// Log the remaining fields to console as well
					console.log(NYTData.response.docs[i].pub_date);
					console.log(NYTData.response.docs[i].section_name);
					console.log(NYTData.response.docs[i].web_url);
			}
		});

}

// METHODS
// ==========================================================

	// On Click button associated with the Search Button
	$('#runTwo').on('click', function(){

		// Initially sets the articleCounter to 0
		articleCounter = 0;
		$("#wellSections").empty();

		// Search Term
		var searchTerm = $('#searchTerm').val().trim();
        queryURL = queryURLBase + searchTerm;
        
        numResults = $("#numRecordsSelect").val();

		// Then we will pass the final queryURL and the number of results to include to the runQuery function
		runAPIQuery(numResults, queryURL);
	});

// This button clears the top articles section
$('#clearAll').on('click', function(){
	articleCounter = 0;
	$("#wellSections").empty();
})

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


$('#customDonald').on('click', function(){

	// Initially sets the articleCounter to 0
	articleCounter = 0;

	// Search Term
	var searchTerm = "Donald Trump"
	queryURL = queryURLBase + searchTerm;

	// Num Results
	numResults = "5"

	// Start Year
	startYear = "2018"

	// End Year
	//endYear = "2018"

	// If the user provides a startYear -- the startYear will be included in the queryURL
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	// If the user provides a startYear -- the endYear will be included in the queryURL
	//if (parseInt(endYear)) {
	//	queryURL = queryURL + "&end_date=" + endYear + "0101";
	//}

	// Then we will pass the final queryURL and the number of results to include to the runQuery function
	runAPIQuery(numResults, queryURL);

	// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
	return false;
});

$('#customNRA').on('click', function(){

	// Initially sets the articleCounter to 0
	articleCounter = 0;

	// Search Term
	var searchTerm = "NRA"
	queryURL = queryURLBase + searchTerm;

	// Num Results
	numResults = "5"

	// Start Year
	startYear = "2017"

	// End Year
	//endYear = "2018"

	// If the user provides a startYear -- the startYear will be included in the queryURL
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	// If the user provides a startYear -- the endYear will be included in the queryURL
	//if (parseInt(endYear)) {
		//queryURL = queryURL + "&end_date=" + endYear + "0101";
	//}

	// Then we will pass the final queryURL and the number of results to include to the runQuery function
	runAPIQuery(numResults, queryURL);

	// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
	return false;
});

$('#customRussia').on('click', function(){

	// Initially sets the articleCounter to 0
	articleCounter = 0;

	// Search Term
	var searchTerm = "Russia"
	queryURL = queryURLBase + searchTerm;

	// Num Results
	numResults = "5"

	// Start Year
	startYear = "2017"

	// End Year
//	endYear = "2017"

	// If the user provides a startYear -- the startYear will be included in the queryURL
	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}

	// If the user provides a startYear -- the endYear will be included in the queryURL
	//if (parseInt(endYear)) {
		//queryURL = queryURL + "&end_date=" + endYear + "0101";
	//}

	// Then we will pass the final queryURL and the number of results to include to the runQuery function
	runAPIQuery(numResults, queryURL);

	// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
	return false;
});