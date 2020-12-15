function V() {

	var instance = this;
	var F = [];
	var F_len = 0;
	var w = 0;
	var h = 0;
    var sw;
    
	const add = (_f) => {
		F[F_len] = _f;
		F_len++;
    }
    
	const resize = () => {
		setWH();
		for (var reg0=0; reg0<F_len; reg0++) {
			var f = F[reg0];
			f(w, h, sw);
		}
    }
    
	const getW = () => {
		return w;
    }
    
	const getH = () => {
		return h;
    }
    
	const setWH = () => {
		if (typeof window.innerWidth != 'undefined') {
   			w = window.innerWidth,
   			h = window.innerHeight
 		} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
    		w = document.documentElement.clientWidth,
    		h = document.documentElement.clientHeight
 		} else {
   			w = document.getElementsByTagName('body')[0].clientWidth,
   			h = document.getElementsByTagName('body')[0].clientHeight
 		}
    }
    
	const setSW = () => {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
		document.body.appendChild(outer);
	
		var widthNoScroll = outer.offsetWidth;
		outer.style.overflow = "scroll";
	
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);        
	
		var widthWithScroll = inner.offsetWidth;
		outer.parentNode.removeChild(outer);
	
		return widthNoScroll-widthWithScroll;
    }
    
	const init = (() => {
        sw = setSW();
        V.add = add;
        V.resize = resize;
        V.getH = getH;
        V.getW = getW;
        window.onresize = resize;
    })()
}