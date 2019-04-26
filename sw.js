/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/29/hello-world/index.html","0271b18f8e322f27719f215112ca75eb"],["/2018/12/30/for-md/index.html","297dabbe781db931ad846ddf2e5f5060"],["/2018/12/30/for-md/nvwu.jpg","7560a5ceea3344920397df6deb6e2bc3"],["/2018/12/31/happy-new-years/2019.jpg","561a354ad51ca3ff5fd74a70d9224722"],["/2018/12/31/happy-new-years/boom.jpg","b67fac44b62e179f71b5fe720d3e39f0"],["/2018/12/31/happy-new-years/dream.png","399f62e3ac5f8608d78ef48cc7fe8278"],["/2018/12/31/happy-new-years/index.html","f759013cd069a4f2c4e73b5972909b23"],["/2018/12/31/happy-new-years/truth.png","3f3df8856114c15819bb371d7630c2d1"],["/2019/01/10/R-Linear-regression/R.jpg","508226a83ee449fc78da200ed57e87b7"],["/2019/01/10/R-Linear-regression/Rplot.png","4c957eb2f6bc67427d82573ad217f634"],["/2019/01/10/R-Linear-regression/Rplot1.png","edd6bfaa3b1fd961b52d5b8506977ac4"],["/2019/01/10/R-Linear-regression/Run1.png","61eff95e67055f6efcb152f9822e19e1"],["/2019/01/10/R-Linear-regression/Run2.png","cf79ccadd13f6bffcc8b62df551a91d8"],["/2019/01/10/R-Linear-regression/Run3.png","fd9dbc87008f952a960346e03dddd3bf"],["/2019/01/10/R-Linear-regression/Run4.png","8b21e29cee708d92577cbe6c3ab477a2"],["/2019/01/10/R-Linear-regression/Run5.png","36f0c5a49b372753b695c9c8820cc8fe"],["/2019/01/10/R-Linear-regression/Run6.png","3220a77d903ff6a651b49632f4280c69"],["/2019/01/10/R-Linear-regression/Run7.png","8a21915b745bdc1f1ec70a65e86d3545"],["/2019/01/10/R-Linear-regression/image001.png","c16db6089745be5c8fb7f014c7b125e9"],["/2019/01/10/R-Linear-regression/image003.png","026791c9b6b0b1d5f3410c55b41e7290"],["/2019/01/10/R-Linear-regression/image004.png","5cb15606d6cb3031f5d217f2f30b22b5"],["/2019/01/10/R-Linear-regression/image005.png","ce0480142b151fb1884f71affbbe4a62"],["/2019/01/10/R-Linear-regression/image006.png","1d7bbc101fe602dbc4bdd6d2f4a525e9"],["/2019/01/10/R-Linear-regression/image007.png","7547be88047b800ee8cfde8cd82dfe86"],["/2019/01/10/R-Linear-regression/image008.png","4fa4e49034c78c000ec8c9a292c52b49"],["/2019/01/10/R-Linear-regression/image009.png","556c3aca3dd625169085609f3c69baf4"],["/2019/01/10/R-Linear-regression/image010.png","11771267a5c91938871e0eaf6c186237"],["/2019/01/10/R-Linear-regression/image011.png","b72e002b858c7a7e3015ab4bf88e3cdb"],["/2019/01/10/R-Linear-regression/image012.png","1b68b5657ca7db0dd0d54bb34aed9cd3"],["/2019/01/10/R-Linear-regression/image013.png","8b9d799f9252ae0cc8303e89fbf2480a"],["/2019/01/10/R-Linear-regression/image014.png","9af5c2b106121a4450c0902565a095fd"],["/2019/01/10/R-Linear-regression/image015.png","6028b84abc640c00826a25cdaa2d7dee"],["/2019/01/10/R-Linear-regression/image016.png","7b40cf3a7483278d14d0323b567fdda5"],["/2019/01/10/R-Linear-regression/image017.png","05f8d6717f84fe732d73d33ea7ad4969"],["/2019/01/10/R-Linear-regression/image018.png","0eecba1626c2965d656829666ac90a7a"],["/2019/01/10/R-Linear-regression/image019.png","fe399e2a7ad10956c93da004e0247770"],["/2019/01/10/R-Linear-regression/image020.png","e94f2627885fec2eacfab92a0f0bb655"],["/2019/01/10/R-Linear-regression/image021.png","3b1a4ca8dd5a1fd5674351bdfbf5c547"],["/2019/01/10/R-Linear-regression/index.html","e9fff658a1e86f9a29d334f276d48685"],["/2019/03/22/gene-chip/GSMsource.png","ade6a86a2763336e750fb9e1cd571311"],["/2019/03/22/gene-chip/exprSet.png","73f4e0b3356ebab4bcd45e80f88bb8c9"],["/2019/03/22/gene-chip/gcrma.png","b702c44795d1aa4f820cda500e600636"],["/2019/03/22/gene-chip/imageMUT1.jpg","2447f99a0f96375259a370382a55cba9"],["/2019/03/22/gene-chip/index.html","711ee9b99f7619f9a22761e36bbcd3c9"],["/2019/03/22/gene-chip/mas.png","90a5061710bfbf83169bac9e244e376a"],["/2019/03/22/gene-chip/pretreat_result.png","faadb332c9cb3fd779628622af66e571"],["/2019/03/22/gene-chip/rma.png","8b16ec37b136fb7be40fa4eaec2b2e1e"],["/2019/03/22/gene-chip/rmaout.png","f309a285f20383010eb8d8fe49cf12bd"],["/2019/03/22/gene-chip/undeath.jpg","6c6666b0cfc2e3b93c0c7cbb7be9c52c"],["/2019/04/04/ubuntu/cover.jpg","473c4a17a4025ca23c7221e4aa29926b"],["/2019/04/04/ubuntu/index.html","a7d33684c023b3a277195ded99af02b5"],["/2019/04/04/ubuntu/root.png","7940a3bbc2c702350ef7fafc4e884cba"],["/2019/04/04/ubuntu/sharefile.png","3950d23a779c5fa7662a198ffb6df0ba"],["/2019/04/08/easy-windows/7zip.png","fcea39918669e2f8f37a294feb6a6add"],["/2019/04/08/easy-windows/Snipaste.png","251000e4a3386b2be52507620a6945b7"],["/2019/04/08/easy-windows/ccleaner.png","9fd85e518e2c24e0579fd617b64c25f1"],["/2019/04/08/easy-windows/chrome.png","c982ac7a8b2fbb157c6e51eed4567dd4"],["/2019/04/08/easy-windows/cover.jpg","3fdf491f1e472cd5e157d382ad56f7ef"],["/2019/04/08/easy-windows/everything.png","1058c676dd3acabaeb0d6c19295a9394"],["/2019/04/08/easy-windows/foobar.png","fe9c5ce3ae08d6846390d90c5283b924"],["/2019/04/08/easy-windows/huoyingjiang.png","70f1294fe3727be9fe97d58e5c128142"],["/2019/04/08/easy-windows/idm.png","02c98cbc0591e294d798a2e327274318"],["/2019/04/08/easy-windows/index.html","970225744932200ac24e1752e5402d3a"],["/2019/04/08/easy-windows/potplayer.png","b43031efebff945f0313eed52bc8ca29"],["/2019/04/08/easy-windows/seer.png","8d1cce2ed19fd0eeaeb0a566903d9b6f"],["/2019/04/08/easy-windows/xiaowan.png","f16547572dde1169881aa19cc2c39af4"],["/all-archives/index.html","125ffe6c01dea2f968d7cef0a5bae03c"],["/all-categories/index.html","33a7ad6e519d53e35a4578b4bae4a378"],["/all-tags/index.html","5dffb829694e392c803c64320ba689b9"],["/archives/2018/12/index.html","bfee07a4f6b330951a4866d5f4431371"],["/archives/2018/index.html","8611fcebdb606390d852bcea89c9c020"],["/archives/2019/01/index.html","d9dc0466048414773e4e799aa969ba8e"],["/archives/2019/03/index.html","df49fcacf97b5c7bc82e2ed5cac10bb5"],["/archives/2019/04/index.html","029d9becb12c4af44951deee1e14c7bf"],["/archives/2019/index.html","c3214974bc5583c36131c31e0a30c36f"],["/archives/index.html","e88a42170bac2e609882a4e247e2d0e0"],["/assets/css/all.css","63f40d7eafb50f21cba75897916a770c"],["/assets/css/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/assets/css/style-c4ozcsklz4kht2pebhp44xorvyverh23toayhn7i6ubrpyedak24hv1v0hyd.min.css","b400e6071b7c82896d7b3f78b5c1bf16"],["/assets/css/style.css","e87bfc93d4a4a0dd25921758affe6740"],["/assets/css/thumbs.css","bbe5e41dae5e1a2705af821a864bc93e"],["/assets/css/tranquilpeak.css","9c6862c5b580bea8db495700615a9281"],["/assets/fonts/fa-brands-400.eot","e2a76403183eff8967cf6318c6e51509"],["/assets/fonts/fa-brands-400.svg","a999c7b8823b901248833dc7fe07a52f"],["/assets/fonts/fa-brands-400.ttf","e0fc4e5c719b4dc10c97fc111d7374e1"],["/assets/fonts/fa-brands-400.woff","d034c1b2ee84dd981ef2e637754a0b4f"],["/assets/fonts/fa-brands-400.woff2","f319eac1c755f9929fd856720ce1695e"],["/assets/fonts/fa-regular-400.eot","5a4618f029618cc2795c05fe53d57028"],["/assets/fonts/fa-regular-400.svg","e9d8dbb0c3e9b97ffc59c50ff5d01422"],["/assets/fonts/fa-regular-400.ttf","6534c603e0892488132ad57248ec69e2"],["/assets/fonts/fa-regular-400.woff","e99569d3d10c94c60d9a68523c1c0e71"],["/assets/fonts/fa-regular-400.woff2","a3715c6fe264a51f1d9260b447ff46bc"],["/assets/fonts/fa-solid-900.eot","d9824d00712532d7697df68df16ae0d3"],["/assets/fonts/fa-solid-900.svg","666a82cb3e9f8591bef4049aea26c4c6"],["/assets/fonts/fa-solid-900.ttf","00ddaede094b83270cadbfc1a907e8ca"],["/assets/fonts/fa-solid-900.woff","128d2b0be23925e5cf36717ddc6f093b"],["/assets/fonts/fa-solid-900.woff2","18d2347ab2a9f40ca2247cdb03303d84"],["/assets/images/auther.jpg","1766554ae019c785a765a1c0f99eae48"],["/assets/images/timg.jpg","bf87be63e556d4ff00d74fd1feffe488"],["/assets/js/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/assets/js/jquery.js","6a07da9fae934baf3f749e876bbfdd96"],["/assets/js/script-dbd16rvloemmuxdzniplmnxxvwoz24eya9wol0b7vvmlokgqsjivmb8dnscy.min.js","6975d7db10a65809a0bde3e078370154"],["/assets/js/script.js","86930a3b2a2184144afb2fbf6b6d75b1"],["/assets/js/thumbs.js","2ead2064dc0b2c20723e8bc48c604500"],["/assets/js/tranquilpeak.js","bcea5b29ad64eb9837e006108973c04f"],["/bundle.js","3847e4cfd9d731b05602055aafba7d2d"],["/index.html","d69dd878e99b0af98ff4b32b9e58a8b7"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/style.css","8d40ddea484adc23e7a9073faeed3de9"],["/sw-register.js","3d6b656f0758dccb5520dac84e700047"],["/tags/Linux/index.html","f946d68117a869436e32f33b8ba0a0ff"],["/tags/R语言/index.html","9f06a116326c5665fbc292d365af5893"],["/tags/markdown/index.html","9e06aeff1e340e62217df7560ed6193d"],["/tags/个人博客/index.html","1c45e20519bd748e8f0705ee763eeb71"],["/tags/夏姬八扯/index.html","d469c670042c528b192541884683534a"],["/tags/生物信息/index.html","3fa553d89f5886bd93a530496bb794ad"],["/tags/线性回归/index.html","175f9e72ae0fef0faf0998818cefd64d"],["/tags/虚拟机/index.html","d7c31ae7be274bd403b012b4a65cfddd"],["/tags/软件介绍/index.html","94993db21a39b77c79aa461ebbdd3ecf"]];
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
