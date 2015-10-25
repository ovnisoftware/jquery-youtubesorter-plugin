(function ($) {
    $.fn.youtubesort = function (channels, numResults) {
        this.each(function () {
            $("#myTable").tablesorter();
            for (var i in channels) {
            $.get(
                "https://www.googleapis.com/youtube/v3/channels",{
                    part: 'contentDetails',
                    forUsername: channels[i],
                    key: 'API KEY GOES HERE'},
                    function(data){
                        $.each(data.items, function(i, item){
                            console.log(item);
                            pid = item.contentDetails.relatedPlaylists.uploads;
                            getVids(pid, numResults);
                        })
                    }
                );
            function getVids(pid, numResults){
            $.get(
                "https://www.googleapis.com/youtube/v3/playlistItems",{
                    part: 'snippet',
                    maxResults: numResults,
                    playlistId: pid,
                    key: 'API KEY GOES HERE'},
                    function(data){
                        var output;
                        $.each(data.items, function(i, item){
                            console.log(item);
                            var title = item.snippet.title;
                            var thumbnailURL = item.snippet.thumbnails.default.url;
                            var author = item.snippet.channelTitle;
                            var datepublished = item.snippet.publishedAt.substring(0, 10);
                            var url = "https://www.youtube.com/watch?v=" + item.snippet.resourceId.videoId;
                            //item.link[0].href;

                        //format the data with <a> and <br> tags
                        var text =
                        "<tr>" +
                        "<td>" + "<img src='" + thumbnailURL + "'><br>" + "</td>" +
                        "<td>" + datepublished + "</td>" +
                        "<td>" + author + "</td>" + 
                        "<td>" + "<a href='" + url + "'>" + title + "</a><br>" + "</td>" +
                        //"<td>" + min + ":" + seconds + "</td>" +
                        "</tr>";

                            //var text = '<li>' + videoTitle + '</li>';
                            //Append to results list
                            $('#results').append(output);
                        
                        //append the data to the div element in the HTML
                        $("#myTable").tablesorter();
                        $("#myTable").append(text);
                        $("#myTable").tablesorter();
                        })
                    }
                );
            }
        };
    });
        return this;
    }
})(jQuery);