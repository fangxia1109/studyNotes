
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/product/product","pages/dynamic/dynamic","pages/company/company"],"window":{"navigationStyle":"custom","titleView":false},"tabBar":{"color":"#7A7E83","selectedColor":"#2790fa","borderStyle":"black","backgroundColor":"#ffffff","spacing":"6rpx","iconfontSrc":"static/iconfont/iconfont.ttf","list":[{"pagePath":"pages/home/home","iconPath":"static/image/png/home.png","selectedIconPath":"static/image/png/home-selected.png","text":"首页","iconfont":{"text":"","selectedText":"","fontSize":"34rpx","color":"#000000","selectedColor":"#2790fa"}},{"pagePath":"pages/product/product","iconPath":"static/image/png/search.png","selectedIconPath":"static/image/png/search-selected.png","text":"产品","iconfont":{"text":"","selectedText":"","fontSize":"34rpx","color":"#000000","selectedColor":"#2790fa"}},{"pagePath":"pages/company/company","iconPath":"static/image/png/fabulous.png","selectedIconPath":"static/image/png/fabulous-selected.png","text":"公司","iconfont":{"text":"","selectedText":"","fontSize":"34rpx","color":"#000000","selectedColor":"#2790fa"}}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"aiFactory","compilerVersion":"3.4.7","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false}},{"path":"/pages/product/product","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"产品","enablePullDownRefresh":false}},{"path":"/pages/dynamic/dynamic","meta":{},"window":{"navigationBarTitleText":"动态","enablePullDownRefresh":false}},{"path":"/pages/company/company","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"公司","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
