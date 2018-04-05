var authKey = "sa7Im6LlV1A14WoGvUiRHp28lycfPPy6904zJ4En";
var queryTerm = "";
var apiURLBase = "https://api.whitehouse.gov/v1/petitions.json?";
var petitionCounter = 0;


function runQuery(numPetitions, apiURL) {

	$.ajax({ url: apiURL, method: "GET" })
		.done(function (WTPData) {

			console.log("------------------------------------")
			console.log("URL: " + apiURL);
			console.log("------------------------------------")

			console.log(WTPData);
			console.log("------------------------------------")


			for (var i = 0; i < numPetitions; i++) {
				petitionCounter++;


				var wellSection = $("<div>");
				wellSection.addClass('well');
				wellSection.attr('id', 'petitionWell-' + petitionCounter)
				$('#wellSection').append(wellSection);

				if (WTPData.results[i].title != "null") {
					$("#petitionWell-" + petitionCounter).append('<h3><span class="label label-default" >' + petitionCounter + '</span><strong>   ' + WTPData.results[i].title + "</strong></h3>");
					//$("#petitionWell-" + petitionCounter).append(WTPData.results[i].created + "<br>"); 
					$("#petitionWell-" + petitionCounter).append(WTPData.results[i].signatureCount + "<br>");
					$("#petitionWell-" + petitionCounter).append("<a href='" + WTPData.results[i].url + "'>" + WTPData.results[i].url + "</a>");

					// Log the first article's Headline to console.
					// console.log(WTPData.results[i].title);
					// console.log(WTPData.results[i].signatureCount);
					// console.log(WTPData.results[i].url);
				}
			}
		});

}

$('#runWTP').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + searchTerm + "&body=" + searchTerm;

	numResults = $("#numRecordsSelect").val();

	runQuery(numResults, apiURL);

});

// This button clears the top articles section
$('#clearAll').on('click', function () {
	articleCounter = 0;
	$("#wellSection").empty();
});

$('#most').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();
	$("#searchTerm.form-control").empty();

	var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + searchTerm + "&body=" + searchTerm;
	apiURL += '&sortBy=signature_count&sortOrder=desc';

	numResults = 10;

	runQuery(numResults, apiURL);
});

$('#least').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "&body=";
	apiURL += '&sortBy=signature_count&sortOrder=asc';

	numResults = 10;

	runQuery(numResults, apiURL);
});

$('#customDonald').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	var searchTerm = "Donald Trump"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "Donald Trump";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});


$('#customNRA').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	var searchTerm = "gun"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "gun";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});


$('#customRussia').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	//var searchTerm = "Russia"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "russia";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});







