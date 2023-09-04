'use strict';

(function () {
    // var ipfsPathRegExp = /^(\/(?:ipfs|ipns)\/[^/]+)/;
    var ipfsPathPrefix = window.location.pathname.replace(/\/$/, '');

    window.__GATSBY_IPFS_PATH_PREFIX__ = ipfsPathPrefix;
})();
