(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [826], {
        1826: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                i = n(6265),
                o = n(4121),
                a = n(8117),
                l = n(7294),
                s = n(1009),
                c = n(4611),
                p = n(5838),
                f = n(3027);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = a.ZP.div.withConfig({
                    displayName: "ExternalLink__Rect",
                    componentId: "sc-x2nyp0-0"
                })(["position:absolute;text-align:", ";", " font-family:", ";display:flex;flex-wrap:wrap;line-height:1.5;"], (function(e) {
                    return e.align
                }), (function(e) {
                    return (0, s.C9)(e.rectangle)
                }), p.Rq.primary),
                m = a.ZP.div.withConfig({
                    displayName: "ExternalLink__Title",
                    componentId: "sc-x2nyp0-1"
                })(["display:flex;font-size:4vh;font-weight:normal;white-space:pre;align-items:flex-end;p{line-height:0.96;margin:0 auto;margin-right:1rem;letter-spacing:-0.04em;}"]),
                d = a.ZP.div.withConfig({
                    displayName: "ExternalLink__Price",
                    componentId: "sc-x2nyp0-2"
                })(["", ";letter-spacing:-0.03em;"], (0, f.N)("1.4rem", "1.6rem")),
                x = a.ZP.a.withConfig({
                    displayName: "ExternalLink__CTA",
                    componentId: "sc-x2nyp0-3"
                })(["text-decoration:none;color:currentColor;font-size:2vh;flex:1 0 100%;line-height:1;display:flex;align-items:center;white-space:nowrap;", " svg{margin-left:5%;transform:rotate(180deg);transition:transform 0.05s ease-in;width:10vh;}&:hover{svg{transform:translateX(5px) rotate(180deg);}}"], (function(e) {
                    return e.alignTitle ? "position: absolute; top: 150%;" : "margin-top: 6vh;"
                }));
            t.default = function(e) {
                var t, n = e.rectangle,
                    a = e.title,
                    s = e.price,
                    p = e.label,
                    f = e.link,
                    g = e.alignTitle,
                    w = ((0, o.Z)(e.effect, 1)[0], (0, l.useRef)());
                return (0, r.jsxs)(u, {
                    ref: w,
                    initial: "initial",
                    animate: "animate",
                    variants: {},
                    rectangle: h({}, n[0]),
                    children: [(0, r.jsxs)(m, {
                        children: [(0, c.Z)(a.html), (0, r.jsx)(d, {
                            children: s
                        })]
                    }), (0, r.jsxs)(x, (t = {
                        href: f,
                        alignTitle: g,
                        target: "_blank",
                        rel: "noopener"
                    }, (0, i.Z)(t, "rel", "noreferrer"), (0, i.Z)(t, "children", [p, (0, r.jsx)("svg", {
                        viewBox: "0 0 73 18",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })]), t))]
                })
            }
        }
    }
]);