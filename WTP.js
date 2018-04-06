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
					$("#petitionWell-" + petitionCounter).append(`<h4>Signature Count: ${WTPData.results[i].signatureCount}</h4>`);
					$("#petitionWell-" + petitionCounter).append("<a href='" + WTPData.results[i].url + "'>" + WTPData.results[i].url + "</a>");

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


$('#customTwitter').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	//var searchTerm = "Twitter"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "twitter";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});


$('#customImmigration').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	//var searchTerm = "Russia"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "immigration";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});


$('#customFacebook').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	//var searchTerm = "Russia"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "facebook";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});


$('#customVaccines').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	//var searchTerm = "Russia"
	console.log("WTP" ,searchTerm)
	//var searchTerm = $('#searchTerm').val().trim();
	apiURL = apiURLBase + "&title=" + "vaccines";
	

	numResults = 5;

	runQuery(numResults, apiURL);
});







