'use strict';

(function () {
    var i = window.location.pathname.replace(/\/$/, '');
    window.__GATSBY_IPFS_PATH_PREFIX__ = i;
})();
