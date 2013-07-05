
declare module Spotify.Lookup {

    export interface ExternalId {
        type: string;
        id: string;
    }

    export interface Artist {
        href: string;
        name: string;
    }

    export interface Track {
        available: bool;
        trackNumber: string;
        popularity: string;
        "external-ids": ExternalId[];
        length: number;
        href: string;
        artists: Artist[];
        "disc-number": string;
        name: string;
    }

    export interface Availability {
        territories: string;
    }

    export interface Album {
        "artist-id": string;
        name: string;
        artist: string;
        "external-ids": ExternalId[];
        released: string;
        tracks: Track[];
        href: string;
        availability: Availability;
    }

    export interface Info {
        type: string;
    }

    export interface AlbumResponse {
        album: Album;
        info: Info;
    }

}

