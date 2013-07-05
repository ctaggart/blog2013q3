
/// <reference path="jquery.d.ts" />
/// <reference path="Spotify.Lookup.d.ts" />

module Spotify {

    export enum LookupAlbumExtras {
        Track,
        TrackDetail
    }

    export class Request<T> {
        constructor(private req: JQueryXHR) { }
        get request() { return this.req; }
        done(callback: (res: T) => JQueryPromise): JQueryPromise { return this.req.done(callback); }
    }

    export class MetadataClient {
        constructor(private baseUrl = "http://ws.spotify.com") { }
        
        lookupAlbum(artistUri: string, extras: LookupAlbumExtras = null)
        {
            var url = this.baseUrl + "/lookup/1/.json?uri=" + artistUri; // &extras=trackdetail",

            if(extras === null){}
            else if (extras === LookupAlbumExtras.Track)
                url += "&extras=track";
            else if (extras === LookupAlbumExtras.TrackDetail)
                url += "&extras=trackdetail";

            var req = $.ajax({
                url: url,
                // the next three needed for CORS
                dataType: "json",
                type: "GET",
                //contentType: "application/json; charset=utf-8"
                contentType: "text/plain" // avoids a preflight OPTIONS request
            });

            return new Request<Lookup.Album>(req);
        }
    }

}