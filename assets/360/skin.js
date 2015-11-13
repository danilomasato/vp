// Garden Gnome Software - Skin
// Pano2VR 3.1.3/1941
// Filename: palmeirasiphone.ggsk
// Generated qui jul 11 22:05:44 2013

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/photobolha33__o.png';
		preLoadImg.src=basePath + 'images/photobolha4__o.png';
		preLoadImg.src=basePath + 'images/photobolha3__o.png';
		preLoadImg.src=basePath + 'images/photobolha22__o.png';
		preLoadImg.src=basePath + 'images/photobolha1__o.png';
		preLoadImg.src=basePath + 'images/photobolha222__o.png';
		preLoadImg.src=basePath + 'images/photobolha11__o.png';
		preLoadImg.src=basePath + 'images/photobolha44__o.png';
		preLoadImg.src=basePath + 'images/segue_direita__o.png';
	}
	
	this.addSkin=function() {
		this._loading=document.createElement('div');
		this._loading.ggId='loading'
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId='loadingbg'
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId='loadingbrd'
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext.ggId='loadingtext'
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			this.innerHTML="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
		}
		this._loadingtext.ggUpdateText();
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId='loadingbar'
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-color: #ffffff;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId='userdata'
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId='userdatabg'
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId='userdatabrd'
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 138px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title.ggId='title'
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._title.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			this.innerHTML="<b>"+me.player.userdata.title+"<\/b>";
		}
		this._title.ggUpdateText();
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description.ggId='description'
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._description.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.description;
		}
		this._description.ggUpdateText();
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author.ggId='author'
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._author.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.author;
		}
		this._author.ggUpdateText();
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime.ggId='datetime'
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._datetime.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.datetime;
		}
		this._datetime.ggUpdateText();
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright.ggId='copyright'
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._copyright.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			this.innerHTML="&#169; "+me.player.userdata.copyright;
		}
		this._copyright.ggUpdateText();
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._photobolha33=document.createElement('div');
		this._photobolha33.ggId='Photobolha33'
		this._photobolha33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha33.ggVisible=true;
		this._photobolha33.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(109 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 109px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha33.setAttribute('style',hs);
		this._photobolha33__img=document.createElement('img');
		this._photobolha33__img.setAttribute('src',basePath + 'images/photobolha33.png');
		this._photobolha33__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha33__img);
		this._photobolha33.appendChild(this._photobolha33__img);
		this._photobolha33.onclick=function () {
			me.player.openUrl("33.html","_self");
		}
		this._photobolha33.onmouseover=function () {
			me._tt_photobolha33.style[domTransition]='none';
			me._tt_photobolha33.style.visibility='inherit';
			me._tt_photobolha33.ggVisible=true;
			me._photobolha33__img.src=basePath + 'images/photobolha33__o.png';
		}
		this._photobolha33.onmouseout=function () {
			me._tt_photobolha33.style[domTransition]='none';
			me._tt_photobolha33.style.visibility='hidden';
			me._tt_photobolha33.ggVisible=false;
			me._photobolha33__img.src=basePath + 'images/photobolha33.png';
		}
		this._tt_photobolha33=document.createElement('div');
		this._tt_photobolha33.ggId='tt_Photobolha33'
		this._tt_photobolha33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha33.ggVisible=false;
		this._tt_photobolha33.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-50 + w/2) + 'px';
			}
			this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha33.setAttribute('style',hs);
		this._tt_photobolha33.innerHTML="Preparo";
		this._photobolha33.appendChild(this._tt_photobolha33);
		this.divSkin.appendChild(this._photobolha33);
		this._photobolha4=document.createElement('div');
		this._photobolha4.ggId='Photobolha4'
		this._photobolha4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha4.ggVisible=true;
		this._photobolha4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-11 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -11px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha4.setAttribute('style',hs);
		this._photobolha4__img=document.createElement('img');
		this._photobolha4__img.setAttribute('src',basePath + 'images/photobolha4.png');
		this._photobolha4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha4__img);
		this._photobolha4.appendChild(this._photobolha4__img);
		this._photobolha4.onclick=function () {
			me.player.openUrl("4.html","_self");
		}
		this._photobolha4.onmouseover=function () {
			me._tt_photobolha4.style[domTransition]='none';
			me._tt_photobolha4.style.visibility='inherit';
			me._tt_photobolha4.ggVisible=true;
			me._photobolha4__img.src=basePath + 'images/photobolha4__o.png';
		}
		this._photobolha4.onmouseout=function () {
			me._tt_photobolha4.style[domTransition]='none';
			me._tt_photobolha4.style.visibility='hidden';
			me._tt_photobolha4.ggVisible=false;
			me._photobolha4__img.src=basePath + 'images/photobolha4.png';
		}
		this._tt_photobolha4=document.createElement('div');
		this._tt_photobolha4.ggId='tt_Photobolha4'
		this._tt_photobolha4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha4.ggVisible=false;
		this._tt_photobolha4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-50 + w/2) + 'px';
			}
			this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha4.setAttribute('style',hs);
		this._tt_photobolha4.innerHTML="Estufa 2";
		this._photobolha4.appendChild(this._tt_photobolha4);
		this.divSkin.appendChild(this._photobolha4);
		this._photobolha3=document.createElement('div');
		this._photobolha3.ggId='Photobolha3'
		this._photobolha3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha3.ggVisible=true;
		this._photobolha3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-171 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -171px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha3.setAttribute('style',hs);
		this._photobolha3__img=document.createElement('img');
		this._photobolha3__img.setAttribute('src',basePath + 'images/photobolha3.png');
		this._photobolha3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha3__img);
		this._photobolha3.appendChild(this._photobolha3__img);
		this._photobolha3.onclick=function () {
			me.player.openUrl("index.html","_self");
		}
		this._photobolha3.onmouseover=function () {
			me._tt_photobolha3.style[domTransition]='none';
			me._tt_photobolha3.style.visibility='inherit';
			me._tt_photobolha3.ggVisible=true;
			me._photobolha3__img.src=basePath + 'images/photobolha3__o.png';
		}
		this._photobolha3.onmouseout=function () {
			me._tt_photobolha3.style[domTransition]='none';
			me._tt_photobolha3.style.visibility='hidden';
			me._tt_photobolha3.ggVisible=false;
			me._photobolha3__img.src=basePath + 'images/photobolha3.png';
		}
		this._tt_photobolha3=document.createElement('div');
		this._tt_photobolha3.ggId='tt_Photobolha3'
		this._tt_photobolha3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha3.ggVisible=false;
		this._tt_photobolha3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-30 + w/2) + 'px';
			}
			this.style.left=(-30 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -30px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha3.setAttribute('style',hs);
		this._tt_photobolha3.innerHTML="Vista Panoramica";
		this._photobolha3.appendChild(this._tt_photobolha3);
		this.divSkin.appendChild(this._photobolha3);
		this._photobolha22=document.createElement('div');
		this._photobolha22.ggId='Photobolha22'
		this._photobolha22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha22.ggVisible=true;
		this._photobolha22.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(29 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 29px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha22.setAttribute('style',hs);
		this._photobolha22__img=document.createElement('img');
		this._photobolha22__img.setAttribute('src',basePath + 'images/photobolha22.png');
		this._photobolha22__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha22__img);
		this._photobolha22.appendChild(this._photobolha22__img);
		this._photobolha22.onclick=function () {
			me.player.openUrl("22.html","_self");
		}
		this._photobolha22.onmouseover=function () {
			me._tt_photobolha22.style[domTransition]='none';
			me._tt_photobolha22.style.visibility='inherit';
			me._tt_photobolha22.ggVisible=true;
			me._photobolha22__img.src=basePath + 'images/photobolha22__o.png';
		}
		this._photobolha22.onmouseout=function () {
			me._tt_photobolha22.style[domTransition]='none';
			me._tt_photobolha22.style.visibility='hidden';
			me._tt_photobolha22.ggVisible=false;
			me._photobolha22__img.src=basePath + 'images/photobolha22.png';
		}
		this._tt_photobolha22=document.createElement('div');
		this._tt_photobolha22.ggId='tt_Photobolha22'
		this._tt_photobolha22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha22.ggVisible=false;
		this._tt_photobolha22.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w/2) + 'px';
			}
			this.style.left=(-40 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha22.setAttribute('style',hs);
		this._tt_photobolha22.innerHTML="Plantio";
		this._photobolha22.appendChild(this._tt_photobolha22);
		this.divSkin.appendChild(this._photobolha22);
		this._photobolha1=document.createElement('div');
		this._photobolha1.ggId='Photobolha1'
		this._photobolha1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha1.ggVisible=true;
		this._photobolha1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-51 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -51px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha1.setAttribute('style',hs);
		this._photobolha1__img=document.createElement('img');
		this._photobolha1__img.setAttribute('src',basePath + 'images/photobolha1.png');
		this._photobolha1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha1__img);
		this._photobolha1.appendChild(this._photobolha1__img);
		this._photobolha1.onclick=function () {
			me.player.openUrl("1.html","_self");
		}
		this._photobolha1.onmouseover=function () {
			me._tt_photobolha1.style[domTransition]='none';
			me._tt_photobolha1.style.visibility='inherit';
			me._tt_photobolha1.ggVisible=true;
			me._photobolha1__img.src=basePath + 'images/photobolha1__o.png';
		}
		this._photobolha1.onmouseout=function () {
			me._tt_photobolha1.style[domTransition]='none';
			me._tt_photobolha1.style.visibility='hidden';
			me._tt_photobolha1.ggVisible=false;
			me._photobolha1__img.src=basePath + 'images/photobolha1.png';
		}
		this._tt_photobolha1=document.createElement('div');
		this._tt_photobolha1.ggId='tt_Photobolha1'
		this._tt_photobolha1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha1.ggVisible=false;
		this._tt_photobolha1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-53 + w/2) + 'px';
			}
			this.style.left=(-53 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -53px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha1.setAttribute('style',hs);
		this._tt_photobolha1.innerHTML="Estufa 1";
		this._photobolha1.appendChild(this._tt_photobolha1);
		this.divSkin.appendChild(this._photobolha1);
		this._photobolhalogo=document.createElement('div');
		this._photobolhalogo.ggId='Photobolhalogo'
		this._photobolhalogo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolhalogo.ggVisible=true;
		this._photobolhalogo.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-108 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  -108px;';
		hs+='width: 76px;';
		hs+='height: 76px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolhalogo.setAttribute('style',hs);
		this._photobolhalogo__img=document.createElement('img');
		this._photobolhalogo__img.setAttribute('src',basePath + 'images/photobolhalogo.png');
		this._photobolhalogo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolhalogo__img);
		this._photobolhalogo.appendChild(this._photobolhalogo__img);
		this.divSkin.appendChild(this._photobolhalogo);
		this._photobolha222=document.createElement('div');
		this._photobolha222.ggId='Photobolha222'
		this._photobolha222.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha222.ggVisible=true;
		this._photobolha222.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(69 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 69px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha222.setAttribute('style',hs);
		this._photobolha222__img=document.createElement('img');
		this._photobolha222__img.setAttribute('src',basePath + 'images/photobolha222.png');
		this._photobolha222__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha222__img);
		this._photobolha222.appendChild(this._photobolha222__img);
		this._photobolha222.onclick=function () {
			me.player.openUrl("222.html","_self");
		}
		this._photobolha222.onmouseover=function () {
			me._tt_photobolha222.style[domTransition]='none';
			me._tt_photobolha222.style.visibility='inherit';
			me._tt_photobolha222.ggVisible=true;
			me._photobolha222__img.src=basePath + 'images/photobolha222__o.png';
		}
		this._photobolha222.onmouseout=function () {
			me._tt_photobolha222.style[domTransition]='none';
			me._tt_photobolha222.style.visibility='hidden';
			me._tt_photobolha222.ggVisible=false;
			me._photobolha222__img.src=basePath + 'images/photobolha222.png';
		}
		this._tt_photobolha222=document.createElement('div');
		this._tt_photobolha222.ggId='tt_Photobolha222'
		this._tt_photobolha222.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha222.ggVisible=false;
		this._tt_photobolha222.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-50 + w/2) + 'px';
			}
			this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha222.setAttribute('style',hs);
		this._tt_photobolha222.innerHTML="Plantio 2";
		this._photobolha222.appendChild(this._tt_photobolha222);
		this.divSkin.appendChild(this._photobolha222);
		this._photobolha11=document.createElement('div');
		this._photobolha11.ggId='Photobolha11'
		this._photobolha11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha11.ggVisible=true;
		this._photobolha11.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-131 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -131px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha11.setAttribute('style',hs);
		this._photobolha11__img=document.createElement('img');
		this._photobolha11__img.setAttribute('src',basePath + 'images/photobolha11.png');
		this._photobolha11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha11__img);
		this._photobolha11.appendChild(this._photobolha11__img);
		this._photobolha11.onclick=function () {
			me.player.openUrl("11.html","_self");
		}
		this._photobolha11.onmouseover=function () {
			me._tt_photobolha11.style[domTransition]='none';
			me._tt_photobolha11.style.visibility='inherit';
			me._tt_photobolha11.ggVisible=true;
			me._photobolha11__img.src=basePath + 'images/photobolha11__o.png';
		}
		this._photobolha11.onmouseout=function () {
			me._tt_photobolha11.style[domTransition]='none';
			me._tt_photobolha11.style.visibility='hidden';
			me._tt_photobolha11.ggVisible=false;
			me._photobolha11__img.src=basePath + 'images/photobolha11.png';
		}
		this._tt_photobolha11=document.createElement('div');
		this._tt_photobolha11.ggId='tt_Photobolha11'
		this._tt_photobolha11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha11.ggVisible=false;
		this._tt_photobolha11.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-50 + w/2) + 'px';
			}
			this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha11.setAttribute('style',hs);
		this._tt_photobolha11.innerHTML="Curral";
		this._photobolha11.appendChild(this._tt_photobolha11);
		this.divSkin.appendChild(this._photobolha11);
		this._photobolha44=document.createElement('div');
		this._photobolha44.ggId='Photobolha44'
		this._photobolha44.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._photobolha44.ggVisible=true;
		this._photobolha44.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-91 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -91px;';
		hs+='top:  42px;';
		hs+='width: 34px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._photobolha44.setAttribute('style',hs);
		this._photobolha44__img=document.createElement('img');
		this._photobolha44__img.setAttribute('src',basePath + 'images/photobolha44.png');
		this._photobolha44__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._photobolha44__img);
		this._photobolha44.appendChild(this._photobolha44__img);
		this._photobolha44.onclick=function () {
			me.player.openUrl("44.html","_self");
		}
		this._photobolha44.onmouseover=function () {
			me._tt_photobolha44.style[domTransition]='none';
			me._tt_photobolha44.style.visibility='inherit';
			me._tt_photobolha44.ggVisible=true;
			me._photobolha44__img.src=basePath + 'images/photobolha44__o.png';
		}
		this._photobolha44.onmouseout=function () {
			me._tt_photobolha44.style[domTransition]='none';
			me._tt_photobolha44.style.visibility='hidden';
			me._tt_photobolha44.ggVisible=false;
			me._photobolha44__img.src=basePath + 'images/photobolha44.png';
		}
		this._tt_photobolha44=document.createElement('div');
		this._tt_photobolha44.ggId='tt_Photobolha44'
		this._tt_photobolha44.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_photobolha44.ggVisible=false;
		this._tt_photobolha44.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-50 + w/2) + 'px';
			}
			this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  35px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_photobolha44.setAttribute('style',hs);
		this._tt_photobolha44.innerHTML="Latic\xednio";
		this._photobolha44.appendChild(this._tt_photobolha44);
		this.divSkin.appendChild(this._photobolha44);
		this._segue_direita=document.createElement('div');
		this._segue_direita.ggId='segue direita'
		this._segue_direita.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._segue_direita.ggVisible=true;
		this._segue_direita.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-93 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-68 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -93px;';
		hs+='top:  -68px;';
		hs+='width: 89px;';
		hs+='height: 85px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._segue_direita.setAttribute('style',hs);
		this._segue_direita__img=document.createElement('img');
		this._segue_direita__img.setAttribute('src',basePath + 'images/segue_direita.png');
		this._segue_direita__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._segue_direita__img);
		this._segue_direita.appendChild(this._segue_direita__img);
		this._segue_direita.onclick=function () {
			me.player.openUrl("index.php","_self");
		}
		this._segue_direita.onmouseover=function () {
			me._tt_segue_direita.style[domTransition]='none';
			me._tt_segue_direita.style.visibility='inherit';
			me._tt_segue_direita.ggVisible=true;
			me._segue_direita__img.src=basePath + 'images/segue_direita__o.png';
		}
		this._segue_direita.onmouseout=function () {
			me._tt_segue_direita.style[domTransition]='none';
			me._tt_segue_direita.style.visibility='hidden';
			me._tt_segue_direita.ggVisible=false;
			me._segue_direita__img.src=basePath + 'images/segue_direita.png';
		}
		this._tt_segue_direita=document.createElement('div');
		this._tt_segue_direita.ggId='tt_segue direita'
		this._tt_segue_direita.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_segue_direita.ggVisible=false;
		this._tt_segue_direita.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-14 + (101-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -14px;';
		hs+='top:  -24px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #5e0b9a;';
		hs+='background-color: #f1c218;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_segue_direita.setAttribute('style',hs);
		this._tt_segue_direita.innerHTML="Ir para o site";
		this._segue_direita.appendChild(this._tt_segue_direita);
		this.divSkin.appendChild(this._segue_direita);
		this._imagem_58=document.createElement('div');
		this._imagem_58.ggId='Imagem 58'
		this._imagem_58.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imagem_58.ggVisible=true;
		this._imagem_58.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-164 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -164px;';
		hs+='top:  -10px;';
		hs+='width: 302px;';
		hs+='height: 44px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._imagem_58.setAttribute('style',hs);
		this._imagem_58__img=document.createElement('img');
		this._imagem_58__img.setAttribute('src',basePath + 'images/imagem_58.png');
		this._imagem_58__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._imagem_58__img);
		this._imagem_58.appendChild(this._imagem_58__img);
		this.divSkin.appendChild(this._imagem_58);
		this._quadro_37=document.createElement('div');
		this._quadro_37.ggId='Quadro 37'
		this._quadro_37.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._quadro_37.ggVisible=true;
		this._quadro_37.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-175 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-41 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -175px;';
		hs+='top:  -41px;';
		hs+='width: 321px;';
		hs+='height: 52px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._quadro_37.setAttribute('style',hs);
		this._texto_54=document.createElement('div');
		this._texto_54.ggId='Texto 54'
		this._texto_54.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._texto_54.ggVisible=true;
		this._texto_54.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-48 + h) + 'px';
			}
			this.style.left=(43 + (236-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 43px;';
		hs+='top:  -48px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._texto_54.setAttribute('style',hs);
		this._texto_54.innerHTML="Teres\xf3polis, RJ - 21 36419671 ";
		this._quadro_37.appendChild(this._texto_54);
		this._texto_53=document.createElement('div');
		this._texto_53.ggId='Texto 53'
		this._texto_53.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._texto_53.ggVisible=true;
		this._texto_53.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-31 + h) + 'px';
			}
			this.style.left=(2 + (322-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  -31px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._texto_53.setAttribute('style',hs);
		this._texto_53.innerHTML="comercial@fazendavaledaspalmeiras.com.br";
		this._quadro_37.appendChild(this._texto_53);
		this.divSkin.appendChild(this._quadro_37);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			var r=new Array();
			var stack=new Array();
			var pat=new RegExp(id,'');
			stack.push(me.__div);
			while(stack.length>0) {
				e=stack.pop();
				if (regex) {
					if (pat.test(e.ggId)) r.push(e);
				} else {
					if (e.ggId==id) r.push(e);
				}
				if (e.hasChildNodes()) {
					for(i=0;i<e.childNodes.length;i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
			return r;
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId='segue'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 365px;';
			hs+='top:  159px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};