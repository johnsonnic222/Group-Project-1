{/* <a class="twitter-timeline" href="https://twitter.com/search?q=%40KremlinRussia" data-widget-id="982030162735849472">Tweets about @KremlinRussia</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js = d.createElement(s); js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>



    <a class="twitter-timeline" href="https://twitter.com/search?q=%40realdonaldtrump" data-widget-id="">Tweets about @realDonaldTrump</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js = d.createElement(s); js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>



    <a class="twitter-timeline" href="https://twitter.com/search?q=%40NRA" data-widget-id="982030162735849472">Tweets about @NRA</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js = d.createElement(s); js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
 */}


    $('#customDonald').on('click', function () {
        console.log(click);
    event.preventDefault();
    $("#twitterSection").empty();
    datawidgetid = "982030162735849472";
    console.log(datawidgetid);

   
});


$('#customNRA').on('click', function () {
    event.preventDefault();

    petitionCounter = 0;
    $("#wellSection").empty();

    var searchTerm = "gun"
    console.log("WTP", searchTerm)
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
    console.log("WTP", searchTerm)
    //var searchTerm = $('#searchTerm').val().trim();
    apiURL = apiURLBase + "&title=" + "russia";


    numResults = 5;

    runQuery(numResults, apiURL);
});