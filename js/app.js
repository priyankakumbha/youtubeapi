$(document).ready(function() {
	

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
})
function getRequest(searchTerm){
	var params={
    part: 'snippet',
key: 'AIzaSyDwouYJaSWiuSaJk7u4wjyaBDQGogC_ItU',
q:  searchTerm 
      
     
};
url = 'https://www.googleapis.com/youtube/v3/search';
$.getJSON(url, params, function(data){
 /* select photos related to entered item */
  var myThumbenialURL = data.items[0].snippet.thumbnails.high.url;
  showResults(data.items);
    });
}
function showResults(results){
	var html = "";
  $.each(results, function(index,value){
    var thumbURL=value.snippet.thumbnails.high.url ;
    /* made video clicable */
    var videoID=value.id.videoId;
    var videoURL ='https://www.youtube.com/watch?v='+videoID;
    var hrefTagStart="<a href='"+videoURL+"'>";
    var hrefTagEnd="</a>";
    var paraValue= "<img src= '"+thumbURL+"'style='width:250px;height:250px; margin-right:10px;'>";
  	/* display output in result area */
    html +=  hrefTagStart+paraValue +hrefTagEnd;
        
  });
  
  $('#search-results').html(html);
}
    
    });

    