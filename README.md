jquery-youtubesorter-plugin
===========================

This is a jQuery plugin that will list the newest videos of your favorite Youtube channels and sort them by date.

You can see how it works here:
http://ovnisoftware.com/ChannelViewer.html

This plugin uses the YouTube Data API (v3) and you will need to get a Youtube API key for it to work.

I used the tablesorter jquery plugin for this so I would like to thank them for making it.  You can see their work here:
  https://github.com/christianbach/tablesorter

You will need to reference these 3 files in the header:
```
    <script src="Scripts/jquery-2.1.1.min.js"></script>
    <script src="Scripts/jquery.tablesorter.min.js"></script>
    <script src="Scripts/jquery.ShowVideos.js"></script>
```
You can adjust the size of the youtube video thumbnails in css by manipulating the img tag.
```
    <style>
        img {
            width: 125px;
        }
    </style>
```
Here's the javascript part you'll need:
```
    <script>
        $(document).ready(function () {
            $("#myTable").youtubesort(["khanacademy", "KhanAcademyEspanol", "Microsoft", "julioprofe"], 5);
        });
    </script>
```
The youtubesort method takes two parameters, an array with the channels you want in the list and the number of videos you want each channel to display.

The data is populated in a table with the id of 'myTable'.  There are 2 places you need to enter your Youtube API key in ShowVideos.js.  Please contact me if you have any ideas to make this better.
