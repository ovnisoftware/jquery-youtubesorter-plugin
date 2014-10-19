(function ($) {
    $.fn.youtubesort = function (channels, numResults) {
        this.each(function () {
            $("#myTable").tablesorter();
            for (var i in channels) {
                var url = "https://gdata.youtube.com/feeds/api/users/" + channels[i] + "/uploads?max-results=" + numResults + "&alt=json";
                $.getJSON(url, function (data) {
                    $.each(data.feed.entry, function (i, item) {
                        //create four variables for each video
                        var url = item.link[0].href;
                        var title = item.title.$t;
                        var datepublished = item.published.$t.substring(0, 10);
                        var author = item.author[0].name.$t;
                        var thumbnailURL = item.media$group.media$thumbnail[0].url;
                        var length = item.media$group.media$content[0].duration;
                        var min1 = length / 60;
                        var min1 = min1.toString();
                        var timearray = min1.split(".");
                        var min = timearray[0];
                        var seconds = Math.round(length % 60);
                        if (seconds < 10) {
                            var zero = "0";
                            seconds = zero.concat(seconds);
                        }

                        //format the data with <a> and <br> tags
                        var text =
                        "<tr>" +
                        "<td>" + "<img src='" + thumbnailURL + "'><br>" + "</td>" +
                        "<td>" + datepublished + "</td>" +
                        "<td>" + author + "</td>" +
                        "<td>" + "<a href='" + url + "'>" + title + "</a><br>" + "</td>" +
                        "<td>" + min + ":" + seconds + "</td>" +
                        "</tr>";
                        //append the data to the div element in the HTML
                        $("#myTable").tablesorter();
                        $("#myTable").append(text);
                        $("#myTable").tablesorter();
                    });
                });
            };
        });
        return this;
    }
})(jQuery);