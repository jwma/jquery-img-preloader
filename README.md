# jquery_img_preloader

一个简单的图片预加载的jQuery小插件，代码的严谨性有待完善。

### $.imgPreloader.preLoad(successCallBack, failCallback)

通过扫描html中带有data-src属性的img标签，加载里面的图片链接，加载完成后真正的把img标签的src属性赋值，从而把图片真正加载到页面，之后会调用successCallback回调，发送错误会调用failCallback。

用法见demo1.html

## $.imgPreloader.preLoadURLs(urls, successCallBack, failCallback)

通过传入一个图片url数组，预加载这些url的图片资源，所有url成功请求完成后，会调用successCallback回调，如果发生错误，会调用failCallback回调。

用法见demo2.html

