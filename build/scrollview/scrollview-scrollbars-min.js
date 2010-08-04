YUI.add("scrollview-scrollbars",function(F){var A=F.ClassNameManager.getClassName,D=F.Transition.useNative,C,B="scrollbar",E="scrollview";function G(){G.superclass.constructor.apply(this,arguments);}G.CLASS_NAMES={showing:A(E,B,"showing"),scrollbar:A(E,B),scrollbarV:A(E,B,"vert"),scrollbarH:A(E,B,"horiz"),scrollbarVB:A(E,B,"vert","basic"),scrollbarHB:A(E,B,"horiz","basic"),child:A(E,"child"),first:A(E,"first"),middle:A(E,"middle"),last:A(E,"last")};C=G.CLASS_NAMES;G.NAME="pluginScrollViewScrollbars";G.NS="scrollbars";G.SCROLLBAR_TEMPLATE=["<div>",'<span class="'+C.child+" "+C.first+'"></span>','<span class="'+C.child+" "+C.middle+'"></span>','<span class="'+C.child+" "+C.last+'"></span>',"</div>"].join("");G.ATTRS={verticalNode:{setter:"_setVerticalNode",value:F.Node.create(G.SCROLLBAR_TEMPLATE)},horizontalNode:{setter:"_setHorizontalNode",value:F.Node.create(G.SCROLLBAR_TEMPLATE)}};F.namespace("Plugin").ScrollViewScrollbars=F.extend(G,F.Plugin.Base,{initializer:function(){this._host=this.get("host");this.afterHostMethod("_uiScrollY",this._update);this.afterHostMethod("_uiScrollX",this._update);this.afterHostMethod("_uiDimensionsChange",this._hostDimensionsChange);this.doAfter("scrollEnd",this.flash);},_hostDimensionsChange:function(){var L=this._host,J=L._bb,I=this.get("verticalNode"),M=this.get("horizontalNode"),K=I.inDoc(),H=M.inDoc();if(L._scrollsVertical&&!K){J.append(I);if(this._basic){I.addClass(C.scrollbarVB);}}else{if(!L._scrollsVertical&&K){I.remove();}}if(L._scrollsHorizontal&&!H){J.append(M);if(this._basic){M.addClass(C.scrollbarHB);}}else{if(!L._scrollsHorizontal&&H){M.remove();}}this._update();F.later(500,this,"flash",true);},_updateV:function(U,J,M){var R=this._host,N=this._basic,L=R._cb,H=0,I=1,K,P,O,T,Q=R.get("height"),S=R._scrollHeight||L.get("scrollHeight");H=Math.floor(Q*(Q/S));I=Math.floor((J/(S-Q))*(Q-H))*-1;if(H>Q){H=1;}if(D){K="translate(0, "+I+"px)";}else{P=I;}if(I>(Q-H)){H=H-(I-(Q-H));}if(I<0){if(D){K="translate(0,0)";}else{P=0;}H=H+I;}T=(H-8);if(this.verticalScrollSize!==T){this.verticalScrollSize=T;O={duration:M/1000};if(D){O.transform="scaleY("+(T)+")";}else{O.height=T;}U.get("children").item(1).transition(O);}O={duration:M/1000};if(D){O.transform=K;}else{O.top=P;}U.transition(O);O={duration:M/1000};if(D){O.transform="translate(0,"+(H-10)+"px)";}else{if(!N){O.top=H-4;}}U.get("children").item(2).transition(O);},_updateH:function(U,K,N){var S=this._host,O=this._basic,M=S._cb,H=0,J=1,L,R,Q,T,I=S.get("width"),P=S._scrollWidth||M.get("scrollWidth");H=Math.floor(I*(I/P));J=Math.floor((K/(P-I))*(I-H))*-1;if(H>I){H=1;}if(D){L="translate("+J+"px, 0)";}else{R=J;}if(J>(I-H)){H=H-(J-(I-H));}if(J<0){if(D){L="translate(0,0)";}else{R=0;}H=H+J;}T=(H-16);if(this.horizontalScrollSize!==T){this.horizontalScrollSize=T;Q={duration:N/1000};if(D){Q.transform="scaleX("+T+")";}else{Q.width=(T);}U.get("children").item(1).transition(Q);}Q={duration:N/1000};if(D){Q.transform=L;}else{Q.left=R;}U.transition(Q);Q={duration:N/1000};if(D){Q.transform="translate("+(H-12)+"px,0)";}else{Q.left=H-12;}if(!O){U.get("children").item(2).transition(Q);}},_update:function(I,K,L){var J=this.get("verticalNode"),H=this.get("horizontalNode");K=K||0;if(!this._showingScrollBars){this.show();}if(J){this._updateV(J,I*-1,K);}if(H){this._updateH(H,I*-1,K);}},show:function(H){this._show(true,H);},hide:function(H){this._show(false,H);},_show:function(H,J){var I=this.get("verticalNode"),K=this.get("horizontalNode"),L={duration:(J)?0.6:0,opacity:(H)?1:0};this._showingScrollBars=H;if(this._flashTimer){this._flashTimer.cancel();}if(I){I.transition(L);}if(K){K.transition(L);}},flash:function(){var H=false,I=this._host;if(I._scrollsVertical&&(I._scrollHeight>I.get("height"))){H=true;}if(I._scrollsHorizontal&&(I._scrollWidth>this.get("host").get("width"))){H=true;}if(H){this.show(true);this._flashTimer=F.later(800,this,"hide",true);}},_setVerticalNode:function(H){H=F.one(H);if(H){H.addClass(C.scrollbar);H.addClass(C.scrollbarV);}return H;},_setHorizontalNode:function(H){H=F.one(H);if(H){H.addClass(C.scrollbar);H.addClass(C.scrollbarH);}return H;},_basic:F.UA.ie&&F.UA.ie<=8});},"@VERSION@",{skinnable:true,requires:["plugin"]});