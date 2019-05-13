/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/29/hello-world/index.html","5fe90589cf70dde45f8a7922e5c3acca"],["/2018/12/30/for-md/index.html","f752879ad04cf1dd35eddb63aba9b73c"],["/2018/12/30/for-md/nvwu.jpg","7560a5ceea3344920397df6deb6e2bc3"],["/2018/12/31/happy-new-years/2019.jpg","561a354ad51ca3ff5fd74a70d9224722"],["/2018/12/31/happy-new-years/boom.jpg","b67fac44b62e179f71b5fe720d3e39f0"],["/2018/12/31/happy-new-years/dream.png","399f62e3ac5f8608d78ef48cc7fe8278"],["/2018/12/31/happy-new-years/index.html","2441543977b85cfad9e42d2cbbba7de5"],["/2018/12/31/happy-new-years/truth.png","3f3df8856114c15819bb371d7630c2d1"],["/2019/01/10/R-Linear-regression/R.jpg","508226a83ee449fc78da200ed57e87b7"],["/2019/01/10/R-Linear-regression/Rplot.png","4c957eb2f6bc67427d82573ad217f634"],["/2019/01/10/R-Linear-regression/Rplot1.png","edd6bfaa3b1fd961b52d5b8506977ac4"],["/2019/01/10/R-Linear-regression/Run1.png","61eff95e67055f6efcb152f9822e19e1"],["/2019/01/10/R-Linear-regression/Run2.png","cf79ccadd13f6bffcc8b62df551a91d8"],["/2019/01/10/R-Linear-regression/Run3.png","fd9dbc87008f952a960346e03dddd3bf"],["/2019/01/10/R-Linear-regression/Run4.png","8b21e29cee708d92577cbe6c3ab477a2"],["/2019/01/10/R-Linear-regression/Run5.png","36f0c5a49b372753b695c9c8820cc8fe"],["/2019/01/10/R-Linear-regression/Run6.png","3220a77d903ff6a651b49632f4280c69"],["/2019/01/10/R-Linear-regression/Run7.png","8a21915b745bdc1f1ec70a65e86d3545"],["/2019/01/10/R-Linear-regression/image001.png","c16db6089745be5c8fb7f014c7b125e9"],["/2019/01/10/R-Linear-regression/image003.png","026791c9b6b0b1d5f3410c55b41e7290"],["/2019/01/10/R-Linear-regression/image004.png","5cb15606d6cb3031f5d217f2f30b22b5"],["/2019/01/10/R-Linear-regression/image005.png","ce0480142b151fb1884f71affbbe4a62"],["/2019/01/10/R-Linear-regression/image006.png","1d7bbc101fe602dbc4bdd6d2f4a525e9"],["/2019/01/10/R-Linear-regression/image007.png","7547be88047b800ee8cfde8cd82dfe86"],["/2019/01/10/R-Linear-regression/image008.png","4fa4e49034c78c000ec8c9a292c52b49"],["/2019/01/10/R-Linear-regression/image009.png","556c3aca3dd625169085609f3c69baf4"],["/2019/01/10/R-Linear-regression/image010.png","11771267a5c91938871e0eaf6c186237"],["/2019/01/10/R-Linear-regression/image011.png","b72e002b858c7a7e3015ab4bf88e3cdb"],["/2019/01/10/R-Linear-regression/image012.png","1b68b5657ca7db0dd0d54bb34aed9cd3"],["/2019/01/10/R-Linear-regression/image013.png","8b9d799f9252ae0cc8303e89fbf2480a"],["/2019/01/10/R-Linear-regression/image014.png","9af5c2b106121a4450c0902565a095fd"],["/2019/01/10/R-Linear-regression/image015.png","6028b84abc640c00826a25cdaa2d7dee"],["/2019/01/10/R-Linear-regression/image016.png","7b40cf3a7483278d14d0323b567fdda5"],["/2019/01/10/R-Linear-regression/image017.png","05f8d6717f84fe732d73d33ea7ad4969"],["/2019/01/10/R-Linear-regression/image018.png","0eecba1626c2965d656829666ac90a7a"],["/2019/01/10/R-Linear-regression/image019.png","fe399e2a7ad10956c93da004e0247770"],["/2019/01/10/R-Linear-regression/image020.png","e94f2627885fec2eacfab92a0f0bb655"],["/2019/01/10/R-Linear-regression/image021.png","3b1a4ca8dd5a1fd5674351bdfbf5c547"],["/2019/01/10/R-Linear-regression/index.html","435fab52e501911b25f5df8a0c819583"],["/2019/03/22/gene-chip/GSMsource.png","ade6a86a2763336e750fb9e1cd571311"],["/2019/03/22/gene-chip/exprSet.png","73f4e0b3356ebab4bcd45e80f88bb8c9"],["/2019/03/22/gene-chip/gcrma.png","b702c44795d1aa4f820cda500e600636"],["/2019/03/22/gene-chip/imageMUT1.jpg","2447f99a0f96375259a370382a55cba9"],["/2019/03/22/gene-chip/index.html","49c9e5a0595e8787c2714f0d1c541525"],["/2019/03/22/gene-chip/mas.png","90a5061710bfbf83169bac9e244e376a"],["/2019/03/22/gene-chip/pretreat_result.png","faadb332c9cb3fd779628622af66e571"],["/2019/03/22/gene-chip/rma.png","8b16ec37b136fb7be40fa4eaec2b2e1e"],["/2019/03/22/gene-chip/rmaout.png","f309a285f20383010eb8d8fe49cf12bd"],["/2019/03/22/gene-chip/undeath.jpg","6c6666b0cfc2e3b93c0c7cbb7be9c52c"],["/2019/04/04/ubuntu/cover.jpg","473c4a17a4025ca23c7221e4aa29926b"],["/2019/04/04/ubuntu/index.html","fa40036517d0a4c0c01a310903274b0f"],["/2019/04/04/ubuntu/root.png","7940a3bbc2c702350ef7fafc4e884cba"],["/2019/04/04/ubuntu/sharefile.png","3950d23a779c5fa7662a198ffb6df0ba"],["/2019/04/08/easy-windows/7zip.png","fcea39918669e2f8f37a294feb6a6add"],["/2019/04/08/easy-windows/Snipaste.png","251000e4a3386b2be52507620a6945b7"],["/2019/04/08/easy-windows/ccleaner.png","9fd85e518e2c24e0579fd617b64c25f1"],["/2019/04/08/easy-windows/chrome.png","c982ac7a8b2fbb157c6e51eed4567dd4"],["/2019/04/08/easy-windows/cover.jpg","3fdf491f1e472cd5e157d382ad56f7ef"],["/2019/04/08/easy-windows/everything.png","1058c676dd3acabaeb0d6c19295a9394"],["/2019/04/08/easy-windows/foobar.png","fe9c5ce3ae08d6846390d90c5283b924"],["/2019/04/08/easy-windows/huoyingjiang.png","70f1294fe3727be9fe97d58e5c128142"],["/2019/04/08/easy-windows/idm.png","02c98cbc0591e294d798a2e327274318"],["/2019/04/08/easy-windows/index.html","8ea703de5f31142d9fe8413e1c46acb3"],["/2019/04/08/easy-windows/potplayer.png","b43031efebff945f0313eed52bc8ca29"],["/2019/04/08/easy-windows/seer.png","8d1cce2ed19fd0eeaeb0a566903d9b6f"],["/2019/04/08/easy-windows/xiaowan.png","f16547572dde1169881aa19cc2c39af4"],["/2019/05/08/helloworld/index.html","725100948250e7d2f25be7802ccb54d9"],["/all-archives/index.html","513d15a7b1a29801ed4b8fd5f7f99fab"],["/all-categories/index.html","77234bee3a7b33af96bc7d4afde66077"],["/all-tags/index.html","c71ab5b6e97f063bf406d33c7744967e"],["/archives/2018/12/index.html","c4fefc74277ef6eb3b5fdeda91e25d57"],["/archives/2018/index.html","fe13207dc7fefe163c84b35abbb4aed3"],["/archives/2019/01/index.html","050a7caa08e57c4ad3370f9c0097beef"],["/archives/2019/03/index.html","b6a26c65ac669f0c73b8bdd1b8ec5d94"],["/archives/2019/04/index.html","a79bd792021cb202dbd1206bf2e0be8f"],["/archives/2019/05/index.html","6d9cede8dbaffbb2679a06499824e263"],["/archives/2019/index.html","3de5012ee23b9e980033b1113498a5ff"],["/archives/index.html","21cbe893e5bcb4399a811166522a3ebb"],["/assets/css/all.css","63f40d7eafb50f21cba75897916a770c"],["/assets/css/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/assets/css/style-c4ozcsklz4kht2pebhp44xorvyverh23toayhn7i6ubrpyedak24hv1v0hyd.min.css","b400e6071b7c82896d7b3f78b5c1bf16"],["/assets/css/style.css","e87bfc93d4a4a0dd25921758affe6740"],["/assets/css/thumbs.css","bbe5e41dae5e1a2705af821a864bc93e"],["/assets/css/tranquilpeak.css","9c6862c5b580bea8db495700615a9281"],["/assets/fonts/fa-brands-400.eot","e2a76403183eff8967cf6318c6e51509"],["/assets/fonts/fa-brands-400.svg","a999c7b8823b901248833dc7fe07a52f"],["/assets/fonts/fa-brands-400.ttf","e0fc4e5c719b4dc10c97fc111d7374e1"],["/assets/fonts/fa-brands-400.woff","d034c1b2ee84dd981ef2e637754a0b4f"],["/assets/fonts/fa-brands-400.woff2","f319eac1c755f9929fd856720ce1695e"],["/assets/fonts/fa-regular-400.eot","5a4618f029618cc2795c05fe53d57028"],["/assets/fonts/fa-regular-400.svg","e9d8dbb0c3e9b97ffc59c50ff5d01422"],["/assets/fonts/fa-regular-400.ttf","6534c603e0892488132ad57248ec69e2"],["/assets/fonts/fa-regular-400.woff","e99569d3d10c94c60d9a68523c1c0e71"],["/assets/fonts/fa-regular-400.woff2","a3715c6fe264a51f1d9260b447ff46bc"],["/assets/fonts/fa-solid-900.eot","d9824d00712532d7697df68df16ae0d3"],["/assets/fonts/fa-solid-900.svg","666a82cb3e9f8591bef4049aea26c4c6"],["/assets/fonts/fa-solid-900.ttf","00ddaede094b83270cadbfc1a907e8ca"],["/assets/fonts/fa-solid-900.woff","128d2b0be23925e5cf36717ddc6f093b"],["/assets/fonts/fa-solid-900.woff2","18d2347ab2a9f40ca2247cdb03303d84"],["/assets/images/auther.jpg","1766554ae019c785a765a1c0f99eae48"],["/assets/images/timg.jpg","bf87be63e556d4ff00d74fd1feffe488"],["/assets/js/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/assets/js/jquery.js","6a07da9fae934baf3f749e876bbfdd96"],["/assets/js/script-dbd16rvloemmuxdzniplmnxxvwoz24eya9wol0b7vvmlokgqsjivmb8dnscy.min.js","6975d7db10a65809a0bde3e078370154"],["/assets/js/script.js","86930a3b2a2184144afb2fbf6b6d75b1"],["/assets/js/thumbs.js","2ead2064dc0b2c20723e8bc48c604500"],["/assets/js/tranquilpeak.js","bcea5b29ad64eb9837e006108973c04f"],["/bundle.js","f67935076d8d053321b894075de89847"],["/css/main.css","ad0b5167e6bd53226e573ca9310ce077"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","fb88dee2c5d66174000be8ba39c237ac"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/style.css","52e0947497241863100f97ca49093350"],["/sw-register.js","3edabc3f40de551614c5ce77914cbe9d"],["/tags/Linux/index.html","aa3792f32bd389c4d8109d7567e82f43"],["/tags/R语言/index.html","c5250ee95708707d0bf46df7f200439f"],["/tags/markdown/index.html","3e534c93aa5d7adf1088fe67678852b5"],["/tags/个人博客/index.html","8701dc3c4ba2022297ba826331ab91c0"],["/tags/夏姬八扯/index.html","4b47db08247fa6e584094a854a505afe"],["/tags/生物信息/index.html","6ebd171eeae03e9e00317713ce85849d"],["/tags/线性回归/index.html","94b223c62a729f0ee765141692a666e4"],["/tags/虚拟机/index.html","ef64cd4bd4c47d47a8be19e13db5832b"],["/tags/软件介绍/index.html","9d1bf855dc4c11e201a3ca813c816ed7"]];
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
