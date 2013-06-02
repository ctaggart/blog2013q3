var Spotify;
(function (Spotify) {
    (function (Lookup) {
        var ExternalId = (function () {
            function ExternalId(json) {
                this.json = json;
            }
            Object.defineProperty(ExternalId.prototype, "type", {
                get: function () {
                    return this.json.type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ExternalId.prototype, "id", {
                get: function () {
                    return this.json.id;
                },
                enumerable: true,
                configurable: true
            });
            return ExternalId;
        })();
        Lookup.ExternalId = ExternalId;        
        var Artist = (function () {
            function Artist(json) {
                this.json = json;
            }
            Object.defineProperty(Artist.prototype, "href", {
                get: function () {
                    return this.json.href;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Artist.prototype, "name", {
                get: function () {
                    return this.json.name;
                },
                enumerable: true,
                configurable: true
            });
            return Artist;
        })();
        Lookup.Artist = Artist;        
        var Track = (function () {
            function Track(json) {
                this.json = json;
            }
            Object.defineProperty(Track.prototype, "available", {
                get: function () {
                    return this.json.available;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "trackNumber", {
                get: function () {
                    return this.json.trackNumber;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "href", {
                get: function () {
                    return this.json.href;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "popularity", {
                get: function () {
                    return this.json.popularity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "externalIds", {
                get: function () {
                    var json = this.json["external-ids"];
                    return json.map(function (x) {
                        return new ExternalId(x);
                    });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "length", {
                get: function () {
                    return this.json.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "artists", {
                get: function () {
                    return this.json.artists;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "discNumber", {
                get: function () {
                    return this.json["disc-number"];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Track.prototype, "name", {
                get: function () {
                    return this.json.name;
                },
                enumerable: true,
                configurable: true
            });
            return Track;
        })();
        Lookup.Track = Track;        
        var Availability = (function () {
            function Availability(json) {
                this.json = json;
            }
            Object.defineProperty(Availability.prototype, "territories", {
                get: function () {
                    return this.json.territories;
                },
                enumerable: true,
                configurable: true
            });
            return Availability;
        })();
        Lookup.Availability = Availability;        
        var Album = (function () {
            function Album(json) {
                this.json = json;
            }
            Object.defineProperty(Album.prototype, "artistId", {
                get: function () {
                    return this.json["artist-id"];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "name", {
                get: function () {
                    return this.json.name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "artist", {
                get: function () {
                    return this.json.artist;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "externalIds", {
                get: function () {
                    var json = this.json["external-ids"];
                    return json.map(function (x) {
                        return new ExternalId(x);
                    });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "released", {
                get: function () {
                    return this.json.released;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "tracks", {
                get: function () {
                    return this.json.tracks;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "href", {
                get: function () {
                    return this.json.href;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Album.prototype, "availability", {
                get: function () {
                    return this.json.availability;
                },
                enumerable: true,
                configurable: true
            });
            return Album;
        })();
        Lookup.Album = Album;        
        var Info = (function () {
            function Info(json) {
                this.json = json;
            }
            Object.defineProperty(Info.prototype, "type", {
                get: function () {
                    return this.json.type;
                },
                enumerable: true,
                configurable: true
            });
            return Info;
        })();
        Lookup.Info = Info;        
        var AlbumResponse = (function () {
            function AlbumResponse(json) {
                this.json = json;
            }
            Object.defineProperty(AlbumResponse.prototype, "album", {
                get: function () {
                    return new Album(this.json.album);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AlbumResponse.prototype, "info", {
                get: function () {
                    return new Info(this.json.info);
                },
                enumerable: true,
                configurable: true
            });
            return AlbumResponse;
        })();
        Lookup.AlbumResponse = AlbumResponse;        
    })(Spotify.Lookup || (Spotify.Lookup = {}));
    var Lookup = Spotify.Lookup;
})(Spotify || (Spotify = {}));
//@ sourceMappingURL=Spotify.Lookup.js.map
