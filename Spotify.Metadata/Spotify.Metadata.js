var Spotify;
(function (Spotify) {
    (function (LookupAlbumExtras) {
        LookupAlbumExtras._map = [];
        LookupAlbumExtras._map[0] = "Track";
        LookupAlbumExtras.Track = 0;
        LookupAlbumExtras._map[1] = "TrackDetail";
        LookupAlbumExtras.TrackDetail = 1;
    })(Spotify.LookupAlbumExtras || (Spotify.LookupAlbumExtras = {}));
    var LookupAlbumExtras = Spotify.LookupAlbumExtras;
    var LookupAlbumRequest = (function () {
        function LookupAlbumRequest(req) {
            this.req = req;
        }
        Object.defineProperty(LookupAlbumRequest.prototype, "request", {
            get: function () {
                return this.req;
            },
            enumerable: true,
            configurable: true
        });
        LookupAlbumRequest.prototype.done = function (callback) {
            return this.req.done(callback);
        };
        return LookupAlbumRequest;
    })();
    Spotify.LookupAlbumRequest = LookupAlbumRequest;    
    var MetadataClient = (function () {
        function MetadataClient(baseUrl) {
            if (typeof baseUrl === "undefined") { baseUrl = "http://ws.spotify.com"; }
            this.baseUrl = baseUrl;
        }
        MetadataClient.prototype.lookupAlbum = function (artistUri, extras) {
            if (typeof extras === "undefined") { extras = null; }
            var url = this.baseUrl + "/lookup/1/.json?uri=" + artistUri;
            if(extras === null) {
            } else if(extras === LookupAlbumExtras.Track) {
                url += "&extras=track";
            } else if(extras === LookupAlbumExtras.TrackDetail) {
                url += "&extras=trackdetail";
            }
            var req = $.ajax({
                url: url,
                dataType: "json",
                type: "GET",
                contentType: "text/plain"
            });
            return new LookupAlbumRequest(req);
        };
        return MetadataClient;
    })();
    Spotify.MetadataClient = MetadataClient;    
})(Spotify || (Spotify = {}));
//@ sourceMappingURL=Spotify.Metadata.js.map
