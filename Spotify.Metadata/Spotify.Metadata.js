var Spotify;
(function (Spotify) {
    (function (LookupAlbumExtras) {
        LookupAlbumExtras[LookupAlbumExtras["Track"] = 0] = "Track";

        LookupAlbumExtras[LookupAlbumExtras["TrackDetail"] = 1] = "TrackDetail";
    })(Spotify.LookupAlbumExtras || (Spotify.LookupAlbumExtras = {}));
    var LookupAlbumExtras = Spotify.LookupAlbumExtras;

    var Request = (function () {
        function Request(req) {
            this.req = req;
        }
        Object.defineProperty(Request.prototype, "request", {
            get: function () {
                return this.req;
            },
            enumerable: true,
            configurable: true
        });
        Request.prototype.done = function (callback) {
            return this.req.done(callback);
        };
        return Request;
    })();
    Spotify.Request = Request;

    var MetadataClient = (function () {
        function MetadataClient(baseUrl) {
            if (typeof baseUrl === "undefined") { baseUrl = "http://ws.spotify.com"; }
            this.baseUrl = baseUrl;
        }
        MetadataClient.prototype.lookupAlbum = function (artistUri, extras) {
            if (typeof extras === "undefined") { extras = null; }
            var url = this.baseUrl + "/lookup/1/.json?uri=" + artistUri;

            if (extras === null) {
            } else if (extras === LookupAlbumExtras.Track)
                url += "&extras=track"; else if (extras === LookupAlbumExtras.TrackDetail)
                url += "&extras=trackdetail";

            var req = $.ajax({
                url: url,
                dataType: "json",
                type: "GET",
                contentType: "text/plain"
            });

            return new Request(req);
        };
        return MetadataClient;
    })();
    Spotify.MetadataClient = MetadataClient;
})(Spotify || (Spotify = {}));
//@ sourceMappingURL=Spotify.Metadata.js.map
