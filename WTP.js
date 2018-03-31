var authKey = "sa7Im6LlV1A14WoGvUiRHp28lycfPPy6904zJ4En";
var queryTerm = "";
var queryURLBase = "https://api.whitehouse.gov/v1/petitions.json?";
var petitionCounter = 0;


function runQuery(numPetitions, queryURL) {

	$.ajax({ url: queryURL, method: "GET" })
	.done(function (WTPData) {

			console.log("------------------------------------")
			console.log("URL: " + queryURL);
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
				$("#petitionWell-" + petitionCounter).append('<h3><span class="label label-primary">' + petitionCounter + '</span><strong>   ' + WTPData.results[i].title + "</strong></h3>");
				$("#petitionWell-" + petitionCounter).append("<a href='" + WTPData.results[i].url + "'>" + WTPData.results[i].url + "</a>");

				// Log the first article's Headline to console.
				console.log(WTPData.results[i].title);
				console.log(WTPData.results[i].url);
			}

			// Then display the remaining fields in the HTML (Section Name, Date, URL)
			//$("#petitionWell-" + petitionCounter).append("<a href='" + WTPData.results[i].url + "'>" + WTPData.results[i].isSignable + "</a>");
			//$("#petitionWell-" + petitionCounter).append("<a href='" + WTPData.results[i].url + "'>" + WTPData.results[i].signatureCount + "</a>");
			// $("#petitionWell-" + petitionCounter).append("<a href='" + WTPData.results[i].url + "'>" + WTPData.results[i].url + "</a>");

			// Log the remaining fields to console as well
			//console.log(WTPData.results[i].pub_date);
			//console.log(WTPData.results[i].section_name);
			console.log(WTPData.results[i].url);
		}
	});

}

$('#runSearch').on('click', function () {
	event.preventDefault();

	petitionCounter = 0;
	$("#wellSection").empty();

	var searchTerm = $('#searchTerm').val().trim();
    queryURL = queryURLBase + "&title=" + searchTerm + "&body=" + searchTerm;

	numResults = $("#numRecordsSelect").val();

	runQuery(numResults, queryURL);

});

// This button clears the top articles section
// $('#clearAll').on('click', function(){
// 	articleCounter = 0;
// 	$("#wellSection").empty();
// });
