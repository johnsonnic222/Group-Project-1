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

$('#clearAll').on('click', function () {
	articleCounter = 0;
	$("#wellSection3").empty();
});