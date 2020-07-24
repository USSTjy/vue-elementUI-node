!(function(e) {
  var t,
    n,
    c,
    o,
    a,
    i,
    d,
    s =
      '<svg><symbol id="icon-caidanzu" viewBox="0 0 1024 1024"><path d="M832 0a128 128 0 0 1 128 128v768a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128h640z m0 64H192a64 64 0 0 0-63.552 56.512L128 128v768a64 64 0 0 0 56.512 63.552L192 960h640a64 64 0 0 0 63.552-56.512L896 896V128a64 64 0 0 0-64-64z m-519.104 583.104c17.088 0 28.416 11.392 28.416 28.48 0 17.024-11.328 28.416-28.416 28.416h-28.48C267.392 704 256 692.608 256 675.584c0-17.088 11.392-28.48 28.416-28.48h28.48z m426.688 0c17.024 0 28.416 11.392 28.416 28.48 0 17.024-11.392 28.416-28.416 28.416h-312.96c-17.024 0-28.416-11.392-28.416-28.416 0-17.088 11.392-28.48 28.48-28.48h312.896zM312.896 483.584c17.088 0 28.416 11.328 28.416 28.416s-11.328 28.416-28.416 28.416h-28.48C267.392 540.416 256 529.088 256 512s11.392-28.416 28.416-28.416h28.48z m426.688 0c17.024 0 28.416 11.328 28.416 28.416s-11.392 28.416-28.416 28.416h-312.96c-17.024 0-28.416-11.328-28.416-28.416s11.392-28.416 28.48-28.416h312.896zM312.896 320c17.088 0 28.416 11.392 28.416 28.416 0 17.088-11.328 28.48-28.416 28.48h-28.48C267.392 376.896 256 365.44 256 348.416 256 331.392 267.392 320 284.416 320h28.48z m426.688 0c17.024 0 28.416 11.392 28.416 28.416 0 17.088-11.392 28.48-28.416 28.48h-312.96c-17.024 0-28.416-11.392-28.416-28.48 0-17.024 11.392-28.416 28.48-28.416h312.896z" fill="#000000" ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M974.40064 711.68c27.136 0 49.6 22.272 49.6 49.408a49.984 49.984 0 0 1-49.6 50.368H255.55264a49.984 49.984 0 0 1-49.6-50.368c0-27.136 22.4-49.472 49.6-49.472h718.848zM63.68064 128a63.68 63.68 0 0 1 0 127.296A63.68 63.68 0 0 1 0.00064 191.616C0.00064 157.056 28.99264 128 63.61664 128z m191.872 121.152a50.176 50.176 0 0 1-49.6-49.92c0-27.136 22.4-49.856 49.6-49.856h718.848c27.136 0 49.6 22.72 49.6 49.92 0 27.136-22.464 49.92-49.6 49.92H255.55264z m0 299.392a50.176 50.176 0 0 1-49.6-49.92c0-27.136 22.4-49.856 49.6-49.856h718.848c27.136 0 49.6 22.72 49.6 49.92 0 27.136-22.464 49.92-49.6 49.92H255.55264zM63.61664 417.28a63.744 63.744 0 0 1 0 127.36c-34.56 0-63.616-29.056-63.616-63.68 0-35.584 28.992-63.68 63.616-63.68z m0 288.32a63.744 63.744 0 0 1 0 127.296 63.68 63.68 0 0 1-63.616-63.68c0-34.56 28.992-63.616 63.616-63.616z" fill="#333333" ></path></symbol></svg>',
    l = (t = document.getElementsByTagName('script'))[
      t.length - 1
    ].getAttribute('data-injectcss')
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function h() {
    i || ((i = !0), o())
  }
  ;(n = function() {
    var e,
      t,
      n,
      c,
      o,
      a = document.createElement('div')
    ;(a.innerHTML = s),
      (s = null),
      (e = a.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = e),
        (n = document.body).firstChild
          ? ((c = t), (o = n.firstChild).parentNode.insertBefore(c, o))
          : n.appendChild(t))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((c = function() {
            document.removeEventListener('DOMContentLoaded', c, !1), n()
          }),
          document.addEventListener('DOMContentLoaded', c, !1))
      : document.attachEvent &&
        ((o = n),
        (a = e.document),
        (i = !1),
        (d = function() {
          try {
            a.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(d, 50)
          }
          h()
        })(),
        (a.onreadystatechange = function() {
          'complete' == a.readyState && ((a.onreadystatechange = null), h())
        }))
})(window)
