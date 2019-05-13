/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/29/hello-world/index.html","c30e5bcc20792ea6cd1458e8c370e8f9"],["/2018/12/30/for-md/index.html","d3d7adf17f8c2c9bbb2a326bb334a9c5"],["/2018/12/30/for-md/nvwu.jpg","7560a5ceea3344920397df6deb6e2bc3"],["/2018/12/31/happy-new-years/2019.jpg","561a354ad51ca3ff5fd74a70d9224722"],["/2018/12/31/happy-new-years/boom.jpg","b67fac44b62e179f71b5fe720d3e39f0"],["/2018/12/31/happy-new-years/dream.png","399f62e3ac5f8608d78ef48cc7fe8278"],["/2018/12/31/happy-new-years/index.html","0fc96557508196bf0513d938c33ced72"],["/2018/12/31/happy-new-years/truth.png","3f3df8856114c15819bb371d7630c2d1"],["/2019/01/10/R-Linear-regression/R.jpg","508226a83ee449fc78da200ed57e87b7"],["/2019/01/10/R-Linear-regression/Rplot.png","4c957eb2f6bc67427d82573ad217f634"],["/2019/01/10/R-Linear-regression/Rplot1.png","edd6bfaa3b1fd961b52d5b8506977ac4"],["/2019/01/10/R-Linear-regression/Run1.png","61eff95e67055f6efcb152f9822e19e1"],["/2019/01/10/R-Linear-regression/Run2.png","cf79ccadd13f6bffcc8b62df551a91d8"],["/2019/01/10/R-Linear-regression/Run3.png","fd9dbc87008f952a960346e03dddd3bf"],["/2019/01/10/R-Linear-regression/Run4.png","8b21e29cee708d92577cbe6c3ab477a2"],["/2019/01/10/R-Linear-regression/Run5.png","36f0c5a49b372753b695c9c8820cc8fe"],["/2019/01/10/R-Linear-regression/Run6.png","3220a77d903ff6a651b49632f4280c69"],["/2019/01/10/R-Linear-regression/Run7.png","8a21915b745bdc1f1ec70a65e86d3545"],["/2019/01/10/R-Linear-regression/image001.png","c16db6089745be5c8fb7f014c7b125e9"],["/2019/01/10/R-Linear-regression/image003.png","026791c9b6b0b1d5f3410c55b41e7290"],["/2019/01/10/R-Linear-regression/image004.png","5cb15606d6cb3031f5d217f2f30b22b5"],["/2019/01/10/R-Linear-regression/image005.png","ce0480142b151fb1884f71affbbe4a62"],["/2019/01/10/R-Linear-regression/image006.png","1d7bbc101fe602dbc4bdd6d2f4a525e9"],["/2019/01/10/R-Linear-regression/image007.png","7547be88047b800ee8cfde8cd82dfe86"],["/2019/01/10/R-Linear-regression/image008.png","4fa4e49034c78c000ec8c9a292c52b49"],["/2019/01/10/R-Linear-regression/image009.png","556c3aca3dd625169085609f3c69baf4"],["/2019/01/10/R-Linear-regression/image010.png","11771267a5c91938871e0eaf6c186237"],["/2019/01/10/R-Linear-regression/image011.png","b72e002b858c7a7e3015ab4bf88e3cdb"],["/2019/01/10/R-Linear-regression/image012.png","1b68b5657ca7db0dd0d54bb34aed9cd3"],["/2019/01/10/R-Linear-regression/image013.png","8b9d799f9252ae0cc8303e89fbf2480a"],["/2019/01/10/R-Linear-regression/image014.png","9af5c2b106121a4450c0902565a095fd"],["/2019/01/10/R-Linear-regression/image015.png","6028b84abc640c00826a25cdaa2d7dee"],["/2019/01/10/R-Linear-regression/image016.png","7b40cf3a7483278d14d0323b567fdda5"],["/2019/01/10/R-Linear-regression/image017.png","05f8d6717f84fe732d73d33ea7ad4969"],["/2019/01/10/R-Linear-regression/image018.png","0eecba1626c2965d656829666ac90a7a"],["/2019/01/10/R-Linear-regression/image019.png","fe399e2a7ad10956c93da004e0247770"],["/2019/01/10/R-Linear-regression/image020.png","e94f2627885fec2eacfab92a0f0bb655"],["/2019/01/10/R-Linear-regression/image021.png","3b1a4ca8dd5a1fd5674351bdfbf5c547"],["/2019/01/10/R-Linear-regression/index.html","18aa4f3f1431f01255cadb7eca1e81ca"],["/2019/03/22/gene-chip/GSMsource.png","ade6a86a2763336e750fb9e1cd571311"],["/2019/03/22/gene-chip/exprSet.png","73f4e0b3356ebab4bcd45e80f88bb8c9"],["/2019/03/22/gene-chip/gcrma.png","b702c44795d1aa4f820cda500e600636"],["/2019/03/22/gene-chip/imageMUT1.jpg","2447f99a0f96375259a370382a55cba9"],["/2019/03/22/gene-chip/index.html","94b66ed26f7cb5b579fb9ca9a6202d2b"],["/2019/03/22/gene-chip/mas.png","90a5061710bfbf83169bac9e244e376a"],["/2019/03/22/gene-chip/pretreat_result.png","faadb332c9cb3fd779628622af66e571"],["/2019/03/22/gene-chip/rma.png","8b16ec37b136fb7be40fa4eaec2b2e1e"],["/2019/03/22/gene-chip/rmaout.png","f309a285f20383010eb8d8fe49cf12bd"],["/2019/03/22/gene-chip/undeath.jpg","6c6666b0cfc2e3b93c0c7cbb7be9c52c"],["/2019/04/04/ubuntu/cover.jpg","473c4a17a4025ca23c7221e4aa29926b"],["/2019/04/04/ubuntu/index.html","5578323d22a4c7549c723937dd6c7097"],["/2019/04/04/ubuntu/root.png","7940a3bbc2c702350ef7fafc4e884cba"],["/2019/04/04/ubuntu/sharefile.png","3950d23a779c5fa7662a198ffb6df0ba"],["/2019/04/08/easy-windows/7zip.png","fcea39918669e2f8f37a294feb6a6add"],["/2019/04/08/easy-windows/Snipaste.png","251000e4a3386b2be52507620a6945b7"],["/2019/04/08/easy-windows/ccleaner.png","9fd85e518e2c24e0579fd617b64c25f1"],["/2019/04/08/easy-windows/chrome.png","c982ac7a8b2fbb157c6e51eed4567dd4"],["/2019/04/08/easy-windows/cover.jpg","3fdf491f1e472cd5e157d382ad56f7ef"],["/2019/04/08/easy-windows/everything.png","1058c676dd3acabaeb0d6c19295a9394"],["/2019/04/08/easy-windows/foobar.png","fe9c5ce3ae08d6846390d90c5283b924"],["/2019/04/08/easy-windows/huoyingjiang.png","70f1294fe3727be9fe97d58e5c128142"],["/2019/04/08/easy-windows/idm.png","02c98cbc0591e294d798a2e327274318"],["/2019/04/08/easy-windows/index.html","3abb485a82bdfcb190c805acc5c95b25"],["/2019/04/08/easy-windows/potplayer.png","b43031efebff945f0313eed52bc8ca29"],["/2019/04/08/easy-windows/seer.png","8d1cce2ed19fd0eeaeb0a566903d9b6f"],["/2019/04/08/easy-windows/xiaowan.png","f16547572dde1169881aa19cc2c39af4"],["/all-archives/index.html","ec48bd446aa19626f255e1607ddc34d9"],["/all-categories/index.html","10bbbbe5480f7251fba9645d677af99a"],["/all-tags/index.html","b7cb5179c06a3b8204aa2984e0ac7065"],["/archives/2018/12/index.html","becbc9ac39522e5ecdb80c7a54d841cb"],["/archives/2018/index.html","e2032e6463f40d3b3d5eaa3af94ddb1c"],["/archives/2019/01/index.html","4878de84fe48650efa8b6bba55360687"],["/archives/2019/03/index.html","3ef0c849f3e098e0f7522566fc795a78"],["/archives/2019/04/index.html","5f4b540ee67c11d95250f27c21929597"],["/archives/2019/index.html","ec43d50722d6ec7b9b924cc39cc6cc35"],["/archives/index.html","4336f46dc2ea1a5cf04edaae91aa0922"],["/bundle.js","f67935076d8d053321b894075de89847"],["/css/main.css","7b282a6c4430a67282a1d2e0d781953a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","f520243eb970ce6ea049045e6a9200ac"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/style.css","52e0947497241863100f97ca49093350"],["/sw-register.js","e3bcb3261f4faf621ed73bc392fb9c76"],["/tags/Linux/index.html","29c253fb7df467914cc1ff2b28578a17"],["/tags/R语言/index.html","abe28108d0810776bbab9e34b5df4ad3"],["/tags/markdown/index.html","e785c20cfb948d494c52c1798b3c424c"],["/tags/个人博客/index.html","b1868205ba4e58ec2b4e4a3aa4ca0722"],["/tags/夏姬八扯/index.html","230241f243db16828efc607bdd3fcb70"],["/tags/生物信息/index.html","2b47eb65ed334f5dab1a0be3e022ddc5"],["/tags/线性回归/index.html","f1f0f9d6b7b922f17bd8eab5153981a9"],["/tags/虚拟机/index.html","4a17056863a5ea05824d187e07c2ab6c"],["/tags/软件介绍/index.html","ea64e010c5ea4c82d66103a68e9e1a9b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
