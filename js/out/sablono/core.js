// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26001__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25998 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25999 = cljs.core.seq.call(null,vec__25998);
var first__26000 = cljs.core.first.call(null,seq__25999);
var seq__25999__$1 = cljs.core.next.call(null,seq__25999);
var tag = first__26000;
var body = seq__25999__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26002__i = 0, G__26002__a = new Array(arguments.length -  0);
while (G__26002__i < G__26002__a.length) {G__26002__a[G__26002__i] = arguments[G__26002__i + 0]; ++G__26002__i;}
  args = new cljs.core.IndexedSeq(G__26002__a,0);
} 
return G__26001__delegate.call(this,args);};
G__26001.cljs$lang$maxFixedArity = 0;
G__26001.cljs$lang$applyTo = (function (arglist__26003){
var args = cljs.core.seq(arglist__26003);
return G__26001__delegate(args);
});
G__26001.cljs$core$IFn$_invoke$arity$variadic = G__26001__delegate;
return G__26001;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21068__auto__ = (function sablono$core$update_arglists_$_iter__26008(s__26009){
return (new cljs.core.LazySeq(null,(function (){
var s__26009__$1 = s__26009;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26009__$1);
if(temp__4657__auto__){
var s__26009__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26009__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26009__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26011 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26010 = (0);
while(true){
if((i__26010 < size__21067__auto__)){
var args = cljs.core._nth.call(null,c__21066__auto__,i__26010);
cljs.core.chunk_append.call(null,b__26011,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26012 = (i__26010 + (1));
i__26010 = G__26012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26011),sablono$core$update_arglists_$_iter__26008.call(null,cljs.core.chunk_rest.call(null,s__26009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26011),null);
}
} else {
var args = cljs.core.first.call(null,s__26009__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26008.call(null,cljs.core.rest.call(null,s__26009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26018 = arguments.length;
var i__21394__auto___26019 = (0);
while(true){
if((i__21394__auto___26019 < len__21393__auto___26018)){
args__21400__auto__.push((arguments[i__21394__auto___26019]));

var G__26020 = (i__21394__auto___26019 + (1));
i__21394__auto___26019 = G__26020;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21068__auto__ = (function sablono$core$iter__26014(s__26015){
return (new cljs.core.LazySeq(null,(function (){
var s__26015__$1 = s__26015;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26015__$1);
if(temp__4657__auto__){
var s__26015__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26015__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26015__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26017 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26016 = (0);
while(true){
if((i__26016 < size__21067__auto__)){
var style = cljs.core._nth.call(null,c__21066__auto__,i__26016);
cljs.core.chunk_append.call(null,b__26017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26021 = (i__26016 + (1));
i__26016 = G__26021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26017),sablono$core$iter__26014.call(null,cljs.core.chunk_rest.call(null,s__26015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26017),null);
}
} else {
var style = cljs.core.first.call(null,s__26015__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26014.call(null,cljs.core.rest.call(null,s__26015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26013){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26013));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26022 = (function sablono$core$link_to26022(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26025 = arguments.length;
var i__21394__auto___26026 = (0);
while(true){
if((i__21394__auto___26026 < len__21393__auto___26025)){
args__21400__auto__.push((arguments[i__21394__auto___26026]));

var G__26027 = (i__21394__auto___26026 + (1));
i__21394__auto___26026 = G__26027;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26022.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.link_to26022.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26022.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26022.cljs$lang$applyTo = (function (seq26023){
var G__26024 = cljs.core.first.call(null,seq26023);
var seq26023__$1 = cljs.core.next.call(null,seq26023);
return sablono.core.link_to26022.cljs$core$IFn$_invoke$arity$variadic(G__26024,seq26023__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26022);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26028 = (function sablono$core$mail_to26028(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26035 = arguments.length;
var i__21394__auto___26036 = (0);
while(true){
if((i__21394__auto___26036 < len__21393__auto___26035)){
args__21400__auto__.push((arguments[i__21394__auto___26036]));

var G__26037 = (i__21394__auto___26036 + (1));
i__21394__auto___26036 = G__26037;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26028.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.mail_to26028.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26031){
var vec__26032 = p__26031;
var content = cljs.core.nth.call(null,vec__26032,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20285__auto__ = content;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26028.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26028.cljs$lang$applyTo = (function (seq26029){
var G__26030 = cljs.core.first.call(null,seq26029);
var seq26029__$1 = cljs.core.next.call(null,seq26029);
return sablono.core.mail_to26028.cljs$core$IFn$_invoke$arity$variadic(G__26030,seq26029__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26028);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26038 = (function sablono$core$unordered_list26038(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21068__auto__ = (function sablono$core$unordered_list26038_$_iter__26043(s__26044){
return (new cljs.core.LazySeq(null,(function (){
var s__26044__$1 = s__26044;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26044__$1);
if(temp__4657__auto__){
var s__26044__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26044__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26044__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26046 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26045 = (0);
while(true){
if((i__26045 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__26045);
cljs.core.chunk_append.call(null,b__26046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26047 = (i__26045 + (1));
i__26045 = G__26047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26046),sablono$core$unordered_list26038_$_iter__26043.call(null,cljs.core.chunk_rest.call(null,s__26044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26046),null);
}
} else {
var x = cljs.core.first.call(null,s__26044__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26038_$_iter__26043.call(null,cljs.core.rest.call(null,s__26044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26038);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26048 = (function sablono$core$ordered_list26048(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21068__auto__ = (function sablono$core$ordered_list26048_$_iter__26053(s__26054){
return (new cljs.core.LazySeq(null,(function (){
var s__26054__$1 = s__26054;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26054__$1);
if(temp__4657__auto__){
var s__26054__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26054__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26054__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26056 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26055 = (0);
while(true){
if((i__26055 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__26055);
cljs.core.chunk_append.call(null,b__26056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26057 = (i__26055 + (1));
i__26055 = G__26057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26056),sablono$core$ordered_list26048_$_iter__26053.call(null,cljs.core.chunk_rest.call(null,s__26054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26056),null);
}
} else {
var x = cljs.core.first.call(null,s__26054__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26048_$_iter__26053.call(null,cljs.core.rest.call(null,s__26054__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26048);
/**
 * Create an image element.
 */
sablono.core.image26058 = (function sablono$core$image26058(var_args){
var args26059 = [];
var len__21393__auto___26062 = arguments.length;
var i__21394__auto___26063 = (0);
while(true){
if((i__21394__auto___26063 < len__21393__auto___26062)){
args26059.push((arguments[i__21394__auto___26063]));

var G__26064 = (i__21394__auto___26063 + (1));
i__21394__auto___26063 = G__26064;
continue;
} else {
}
break;
}

var G__26061 = args26059.length;
switch (G__26061) {
case 1:
return sablono.core.image26058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26059.length)].join('')));

}
});

sablono.core.image26058.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26058.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26058.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26058);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26066_SHARP_,p2__26067_SHARP_){
return [cljs.core.str(p1__26066_SHARP_),cljs.core.str("["),cljs.core.str(p2__26067_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26068_SHARP_,p2__26069_SHARP_){
return [cljs.core.str(p1__26068_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26069_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26070 = (function sablono$core$color_field26070(var_args){
var args26071 = [];
var len__21393__auto___26138 = arguments.length;
var i__21394__auto___26139 = (0);
while(true){
if((i__21394__auto___26139 < len__21393__auto___26138)){
args26071.push((arguments[i__21394__auto___26139]));

var G__26140 = (i__21394__auto___26139 + (1));
i__21394__auto___26139 = G__26140;
continue;
} else {
}
break;
}

var G__26073 = args26071.length;
switch (G__26073) {
case 1:
return sablono.core.color_field26070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26071.length)].join('')));

}
});

sablono.core.color_field26070.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.color_field26070.call(null,name__25985__auto__,null);
});

sablono.core.color_field26070.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.color_field26070.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26070);

/**
 * Creates a date input field.
 */
sablono.core.date_field26074 = (function sablono$core$date_field26074(var_args){
var args26075 = [];
var len__21393__auto___26142 = arguments.length;
var i__21394__auto___26143 = (0);
while(true){
if((i__21394__auto___26143 < len__21393__auto___26142)){
args26075.push((arguments[i__21394__auto___26143]));

var G__26144 = (i__21394__auto___26143 + (1));
i__21394__auto___26143 = G__26144;
continue;
} else {
}
break;
}

var G__26077 = args26075.length;
switch (G__26077) {
case 1:
return sablono.core.date_field26074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26075.length)].join('')));

}
});

sablono.core.date_field26074.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.date_field26074.call(null,name__25985__auto__,null);
});

sablono.core.date_field26074.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.date_field26074.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26074);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26078 = (function sablono$core$datetime_field26078(var_args){
var args26079 = [];
var len__21393__auto___26146 = arguments.length;
var i__21394__auto___26147 = (0);
while(true){
if((i__21394__auto___26147 < len__21393__auto___26146)){
args26079.push((arguments[i__21394__auto___26147]));

var G__26148 = (i__21394__auto___26147 + (1));
i__21394__auto___26147 = G__26148;
continue;
} else {
}
break;
}

var G__26081 = args26079.length;
switch (G__26081) {
case 1:
return sablono.core.datetime_field26078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26079.length)].join('')));

}
});

sablono.core.datetime_field26078.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.datetime_field26078.call(null,name__25985__auto__,null);
});

sablono.core.datetime_field26078.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.datetime_field26078.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26078);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26082 = (function sablono$core$datetime_local_field26082(var_args){
var args26083 = [];
var len__21393__auto___26150 = arguments.length;
var i__21394__auto___26151 = (0);
while(true){
if((i__21394__auto___26151 < len__21393__auto___26150)){
args26083.push((arguments[i__21394__auto___26151]));

var G__26152 = (i__21394__auto___26151 + (1));
i__21394__auto___26151 = G__26152;
continue;
} else {
}
break;
}

var G__26085 = args26083.length;
switch (G__26085) {
case 1:
return sablono.core.datetime_local_field26082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26083.length)].join('')));

}
});

sablono.core.datetime_local_field26082.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.datetime_local_field26082.call(null,name__25985__auto__,null);
});

sablono.core.datetime_local_field26082.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.datetime_local_field26082.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26082);

/**
 * Creates a email input field.
 */
sablono.core.email_field26086 = (function sablono$core$email_field26086(var_args){
var args26087 = [];
var len__21393__auto___26154 = arguments.length;
var i__21394__auto___26155 = (0);
while(true){
if((i__21394__auto___26155 < len__21393__auto___26154)){
args26087.push((arguments[i__21394__auto___26155]));

var G__26156 = (i__21394__auto___26155 + (1));
i__21394__auto___26155 = G__26156;
continue;
} else {
}
break;
}

var G__26089 = args26087.length;
switch (G__26089) {
case 1:
return sablono.core.email_field26086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26087.length)].join('')));

}
});

sablono.core.email_field26086.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.email_field26086.call(null,name__25985__auto__,null);
});

sablono.core.email_field26086.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.email_field26086.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26086);

/**
 * Creates a file input field.
 */
sablono.core.file_field26090 = (function sablono$core$file_field26090(var_args){
var args26091 = [];
var len__21393__auto___26158 = arguments.length;
var i__21394__auto___26159 = (0);
while(true){
if((i__21394__auto___26159 < len__21393__auto___26158)){
args26091.push((arguments[i__21394__auto___26159]));

var G__26160 = (i__21394__auto___26159 + (1));
i__21394__auto___26159 = G__26160;
continue;
} else {
}
break;
}

var G__26093 = args26091.length;
switch (G__26093) {
case 1:
return sablono.core.file_field26090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26091.length)].join('')));

}
});

sablono.core.file_field26090.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.file_field26090.call(null,name__25985__auto__,null);
});

sablono.core.file_field26090.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.file_field26090.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26090);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26094 = (function sablono$core$hidden_field26094(var_args){
var args26095 = [];
var len__21393__auto___26162 = arguments.length;
var i__21394__auto___26163 = (0);
while(true){
if((i__21394__auto___26163 < len__21393__auto___26162)){
args26095.push((arguments[i__21394__auto___26163]));

var G__26164 = (i__21394__auto___26163 + (1));
i__21394__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var G__26097 = args26095.length;
switch (G__26097) {
case 1:
return sablono.core.hidden_field26094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26095.length)].join('')));

}
});

sablono.core.hidden_field26094.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.hidden_field26094.call(null,name__25985__auto__,null);
});

sablono.core.hidden_field26094.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.hidden_field26094.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26094);

/**
 * Creates a month input field.
 */
sablono.core.month_field26098 = (function sablono$core$month_field26098(var_args){
var args26099 = [];
var len__21393__auto___26166 = arguments.length;
var i__21394__auto___26167 = (0);
while(true){
if((i__21394__auto___26167 < len__21393__auto___26166)){
args26099.push((arguments[i__21394__auto___26167]));

var G__26168 = (i__21394__auto___26167 + (1));
i__21394__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var G__26101 = args26099.length;
switch (G__26101) {
case 1:
return sablono.core.month_field26098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26099.length)].join('')));

}
});

sablono.core.month_field26098.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.month_field26098.call(null,name__25985__auto__,null);
});

sablono.core.month_field26098.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.month_field26098.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26098);

/**
 * Creates a number input field.
 */
sablono.core.number_field26102 = (function sablono$core$number_field26102(var_args){
var args26103 = [];
var len__21393__auto___26170 = arguments.length;
var i__21394__auto___26171 = (0);
while(true){
if((i__21394__auto___26171 < len__21393__auto___26170)){
args26103.push((arguments[i__21394__auto___26171]));

var G__26172 = (i__21394__auto___26171 + (1));
i__21394__auto___26171 = G__26172;
continue;
} else {
}
break;
}

var G__26105 = args26103.length;
switch (G__26105) {
case 1:
return sablono.core.number_field26102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26103.length)].join('')));

}
});

sablono.core.number_field26102.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.number_field26102.call(null,name__25985__auto__,null);
});

sablono.core.number_field26102.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.number_field26102.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26102);

/**
 * Creates a password input field.
 */
sablono.core.password_field26106 = (function sablono$core$password_field26106(var_args){
var args26107 = [];
var len__21393__auto___26174 = arguments.length;
var i__21394__auto___26175 = (0);
while(true){
if((i__21394__auto___26175 < len__21393__auto___26174)){
args26107.push((arguments[i__21394__auto___26175]));

var G__26176 = (i__21394__auto___26175 + (1));
i__21394__auto___26175 = G__26176;
continue;
} else {
}
break;
}

var G__26109 = args26107.length;
switch (G__26109) {
case 1:
return sablono.core.password_field26106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26107.length)].join('')));

}
});

sablono.core.password_field26106.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.password_field26106.call(null,name__25985__auto__,null);
});

sablono.core.password_field26106.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.password_field26106.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26106);

/**
 * Creates a range input field.
 */
sablono.core.range_field26110 = (function sablono$core$range_field26110(var_args){
var args26111 = [];
var len__21393__auto___26178 = arguments.length;
var i__21394__auto___26179 = (0);
while(true){
if((i__21394__auto___26179 < len__21393__auto___26178)){
args26111.push((arguments[i__21394__auto___26179]));

var G__26180 = (i__21394__auto___26179 + (1));
i__21394__auto___26179 = G__26180;
continue;
} else {
}
break;
}

var G__26113 = args26111.length;
switch (G__26113) {
case 1:
return sablono.core.range_field26110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26111.length)].join('')));

}
});

sablono.core.range_field26110.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.range_field26110.call(null,name__25985__auto__,null);
});

sablono.core.range_field26110.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.range_field26110.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26110);

/**
 * Creates a search input field.
 */
sablono.core.search_field26114 = (function sablono$core$search_field26114(var_args){
var args26115 = [];
var len__21393__auto___26182 = arguments.length;
var i__21394__auto___26183 = (0);
while(true){
if((i__21394__auto___26183 < len__21393__auto___26182)){
args26115.push((arguments[i__21394__auto___26183]));

var G__26184 = (i__21394__auto___26183 + (1));
i__21394__auto___26183 = G__26184;
continue;
} else {
}
break;
}

var G__26117 = args26115.length;
switch (G__26117) {
case 1:
return sablono.core.search_field26114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26115.length)].join('')));

}
});

sablono.core.search_field26114.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.search_field26114.call(null,name__25985__auto__,null);
});

sablono.core.search_field26114.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.search_field26114.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26114);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26118 = (function sablono$core$tel_field26118(var_args){
var args26119 = [];
var len__21393__auto___26186 = arguments.length;
var i__21394__auto___26187 = (0);
while(true){
if((i__21394__auto___26187 < len__21393__auto___26186)){
args26119.push((arguments[i__21394__auto___26187]));

var G__26188 = (i__21394__auto___26187 + (1));
i__21394__auto___26187 = G__26188;
continue;
} else {
}
break;
}

var G__26121 = args26119.length;
switch (G__26121) {
case 1:
return sablono.core.tel_field26118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26119.length)].join('')));

}
});

sablono.core.tel_field26118.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.tel_field26118.call(null,name__25985__auto__,null);
});

sablono.core.tel_field26118.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.tel_field26118.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26118);

/**
 * Creates a text input field.
 */
sablono.core.text_field26122 = (function sablono$core$text_field26122(var_args){
var args26123 = [];
var len__21393__auto___26190 = arguments.length;
var i__21394__auto___26191 = (0);
while(true){
if((i__21394__auto___26191 < len__21393__auto___26190)){
args26123.push((arguments[i__21394__auto___26191]));

var G__26192 = (i__21394__auto___26191 + (1));
i__21394__auto___26191 = G__26192;
continue;
} else {
}
break;
}

var G__26125 = args26123.length;
switch (G__26125) {
case 1:
return sablono.core.text_field26122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26123.length)].join('')));

}
});

sablono.core.text_field26122.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.text_field26122.call(null,name__25985__auto__,null);
});

sablono.core.text_field26122.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.text_field26122.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26122);

/**
 * Creates a time input field.
 */
sablono.core.time_field26126 = (function sablono$core$time_field26126(var_args){
var args26127 = [];
var len__21393__auto___26194 = arguments.length;
var i__21394__auto___26195 = (0);
while(true){
if((i__21394__auto___26195 < len__21393__auto___26194)){
args26127.push((arguments[i__21394__auto___26195]));

var G__26196 = (i__21394__auto___26195 + (1));
i__21394__auto___26195 = G__26196;
continue;
} else {
}
break;
}

var G__26129 = args26127.length;
switch (G__26129) {
case 1:
return sablono.core.time_field26126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26127.length)].join('')));

}
});

sablono.core.time_field26126.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.time_field26126.call(null,name__25985__auto__,null);
});

sablono.core.time_field26126.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.time_field26126.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26126);

/**
 * Creates a url input field.
 */
sablono.core.url_field26130 = (function sablono$core$url_field26130(var_args){
var args26131 = [];
var len__21393__auto___26198 = arguments.length;
var i__21394__auto___26199 = (0);
while(true){
if((i__21394__auto___26199 < len__21393__auto___26198)){
args26131.push((arguments[i__21394__auto___26199]));

var G__26200 = (i__21394__auto___26199 + (1));
i__21394__auto___26199 = G__26200;
continue;
} else {
}
break;
}

var G__26133 = args26131.length;
switch (G__26133) {
case 1:
return sablono.core.url_field26130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26131.length)].join('')));

}
});

sablono.core.url_field26130.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.url_field26130.call(null,name__25985__auto__,null);
});

sablono.core.url_field26130.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.url_field26130.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26130);

/**
 * Creates a week input field.
 */
sablono.core.week_field26134 = (function sablono$core$week_field26134(var_args){
var args26135 = [];
var len__21393__auto___26202 = arguments.length;
var i__21394__auto___26203 = (0);
while(true){
if((i__21394__auto___26203 < len__21393__auto___26202)){
args26135.push((arguments[i__21394__auto___26203]));

var G__26204 = (i__21394__auto___26203 + (1));
i__21394__auto___26203 = G__26204;
continue;
} else {
}
break;
}

var G__26137 = args26135.length;
switch (G__26137) {
case 1:
return sablono.core.week_field26134.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26135.length)].join('')));

}
});

sablono.core.week_field26134.cljs$core$IFn$_invoke$arity$1 = (function (name__25985__auto__){
return sablono.core.week_field26134.call(null,name__25985__auto__,null);
});

sablono.core.week_field26134.cljs$core$IFn$_invoke$arity$2 = (function (name__25985__auto__,value__25986__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25985__auto__,value__25986__auto__);
});

sablono.core.week_field26134.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26134);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26206 = (function sablono$core$check_box26206(var_args){
var args26207 = [];
var len__21393__auto___26210 = arguments.length;
var i__21394__auto___26211 = (0);
while(true){
if((i__21394__auto___26211 < len__21393__auto___26210)){
args26207.push((arguments[i__21394__auto___26211]));

var G__26212 = (i__21394__auto___26211 + (1));
i__21394__auto___26211 = G__26212;
continue;
} else {
}
break;
}

var G__26209 = args26207.length;
switch (G__26209) {
case 1:
return sablono.core.check_box26206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26206.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26207.length)].join('')));

}
});

sablono.core.check_box26206.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26206.call(null,name,null);
});

sablono.core.check_box26206.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26206.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26206.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26206.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26206);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26214 = (function sablono$core$radio_button26214(var_args){
var args26215 = [];
var len__21393__auto___26218 = arguments.length;
var i__21394__auto___26219 = (0);
while(true){
if((i__21394__auto___26219 < len__21393__auto___26218)){
args26215.push((arguments[i__21394__auto___26219]));

var G__26220 = (i__21394__auto___26219 + (1));
i__21394__auto___26219 = G__26220;
continue;
} else {
}
break;
}

var G__26217 = args26215.length;
switch (G__26217) {
case 1:
return sablono.core.radio_button26214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26214.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26215.length)].join('')));

}
});

sablono.core.radio_button26214.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26214.call(null,group,null);
});

sablono.core.radio_button26214.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26214.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26214.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26214.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26214);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26222 = (function sablono$core$select_options26222(coll){
var iter__21068__auto__ = (function sablono$core$select_options26222_$_iter__26239(s__26240){
return (new cljs.core.LazySeq(null,(function (){
var s__26240__$1 = s__26240;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26240__$1);
if(temp__4657__auto__){
var s__26240__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26240__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26240__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26242 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26241 = (0);
while(true){
if((i__26241 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__26241);
cljs.core.chunk_append.call(null,b__26242,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26249 = x;
var text = cljs.core.nth.call(null,vec__26249,(0),null);
var val = cljs.core.nth.call(null,vec__26249,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26249,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26222.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26255 = (i__26241 + (1));
i__26241 = G__26255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26242),sablono$core$select_options26222_$_iter__26239.call(null,cljs.core.chunk_rest.call(null,s__26240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26242),null);
}
} else {
var x = cljs.core.first.call(null,s__26240__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26252 = x;
var text = cljs.core.nth.call(null,vec__26252,(0),null);
var val = cljs.core.nth.call(null,vec__26252,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26252,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26222.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26222_$_iter__26239.call(null,cljs.core.rest.call(null,s__26240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26222);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26256 = (function sablono$core$drop_down26256(var_args){
var args26257 = [];
var len__21393__auto___26260 = arguments.length;
var i__21394__auto___26261 = (0);
while(true){
if((i__21394__auto___26261 < len__21393__auto___26260)){
args26257.push((arguments[i__21394__auto___26261]));

var G__26262 = (i__21394__auto___26261 + (1));
i__21394__auto___26261 = G__26262;
continue;
} else {
}
break;
}

var G__26259 = args26257.length;
switch (G__26259) {
case 2:
return sablono.core.drop_down26256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26256.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26257.length)].join('')));

}
});

sablono.core.drop_down26256.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26256.call(null,name,options,null);
});

sablono.core.drop_down26256.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26256.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26256);
/**
 * Creates a text area element.
 */
sablono.core.text_area26264 = (function sablono$core$text_area26264(var_args){
var args26265 = [];
var len__21393__auto___26268 = arguments.length;
var i__21394__auto___26269 = (0);
while(true){
if((i__21394__auto___26269 < len__21393__auto___26268)){
args26265.push((arguments[i__21394__auto___26269]));

var G__26270 = (i__21394__auto___26269 + (1));
i__21394__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var G__26267 = args26265.length;
switch (G__26267) {
case 1:
return sablono.core.text_area26264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26265.length)].join('')));

}
});

sablono.core.text_area26264.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26264.call(null,name,null);
});

sablono.core.text_area26264.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26264.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26264);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26272 = (function sablono$core$label26272(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26272);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26273 = (function sablono$core$submit_button26273(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26273);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26274 = (function sablono$core$reset_button26274(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26274);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26275 = (function sablono$core$form_to26275(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26282 = arguments.length;
var i__21394__auto___26283 = (0);
while(true){
if((i__21394__auto___26283 < len__21393__auto___26282)){
args__21400__auto__.push((arguments[i__21394__auto___26283]));

var G__26284 = (i__21394__auto___26283 + (1));
i__21394__auto___26283 = G__26284;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26275.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.form_to26275.cljs$core$IFn$_invoke$arity$variadic = (function (p__26278,body){
var vec__26279 = p__26278;
var method = cljs.core.nth.call(null,vec__26279,(0),null);
var action = cljs.core.nth.call(null,vec__26279,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26275.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26275.cljs$lang$applyTo = (function (seq26276){
var G__26277 = cljs.core.first.call(null,seq26276);
var seq26276__$1 = cljs.core.next.call(null,seq26276);
return sablono.core.form_to26275.cljs$core$IFn$_invoke$arity$variadic(G__26277,seq26276__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26275);

//# sourceMappingURL=core.js.map?rel=1483227853518