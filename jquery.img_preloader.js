(function() {
  var $ = jQuery

  function bindSrc(imgs) {
    imgs.each(function(idx, one) {
      $(this).attr('src', $(this).data('src'))
    })
  }
  $.imgPreloader = {
    preLoad: function(success, fail) {
      var imgs = $('img[data-src]')
      var len = imgs.length
      var count = 0
      imgs.each(function(idx, one) {
        var img = new Image()
        img.src = $(this).data('src')
        img.onload = function() {
          if (++count == len) {
            bindSrc(imgs)
            success()
          }
        }
        img.onerror = function() {
          fail()
        }
      })
    },
    preLoadURLs: function(urls, success, fail) {
      var len = urls.length
      var count = 0

      if (len > 0) {
        for (var i = 0; i < len; i++) {
          var img = new Image()
          img.src = urls[i]
          img.onload = function() {
            if (++count == len) success()
          }
          img.onerror = function() {
            fail()
          }
        }
      } else
        success()
    }
  }
})(jQuery)
