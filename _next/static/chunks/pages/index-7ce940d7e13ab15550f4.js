(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4109: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return f
                }
            });
            var i = n(6265),
                r = n(5893);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }).apply(this, arguments)
            }
            var c = n(8347),
                a = n(7294),
                s = n(8117),
                l = n(6025),
                h = n(9107);

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        (0, i.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var u = function(t) {
                    var e = t.forwardedRef,
                        n = t.onScrollProgressChange,
                        i = t.onActiveChange,
                        d = t.onScrollDeform,
                        u = t.children,
                        m = t.className,
                        f = (t.rectangle, (0, c.Z)(t, ["forwardedRef", "onScrollProgressChange", "onActiveChange", "onScrollDeform", "children", "className", "rectangle"])),
                        v = o({}, (0, s.Fg)()),
                        g = (0, a.useState)(!1),
                        x = g[0],
                        w = g[1];
                    (0, a.useEffect)((function() {
                        void 0 !== i && i(x)
                    }), [x, i]);
                    var y = (0, a.useRef)(),
                        j = (0, a.useCallback)((function(t) {
                            var e = t.progress,
                                i = t.elementRect,
                                r = t.scrollElementRect,
                                o = r.left + r.width / 2,
                                c = o - i.width;
                            w(i.left <= o && i.left > c), void 0 !== n && n(e), void 0 !== d && d(e)
                        }), [n, d]);
                    (0, h.Z)({
                        element: y,
                        callback: j
                    });
                    var b = (0, l.Z)(y, e);
                    return (0, r.jsx)(s.f6, {
                        theme: v,
                        children: (0, r.jsx)("section", p(p({
                            ref: b,
                            className: m
                        }, f), {}, {
                            children: u
                        }))
                    })
                },
                m = function(t, e) {
                    return (0, r.jsx)(u, p({
                        forwardedRef: e
                    }, t))
                },
                f = (0, a.forwardRef)(m)
        },
        7328: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __N_SSG: function() {
                    return Pe
                },
                default: function() {
                    return Ve
                }
            });
            var i = n(5893),
                r = n(9963),
                o = n(8117),
                c = n(7294),
                a = n(5838),
                s = n(8253),
                l = {
                    show: {
                        transition: {
                            when: "afterChildren",
                            staggerChildren: .5,
                            delayChildren: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: .5,
                            delay: .6
                        }
                    }
                },
                h = {
                    hidden: {
                        opacity: 0,
                        width: 0
                    },
                    show: {
                        opacity: 1,
                        width: "auto",
                        transition: {
                            duration: .5
                        }
                    }
                },
                d = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Intro__Container",
                    componentId: "sc-1hi6gnu-0"
                })(["background-color:", ";position:absolute;left:0;top:0;right:0;bottom:0;z-index:", ";display:flex;justify-content:center;align-items:center;align-content:center;flex-wrap:wrap;overflow:hidden;"], a.O9.black, a.W5.intro),
                p = o.ZP.div.withConfig({
                    displayName: "Intro__SvgContainerGroup",
                    componentId: "sc-1hi6gnu-1"
                })(["display:flex;margin:0 100%;", "{margin:0;}&:nth-child(2),&:nth-child(3){margin-top:-16px;", "{margin-top:0;margin-left:6px;}}&:nth-child(2){margin:0;", "{margin-left:16px;}}"], r.Z.s, r.Z.s, r.Z.s),
                u = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Intro__SvgContainer",
                    componentId: "sc-1hi6gnu-2"
                })(["&:nth-child(2){margin-left:6px;}"]),
                m = function(t) {
                    var e = t.setIntroPlayed,
                        n = t.setInitAnimation;
                    return (0, i.jsxs)(d, {
                        variants: l,
                        initial: "hidden",
                        animate: "show",
                        exit: "exit",
                        onAnimationStart: function() {
                            n(!0)
                        },
                        children: [(0, i.jsx)(p, {
                            children: (0, i.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                width: "122.8px",
                                height: "41.7px",
                                viewBox: "0 0 122.8 41.7",
                                fill: "white",
                                children: [(0, i.jsx)("path", {}), (0, i.jsx)("path", {}), (0, i.jsx)("path", {}), (0, i.jsx)("path", {})]
                            })
                        }), (0, i.jsxs)(p, {
                            children: [(0, i.jsx)(u, {
                                variants: h,
                                children: (0, i.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    width: "85.7px",
                                    height: "41.7px",
                                    viewBox: "0 0 85.7 41.7",
                                    fill: "white",
                                    children: (0, i.jsx)("path", {
                                        id: "txt1",
                                    })
                                })
                            }), (0, i.jsx)(u, {
                                variants: h,
                                children: (0, i.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    width: "134.4px",
                                    height: "41.7px",
                                    viewBox: "0 0 134.4 41.7",
                                    fill: "white",
                                    children: (0, i.jsx)("path", {
                                        id: "txt2",
                                    })
                                })
                            })]
                        }), (0, i.jsxs)(p, {
                            children: [(0, i.jsx)(u, {
                                variants: h,
                                children: (0, i.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    width: "142.3px",
                                    height: "41.7px",
                                    viewBox: "0 0 142.3 41.7",
                                    fill: "white",
                                    children: (0, i.jsx)("path", {
                                        id: "txt3",
                                    })
                                })
                            }), (0, i.jsx)(u, {
                                variants: h,
                                onAnimationComplete: function() {
                                    e(!0)
                                },
                                children: (0, i.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    width: "118.9px",
                                    height: "41.7px",
                                    viewBox: "0 0 118.9 41.7",
                                    fill: "white",
                                    children: (0, i.jsx)("path", {
                                        id: "txt4",
                                    })
                                })
                            })]
                        })]
                    })
                },
                f = n(6265),
                v = n(4121),
                g = n(94),
                x = n(746),
                w = n(1664),
                y = n(5675),
                j = n(3878),
                b = (0, o.ZP)(s.E.a).withConfig({
                    displayName: "Thumbnail__ImgWrapper",
                    componentId: "sc-17v9dre-0"
                })(["height:100%;width:100%;position:relative;cursor:pointer;transition:transform 300ms ease;user-select:none;-webkit-touch-callout:none;"]),
                z = (0, c.forwardRef)((function(t, e) {
                    var n = t.color,
                        r = t.slug,
                        s = t.cover,
                        l = t.thumbnails,
                        h = t.project,
                        d = t.setProject,
                        p = t.onLoad,
                        u = (0, o.Fg)().setBackground,
                        m = (0, c.useRef)(),
                        f = (0, c.useRef)();
                    return (0, c.useEffect)((function() {
                        var t, e, n;
                        null !== (t = f.current) && void 0 !== t && null !== (e = t.firstChild) && void 0 !== e && null !== (n = e.firstChild) && void 0 !== n && n.complete && p()
                    }), [f]), (0, i.jsx)(j.Z, {
                        children: (0, i.jsx)(w.default, {
                            href: "".concat(r),
                            forwardRef: !0,
                            passHref: !0,
                            children: (0, i.jsx)(b, {
                                onMouseEnter: function(t) {
                                    var e = t.currentTarget;
                                    m.current = setTimeout((function() {
                                        u(n), d(h);
                                        var t = e.getBoundingClientRect(),
                                            i = [t.x + t.width / 2, t.y + t.height / 2],
                                            r = [0, 0];
                                        l.current.forEach((function(t) {
                                            var e = t.getBoundingClientRect(),
                                                n = [0, 0],
                                                o = [e.x + e.width / 2, e.y + e.height / 2],
                                                c = [0, 0],
                                                a = [0, 0];
                                            (0, x.$X)(r, i, o), r = (0, x.bA)(r, r, .04), (0, x.$X)(c, r, n), (0, x.b9)(c, c, 1), a = (0, x.IH)(a, a, c), (0, x.IH)(o, o, n), (0, x.bA)(a, a, 1);
                                            var s = (0, x.bA)(a, a, 1);
                                            t.style.transform = "translate3d(".concat(-s[0], "px, ").concat(-s[1], "px, 0)")
                                        })), e.style.transform = "scale(1.15)"
                                    }), 500)
                                },
                                ref: e,
                                tabIndex: 1,
                                onMouseLeave: function() {
                                    clearTimeout(m.current), u(a.O9.white), d(void 0), l.current.forEach((function(t) {
                                        t.style.transform = "translate3d(0,0,0)"
                                    }))
                                },
                                children: (0, i.jsx)("div", {
                                    ref: f,
                                    children: (0, i.jsx)(y.default, {
                                        src: s.filename,
                                        alt: s.alt,
                                        sizes: "20vw",
                                        loading: "eager",
                                        layout: "fill",
                                        objectFit: "contain",
                                        quality: "70",
                                        onLoad: function(t) {
                                            var e;
                                            0 !== ((null === (e = t.target) || void 0 === e ? void 0 : e.src) || "").indexOf("data:image/gif;base64") && (null === p || void 0 === p || p(t))
                                        }
                                    })
                                })
                            })
                        })
                    })
                })),
                C = n(4719),
                M = n(5172),
                Z = n(5096),
                _ = n(9711);

            function I(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(n), !0).forEach((function(e) {
                        (0, f.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var V = function(t, e) {
                return a.Zl.thumbnail[t].size + 2 * a.Zl.thumbnail[t]["x" === e ? "paddingX" : "paddingY"]
            };
            var k, O = o.ZP.div.withConfig({
                    displayName: "Grid__ContainerWrapper",
                    componentId: "sc-1sqp699-0"
                })(["display:flex;align-items:center;justify-content:center;position:absolute;width:", "px;height:", "px;top:calc((100vh - ", "px) / 2);top:calc( ((var(--vh,1vh) * 100) - ", "px) / 2 );left:calc((100vw - ", "px) / 2);content-visibility:auto;", "{width:", "px;height:", "px;top:calc((100vh - ", "px) / 2);top:calc( ((var(--vh,1vh) * 100) - ", "px) / 2 );left:calc((100vw - ", "px) / 2);}", "{width:", "px;height:", "px;top:calc((100vh - ", "px) / 2);top:calc( ((var(--vh,1vh) * 100) - ", "px) / 2 );left:calc((100vw - ", "px) / 2);}", "{width:", "px;height:", "px;top:calc((100vh - ", "px) / 2);top:calc( ((var(--vh,1vh) * 100) - ", "px) / 2 );left:calc((100vw - ", "px) / 2);}", "{width:", "px;height:", "px;top:calc((100vh - ", "px) / 2);top:calc( ((var(--vh,1vh) * 100) - ", "px) / 2 );left:calc((100vw - ", "px) / 2);}", "{width:", "px;height:", "px;top:calc((100vh - ", "px) / 2);top:calc( ((var(--vh,1vh) * 100) - ", "px) / 2 );left:calc((100vw - ", "px) / 2);}"], 5 * V("xs", "x"), 4 * V("xs", "y"), 4 * V("xs", "y"), 4 * V("xs", "y"), 5 * V("xs", "x"), r.Z.s, 5 * V("s", "x"), 4 * V("s", "y"), 4 * V("s", "y"), 4 * V("s", "y"), 5 * V("s", "x"), r.Z.m, 5 * V("m", "x"), 4 * V("m", "y"), 4 * V("m", "y"), 4 * V("m", "y"), 5 * V("m", "x"), r.Z.l, 5 * V("l", "x"), 4 * V("l", "y"), 4 * V("l", "y"), 4 * V("l", "y"), 5 * V("l", "x"), r.Z.xl, 5 * V("xl", "x"), 4 * V("xl", "y"), 4 * V("xl", "y"), 4 * V("xl", "y"), 5 * V("xl", "x"), r.Z.xxl, 5 * V("xxl", "x"), 4 * V("xxl", "y"), 4 * V("xxl", "y"), 4 * V("xxl", "y"), 5 * V("xxl", "x")),
                E = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Grid__Container",
                    componentId: "sc-1sqp699-1"
                })(["display:grid;grid-template-columns:repeat(5,", "px);touch-action:none;padding:", "px ", "px;", "{grid-template-columns:repeat(5,", "px);padding:", "px ", "px;}", "{grid-template-columns:repeat(5,", "px);padding:0;padding:", "px ", "px;}", "{grid-template-columns:repeat(5,", "px);padding:", "px ", "px;}", "{grid-template-columns:repeat(5,", "px);padding:", "px ", "px;}", "{grid-template-columns:repeat(5,", "px);padding:", "px ", "px;}"], V("xs", "x"), a.Zl.thumbnail.xs.paddingY, 2.5 * a.Zl.thumbnail.xs.paddingX, r.Z.s, V("s", "x"), 2 * a.Zl.thumbnail.s.paddingY, 2 * a.Zl.thumbnail.s.paddingX, r.Z.m, V("m", "x"), 2 * a.Zl.thumbnail.m.paddingY, 2 * a.Zl.thumbnail.m.paddingX, r.Z.l, V("l", "x"), 2 * a.Zl.thumbnail.l.paddingY, 2 * a.Zl.thumbnail.l.paddingX, r.Z.xl, V("xl", "x"), 2 * a.Zl.thumbnail.xl.paddingY, 2 * a.Zl.thumbnail.xl.paddingX, r.Z.xxl, V("xxl", "x"), 2 * a.Zl.thumbnail.xxl.paddingY, 2 * a.Zl.thumbnail.xxl.paddingX),
                H = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Grid__Item",
                    componentId: "sc-1sqp699-2"
                })(["padding:", "px ", "px;width:", "px;height:", "px;display:flex;align-items:center;justify-content:center;z-index:", ";", "{width:", "px;height:", "px;padding:", "px ", "px;}", "{width:", "px;height:", "px;}", "{width:", "px;height:", "px;padding:", "px ", "px;}", "{width:", "px;height:", "px;}", "{width:", "px;height:", "px;}"], a.Zl.thumbnail.xs.paddingY, a.Zl.thumbnail.xs.paddingX, V("xs", "x"), V("xs", "y"), (function(t) {
                    return 8 == t.index ? "1" : "initial"
                }), r.Z.s, V("s", "x"), V("s", "y"), a.Zl.thumbnail.s.paddingY, a.Zl.thumbnail.s.paddingX, r.Z.m, V("m", "x"), V("m", "y"), r.Z.l, V("l", "x"), V("l", "y"), a.Zl.thumbnail.l.paddingY, a.Zl.thumbnail.l.paddingX, r.Z.xl, V("xl", "x"), V("xl", "y"), r.Z.xxl, V("xxl", "x"), V("xxl", "y")),
                N = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Grid__MotionDiv",
                    componentId: "sc-1sqp699-3"
                })(["display:flex;width:100%;height:100%;"]),
                S = function(t) {
                    var e = t.projects,
                        n = t.setProject,
                        s = (t.page, t.initAnimation),
                        l = t.showAnimation,
                        h = t.setInitAnimation,
                        d = t.setShowAnimation,
                        p = t.toggleOpen,
                        u = t.setIsnoneed,
                        m = t.onLoad,
                        f = (0, c.useRef)(),
                        w = (0, c.useRef)(null),
                        y = function(t) {
                            var e = (0, c.useState)({
                                    width: void 0,
                                    height: void 0,
                                    gridWidth: void 0,
                                    gridHeight: void 0
                                }),
                                n = e[0],
                                i = e[1];
                            return (0, c.useEffect)((function() {
                                var e = function() {
                                    i({
                                        width: window.innerWidth,
                                        height: window.innerHeight,
                                        gridWidth: t.current.offsetWidth,
                                        gridHeight: t.current.offsetHeight
                                    })
                                };
                                return window.addEventListener("resize", e), e(),
                                    function() {
                                        return window.removeEventListener("resize", e)
                                    }
                            }), []), n
                        }(w),
                        j = (0, c.useRef)([]),
                        b = (0, c.useRef)({
                            x: 0,
                            y: 0
                        }),
                        I = (0, M._)(),
                        V = (0, M._)(),
                        k = (0, o.Fg)().setBackground;
                    (0, c.useEffect)((function() {
                        s && (V.start("init"), k(a.O9.black)), l && (u(!0), V.start("show"), h(!1), d(!1), setTimeout((function() {
                            k(a.O9.beige)
                        }), 1600), setTimeout((function() {
                            k(a.O9.white), p()
                        }), 2e3))
                    }), [s, l]);
                    var S = (0, Z.T2)({
                            onDragStart: function(t) {
                                return L(t)
                            },
                            onDrag: function(t) {
                                var e = (0, v.Z)(t.offset, 2),
                                    n = e[0],
                                    i = e[1],
                                    r = (0, v.Z)(t.velocity, 2),
                                    o = r[0],
                                    c = r[1];
                                return T(n, i, o, c)
                            },
                            onDragEnd: function(t) {
                                return W(t)
                            }
                        }, {
                            drag: {
                                enabled: !!_.t,
                                rubberband: .1,
                                bounds: {
                                    left: -(y.gridWidth - y.width) / 2,
                                    right: (y.gridWidth - y.width) / 2,
                                    top: -(y.gridHeight - y.height) / 2,
                                    bottom: (y.gridHeight - y.height) / 2
                                }
                            }
                        }),
                        L = function(t) {
                            I.start({
                                scale: .95,
                                transition: {
                                    duration: 2,
                                    ease: [.16, 1, .3, 1]
                                }
                            })
                        },
                        R = y.width < r.A.s ? .75 : 2,
                        B = y.width < r.A.s ? [.16, 1, .3, 1] : [.075, .82, .165, 1],
                        T = function(t, e) {
                            I.start({
                                x: t,
                                y: e,
                                transition: {
                                    duration: R,
                                    ease: B
                                }
                            })
                        },
                        W = function(t) {
                            I.start({
                                scale: 1,
                                transition: {
                                    duration: 1.5,
                                    ease: B
                                }
                            })
                        },
                        D = [1, 1, .9, .9, 1],
                        A = [0, .4, .6, .8, 1],
                        F = {
                            init: {
                                y: 550
                            },
                            show: {
                                y: [550, 0, 0, 0, 0],
                                scale: D,
                                transition: {
                                    duration: 3,
                                    delay: .3,
                                    times: A,
                                    ease: [.42, 0, .21, 1]
                                }
                            }
                        },
                        X = {
                            init: {
                                y: 385
                            },
                            show: {
                                y: [385, 0, 0, 0, 0],
                                scale: D,
                                transition: {
                                    duration: 3,
                                    delay: .3,
                                    times: A,
                                    ease: [.42, 0, .21, 1]
                                }
                            }
                        },
                        q = {
                            init: {
                                y: 550
                            },
                            show: {
                                y: [550, 0, 0, 0, 0],
                                scale: D,
                                transition: {
                                    duration: 3,
                                    delay: .3,
                                    times: A,
                                    ease: [.42, 0, .21, 1]
                                }
                            }
                        },
                        Y = {
                            init: {
                                y: 730
                            },
                            show: {
                                y: [730, 0, 0, 0, 0],
                                scale: D,
                                transition: {
                                    duration: 3,
                                    delay: .3,
                                    times: A,
                                    ease: [.42, 0, .21, 1]
                                }
                            }
                        },
                        G = {
                            init: {
                                y: 550
                            },
                            show: {
                                y: [550, 0, 0, 0, 0],
                                scale: D,
                                transition: {
                                    duration: 3,
                                    delay: .3,
                                    times: A,
                                    ease: [.42, 0, .21, 1]
                                }
                            }
                        },
                        U = function(t) {
                            var e = t + 1 - 5 * Math.trunc((t + 1) / 5);
                            return e % 5 === 0 ? G : e % 4 === 0 ? Y : e % 3 === 0 ? q : e % 2 === 0 ? X : F
                        };
                    return (0, i.jsx)(O, {
                        ref: f,
                        children: (0, i.jsx)(E, P(P({
                            ref: w,
                            animate: I,
                            onMouseMove: function(t) {
                                var e = (w.current.offsetWidth - window.innerWidth) / 2,
                                    n = (w.current.offsetHeight - window.innerHeight) / 2,
                                    i = (0, g.M)(t);
                                b.current.x = (0, x.t7)(b.current.x, (0, x.UI)(i.x, 0, window.innerWidth, -e, e), 1), b.current.y = (0, x.t7)(b.current.y, (0, x.UI)(i.y, 0, window.innerHeight, -n, n), 1), I.start({
                                    x: -b.current.x,
                                    y: -b.current.y,
                                    transition: {
                                        duration: 3,
                                        ease: [.075, .82, .165, 1]
                                    }
                                })
                            }
                        }, S()), {}, {
                            children: e.map((function(t, e) {
                                return (0, i.jsx)(H, {
                                    index: e,
                                    variants: U(e),
                                    animate: V,
                                    children: (0, i.jsx)(N, {
                                        layoutId: "artist-motion-".concat(e),
                                        initial: !1,
                                        transition: {
                                            duration: 1,
                                            ease: [.42, 0, 0, 1]
                                        },
                                        children: (0, i.jsx)(z, {
                                            slug: t.slug,
                                            artist: t.artist,
                                            color: t.color,
                                            cover: t.cover,
                                            thumbnails: j,
                                            project: t,
                                            setProject: n,
                                            onLoad: m,
                                            ref: function(t) {
                                                (0, C.U)(t, j.current)
                                            }
                                        }, "$artist-thumb-".concat(e))
                                    }, "artist-motion-".concat(e))
                                }, "".concat(e))
                            }))
                        }))
                    })
                },
                L = n(8347),
                R = n(3527),
                B = n(9283),
                T = o.ZP.a.withConfig({
                    displayName: "ThumbnailScroll__ImgWrapper",
                    componentId: "sc-1kou07u-0"
                })(["cursor:pointer;width:100%;will-change:transform;transition:transform 100ms ease;& > div{max-height:100%;}"]),
                W = o.ZP.div.withConfig({
                    displayName: "ThumbnailScroll__HighResImage",
                    componentId: "sc-1kou07u-1"
                })(["position:absolute;z-index:5;width:100%;height:100%;"]),
                D = (0, c.forwardRef)((function(t, e) {
                    var n = t.slug,
                        r = t.cover,
                        o = t.imagesHighRes,
                        a = t.setImagesHighRes,
                        s = t.thumbnails,
                        l = (0, c.useRef)(),
                        h = (0, c.useRef)(),
                        d = (0, B.hO)(),
                        p = (0, c.useState)(!1),
                        u = p[0],
                        m = p[1];
                    return (0, c.useEffect)((function() {
                        return l.current = setTimeout((function() {
                                m(!0)
                            }), 2e3),
                            function() {
                                clearTimeout(l.current)
                            }
                    }), [o, a]), (0, c.useEffect)((function() {
                        !1 === d && (s.current.forEach((function(t, e) {
                            t.style.transform = ""
                        })), h.current && (h.current.style.contentVisibility = "", h.current.style.display = ""), m(!1))
                    }), [d, a, s, h]), (0, i.jsx)(w.default, {
                        href: "".concat(n),
                        forwardRef: !0,
                        passHref: !0,
                        children: (0, i.jsxs)(T, {
                            ref: e,
                            tabIndex: 1,
                            children: [u && (0, i.jsx)(W, {
                                children: (0, i.jsx)(y.default, {
                                    src: r.filename,
                                    alt: r.alt,
                                    sizes: "60vw",
                                    quality: "75",
                                    loading: "lazy",
                                    layout: "fill",
                                    objectFit: "contain",
                                    onLoad: function(t) {
                                        var e;
                                        0 !== ((null === (e = t.target) || void 0 === e ? void 0 : e.src) || "").indexOf("data:image/gif;base64") && setTimeout((function() {
                                            h.current && (h.current.style.contentVisibility = "hidden", h.current.style.display = "none")
                                        }), 300)
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                ref: h,
                                children: (0, i.jsx)(y.default, {
                                    src: r.filename,
                                    alt: r.alt,
                                    sizes: "20vw",
                                    quality: "70",
                                    loading: "eager",
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            })]
                        })
                    })
                })),
                A = n(572),
                F = n(7666),
                X = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Dragger__Wrapper",
                    componentId: "sc-1gbus5v-0"
                })(["width:28px;height:100vh;height:calc(var(--vh,1vh) * 100);position:absolute;transition:none;top:0;left:0;transform:translateX(-50%);"]),
                q = o.ZP.div.withConfig({
                    displayName: "Dragger__Border",
                    componentId: "sc-1gbus5v-1"
                })(["width:1px;height:100%;background-color:", ";position:absolute;bottom:0;left:50%;transform:translateX(-50%);"], (function(t) {
                    return t.theme.palette.text
                })),
                Y = o.ZP.div.withConfig({
                    displayName: "Dragger__NumberWrapper",
                    componentId: "sc-1gbus5v-2"
                })(["display:flex;align-items:center;position:relative;top:93px;", "{top:53px;}"], r.Z.s),
                G = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Dragger__SphereArea",
                    componentId: "sc-1gbus5v-3"
                })(["margin:-5px 0 0 -5px;width:38px;height:38px;position:relative;z-index:1;flex:0 0 38px;cursor:grab;transition:transform 0.5s cubic-bezier(0.16,1,0.3,1);"]),
                U = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Dragger__Sphere",
                    componentId: "sc-1gbus5v-4"
                })(["margin:5px 0 0 5px;width:28px;height:28px;border-radius:9999px;border:1px solid ", ";position:relative;"], (function(t) {
                    return t.theme.palette.text
                })),
                K = o.ZP.div.withConfig({
                    displayName: "Dragger__SphereBackground",
                    componentId: "sc-1gbus5v-5"
                })(["position:absolute;width:100%;height:100%;border-radius:9999px;top:0;left:0;background-color:", ";transition:", ";z-index:-1;"], (function(t) {
                    return t.theme.palette.background
                }), (function(t) {
                    return t.theme.palette.transition
                })),
                $ = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Dragger__Pagination",
                    componentId: "sc-1gbus5v-6"
                })(["font-family:", ";font-size:1.6rem;padding-left:8px;margin-top:-5px;pointer-events:none;"], a.Rq.primary),
                J = function(t) {
                    var e = t.projects,
                        n = t.projectIndex,
                        r = t.onDrag,
                        o = t.onDragEnd,
                        a = t.x,
                        s = t.refDragger,
                        l = (0, c.useRef)(),
                        h = (0, M._)(),
                        d = (0, M._)(),
                        p = (0, M._)(),
                        u = function(t, e, n) {
                            return Math.min(Math.max(t, e), n)
                        };
                    return (0, c.useEffect)((function() {
                        if (l) {
                            var t = function(t) {
                                var e = (0, g.M)(t),
                                    n = l.current,
                                    i = _.t ? s.current.offsetHeight : 80,
                                    r = n.getBoundingClientRect(),
                                    o = 0,
                                    c = 0;
                                (0, x.TE)(e.x + window.scrollX, e.y + window.scrollY, r.left + r.width / 2, r.top + r.height / 2) < i ? (o = _.t ? u(.2 * (e.x + window.scrollX - (r.left + r.width / 2)), -5, 5) : .2 * (e.x + window.scrollX - (r.left + r.width / 2)), c = _.t ? u(.2 * (e.y + window.scrollY - (r.top + r.height / 2)), -30, 30) : .2 * (e.y + window.scrollY - (r.top + r.height / 2)), d.start({
                                    x: o,
                                    y: c,
                                    transition: {
                                        duration: 2,
                                        ease: [.075, .82, .165, 1]
                                    }
                                })) : d.start({
                                    x: 0,
                                    y: 0,
                                    transition: {
                                        duration: 4,
                                        ease: [.075, .82, .165, 1]
                                    }
                                })
                            };
                            return document.addEventListener("pointermove", t),
                                function() {
                                    return document.removeEventListener("pointermove", t)
                                }
                        }
                    }), []), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(X, {
                            drag: "x",
                            onDrag: r,
                            onDragEnd: o,
                            dragConstraints: s,
                            dragMomentum: !1,
                            initial: {
                                opacity: 0
                            },
                            transition: {
                                duration: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            style: {
                                x: a
                            },
                            children: [(0, i.jsxs)(Y, {
                                children: [(0, i.jsx)(G, {
                                    ref: l,
                                    onHoverStart: function() {
                                        p.start({
                                            scale: 1.1,
                                            transition: {
                                                duration: .25
                                            }
                                        }), h.start({
                                            opacity: 1,
                                            transition: {
                                                duration: .5
                                            }
                                        })
                                    },
                                    onHoverEnd: function() {
                                        p.start({
                                            scale: 1,
                                            transition: {
                                                duration: .25
                                            }
                                        }), h.start({
                                            opacity: 0,
                                            transition: {
                                                duration: .5
                                            }
                                        })
                                    },
                                    animate: d,
                                    children: (0, i.jsx)(U, {
                                        animate: p,
                                        children: (0, i.jsx)(K, {})
                                    })
                                }), (0, i.jsxs)($, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: h,
                                    children: [n, "/", e.length]
                                })]
                            }), (0, i.jsx)(q, {})]
                        })
                    })
                },
                Q = n(4109),
                tt = n(3869),
                et = n(2075),
                nt = o.ZP.div.withConfig({})(["min-width:240px;text-align:center;position:fixed;bottom:2.4rem;left:50%;transform:translateX(-50%);font-family:", ";z-index:5;opacity:", ";", " ", "{min-width:342px;}"], a.Rq.primary, (function(t) {
                    return t.hasProject ? "1" : "0"
                }), (function(t) {
                    return t.isFinePointer ? "pointer-events: none;\n  touch-action: none;" : ""
                }), r.Z.m),
                it = o.ZP.div.withConfig({})(["position:relative;width:100%;height:100%;padding:20px;"]),
                rt = o.ZP.div.withConfig({})(["width:100%;height:100%;left:0;top:0;position:absolute;border:", ";background-color:", ";transition:", ";z-index:-1;"], (function(t) {
                    return t.hasBorders ? "1px solid ".concat(t.theme.palette.text) : ""
                }), (function(t) {
                    return t.hasBorders ? t.theme.palette.background : "none"
                }), (function(t) {
                    return t.theme.palette.transition
                })),
                ot = o.ZP.h2.withConfig({})(["font-size:2rem;font-weight:normal;font-style:italic;margin:0 0 ", ";", "{font-size:", ";}"], a.W0.xs, r.Z.m, a.cp.titles.h2),
                ct = o.ZP.span.withConfig({})(["font-size:2rem;display:none;margin:0 0 ", ";", "{font-size:", ";}"], a.W0.m, r.Z.m, a.cp.titles.h2),
                at = o.ZP.h3.withConfig({})(["text-transform:uppercase;font-weight:normal;margin:0;font-size:1rem;letter-spacing:0.08em;", "{font-size:1.2rem;}"], r.Z.m),
                st = {
                    hidden: {
                        y: 6,
                        opacity: 0
                    },
                    show: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: a.eR.margot,
                            delay: .05
                        }
                    },
                    exit: {
                        opacity: 0,
                        y: 6,
                        transition: {
                            duration: .5,
                            ease: a.eR.margot
                        }
                    }
                },
                lt = function(t) {
                    var e = t.project,
                        n = t.hasBorders,
                        r = void 0 === n || n,
                        o = (0, et.Z)("(pointer: fine)");
                    return (0, i.jsx)(tt.M, {
                        children: e && (0, i.jsx)(i.Fragment, {
                            children: o ? (0, i.jsx)(nt, {
                                hasProject: e,
                                isFinePointer: o,
                                hasBorders: r,
                                children: (0, i.jsxs)(it, {
                                    children: [(0, i.jsxs)(s.E.div, {
                                        variants: st,
                                        initial: "hidden",
                                        animate: "show",
                                        exit: "exit",
                                        children: [(0, i.jsx)(ot, {
                                            children: null === e || void 0 === e ? void 0 : e.cover.alt
                                        }), (0, i.jsx)(ct, {
                                            children: null === e || void 0 === e ? void 0 : e.artist
                                        }), (0, i.jsx)(at, {
                                            children: null === e || void 0 === e ? void 0 : e.country
                                        })]
                                    }, e.cover.alt), (0, i.jsx)(rt, {
                                        hasBorders: r
                                    })]
                                })
                            }) : (0, i.jsx)(w.default, {
                                href: "".concat(e.slug),
                                passHref: !0,
                                children: (0, i.jsx)("a", {
                                    children: (0, i.jsx)(nt, {
                                        isFinePointer: o,
                                        hasProject: e,
                                        hasBorders: r,
                                        children: (0, i.jsxs)(it, {
                                            children: [(0, i.jsxs)(s.E.div, {
                                                variants: st,
                                                initial: "hidden",
                                                animate: "show",
                                                exit: "exit",
                                                children: [(0, i.jsx)(ot, {
                                                    children: null === e || void 0 === e ? void 0 : e.cover.alt
                                                }), (0, i.jsx)(ct, {
                                                    children: null === e || void 0 === e ? void 0 : e.artist
                                                }), (0, i.jsx)(at, {
                                                    children: null === e || void 0 === e ? void 0 : e.country
                                                })]
                                            }, e.cover.alt), (0, i.jsx)(rt, {
                                                hasBorders: r
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                ht = n(4126),
                dt = o.ZP.div.withConfig({
                    displayName: "ScrollView__ScrollWrapper",
                    componentId: "sc-1vaq4m0-0"
                })(["display:grid;height:calc(100vh - 40vh);height:calc(var(--vh,1vh) * (100 - 40));grid-template-columns:repeat(20,1fr);align-items:center;padding:0 10vmin;", "{height:calc(100vh - 30vh);height:calc(var(--vh,1vh) * (100 - 30));}"], r.Z.l),
                pt = o.ZP.div.withConfig({
                    displayName: "ScrollView__ScrollInner",
                    componentId: "sc-1vaq4m0-1"
                })(["display:flex;width:fit-content;align-items:center;height:100vh;height:calc(var(--vh,1vh) * 100);"]),
                ut = o.ZP.div.withConfig({
                    displayName: "ScrollView__DraggerWrapper",
                    componentId: "sc-1vaq4m0-2"
                })(["width:70%;height:100vh;height:calc(var(--vh,1vh) * 100);position:absolute;left:15%;z-index:-1;"]),
                mt = o.ZP.div.withConfig({
                    displayName: "ScrollView__ScrollItem",
                    componentId: "sc-1vaq4m0-3"
                })(["display:flex;width:85vmin;height:85vmin;align-items:center;position:relative;margin:0 10vw;@media (max-width:1024px) and (orientation:landscape){max-width:calc(var(--vh,1vh) * 70);max-height:calc(var(--vh,1vh) * 70);margin:0 5vw;}", "{width:70vmin;height:70vmin;margin:0 5vw;}& > div{max-height:100vh;max-height:calc(var(--vh,1vh) * 100);flex:1 0 auto;}"], r.Z.m),
                ft = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "ScrollView__MotionDiv",
                    componentId: "sc-1vaq4m0-4"
                })(["display:flex;width:100%;height:100%;"]),
                vt = function(t) {
                    var e = t.projects,
                        n = t.lastProject,
                        r = t.imagesHighRes,
                        l = t.setImagesHighRes,
                        h = t.isnoneed,
                        d = (0, c.useRef)(),
                        p = (0, c.useRef)(),
                        u = (0, c.useRef)(),
                        m = (0, c.useRef)(),
                        f = (0, c.useRef)([]),
                        v = (0, c.useRef)([]),
                        g = (0, c.useRef)(1),
                        w = (0, A.c)(1),
                        y = (0, c.useState)({
                            project: !1,
                            index: 0
                        }),
                        j = y[0],
                        b = y[1],
                        z = (0, F.B)(d).scrollX,
                        M = (0, A.c)(0),
                        Z = (0, c.useCallback)((function(t) {
                            var e = 70 * t / d.current.scrollWidth + 15,
                                n = d.current.offsetWidth * e / 100;
                            t > g.current ? w.set(1) : w.set(-1), g.current = t, M.set(n)
                        }), [M]),
                        _ = (0, o.Fg)(),
                        I = _.setBackground,
                        P = _.setTransition,
                        V = (0, L.Z)(_, ["setBackground", "setTransition"]),
                        k = (0, c.useContext)(ht.Il).setLastProject;
                    (0, c.useEffect)((function() {
                        var t = n ? n - 1 : 8;
                        f.current[9].style.zIndex = 1, d.current.scroll(f.current[t].offsetLeft - f.current[t].offsetWidth / 2.5, 0)
                    }), []), (0, c.useEffect)((function() {
                        h && v.current.forEach((function(t, e) {
                            t.style.transform = ""
                        }))
                    }), [j, h]), (0, c.useEffect)((function() {
                        if (j.project.color) {
                            V.palette.background !== a.O9.white && (P((0, a.P3)("background-color 1s", "color 1s", "border-color 1s", "cubic-bezier(0.42,0,0.21,1)")), I(a.O9.white));
                            var t = setTimeout((function() {
                                P((0, a.P3)("background-color 2.5s", "color 1s", "border-color 1s", "cubic-bezier(0.42,0,0.21,1)")), I(j.project.color)
                            }), 400);
                            return k(j.index),
                                function() {
                                    P((0, a.P3)()), clearTimeout(t)
                                }
                        }
                    }), [j]), z.onChange(Z);
                    var O = (0, c.useMemo)((function() {
                            return e.map((function(t, e) {
                                return function(n) {
                                    return n && b({
                                        project: t,
                                        index: e + 1
                                    })
                                }
                            }))
                        }), [e]),
                        E = (0, c.useMemo)((function() {
                            return e.map((function(t, e) {
                                return function(t) {
                                    v.current[e].style = "transform: matrix3d(1, 0, 0,  0, 0, 1, 0, ".concat((0, x.UI)(t, 0, 1, 233e-6, -233e-6), ", 0, 0, 1, 0, 0, 0, 0, 1)")
                                }
                            }))
                        }), [e]),
                        H = (0, c.useCallback)((function(t, e) {
                            var n = 100 * e.point.x / d.current.offsetWidth - 15,
                                i = d.current.scrollWidth * n / 70;
                            d.current.scrollLeft = i
                        }), []);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(ut, {
                            ref: m
                        }), (0, i.jsx)(J, {
                            projects: e,
                            projectIndex: j.index,
                            onDrag: H,
                            scroll: d,
                            refDragger: m,
                            x: M
                        }), (0, i.jsx)(R.Z, {
                            ref: d,
                            children: (0, i.jsx)(pt, {
                                children: (0, i.jsx)(dt, {
                                    ref: u,
                                    children: e.map((function(t, e) {
                                        return (0, i.jsx)(Q.Z, {
                                            onActiveChange: O[e],
                                            onScrollDeform: E[e],
                                            ref: function(t) {
                                                return f.current[e] = t
                                            },
                                            children: (0, i.jsx)(mt, {
                                                children: (0, i.jsx)(ft, {
                                                    layoutId: "artist-motion-".concat(e),
                                                    ref: p,
                                                    transition: {
                                                        duration: 1,
                                                        ease: [.65, 0, .35, 1]
                                                    },
                                                    children: (0, i.jsx)(D, {
                                                        slug: t.slug,
                                                        cover: t.cover,
                                                        thumbnails: v,
                                                        imagesHighRes: r,
                                                        setImagesHighRes: l,
                                                        ref: function(t) {
                                                            (0, C.U)(t, v.current)
                                                        }
                                                    }, "thumbnail-".concat(e))
                                                }, "artist-motion-".concat(e))
                                            }, e)
                                        }, "section-artist=".concat(e))
                                    }))
                                })
                            })
                        }), (0, i.jsx)(s.E.div, {
                            initial: {
                                opacity: 0
                            },
                            transition: {
                                duration: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            children: (0, i.jsx)(lt, {
                                project: j.project,
                                hasBorders: !0
                            })
                        })]
                    })
                },
                gt = o.ZP.button.withConfig({
                    displayName: "Button__ButtonTag",
                    componentId: "sc-1uuwif4-0"
                })(["appearance:none;border:1px solid currentColor;background:none;color:", ";fill:", ";font-family:", ";font-size:1.3rem;height:40px;display:flex;padding:10px;align-items:center;justify-content:center;margin:0 2px;cursor:pointer;position:relative;"], (function(t) {
                    return t.theme.palette.text
                }), (function(t) {
                    return t.theme.palette.text
                }), a.Rq.primary),
                xt = o.ZP.div.withConfig({
                    displayName: "Button__ButtonBg",
                    componentId: "sc-1uuwif4-1"
                })(["width:100%;height:100%;left:0;top:0;position:absolute;background:", ";transition:", ";z-index:-1;"], (function(t) {
                    return t.theme.palette.background
                }), (function(t) {
                    return t.theme.palette.transition
                })),
                wt = function(t) {
                    var e = t.onClick,
                        n = t.children,
                        r = t.labelText,
                        o = t.className;
                    return (0, i.jsxs)(gt, {
                        className: o,
                        onClick: e,
                        "aria-label": r,
                        children: [n, " ", (0, i.jsx)(xt, {})]
                    })
                };

            function yt() {
                return (yt = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }).apply(this, arguments)
            }
            var jt, bt = function(t) {
                    return c.createElement("svg", yt({
                        width: 21,
                        height: 21,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), k || (k = c.createElement("path", {})))
                },
                zt = n(2615),
                Ct = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Header__Icon",
                    componentId: "sc-1frd7fw-0"
                })(["position:absolute;width:26px;height:20px;svg path{fill:", ";}"], (function(t) {
                    return t.theme.palette.text
                })),
                Mt = (0, o.ZP)(wt).withConfig({
                    displayName: "Header__InfoButton",
                    componentId: "sc-1frd7fw-1"
                })(["width:56px;"]),
                Zt = o.ZP.header.withConfig({
                    displayName: "Header__HeaderTag",
                    componentId: "sc-1frd7fw-2"
                })(["display:flex;align-items:center;position:absolute;right:1.6rem;top:1.6rem;z-index:", ";button{@media (hover:hover){&:hover{transition:none;color:", ";background-color:", ";border:1px solid ", ";svg path{fill:", ";}}}}button:active{transform:translateY(1px);}"], a.W5.header, (function(t) {
                    return t.theme.palette.background
                }), (function(t) {
                    return t.theme.palette.text
                }), (function(t) {
                    return t.theme.palette.text
                }), (function(t) {
                    return t.theme.palette.background
                })),
                _t = o.ZP.div.withConfig({
                    displayName: "Header__LogoWrapper",
                    componentId: "sc-1frd7fw-3"
                })(["width:81px;position:absolute;top:16px;left:13px;transform-origin:top left;transform:rotate(-90deg) translateX(-100%);z-index:", ";", "{width:100px;}"], a.W5.header, r.Z.m),
                It = o.ZP.div.withConfig({
                    displayName: "Header__Base",
                    componentId: "sc-1frd7fw-4"
                })(["position:relative;width:18px;height:20px;opacity:0;"]),
                Pt = function(t) {
                    var e = t.setInfoIsOpen,
                        n = t.setView,
                        r = t.isOpen;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(_t, {
                            children: (0, i.jsx)(zt.Z, {})
                        }), (0, i.jsxs)(Zt, {
                            children: [(0, i.jsx)(Mt, {
                                onClick: function() {
                                    return e(!0)
                                },
                                children: "info"
                            }), (0, i.jsxs)(wt, {
                                onClick: n,
                                labelText: "Switch screen",
                                children: [(0, i.jsx)(It, {
                                    children: (0, i.jsx)(bt, {})
                                }), (0, i.jsx)(Ct, {
                                    animate: {
                                        transition: {
                                            duration: .55,
                                            ease: a.eR.margot
                                        }
                                    },
                                    children: (0, i.jsxs)("svg", {
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "26",
                                        height: "20",
                                        viewBox: "0 0 26 20",
                                        children: [(0, i.jsx)(s.E.rect, {
                                            x: "5",
                                            y: "2",
                                            width: "7",
                                            height: "7",
                                            strokeWidth: "1",
                                            stroke: "currentColor",
                                            animate: {
                                                y: r ? 0 : 5,
                                                x: r ? 0 : -2,
                                                scaleX: r ? 1 : 1.57,
                                                scaleY: r ? 1 : 1.2,
                                                transition: {
                                                    duration: .55,
                                                    ease: a.eR.margot
                                                }
                                            },
                                            vectorEffect: "non-scaling-stroke"
                                        }), (0, i.jsx)(s.E.rect, {
                                            x: "14.5",
                                            y: "2",
                                            width: "7",
                                            height: "7",
                                            strokeWidth: "1",
                                            stroke: "currentColor",
                                            animate: {
                                                opacity: r ? 1 : 0,
                                                transition: {
                                                    duration: .55,
                                                    ease: a.eR.margot
                                                }
                                            }
                                        }), (0, i.jsx)(s.E.rect, {
                                            x: "5",
                                            y: "11.45",
                                            width: "7",
                                            height: "7",
                                            strokeWidth: "1",
                                            stroke: "currentColor",
                                            animate: {
                                                opacity: r ? 1 : 0,
                                                transition: {
                                                    duration: .55,
                                                    ease: a.eR.margot
                                                }
                                            }
                                        }), (0, i.jsx)(s.E.rect, {
                                            x: "14.5",
                                            y: "11.45",
                                            width: "7",
                                            height: "7",
                                            strokeWidth: "1",
                                            stroke: "currentColor",
                                            animate: {
                                                scaleX: r ? 1 : 1.4,
                                                scaleY: r ? 1 : 2,
                                                x: r ? 0 : 2,
                                                y: r ? 0 : -5,
                                                transition: {
                                                    duration: .55,
                                                    ease: a.eR.margot
                                                }
                                            },
                                            vectorEffect: "non-scaling-stroke"
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                },
                Vt = (0, o.ZP)(s.E.div).withConfig({})(["min-width:240px;padding:20px;text-align:center;border:", ";background-color:", ";position:fixed;bottom:2.4rem;left:50%;transform:translateX(-50%);font-family:", ";z-index:5;transition:background-color 0.5s ease,color 0.05s ease,border-color 0.5s ease;opacity:", ";", " ", "{min-width:342px;}"], (function(t) {
                    return t.hasBorders ? "1px solid ".concat(t.theme.palette.text) : ""
                }), (function(t) {
                    return t.hasBorders ? t.theme.palette.background : "none"
                }), a.Rq.primary, (function(t) {
                    return t.hasProject ? "1" : "0"
                }), (function(t) {
                    return t.isFinePointer ? "pointer-events: none;\n  touch-action: none;" : ""
                }), r.Z.m),
                kt = o.ZP.h2.withConfig({

                })(["font-size:2rem;font-weight:normal;font-style:italic;margin:0 0 ", ";", "{font-size:", ";}"], a.W0.xs, r.Z.m, a.cp.titles.h2),
                Ot = o.ZP.span.withConfig({})(["font-size:2rem;display:none;margin:0 0 ", ";", "{font-size:", ";}"], a.W0.m, r.Z.m, a.cp.titles.h2),
                Et = o.ZP.h3.withConfig({})(["text-transform:uppercase;font-weight:normal;margin:0;font-size:1rem;letter-spacing:0.08em;", "{font-size:1.2rem;}"], r.Z.m),
                Ht = {
                    hidden: {
                        y: 6,
                        opacity: 0,
                        translateX: "-50%"
                    },
                    show: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .35,
                            ease: a.eR.margot,
                            delay: .05
                        }
                    },
                    exit: {
                        opacity: 0,
                        y: 6,
                        transition: {
                            duration: .35,
                            ease: a.eR.margot
                        }
                    }
                },
                Nt = function(t) {
                    var e = t.project,
                        n = t.hasBorders,
                        r = void 0 === n || n,
                        o = (0, et.Z)("(pointer: fine)");
                    return (0, i.jsx)(tt.M, {
                        children: e && (0, i.jsx)(i.Fragment, {
                            children: o ? (0, i.jsx)(Vt, {
                                hasProject: e,
                                isFinePointer: o,
                                hasBorders: r,
                                variants: Ht,
                                initial: "hidden",
                                animate: "show",
                                exit: "exit",
                                children: (0, i.jsxs)(s.E.div, {
                                    children: [(0, i.jsx)(kt, {
                                        children: null === e || void 0 === e ? void 0 : e.cover.alt
                                    }), (0, i.jsx)(Ot, {
                                        children: null === e || void 0 === e ? void 0 : e.artist
                                    }), (0, i.jsx)(Et, {
                                        children: null === e || void 0 === e ? void 0 : e.country
                                    })]
                                })
                            }, e.cover.alt) : (0, i.jsx)(w.default, {
                                href: "".concat(e.slug),
                                passHref: !0,
                                children: (0, i.jsx)("a", {
                                    children: (0, i.jsx)(Vt, {
                                        isFinePointer: o,
                                        hasProject: e,
                                        hasBorders: r,
                                        variants: Ht,
                                        initial: "hidden",
                                        animate: "show",
                                        exit: "exit",
                                        children: (0, i.jsxs)(s.E.div, {
                                            children: [(0, i.jsx)(kt, {
                                                children: null === e || void 0 === e ? void 0 : e.cover.alt
                                            }), (0, i.jsx)(Ot, {
                                                children: null === e || void 0 === e ? void 0 : e.artist
                                            }), (0, i.jsx)(Et, {
                                                children: null === e || void 0 === e ? void 0 : e.country
                                            })]
                                        })
                                    }, e.cover.alt)
                                })
                            })
                        })
                    })
                },
                St = n(6811),
                Lt = n(3027),
                Rt = n(1086);

            function Bt() {
                return (Bt = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }).apply(this, arguments)
            }
            var Tt, Wt = function(t) {
                return c.createElement("svg", Bt({
                    viewBox: "0 0 274 38",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), jt || (jt = c.createElement("path", {
                    d: "M91.7 37.486c.014-.296.042-.606.042-.902V1.43.5h1.45v36.013c0 .325.013.649.027.987-.501-.014-1.017-.014-1.519-.014zM274 30.044h-1.505c-1.212-2.016-2.397-4.018-3.637-6.09v6.005h-1.365v-8.387h1.644c1.101 1.945 2.243 3.933 3.414 5.977v-5.99l1.449-.085v8.57zM84.97 4.137v5.638c-2.675 1.508-5.364 3.03-8.04 4.552-5.253 2.975-10.492 5.949-15.76 8.909-.348.197-.78.31-1.17.31-2.856.028-5.713.014-8.555.014h-.613a1.758 1.758 0 01-.042-.141A26418.822 26418.822 0 0184.97 4.137zM20.358 29.156c6.563-3.707 12.945-7.302 19.34-10.91 1.644.944 3.26 1.889 4.975 2.875-1.52.86-2.94 1.664-4.376 2.481-3.149 1.776-6.298 3.566-9.447 5.342-.279.155-.6.282-.906.282-3.037.014-6.075.014-9.113.014a3.443 3.443 0 00-.473-.084zM14.38 26.802C9.517 29.55 4.793 32.214 0 34.92v-5.695c3.066-1.72 6.173-3.467 9.336-5.23 1.63.903 3.26 1.819 5.044 2.806zM49.773 23.137c-3.038-1.734-6.048-3.44-9.058-5.159.014-.056.028-.099.042-.155h.586c2.856 0 5.698-.014 8.555.014.376 0 .78.113 1.115.282 1.254.663 2.466 1.367 3.832 2.128a571.444 571.444 0 01-5.072 2.89zM24.454 25.97c-1.741.973-3.358 1.889-5.03 2.82-3.024-1.692-6.02-3.384-9.21-5.16.376-.028.571-.056.766-.056 2.87 0 5.755-.014 8.625.014.377 0 .78.113 1.115.296 1.226.648 2.425 1.353 3.734 2.086zM169.912 7.914c1.31 0 2.592-.07 3.86.028.92.057 1.742.48 1.993 1.48.25 1.03 0 1.903-.906 2.34.404.564.92 1.057 1.115 1.635.446 1.353-.307 2.622-1.7 2.805-1.408.183-2.857.17-4.334.24-.028-2.89-.028-5.667-.028-8.528zm1.491 7.287c.808-.056 1.533-.07 2.244-.197.557-.099.822-.55.836-1.128.014-.606-.195-1.113-.795-1.226-.724-.14-1.477-.14-2.285-.211V15.2zm-.014-3.848c.781-.056 1.505-.028 2.188-.197.307-.085.669-.564.697-.888.028-.324-.279-.888-.544-.973-.724-.197-1.519-.197-2.327-.267-.014.845-.014 1.494-.014 2.325zM228.101 29.973h-1.449c-1.171-1.973-2.383-3.989-3.623-6.075v6.061h-1.324v-8.387h1.631c1.1 1.931 2.229 3.905 3.4 5.949v-5.963h1.365v8.415zM230.916 29.987v-8.541c1.351.084 2.675.056 3.971.267 1.268.198 2.146 1.072 2.411 2.34.181.916.25 1.917.125 2.847-.251 1.917-1.393 2.932-3.302 3.087-1.059.07-2.104 0-3.205 0zm1.574-7.104v5.709c1.491.24 2.481-.028 2.996-.818.627-.944.641-3.03 0-3.96-.724-1.058-1.825-1.001-2.996-.93zM100.116 16.428V7.8c1.352.07 2.676.043 3.958.254 1.574.268 2.466 1.536 2.591 3.453a7.974 7.974 0 01-.167 2.157c-.32 1.466-1.254 2.396-2.759 2.58-1.17.14-2.368.126-3.623.183zm1.519-1.495c1.366.31 2.522-.014 3.052-.831.627-.973.599-3.13-.056-4.017-.557-.775-1.756-1.086-2.996-.747v5.596zM156.856 29.973h-1.63c-.53-1.085-1.087-2.241-1.658-3.41h-1.547v3.396h-1.449v-8.514c1.435.085 2.87.085 4.278.268 1.003.127 1.588.874 1.713 1.776.182 1.311-.181 2.002-1.532 2.763a437.94 437.94 0 001.825 3.721zm-4.835-4.651c.78-.057 1.505-.057 2.202-.17.599-.098.808-.577.808-1.141 0-.578-.265-1.043-.85-1.114-.697-.084-1.408-.014-2.16-.014v2.439zM190.228 12.904h-1.546v3.425h-1.491V7.815c1.435.07 2.87.07 4.277.24 1.045.127 1.617.846 1.742 1.818.167 1.297-.153 2.002-1.212 2.566-.084.042-.153.084-.307.169.613 1.24 1.213 2.466 1.854 3.75h-1.631l-1.686-3.454zm-1.519-1.212c.795-.057 1.477-.07 2.16-.17.544-.084.822-.493.85-1.043.028-.535-.139-1.043-.669-1.17-.738-.155-1.518-.169-2.341-.24v2.623zM177.158 24.857h3.386v-3.285h1.477v8.387h-1.435v-3.608H177.2v3.608h-1.561v-8.387h1.519v3.285zM155.17 16.343h-1.463v-3.665h-3.4v3.665h-1.519V7.928h1.491v3.27h3.4v-3.27h1.505c-.014 2.805-.014 5.568-.014 8.415zM113.047 24.828v-1.62-1.65h1.519v8.415h-1.491v-3.622h-3.428v3.622h-1.449v-8.4h1.422v3.27c1.156-.015 2.229-.015 3.427-.015zM185.1 12.17c-.125.677-.195 1.382-.404 2.045-.501 1.522-1.686 2.325-3.274 2.311-1.533-.014-2.703-.845-3.205-2.325-.432-1.269-.432-2.58-.084-3.863.488-1.747 1.923-2.734 3.651-2.565 1.812.183 2.996 1.466 3.177 3.411.028.324.028.649.056.973a.17.17 0 01.083.014zm-1.518-.027c-.168-.677-.265-1.368-.516-2.016-.265-.69-.864-1.015-1.602-1.015-.739 0-1.324.338-1.603 1.03-.543 1.31-.543 2.649-.028 3.96.279.719.892 1.071 1.645 1.071.766 0 1.365-.352 1.63-1.085.223-.634.32-1.283.474-1.945zM203.257 25.73c.069-.493.111-1.029.236-1.55.432-1.79 1.631-2.763 3.359-2.777 1.713-.014 2.912.945 3.386 2.749a6.282 6.282 0 01-.028 3.326c-.502 1.819-1.714 2.735-3.567 2.664-1.617-.056-2.843-1.155-3.191-2.903-.098-.48-.126-.973-.195-1.509zm1.532 0c.126.62.195 1.24.377 1.833.264.817.877 1.226 1.672 1.226.794.014 1.421-.395 1.714-1.184a5.269 5.269 0 00-.014-3.693c-.279-.747-.864-1.142-1.659-1.17-.766-.028-1.435.409-1.699 1.198-.182.564-.251 1.17-.391 1.79zM139.411 25.773c-.112.648-.154 1.297-.335 1.917-.474 1.607-1.658 2.466-3.316 2.452-1.603 0-2.745-.86-3.247-2.438-.376-1.212-.376-2.439-.056-3.665.46-1.748 1.854-2.763 3.54-2.608 1.895.155 3.093 1.382 3.288 3.355.028.324.042.648.056.987.028-.014.042 0 .07 0zm-5.699-.155c.139.662.222 1.41.459 2.1.251.733.864 1.071 1.645 1.071.738 0 1.309-.338 1.602-1.029.557-1.325.557-2.678-.014-4.003-.293-.69-.892-1.015-1.616-1-.725 0-1.324.338-1.603 1.028-.209.55-.306 1.156-.473 1.833zM258.143 25.815c.195-.832.293-1.65.571-2.396.53-1.41 1.686-2.016 3.122-2.002 1.407 0 2.522.606 3.079 1.974.655 1.607.655 3.242-.028 4.834-.585 1.34-1.7 1.931-3.121 1.903-1.407-.014-2.48-.634-3.024-1.945-.306-.733-.404-1.55-.599-2.368zm5.783 0c-.154-.677-.251-1.367-.488-2.016-.265-.732-.892-1.057-1.644-1.057-.725.014-1.31.353-1.589 1.043-.529 1.311-.529 2.636 0 3.947.279.69.85 1.029 1.589 1.043.766.014 1.379-.324 1.644-1.057.223-.578.32-1.226.488-1.903zM123.944 25.745c-.126.69-.181 1.38-.376 2.015-.488 1.579-1.659 2.396-3.289 2.382-1.588-.014-2.731-.831-3.219-2.382a6.42 6.42 0 01.028-4.06c.502-1.48 1.686-2.283 3.233-2.283 1.547 0 2.745.818 3.219 2.298.209.648.278 1.353.404 2.03zm-1.533.014c-.153-.649-.237-1.297-.46-1.903-.251-.733-.864-1.1-1.616-1.1-.753-.014-1.366.339-1.658 1.058-.516 1.282-.53 2.593-.014 3.89.278.719.864 1.085 1.63 1.1.794.013 1.407-.367 1.672-1.128.223-.606.307-1.269.446-1.917zM147.729 23.503c-.404.1-.822.212-1.24.325.028-.07.056-.141.084-.198-.558-.31-1.073-.76-1.672-.902-.795-.183-1.394.226-1.714 1.001-.53 1.339-.544 2.692 0 4.031.334.846 1.087 1.198 1.909 1.03.738-.156 1.24-.79 1.31-1.735-.474-.028-.948-.056-1.478-.084v-1.198h2.982v4.186h-.947c-.056-.226-.098-.451-.153-.648-.488.253-.962.564-1.477.718-1.505.452-2.941-.21-3.581-1.663-.697-1.607-.725-3.284-.126-4.919.488-1.339 1.7-2.058 3.191-2.044 1.407.014 2.411.69 2.884 1.903.042.056.028.099.028.197zM113.34 12.58h-2.829v2.424h4.083v1.339h-5.643V7.928h5.476v1.226h-3.902v2.1h2.829c-.014.494-.014.875-.014 1.326zM163.447 7.914V9.14h-3.916v2.129h2.843v1.296h-2.843v2.425h4.097v1.325h-5.657V7.9c1.839.014 3.637.014 5.476.014zM116.684 7.914h1.519c.014.268.042.508.042.761v4.553c.014 1.452.473 1.973 1.741 1.96 1.213-.015 1.686-.55 1.7-1.946v-5.3h1.477v5.54c-.013 1.776-.752 2.72-2.48 2.96-.71.098-1.491.028-2.187-.155-1.255-.324-1.756-1.353-1.798-2.552-.07-1.902-.014-3.82-.014-5.82zM212.69 21.53h1.366c.013.254.041.508.041.747 0 1.565-.014 3.13.014 4.694.014 1.381.585 1.903 1.951 1.832.906-.042 1.407-.45 1.449-1.353.07-1.649.056-3.312.084-4.976 0-.296.028-.591.042-.93h1.449v1.114c0 1.451.014 2.903 0 4.341-.014 1.212-.321 2.326-1.561 2.805-1.379.536-2.815.606-3.999-.395-.446-.38-.808-1.1-.836-1.691-.111-1.973-.056-3.975-.07-5.948-.028-.057.028-.113.07-.24zM203.48 7.9h5.406v1.269h-3.916v2.114h2.843v1.283h-2.829v2.438h4.083v1.31h-5.587V7.9zM243.777 28.183h-3.038c-.195.592-.376 1.184-.585 1.776h-1.421c.864-2.847 1.714-5.638 2.564-8.429h1.978c.85 2.777 1.7 5.554 2.564 8.415h-1.519c-.167-.564-.348-1.128-.543-1.762zm-1.421-4.976h-.223l-1.017 3.595h2.285c-.363-1.255-.697-2.425-1.045-3.595zM165.676 29.973h-1.518c-.182-.592-.363-1.156-.558-1.762h-3.051c-.182.564-.377 1.156-.572 1.776h-1.421c.864-2.847 1.714-5.624 2.564-8.429h1.992c.85 2.763 1.7 5.554 2.564 8.415zm-3.511-6.85c-.056 0-.112-.014-.167-.014l-1.059 3.679h2.285c-.376-1.269-.711-2.467-1.059-3.665zM169.09 26.492v3.467h-1.533v-8.528c1.477.085 2.941.057 4.362.268 1.24.183 1.783 1.269 1.63 2.763-.111 1.156-.961 1.945-2.215 2.015-.725.057-1.463.015-2.244.015zm.056-3.778v2.622c.738-.057 1.435-.07 2.104-.183.599-.1.794-.606.78-1.156 0-.564-.237-1.03-.836-1.128-.655-.099-1.323-.099-2.048-.155zM196.457 13.905c.167.211.292.408.446.592.404.507.947.747 1.588.676.599-.056 1.101-.268 1.226-.93.126-.649-.278-1-.808-1.226-.655-.282-1.338-.522-1.992-.818-1.115-.507-1.659-1.339-1.547-2.326.125-1.07.85-1.79 2.076-2.03 1.658-.324 2.94.283 3.539 1.72-.418.17-.836.324-1.073.423-.654-.38-1.142-.775-1.7-.958-.613-.198-1.212.197-1.323.718-.154.635.264.959.752 1.17.739.339 1.505.607 2.23.973 1.086.536 1.518 1.367 1.365 2.438-.181 1.156-.864 1.847-2.048 2.072-1.881.353-3.4-.338-4.027-1.888.432-.198.85-.395 1.296-.606zM138.379 9.577c-.445.17-.85.325-1.114.423-.572-.366-1.004-.76-1.519-.944-.655-.226-1.324.113-1.449.606-.181.69.237 1.043.794 1.283.766.338 1.547.62 2.285 1 1.045.55 1.38 1.297 1.212 2.51-.125.944-.85 1.69-1.881 1.916-1.895.423-3.441-.24-4.18-1.86.432-.198.85-.395 1.31-.606.167.211.265.45.446.563.46.268.933.607 1.449.677.725.113 1.296-.324 1.393-.888.126-.733-.348-1.057-.905-1.297-.641-.268-1.296-.493-1.937-.775-1.185-.536-1.603-1.297-1.463-2.495.111-.93.864-1.691 2.006-1.818.711-.07 1.477 0 2.174.183.683.197 1.143.747 1.379 1.522zM100.13 21.629c1.352 0 2.676-.099 3.972.028 1.435.14 2.048 1.085 1.95 2.622-.083 1.325-.877 2.128-2.215 2.213-.711.042-1.421.014-2.244.014v3.467h-1.463V21.63zm1.491 3.72c.795-.07 1.477-.084 2.16-.21.53-.085.739-.522.766-1.03.028-.535-.125-1.057-.668-1.17-.725-.154-1.477-.154-2.258-.225v2.636zM146.545 9.93c-.488.113-.906.225-1.268.31-.293-.353-.502-.72-.808-.945-.809-.592-1.979-.211-2.341.79-.474 1.282-.46 2.607-.084 3.918.195.663.655 1.086 1.338 1.17.724.085 1.324-.183 1.728-.803.083-.127.167-.268.264-.423.432.127.85.24 1.254.352-.195 1.255-1.254 2.114-2.689 2.227-1.839.155-3.079-.733-3.525-2.537-.321-1.297-.307-2.593.083-3.876.614-1.973 2.718-2.918 4.585-2.058.78.338 1.226.959 1.463 1.875zM198.24 24.955h2.759v1.269h-2.814v3.735h-1.519v-8.4h5.253v1.254h-3.679v2.142zM127.288 22.841h-2.23v-1.283h5.992v1.269h-2.188v7.132h-1.574v-7.118zM248.696 22.855h-2.216v-1.31h5.978v1.282h-2.188v7.132h-1.574v-7.104zM187.4 25.11a554.934 554.934 0 001.672-3.566h1.491c-.572 1.198-1.073 2.354-1.672 3.453-.627 1.128-.906 2.284-.781 3.552.042.452 0 .917 0 1.41h-1.533c0-.832.042-1.663-.013-2.495-.042-.521-.14-1.057-.349-1.536-.557-1.255-1.184-2.481-1.783-3.721-.098-.212-.181-.423-.293-.677h1.575c.515 1.128 1.059 2.27 1.686 3.58zM125.156 9.24V7.913h6.02v1.269h-2.258v7.146h-1.519v-7.09h-2.243zM254.604 21.544h1.477v8.401h-1.477v-8.4zM181.91 5.518h1.1v1.184c-.348.014-.696.042-1.1.056v-1.24zM181.046 5.532v1.17h-1.129v-1.17h1.129z",
                    fill: "#fff"
                })))
            };

            function Dt() {
                return (Dt = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }).apply(this, arguments)
            }
            var At = function(t) {
                    return c.createElement("svg", Dt({
                        viewBox: "0 0 140 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), Tt || (Tt = c.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M128.526 5.3l-.198-.208c-.462.348-1.187.557-2.176.626l-2.77.209-.131.557c1.384.069 2.109.695 2.109 1.948l-.528 4.383c-.725-.557-1.649-.835-2.769-.835-2.308 0-4.154 1.392-5.539 4.105a15.069 15.069 0 00-1.385 6.402c0 3.2 1.253 4.87 3.694 4.87 1.647 0 3.099-.974 4.35-2.783l-.197 1.321c0 .975.527 1.463 1.583 1.463 1.318 0 2.307-.557 2.967-1.6l-.132-.279-.594.14c-.923 0-1.385-.418-1.385-1.183L128.526 5.3zm-10.881 17.256c-.066-2.645.395-4.94 1.45-6.888.857-1.531 2.177-2.296 3.957-2.296l1.582.209-1.582 10.645c-1.121.974-2.176 1.462-3.166 1.462-1.515-.001-2.241-1.045-2.241-3.132zm14.112-1.044c0-.696.066-1.322.131-1.809 5.408 0 8.112-1.6 8.112-4.801 0-2.018-1.121-2.992-3.363-2.992s-4.089.974-5.473 2.922c-1.32 1.879-1.979 4.175-1.979 6.958 0 3.828 1.517 5.636 4.551 5.636 2.043 0 3.626-.765 4.681-2.296l-.33-.417c-.725.626-1.846.974-3.363.974-1.977 0-2.967-1.391-2.967-4.175zm2.769-8.07c.462-.348.924-.488 1.385-.488 1.055 0 1.582.695 1.582 2.156 0 1.949-.988 3.13-3.033 3.548l-2.506.21c.33-2.713 1.187-4.522 2.572-5.427zM139.4 31.812h-1.32v9.392l-5.407-9.392h-2.109v11.48h1.384v-9.394l5.342 9.393h2.11v-11.48zM101.419.708L101.221.5l-5.079.418-8.901-.07-.066.487c.923.21 1.517.696 1.846 1.392l.199.835-.2 2.365-2.174 13.986c-.593 3.617-1.055 5.706-1.45 6.193-.33.278-.792.416-1.32.416-.527 0-.857-.208-1.054-.555-.265-.487-.396-1.741-.396-3.758v-4.871c0-1.252-.066-2.156-.198-2.644-.462-1.81-1.648-2.714-3.496-2.714-1.978 0-3.428.974-4.352 2.853v-.348c0-1.6-.593-2.365-1.78-2.365-1.253 0-2.176.487-2.77 1.53l.132.347.593-.139c.595 0 .989.14 1.188.417.329.348.46 1.462.46 3.27v2.574c0 3.41-.197 5.36-.593 5.775-.329.557-.857.837-1.582.837v.487h6.462v-.488c-.856-.069-1.45-.417-1.714-1.043-.198-.418-.265-1.6-.265-3.549v-7.027c.53-.836 1.517-1.253 2.969-1.253 1.318 0 2.11.557 2.373 1.6.2.487.265 1.6.265 3.41v1.878c0 3.2-.199 5.01-.593 5.358-.33.346-.793.556-1.386.626v.487h19.19l.99-4.662h-.594c-.924 1.6-1.715 2.574-2.375 3.061-.528.209-1.715.349-3.56.349h-2.11c-.726 0-1.122-.28-1.122-.837 0-.348 0-.556.066-.834l1.583-10.09h3.562c1.053 0 1.78.14 2.108.418.265.208.528.835.727 1.948h.527l.922-5.914h-.593c-.528 1.113-.99 1.74-1.319 1.948-.395.278-1.055.418-2.044.418h-3.759l1.583-11.064h2.44c2.637 0 4.155.21 4.55.626.462.418.791 1.322.99 2.645h.593l.725-4.52zm-.792 13.151h.595c.857 0 1.252.417 1.252 1.252 0 .975-.593 5.01-1.847 12.107h2.375l1.846-11.898c1.055-1.044 2.242-1.53 3.562-1.53 1.253 0 1.846.556 1.78 1.669 0 .766-.132 2.018-.462 3.757L109.135 22c-.33 1.53-.527 2.713-.527 3.618 0 1.113.593 1.74 1.714 1.74 1.187 0 2.11-.557 2.769-1.601l-.131-.278-.462.139c-.989 0-1.517-.348-1.517-1.044l1.583-9.672c0-1.948-.989-2.922-3.033-2.922-1.913 0-3.496 1.044-4.749 3.062l.198-1.461c0-1.044-.46-1.6-1.385-1.6-1.32 0-2.373.556-3.1 1.6l.132.278zM94.955 33.202V43.29h1.78V33.2h3.298v-1.39h-8.31v1.39h3.232zM86.91 43.29h1.846l-4.088-11.48h-1.782l-4.22 11.48h1.583l1.253-3.757h4.155l1.253 3.757zm-5.08-4.87l1.65-5.01 1.781 5.01h-3.43zm-7.713-.975c0-2.366-.726-3.966-2.176-4.87-.66-.488-1.912-.765-3.693-.765h-3.231V43.29h2.835c1.648 0 2.835-.14 3.561-.487 1.78-.904 2.704-2.712 2.704-5.357zm-3.561-3.966c1.12.626 1.648 2.019 1.648 4.105 0 2.088-.528 3.409-1.648 4.035-.594.28-1.45.418-2.506.418h-1.253v-8.975h1.385c1.12 0 1.912.139 2.373.417zm44.775-.209c-.99 1.113-1.451 2.644-1.451 4.523 0 3.827 1.716 5.705 5.21 5.705 1.517 0 2.77-.557 3.694-1.668.989-1.114 1.45-2.576 1.45-4.454 0-3.828-1.714-5.775-5.143-5.775-1.584 0-2.837.556-3.76 1.67zm3.758-.418c2.176 0 3.297 1.532 3.297 4.593 0 3.201-1.121 4.8-3.362 4.8-2.176 0-3.297-1.53-3.297-4.592 0-3.2 1.121-4.8 3.362-4.8zm-13.319 10.438h1.648V31.81h-1.648v11.48zM64.82 11.911c-1.846 0-3.363.766-4.484 2.296-1.187 1.53-1.78 3.619-1.78 6.262 0 4.662 1.78 6.958 5.341 6.958 2.044 0 3.561-.765 4.485-2.296l-.33-.418c-.791.695-1.78 1.044-2.968 1.044-2.703 0-4.022-1.879-4.022-5.706v-.208l.857.07c4.353 0 6.53-1.461 6.53-4.454-.002-2.364-1.19-3.548-3.63-3.548zm-3.363 7.097h-.396c-.198-4.035.79-6.053 3.033-6.053 1.253 0 1.913.835 1.913 2.574 0 2.297-1.517 3.48-4.55 3.48zM55.324 5.302l-.198-.209c-.33.348-1.055.557-2.11.627l-2.77.208v.557c.99.07 1.715.417 2.176 1.043.199.418.33 2.088.33 5.01v.418c-.528-.696-1.385-1.044-2.572-1.044-1.715 0-3.034.766-4.089 2.296-1.055 1.6-1.583 3.687-1.583 6.332 0 4.731 1.45 7.027 4.353 7.027 1.912 0 3.23-.904 3.957-2.852v.21c0 1.739.593 2.504 1.715 2.504 1.252 0 2.176-.487 2.835-1.531l-.066-.278h-.593c-.594 0-.99-.139-1.187-.348-.33-.418-.527-1.6-.527-3.548v-5.01c0-6.681.131-10.508.33-11.412zm-4.287 8.07c.858 0 1.45.07 1.715.28v10.575c-.33.487-.858.836-1.516 1.113l-1.385.28c-1.913 0-2.836-1.74-2.836-5.15 0-4.732 1.319-7.097 4.022-7.097zM28.617 14l.594-.14c.593 0 .99.14 1.187.418.264.348.395 1.461.395 3.27v2.574c0 3.41-.198 5.359-.528 5.775-.396.556-.923.836-1.582.836v.487h6.33v-.487c-.857-.07-1.385-.418-1.648-1.044-.198-.418-.33-1.6-.33-3.548v-7.028c.594-.835 1.65-1.252 3.1-1.252 1.254 0 2.044.556 2.374 1.6.132.487.198 1.6.198 3.409v1.878c0 3.2-.198 5.01-.528 5.358-.33.346-.791.556-1.385.626v.487h6.397v-.487c-.726 0-1.32-.28-1.715-.836-.33-.416-.528-1.67-.528-3.687l-.197-7.375c-.462-1.879-1.583-2.853-3.43-2.853-1.978 0-3.43.974-4.286 2.852v-.347c0-1.6-.593-2.365-1.78-2.365-1.253 0-2.176.487-2.77 1.53l.133.349zm-2.77-2.088l-.395-.139-1.979 1.391c-.527-.834-1.516-1.252-2.9-1.252-1.583 0-2.901.766-3.957 2.296-1.055 1.6-1.583 3.687-1.583 6.332 0 4.731 1.45 7.027 4.352 7.027 1.846 0 3.165-.904 3.957-2.852v.21c0 1.74.594 2.504 1.715 2.504 1.252 0 2.176-.487 2.835-1.53l-.198-.279h-.461c-.66 0-1.121-.139-1.32-.348-.264-.418-.396-1.6-.396-3.548v-1.46c0-4.525.133-7.308.33-8.352zm-4.286 1.462c.858 0 1.451.07 1.715.278v10.576c-.33.487-.857.836-1.517 1.113l-1.385.28c-1.978 0-2.967-1.74-2.967-5.15 0-4.732 1.385-7.097 4.154-7.097zM40.757 39.047v-7.235h-1.45v7.443c0 1.95-.924 2.922-2.77 2.922-1.78 0-2.704-.972-2.704-2.852V31.81h-1.781v7.514c0 1.323.33 2.296.923 2.922.791.836 1.913 1.252 3.429 1.252 1.45 0 2.638-.416 3.495-1.322.594-.695.858-1.74.858-3.13zm-15.101-1.67c0-3.828-1.714-5.775-5.144-5.775-1.582 0-2.901.557-3.89 1.67-.924 1.113-1.385 2.644-1.385 4.523 0 3.827 1.78 5.705 5.275 5.705 1.517 0 2.704-.557 3.627-1.668.99-1.115 1.517-2.577 1.517-4.455zm-5.275 4.87c-2.177 0-3.232-1.531-3.232-4.593 0-3.2 1.122-4.8 3.364-4.8 2.11 0 3.165 1.53 3.165 4.592 0 3.201-1.121 4.8-3.297 4.8zm36.928 1.044V31.81h-1.385v9.393l-5.473-9.393h-2.044v11.48h1.384v-9.393l5.407 9.393h2.111zM6.529 9.405V8.78H0v.626c.858.21 1.451.488 1.715.905.264.417.593 1.6 1.187 3.479l3.957 13.429h1.978l4.947-15.1c.461-1.6 1.252-2.504 2.44-2.713v-.626h-5.738v.626c.726.07 1.187.209 1.385.487.198.209.33.487.33.835L8.308 24.712 4.748 10.727c0-.417.132-.696.396-.905.264-.208.726-.347 1.385-.417zM5.47 36.753v-3.55h4.617v-1.39H3.691v11.48h1.78v-5.22h4.022v-1.32H5.47z",
                        fill: "#fff"
                    })))
                },
                Ft = n(369),
                Xt = o.ZP.div.withConfig({
                    displayName: "Info__none",
                    componentId: "sc-j1p5yw-0"
                })(["", ""], (function(t) {
                    return t.isInteractive ? "cursor: url(".concat(t.Cursor, "), pointer;") : ""
                })),
                qt = o.ZP.div.withConfig({
                    displayName: "Info__Exit",
                    componentId: "sc-j1p5yw-1"
                })(["position:absolute;display:none;width:100%;height:25vh;height:calc(var(--vh,1vh) * 25);top:0;z-index:100;", "{left:0;height:calc(var(--vh,1vh) * 100);width:calc(100% - 1088px);}"], r.Z.m),
                Yt = o.ZP.div.withConfig({
                    displayName: "Info__Scroll",
                    componentId: "sc-j1p5yw-2"
                })(["height:100vh;height:calc(var(--vh,1vh) * 100);position:absolute;right:0;top:0;width:100%;overflow:hidden scroll;z-index:", ";", "{max-width:1088px;width:calc(100% - 10%);}"], a.W5.interface.description, r.Z.m),
                Gt = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "Info__MotionDiv",
                    componentId: "sc-j1p5yw-3"
                })(["width:100%;position:absolute;right:0;top:25%;", "{top:0;}"], r.Z.m),
                Ut = o.ZP.div.withConfig({
                    displayName: "Info__Wrapper",
                    componentId: "sc-j1p5yw-4"
                })(["height:fit-content;width:100%;padding:50px 20px;font-family:", ";background-color:black;color:white;border-top:1px solid ", ";position:absolute;right:0;min-height:100%;cursor:auto;", "{max-width:1088px;width:100%;padding:115px 86px 0 138px;border-left:1px solid currentColor;border-top:none;top:0;}"], a.Rq.primary, (function(t) {
                    return t.theme.palette.text
                }), r.Z.m),
                Kt = o.ZP.div.withConfig({
                    displayName: "Info__Heading",
                    componentId: "sc-j1p5yw-5"
                })(["text-align:left;margin:0 auto 3.5rem;max-width:607px;letter-spacing:-0.03em;h2{font-size:1.2rem;letter-spacing:0em;font-weight:normal;}", "{margin:0 0 7.7rem;}"], r.Z.m),
                $t = o.ZP.section.withConfig({
                    displayName: "Info__Main",
                    componentId: "sc-j1p5yw-6"
                })(["height:fit-content;position:relative;margin:0 auto;max-width:607px;", "{display:flex;width:100%;max-width:none;padding-bottom:50px;}"], r.Z.m),
                Jt = o.ZP.aside.withConfig({
                    displayName: "Info__Aside",
                    componentId: "sc-j1p5yw-7"
                })(["font-size:1.2rem;line-height:1.8rem;width:100%;margin-top:1rem;", "{padding-left:9rem;}"], r.Z.m),
                Qt = o.ZP.div.withConfig({
                    displayName: "Info__Scoped",
                    componentId: "sc-j1p5yw-8"
                })(["max-width:593px;p{margin:0 0 1em;}a{color:currentColor;}"]),
                te = o.ZP.div.withConfig({
                    displayName: "Info__AsideContent",
                    componentId: "sc-j1p5yw-9"
                })(["position:sticky;top:24px;p{margin:0 0 2rem;", "{margin:0 0 3.4em;}}a{color:currentColor;}"], r.Z.m),
                ee = o.ZP.h3.withConfig({
                    displayName: "Info__Intro",
                    componentId: "sc-j1p5yw-10"
                })(["", ";text-indent:1.2em;margin-bottom:1.5em;font-weight:300 !important;margin-top:0em;letter-spacing:-0.01em;> span{display:none;position:relative;margin-top:1.3em;&:first-child{margin-top:0em;}}", "{margin-bottom:2em;}"], (0, Lt.N)("2.4rem", "3.6rem"), r.Z.m),
                ne = o.ZP.div.withConfig({
                    displayName: "Info__Text",
                    componentId: "sc-j1p5yw-11"
                })(["", ";line-height:1.4;margin-bottom:0;", "{margin-bottom:0;}"], (0, Lt.N)("1.6rem", "2rem"), r.Z.m),
                ie = o.ZP.ul.withConfig({
                    displayName: "Info__PartnersWrapper",
                    componentId: "sc-j1p5yw-12"
                })(["display:grid;grid-template-columns:50% 50%;margin-top:0;padding-left:0px;margin-bottom:3.5em;"]),
                re = o.ZP.li.withConfig({
                    displayName: "Info__Partner",
                    componentId: "sc-j1p5yw-13"
                })(["text-align:center;margin-top:4.5em;list-style:none;display:flex;align-items:center;justify-content:center;padding:0 1.5rem 0 0;svg{max-height:49px;width:100%;}&:nth-child(2n){padding:0 0 0 1.5rem;position:relative;top:-5px;svg{max-height:25px;width:100%;display:hidden", "{max-height:30px;}}}"], r.Z.m),
                oe = (0, o.ZP)(s.E.button).withConfig({
                    displayName: "Info__CloseButton",
                    componentId: "sc-j1p5yw-14"
                })(["appearance:none;width:36px;display:hidden;height:36px;position:fixed;right:16px;bottom:16px;border:1px solid ", ";background:", ";color:", ";display:flex;align-items:center;justify-content:center;z-index:", ";"], a.O9.white, a.O9.black, a.O9.white, a.W5.captionModal + 1),
                ce = o.ZP.span.withConfig({
                    displayName: "Info__CloseButtonInner",
                    componentId: "sc-j1p5yw-15"
                })(["display:none;width:17px;height:17px;"]),
                ae = (0, c.forwardRef)((function(t, e) {
                    var n = t.infoIsOpen,
                        r = t.setInfoIsOpen,
                        o = (0, et.Z)("(min-width: 1024px)"),
                        c = (0, et.Z)("(pointer: fine)");
                    return (0, i.jsx)(Xt, {
                        isInteractive: n,
                        Cursor: "../close-with-border.svg",
                        children: (0, i.jsx)(tt.M, {
                            children: n && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(qt, {
                                    onClick: function() {
                                        return r(!1)
                                    }
                                }), (0, i.jsx)(Yt, {
                                    children: (0, i.jsx)(Gt, {
                                        ref: e,
                                        initial: {
                                            x: o ? "100vh" : "0",
                                            y: o ? "0" : "100vh"
                                        },
                                        animate: {
                                            x: "0",
                                            y: "0",
                                            transition: {
                                                duration: .75,
                                                ease: [.42, 0, .21, 1]
                                            }
                                        },
                                        exit: {
                                            x: o ? "100vh" : "0",
                                            y: o ? "0" : "100vh",
                                            transition: {
                                                duration: .75,
                                                ease: [.42, 0, .21, 1]
                                            }
                                        },
                                        children: (0, i.jsxs)(Ut, {
                                            children: [(0, i.jsx)(Kt, {
                                                children: (0, i.jsx)("h2", {
                                                    children: "Lomanized- 2022"
                                                })
                                            }), (0, i.jsxs)($t, {
                                                children: [(0, i.jsxs)(Qt, {
                                                    children: [(0, i.jsxs)(ee, {
                                                        children: [(0, i.jsx)("span", {
                                                            children: "Download wallpapers for your phone"
                                                        }), (0, i.jsx)("span", {
                                                            children: ""
                                                        })]
                                                    }), (0, i.jsxs)(ne, {
                                                        children: ["For personal use only", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("em", {
                                                            children: ""
                                                        })]
                                                    }), (0, i.jsxs)(ie, {
                                                        children: [(0, i.jsx)(re, {
                                                            children: (0, i.jsx)(Wt, {})
                                                        }), (0, i.jsx)(re, {
                                                            children: (0, i.jsx)(At, {})
                                                        })]
                                                    }), (0, i.jsxs)(ne, {
                                                        children: [(0, i.jsx)("br", {}), (0, i.jsxs)("em", {
                                                            children: [""]
                                                        })]
                                                    })]
                                                }), (0, i.jsx)(Jt, {
                                                    children: (0, i.jsxs)(te, {
                                                        children: [(0, i.jsx)("p", {
                                                            children: ""
                                                        }), (0, i.jsx)(Rt.m, {
                                                            slug: ""
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    }, "wrapper")
                                }), !c && (0, i.jsx)(oe, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        transition: {
                                            duration: .3,
                                            ease: a.eR.margot
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: .2,
                                            ease: a.eR.margot
                                        }
                                    },
                                    onClick: function() {
                                        r(!1)
                                    },
                                    children: (0, i.jsx)(ce, {
                                        children: (0, i.jsx)(Ft.Z, {})
                                    })
                                })]
                            })
                        })
                    })
                })),
                se = n(2127),
                le = n(809),
                he = n.n(le),
                de = n(2447),
                pe = n(5093);
            var ue = n(355);

            function me(t) {
                return function(t) {
                    if (Array.isArray(t)) return (0, pe.Z)(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || (0, ue.Z)(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var fe = n(5426),
                ve = n(1110);

            function ge(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function xe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ge(Object(n), !0).forEach((function(e) {
                        (0, f.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var we = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "ProjectCounter__Border",
                    componentId: "sc-1qccgtz-0"
                })(["display:flex;align-items:center;font-size:1.5rem;opacity:0;padding:", " ", ";font-family:", ";transition:opacity,transform 350ms cubic-bezier(0.42,0,0.21,1);position:relative;border:1px solid currentColor;max-width:none;", " ", "{display:none;max-width:192px;width:auto;}"], a.W0.m, a.W0.l, a.Rq.primary, (function(t) {
                    return "light" === t.$mode ? "color: ".concat(a.O9.white, ";") : "color: ".concat(a.O9.black, ";")
                }), r.Z.m),
                ye = o.ZP.div.withConfig({
                    displayName: "ProjectCounter__BgColor",
                    componentId: "sc-1qccgtz-1"
                })(["", " position:absolute;top:0;left:0;width:100%;height:100%;transition:", ";z-index:-1;"], (function(t) {
                    return "light" === t.$mode ? "background-color: ".concat(a.O9.black, "; color: ").concat(a.O9.white, ";") : "background-color: ".concat(a.O9.white, "; color: ").concat(a.O9.black, ";")
                }), (function(t) {
                    return t.theme.palette.transition
                })),
                je = (0, o.F4)(["0%{opacity:1;}50%{opacity:0;}100%{opacity:1;}"]),
                be = o.ZP.div.withConfig({
                    displayName: "ProjectCounter__Circle",
                    componentId: "sc-1qccgtz-2"
                })(["border-radius:9999px;margin-right:0.5rem;width:8px;height:8px;background-color:#6fa10b;", " ", "{margin-bottom:0.8rem;margin-right:0;}"], (0, o.iv)(["animation:", " 1s 3;"], je), r.Z.m),
                ze = o.ZP.a.withConfig({
                    displayName: "ProjectCounter__StyledLink",
                    componentId: "sc-1qccgtz-3"
                })(["text-transform:capitalize;margin-left:0.5rem;"]),
                Ce = function(t) {
                    switch (t) {
                        case "/projects/oil-moss":
                            return "Oil & Moss";
                        case "/projects/i-peri-n-tera":
                            return "I Peri N\u2019Tera";
                        case "/projects/rasmi-ray":
                            return "\u09b0\u09b6\u09cd\u09ae\u09bf / Ra\u015bmi / Ray";
                        default:
                            return t.replace("/projects/", "").split("-").join(" ").toLowerCase().replace(/\w/, (function(t) {
                                return t.toUpperCase()
                            }))
                    }
                },
                Me = function(t) {
                    t.project;

                    var e = (0, fe.Z)(0),
                        n = (0, M._)(),
                        r = (0, c.useState)({
                            visitors: 0,
                            lastVisitor: 0,
                            slug: ""
                        }),
                        a = r[0],
                        s = r[1],
                        l = (0, c.useState)(a),
                        h = l[0],
                        d = l[1],
                        p = (0, c.useState)(!1),
                        u = p[0],
                        m = p[1],
                        f = (0, o.Fg)().palette;
                    return (0, c.useEffect)((function() {
                        if (e) {
                            var t, i = Object.entries(e).filter((function(t) {
                                    var e = (0, v.Z)(t, 2),
                                        n = e[0];
                                    e[1];
                                    return n.includes("/projects/")
                                })).map((function(t) {
                                    var e = (0, v.Z)(t, 2),
                                        n = e[0],
                                        i = e[1];
                                    return ["".concat(n.split("?")[0]), me(i)]
                                })).sort((function(t, e) {
                                    return t[1] - e[1]
                                })).reverse()[0],
                                r = function() {
                                    var t = (0, de.Z)(he().mark((function t() {
                                        return he().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, m(!0);
                                                case 2:
                                                    return t.next = 4, n.start("show");
                                                case 4:
                                                    return t.next = 6, (0, ve._)(1e4);
                                                case 6:
                                                    return t.next = 8, n.start("hide");
                                                case 8:
                                                    return t.next = 10, m(!1);
                                                case 10:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }();
                            if (i) d(a), s(xe(xe({}, a), {}, {
                                visitors: i[1].length,
                                lastVisitor: null === (t = i[1][i[1].length - 1]) || void 0 === t ? void 0 : t.visitor,
                                slug: i[0]
                            })), (null === a || void 0 === a ? void 0 : a.lastVisitor) !== (null === h || void 0 === h ? void 0 : h.lastVisitor) && r()
                        }
                    }), [e]), u && (null === a || void 0 === a ? void 0 : a.visitors) > 0 ? (0, i.jsxs)(we, {
                        positionTransition: !0,
                        variants: {
                            show: {
                                opacity: 1,
                                y: 0
                            },
                            hide: {
                                opacity: 0,
                                y: 200
                            }
                        },
                        animate: n,
                        initial: {
                            opacity: 0,
                            y: 7
                        },
                        $mode: f.mode,
                        children: [(0, i.jsx)(be, {}), a.visitors, a.visitors > 1 ? " visitors are looking at" : " visitor is looking at", (0, i.jsx)(w.default, {
                            href: a.slug,
                            passHref: !0,
                            children: (0, i.jsx)(ze, {
                                children: Ce(a.slug)
                            })
                        }), (0, i.jsx)(ye, {
                            $mode: f.mode
                        })]
                    }) : ""
                },
                Ze = (0, o.ZP)(s.E.div).withConfig({
                    displayName: "pages__Page",
                    componentId: "sc-13tw5f9-0"
                })(["position:relative;width:100vw;height:100vh;height:calc(var(--vh,1vh) * 100);overflow:hidden;content-visibility:auto;"]),
                _e = o.ZP.div.withConfig({
                    displayName: "pages__noneer",
                    componentId: "sc-13tw5f9-1"
                })(["position:fixed;top:0;left:0;width:100vw;height:100vh;height:calc(var(--vh,1vh) * 100);z-index:", ";", ";"], a.W5.interface.noneer, (function(t) {
                    return t.isnoneed ? "" : "display: none"
                })),
                Ie = o.ZP.div.withConfig({
                    displayName: "pages__VisitsWrapper",
                    componentId: "sc-13tw5f9-2"
                })(["display:flex;flex-direction:column;position:fixed;bottom:", ";right:", ";width:calc(100vw - 2.8rem);z-index:10;", "{display:none;min-width:192px;width:auto;}"], a.W0.l, a.W0.l, r.Z.m),
                Pe = !0,
                Ve = function(t) {
                    var e = t.projects,
                        n = void 0 !== e && e,
                        r = (0, c.useState)(!1),
                        s = r[0],
                        l = r[1],
                        h = (0, c.useState)(!1),
                        d = h[0],
                        p = h[1],
                        u = (0, c.useState)(!1),
                        f = u[0],
                        v = u[1],
                        g = (0, c.useState)(),
                        x = g[0],
                        w = g[1],
                        y = (0, c.useState)(!1),
                        j = y[0],
                        b = y[1],
                        z = (0, c.useState)(!1),
                        C = z[0],
                        M = z[1],
                        Z = (0, o.Fg)().setBackground,
                        _ = (0, c.useRef)([]),
                        I = (0, c.useRef)(!1),
                        P = (0, c.useContext)(ht.Il),
                        V = P.introPlayed,
                        k = P.setIntroPlayed,
                        O = P.hideIntro,
                        E = P.setHideIntro,
                        H = P.imagesGridLoaded,
                        N = P.setGridImagesLoaded,
                        L = P.isOpen,
                        R = P.setIsOpen,
                        B = P.lastProject,
                        T = P.setLastProject,
                        W = (0, c.useCallback)((function() {
                            R(!L), w(void 0), Z(void 0), T(8), b(!0), setTimeout((function() {
                                return b(!1)
                            }), 1100)
                        }), [L]);
                    (0, c.useEffect)((function() {
                        var t = function() {
                            var t = .01 * window.innerHeight;
                            document.documentElement.style.setProperty("--vh", "".concat(t, "px"))
                        };
                        return window.addEventListener("resize", t), t(),
                            function() {
                                return window.removeEventListener("resize", t)
                            }
                    }), []), (0, c.useEffect)((function() {
                        O || H && V && (E(!0), setTimeout((function() {
                            p(!0)
                        }), 500))
                    }), [H, V, E, O]);
                    var D = (0, c.useCallback)((function() {
                        !0 !== I.current && (_.current.push(1), _.current.length >= 20 && (N(!0), I.current = !0))
                    }), [N]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(St.F, {
                            description: "",
                            image: "/projects/quarantine-blues.jpg"
                        }), (0, i.jsx)(tt.M, {
                            children: !O && (0, i.jsx)(m, {
                                imagesLoaded: H,
                                setIntroPlayed: k,
                                setInitAnimation: l
                            })
                        }), (0, i.jsx)(Pt, {
                            setInfoIsOpen: v,
                            isOpen: L,
                            setView: W
                        }), (0, i.jsx)(ae, {
                            setInfoIsOpen: v,
                            infoIsOpen: f
                        }), !j && (0, i.jsx)(Ie, {
                            children: (0, i.jsxs)(tt.M, {
                                children: [(0, i.jsx)(se._, {}, "visitCounter"), (0, i.jsx)(Me, {}, "projectCounter")]
                            })
                        }), (0, i.jsx)(_e, {
                            isnoneed: j
                        }), (0, i.jsxs)(Ze, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .75,
                                ease: a.eR.margot
                            },
                            children: [(0, i.jsx)(tt.M, {
                                children: !1 === L && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(S, {
                                        projects: n,
                                        isOpen: L,
                                        setProject: w,
                                        initAnimation: s,
                                        showAnimation: d,
                                        setInitAnimation: l,
                                        setShowAnimation: p,
                                        toggleOpen: W,
                                        setIsnoneed: b,
                                        onLoad: function() {
                                            return D()
                                        }
                                    }), (0, i.jsx)(Nt, {
                                        project: x
                                    })]
                                })
                            }), (0, i.jsx)(tt.M, {
                                children: !1 !== L && (0, i.jsx)(vt, {
                                    projects: n,
                                    isOpen: L,
                                    setProject: w,
                                    isnoneed: j,
                                    lastProject: B,
                                    imagesHighRes: C,
                                    setImagesHighRes: M
                                })
                            })]
                        })]
                    })
                }
        },
        9711: function(t, e, n) {
            "use strict";
            n.d(e, {
                t: function() {
                    return i
                }
            });
            var i = "ontouchstart" in window
        },
        94: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return i
                }
            });
            var i = function(t) {
                var e = 0,
                    n = 0;
                return t || (t = window.event), t.pageX || t.pageY ? (e = t.pageX, n = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                    x: e,
                    y: n
                }
            }
        },
        4719: function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (t && Array.isArray(e) && !e.includes(t)) return e.push(t)
            }
            n.d(e, {
                U: function() {
                    return i
                }
            })
        },
        8581: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(7328)
            }])
        }
    },
    function(t) {
        t.O(0, [61, 354, 480, 774, 888, 179], (function() {
            return e = 8581, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);