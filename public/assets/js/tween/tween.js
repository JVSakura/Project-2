function Tween(_e, _d, _p) { // _e -> element, _d -> duration, _p -> parameters

	let sT; // start time
	let eT; // elapsed time
	let delay;
	let tick;
	let ease;
	let P = {};
	let ocF; // onComplete function
    let ocFP; // onComplete function parameters
    
	const trimPx = (i) => {
		var reg0 = 0;
		while (i.charAt(reg0) == "-" || !isNaN(i.charAt(reg0))) {
			reg0++;
		}
		return i.slice(0, reg0);
    }
    
	const getCurrValue = (i, vt) => {
		var b;
		if (vt == 1) {
			b = _e[i];
		} else {
			b = window.getComputedStyle(_e, null).getPropertyValue(convertProp(i));
			if (isNaN(b)) {
				b = trimPx(b); //trim "px"
			}
		}
		return b;
    }
    
	const buildProp = (i, vt) => {
		var p = {};
		var b = getCurrValue(i, vt);
		p.b = Number(b); // current property value
		p.f = Number(_p[i]); // final property value
		p.c = p.f-p.b; // difference
		p.vt = vt;
		P[i] = p;
    }
    
	const convertProp = (i) => {
		switch (i) {
			case "marginLeft":
				i = "margin-left";
				break;
			case "marginRight":
				i = "margin-right";
				break;
			case "marginTop":
				i = "margin-top";
				break;
			case "marginBottom":
				i = "margin-bottom";
				break;
			case "paddingLeft":
				i = "padding-left";
				break;
			case "paddingRight":
				i = "padding-right";
				break;
			case "paddingTop":
				i = "padding-top";
				break;
			case "paddingBottom":
				i = "padding-bottom";
				break;
		}
		return i;
    }
    
	const parseParams = () => {
		for (var i in _p) {
			switch (i) {
				case "width":
				case "height":
				case "marginLeft":
				case "marginRight":
				case "marginTop":
				case "marginBottom":
				case "paddingLeft":
				case "paddingRight":
				case "paddingTop":
				case "paddingBottom":
				case "opacity":
					buildProp(i, 0);
					break;
				case "scrollTop":
				case "scrollLeft":
					buildProp(i, 1);
					break;
				case "ease":
					ease = _p[i];
					break;
				case "delay":
					delay = _p[i]*1000;
					break;
				case "onComplete":
					ocF = _p[i];
					break;
				case "onCompleteParams":
					ocFP = _p[i];
					break;
			}
		}
		if (delay) {
			startDelay();
		} else {
			start();
		}
    }
    
	const startDelay = () => {
		sT = Date.now();
		tick = setInterval(delayCheck, 10); 
    }
    
	const delayCheck = () => {
		eT = Date.now()-sT;
		if (eT > delay) {
			clearInterval(tick);
			start();
		}
    }
    
	const tweenProps = () => {
		for (var i in P) {
			var p = P[i];
			if (p.vt == 1) {
				_e[i] = ease(eT, p.b, p.c, _d);
			} else {
				_e.style[i] = ease(eT, p.b, p.c, _d);
			}
		}
    }
    
	const forceProps = () => {
		for (var i in P) {
			var p = P[i];
			if (p.vt == 1) {
				_e[i] = p.f;
			} else {
				_e.style[i] = p.f;
			}
		}
    }
    
	const onTick = () => {
		eT = Date.now()-sT;
		if (eT < _d) {
			tweenProps();
		} else {
			complete();
		}
    }
    
	const complete = () => {
		clearInterval(tick);
		if (ocF && ocFP) {
			ocF(ocFP);
		} else if (ocF) {
			ocF();
		}
		forceProps();
    }
    
	const start = () => {
		sT = Date.now();
		tick = setInterval(onTick, 10); 
    }
    
	this.stop = () => {
		clearInterval(tick);
    }
    
	const init = (() => {
		_d *= 1000; // convert duration into milliseconds
		parseParams();
	})()
    
}