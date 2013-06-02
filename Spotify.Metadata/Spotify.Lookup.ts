
/// <reference path="Spotify.Lookup.Json.d.ts" />

module Spotify.Lookup {

    export class ExternalId {
        constructor(private json: Json.ExternalId) { }
        get type() { return this.json.type }
        get id() { return this.json.id }
    }

    export class Artist {
        constructor(private json: Json.Artist) { }
        get href() { return this.json.href }
        get name() { return this.json.name }
    }

    export class Track {
        constructor(private json: Json.Track) { }
        get available() { return this.json.available; }
        get trackNumber() { return this.json.trackNumber; }
        get href() { return this.json.href; }
        get popularity() { return this.json.popularity; }
        get externalIds(): ExternalId[] {
            var json: Json.ExternalId[] = this.json["external-ids"];
            return json.map(x => new ExternalId(x)); // should infer a return type of ExternalId[]
        }
        get length() { return this.json.length; }
        get artists() { return this.json.artists; }
        get discNumber(): number { return this.json["disc-number"]; }
        get name() { return this.json.name; }
    }

    export class Availability {
        constructor(private json: Json.Availability) { }
        get territories() { return this.json.territories; }
    }

    export class Album {
        constructor(private json: Json.Album) { }
        get artistId() { return this.json["artist-id"]; }
        get name() { return this.json.name; }
        get artist() { return this.json.artist; }
        get externalIds(): ExternalId[] {
            var json: Json.ExternalId[] = this.json["external-ids"];
            return json.map(x => new ExternalId(x)); // should infer a return type of ExternalId[]
        }
        get released() { return this.json.released; }
        get tracks() { return this.json.tracks; }
        get href() { return this.json.href; }
        get availability() { return this.json.availability }
    }

    export class Info {
        constructor(private json: Json.Info) { }
        get type() { return this.json.type; }
    }

    export class AlbumResponse {
        constructor(private json: Json.AlbumResponse) { }
        get album() { return new Album(this.json.album); }
        get info() { return new Info(this.json.info); }
    }

}

