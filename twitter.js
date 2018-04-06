var donald = $(`
   <div class="twitter-widget-container">
       <a class="twitter-timeline"  href="https://twitter.com/search?q=%40realdonaldtrump" data-widget-id="981340244598579201"> @realDonaldTrump </a>
       <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
   </div>
`);

$('#customDonald').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(donald);

});



var russia = $(`
   <div class="twitter-widget-container">
       <a class="twitter-timeline"  href="https://twitter.com/hashtag/russia" data-widget-id="982050803316871168"> #Russia </a>
       <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
   </div>
`);

$('#customRussia').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(russia);

});



var nra = $(`
   <div class="twitter-widget-container">
       <a class="twitter-timeline"  href="https://twitter.com/search?q=%40NRA" data-widget-id="982045648504705026">Tweets about @NRA</a>
       <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
   </div>
`);

$('#customNRA').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(nra);

});

var vaccines = $(`
   <div class="twitter-widget-container">
            <a class="twitter-timeline"  href="https://twitter.com/hashtag/VaccinesKill" data-widget-id="982062940810444800">#VaccinesKill Tweets</a>
           <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
`);

$('#customVaccines').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(vaccines);

});

var twitter = $(`
   <div class="twitter-widget-container">
   <a class="twitter-timeline"  href="https://twitter.com/hashtag/Twitter" data-widget-id="982059692338720768">#Twitter Tweets</a>
   <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
`);

$('#customTwitter').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(twitter);

});

var immigration = $(`
   <div class="twitter-widget-container">
   <a class="twitter-timeline"  href="https://twitter.com/hashtag/Immigration" data-widget-id="982060244271480832">#Immigration Tweets</a>
   <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>  
</div>
`);

$('#customImmigration').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(immigration);

});

var facebook = $(`
   <div class="twitter-widget-container">
   <a class="twitter-timeline"  href="https://twitter.com/hashtag/Facebook" data-widget-id="982059748676616192">#Facebook Tweets</a>
   <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>  
</div>
`);

$('#customFacebook').on('click', function () {
    event.preventDefault();
    $("#wellSection3").empty();
    $('#wellSection3').append(nra);

});


$('#clearAll').on('click', function () {
	articleCounter = 0;
	$("#wellSection3").empty();
});