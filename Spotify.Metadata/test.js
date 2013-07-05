asyncTest("lookup an album", function () {
    var c = new Spotify.MetadataClient();
    c.lookupAlbum("spotify:album:3rhlzjGgPa8H48HYsibOeh").done(function (res) {
        strictEqual("Twin Shadow", res.album.artist);
        strictEqual("Confess", res.album.name);
        strictEqual("2012", res.album.released);
        start();
    });
});
//@ sourceMappingURL=test.js.map
