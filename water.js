console.log('水波');
		!
			function () {
				function a(a, b) {
					function z() {
						e = new Image,
							e.onload = function () {
								B()
							},
							e.src = c.image,
							e.crossOrigin = ''
					}
					function A() {
						y.drawImage(e, 0, 0, global_width, global_height),
							t = y.getImageData(0, 0, h, i),
							s = y.getImageData(0, 0, h, i),
							u = s.data,
							v = t.data
					}
					function B() {
						A();
						for (var a = 0; a < l; a++) r[a] = q[a] = 0;
						C(),
							c.auto && (g = setInterval(function () {
								E(Math.random() * h, Math.random() * i)
							},
								f), E(Math.random() * h, Math.random() * i))
					}
					function C() {
						requestAnimFrame(C),
							D()
					}
					function D() {
						var a;
						a = m,
							m = n,
							n = a,
							a = 0,
							o = m;
						for (var b = 0; b < i; b++) for (var c = 0; c < h; c++) {
							var d = q[o - h] + q[o + h] + q[o - 1] + q[o + 1] >> 1;
							d -= q[n + a],
								d -= d >> 5,
								q[n + a] = d,
								d = 1024 - d;
							var e = r[a];
							if (r[a] = d, e != d) {
								var f = ((c - j) * d / 1024 << 0) + j,
									g = ((b - k) * d / 1024 << 0) + k;
								f >= h && (f = h - 1),
									f < 0 && (f = 0),
									g >= i && (g = i - 1),
									g < 0 && (g = 0);
								var l = 4 * (f + g * h),
									p = 4 * a;
								u[p] = v[l],
									u[p + 1] = v[l + 1],
									u[p + 2] = v[l + 2]
							} ++o,
								++a
						}
						y.putImageData(s, 0, 0)
					}
					function E(a, b) {
						a <<= 0,
							b <<= 0;
						for (var c = b - p,
							d = b + p; c < d; c++) for (var e = a - p,
								f = a + p; e < f; e++) q[m + c * h + e] += 512
					}
					var c = {
						image: '',
						rippleRadius: 3,
						width: global_width,
						height: global_height,
						delay: 1,
						auto: true
					};
					if (void 0 !== b) for (var d in b) b.hasOwnProperty(d) && c.hasOwnProperty(d) && (c[d] = b[d]);
					if (!c.image.length) return !1;
					var e, g, s, t, u, v, f = 1e3 * c.delay,
						h = c.width,
						i = c.height,
						j = h / 2,
						k = i / 2,
						l = h * (i + 2) * 2,
						m = h,
						n = h * (i + 3),
						o = 0,
						p = c.rippleRadius,
						q = [],
						r = [],
						w = document.createElement('div');
					w.style.width = h + 'px',
						w.style.height = i + 'px',
						a.appendChild(w);
					var x = document.createElement('canvas');
					x.width = h,
						x.height = i,
						w.appendChild(x);
					var y = x.getContext('2d');
					y.fillStyle = c.bgColor,
						y.fillRect(0, 0, h, i),
						window.requestAnimFrame = function () {
							return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
								function (a) {
									window.setTimeout(a, 1e3 / 60)
								}
						}(),
						this.disturb = function (a, b) {
							E(a, b)
						},
						z()
				}
				window.WaterRippleEffect = a
			}(),
			'undefined' != typeof jQuery && !
			function (a) {
				a.fn.waterRippleEffect = function (b) {
					var c = arguments;
					return this.each(function () {
						if (a.data(this, 'plugin_WaterRippleEffect')) {
							var d = a.data(this, 'plugin_WaterRippleEffect');
							d[b] ? d[b].apply(this, Array.prototype.slice.call(c, 1)) : a.error('Method ' + b + ' does not exist on jQuery.waterRippleEffect')
						} else a.data(this, 'plugin_WaterRippleEffect', new WaterRippleEffect(this, b))
					})
				}
			}(jQuery);
		init();
		function init() {
			global_width=document.getElementById('fuyumi_water').parentNode.clientWidth;
			if(global_width%2==1){
				global_width--;
			}
			global_height=parseInt(global_width * 3670/6000);
			if(global_height%2==1){
				global_height--;
			}
			offsetLeft = document.getElementById('fuyumi_water').getBoundingClientRect().left
    		offsetTop = document.getElementById('fuyumi_water').getBoundingClientRect().top
			var settings = {
				image: 'https://cdn.jsdelivr.net/gh/FuyumiM/Angelina@latest/Title_Angelina.jpg',
				width: global_width,
				height: global_height,
				delay: 1,
				rippleRadius: 3,
				auto: true
			};
			var waterRippleEffect = new WaterRippleEffect(document.getElementById('fuyumi_water'), settings);
			document.getElementById('fuyumi_water').style.cursor = 'pointer';
			document.getElementById('fuyumi_water').addEventListener('click', function (e) {
				var mouseX = e.layerX;
				var mouseY = e.layerY;
				waterRippleEffect.disturb(mouseX, mouseY);

			});
			document.getElementById('fuyumi_water').addEventListener('mousemove', function (e) {
				var mouseX = e.layerX;
				var mouseY = e.layerY;
				waterRippleEffect.disturb(mouseX, mouseY);
			});
			document.getElementById('fuyumi_water').addEventListener('touchstart', function (e) {
				var id = e.targetTouches[0];
				var mouseX = id.pageX-offsetLeft;
				var mouseY = id.pageY-offsetTop;
				console.log("mouseX:"+mouseX+" mouseY:"+mouseY);
				waterRippleEffect.disturb(mouseX, mouseY);

			});
			document.getElementById('fuyumi_water').addEventListener('touchmove', function (e) {
				e.preventDefault();
				var id = e.targetTouches[0];
				var mouseX = id.pageX-offsetLeft;
				var mouseY = id.pageY-offsetTop;
				waterRippleEffect.disturb(mouseX, mouseY);
			});

		};
