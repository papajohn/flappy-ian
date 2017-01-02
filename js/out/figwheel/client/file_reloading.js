// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20285__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20285__auto__){
return or__20285__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20285__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26459_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26459_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26464 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26465 = null;
var count__26466 = (0);
var i__26467 = (0);
while(true){
if((i__26467 < count__26466)){
var n = cljs.core._nth.call(null,chunk__26465,i__26467);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26468 = seq__26464;
var G__26469 = chunk__26465;
var G__26470 = count__26466;
var G__26471 = (i__26467 + (1));
seq__26464 = G__26468;
chunk__26465 = G__26469;
count__26466 = G__26470;
i__26467 = G__26471;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26464);
if(temp__4657__auto__){
var seq__26464__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26464__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__26464__$1);
var G__26472 = cljs.core.chunk_rest.call(null,seq__26464__$1);
var G__26473 = c__21099__auto__;
var G__26474 = cljs.core.count.call(null,c__21099__auto__);
var G__26475 = (0);
seq__26464 = G__26472;
chunk__26465 = G__26473;
count__26466 = G__26474;
i__26467 = G__26475;
continue;
} else {
var n = cljs.core.first.call(null,seq__26464__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26476 = cljs.core.next.call(null,seq__26464__$1);
var G__26477 = null;
var G__26478 = (0);
var G__26479 = (0);
seq__26464 = G__26476;
chunk__26465 = G__26477;
count__26466 = G__26478;
i__26467 = G__26479;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26530_26541 = cljs.core.seq.call(null,deps);
var chunk__26531_26542 = null;
var count__26532_26543 = (0);
var i__26533_26544 = (0);
while(true){
if((i__26533_26544 < count__26532_26543)){
var dep_26545 = cljs.core._nth.call(null,chunk__26531_26542,i__26533_26544);
topo_sort_helper_STAR_.call(null,dep_26545,(depth + (1)),state);

var G__26546 = seq__26530_26541;
var G__26547 = chunk__26531_26542;
var G__26548 = count__26532_26543;
var G__26549 = (i__26533_26544 + (1));
seq__26530_26541 = G__26546;
chunk__26531_26542 = G__26547;
count__26532_26543 = G__26548;
i__26533_26544 = G__26549;
continue;
} else {
var temp__4657__auto___26550 = cljs.core.seq.call(null,seq__26530_26541);
if(temp__4657__auto___26550){
var seq__26530_26551__$1 = temp__4657__auto___26550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26530_26551__$1)){
var c__21099__auto___26552 = cljs.core.chunk_first.call(null,seq__26530_26551__$1);
var G__26553 = cljs.core.chunk_rest.call(null,seq__26530_26551__$1);
var G__26554 = c__21099__auto___26552;
var G__26555 = cljs.core.count.call(null,c__21099__auto___26552);
var G__26556 = (0);
seq__26530_26541 = G__26553;
chunk__26531_26542 = G__26554;
count__26532_26543 = G__26555;
i__26533_26544 = G__26556;
continue;
} else {
var dep_26557 = cljs.core.first.call(null,seq__26530_26551__$1);
topo_sort_helper_STAR_.call(null,dep_26557,(depth + (1)),state);

var G__26558 = cljs.core.next.call(null,seq__26530_26551__$1);
var G__26559 = null;
var G__26560 = (0);
var G__26561 = (0);
seq__26530_26541 = G__26558;
chunk__26531_26542 = G__26559;
count__26532_26543 = G__26560;
i__26533_26544 = G__26561;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26534){
var vec__26538 = p__26534;
var seq__26539 = cljs.core.seq.call(null,vec__26538);
var first__26540 = cljs.core.first.call(null,seq__26539);
var seq__26539__$1 = cljs.core.next.call(null,seq__26539);
var x = first__26540;
var xs = seq__26539__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26538,seq__26539,first__26540,seq__26539__$1,x,xs,get_deps__$1){
return (function (p1__26480_SHARP_){
return clojure.set.difference.call(null,p1__26480_SHARP_,x);
});})(vec__26538,seq__26539,first__26540,seq__26539__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26574 = cljs.core.seq.call(null,provides);
var chunk__26575 = null;
var count__26576 = (0);
var i__26577 = (0);
while(true){
if((i__26577 < count__26576)){
var prov = cljs.core._nth.call(null,chunk__26575,i__26577);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26578_26586 = cljs.core.seq.call(null,requires);
var chunk__26579_26587 = null;
var count__26580_26588 = (0);
var i__26581_26589 = (0);
while(true){
if((i__26581_26589 < count__26580_26588)){
var req_26590 = cljs.core._nth.call(null,chunk__26579_26587,i__26581_26589);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26590,prov);

var G__26591 = seq__26578_26586;
var G__26592 = chunk__26579_26587;
var G__26593 = count__26580_26588;
var G__26594 = (i__26581_26589 + (1));
seq__26578_26586 = G__26591;
chunk__26579_26587 = G__26592;
count__26580_26588 = G__26593;
i__26581_26589 = G__26594;
continue;
} else {
var temp__4657__auto___26595 = cljs.core.seq.call(null,seq__26578_26586);
if(temp__4657__auto___26595){
var seq__26578_26596__$1 = temp__4657__auto___26595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26578_26596__$1)){
var c__21099__auto___26597 = cljs.core.chunk_first.call(null,seq__26578_26596__$1);
var G__26598 = cljs.core.chunk_rest.call(null,seq__26578_26596__$1);
var G__26599 = c__21099__auto___26597;
var G__26600 = cljs.core.count.call(null,c__21099__auto___26597);
var G__26601 = (0);
seq__26578_26586 = G__26598;
chunk__26579_26587 = G__26599;
count__26580_26588 = G__26600;
i__26581_26589 = G__26601;
continue;
} else {
var req_26602 = cljs.core.first.call(null,seq__26578_26596__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26602,prov);

var G__26603 = cljs.core.next.call(null,seq__26578_26596__$1);
var G__26604 = null;
var G__26605 = (0);
var G__26606 = (0);
seq__26578_26586 = G__26603;
chunk__26579_26587 = G__26604;
count__26580_26588 = G__26605;
i__26581_26589 = G__26606;
continue;
}
} else {
}
}
break;
}

var G__26607 = seq__26574;
var G__26608 = chunk__26575;
var G__26609 = count__26576;
var G__26610 = (i__26577 + (1));
seq__26574 = G__26607;
chunk__26575 = G__26608;
count__26576 = G__26609;
i__26577 = G__26610;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26574);
if(temp__4657__auto__){
var seq__26574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26574__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__26574__$1);
var G__26611 = cljs.core.chunk_rest.call(null,seq__26574__$1);
var G__26612 = c__21099__auto__;
var G__26613 = cljs.core.count.call(null,c__21099__auto__);
var G__26614 = (0);
seq__26574 = G__26611;
chunk__26575 = G__26612;
count__26576 = G__26613;
i__26577 = G__26614;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26574__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26582_26615 = cljs.core.seq.call(null,requires);
var chunk__26583_26616 = null;
var count__26584_26617 = (0);
var i__26585_26618 = (0);
while(true){
if((i__26585_26618 < count__26584_26617)){
var req_26619 = cljs.core._nth.call(null,chunk__26583_26616,i__26585_26618);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26619,prov);

var G__26620 = seq__26582_26615;
var G__26621 = chunk__26583_26616;
var G__26622 = count__26584_26617;
var G__26623 = (i__26585_26618 + (1));
seq__26582_26615 = G__26620;
chunk__26583_26616 = G__26621;
count__26584_26617 = G__26622;
i__26585_26618 = G__26623;
continue;
} else {
var temp__4657__auto___26624__$1 = cljs.core.seq.call(null,seq__26582_26615);
if(temp__4657__auto___26624__$1){
var seq__26582_26625__$1 = temp__4657__auto___26624__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26582_26625__$1)){
var c__21099__auto___26626 = cljs.core.chunk_first.call(null,seq__26582_26625__$1);
var G__26627 = cljs.core.chunk_rest.call(null,seq__26582_26625__$1);
var G__26628 = c__21099__auto___26626;
var G__26629 = cljs.core.count.call(null,c__21099__auto___26626);
var G__26630 = (0);
seq__26582_26615 = G__26627;
chunk__26583_26616 = G__26628;
count__26584_26617 = G__26629;
i__26585_26618 = G__26630;
continue;
} else {
var req_26631 = cljs.core.first.call(null,seq__26582_26625__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26631,prov);

var G__26632 = cljs.core.next.call(null,seq__26582_26625__$1);
var G__26633 = null;
var G__26634 = (0);
var G__26635 = (0);
seq__26582_26615 = G__26632;
chunk__26583_26616 = G__26633;
count__26584_26617 = G__26634;
i__26585_26618 = G__26635;
continue;
}
} else {
}
}
break;
}

var G__26636 = cljs.core.next.call(null,seq__26574__$1);
var G__26637 = null;
var G__26638 = (0);
var G__26639 = (0);
seq__26574 = G__26636;
chunk__26575 = G__26637;
count__26576 = G__26638;
i__26577 = G__26639;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26644_26648 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26645_26649 = null;
var count__26646_26650 = (0);
var i__26647_26651 = (0);
while(true){
if((i__26647_26651 < count__26646_26650)){
var ns_26652 = cljs.core._nth.call(null,chunk__26645_26649,i__26647_26651);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26652);

var G__26653 = seq__26644_26648;
var G__26654 = chunk__26645_26649;
var G__26655 = count__26646_26650;
var G__26656 = (i__26647_26651 + (1));
seq__26644_26648 = G__26653;
chunk__26645_26649 = G__26654;
count__26646_26650 = G__26655;
i__26647_26651 = G__26656;
continue;
} else {
var temp__4657__auto___26657 = cljs.core.seq.call(null,seq__26644_26648);
if(temp__4657__auto___26657){
var seq__26644_26658__$1 = temp__4657__auto___26657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26644_26658__$1)){
var c__21099__auto___26659 = cljs.core.chunk_first.call(null,seq__26644_26658__$1);
var G__26660 = cljs.core.chunk_rest.call(null,seq__26644_26658__$1);
var G__26661 = c__21099__auto___26659;
var G__26662 = cljs.core.count.call(null,c__21099__auto___26659);
var G__26663 = (0);
seq__26644_26648 = G__26660;
chunk__26645_26649 = G__26661;
count__26646_26650 = G__26662;
i__26647_26651 = G__26663;
continue;
} else {
var ns_26664 = cljs.core.first.call(null,seq__26644_26658__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26664);

var G__26665 = cljs.core.next.call(null,seq__26644_26658__$1);
var G__26666 = null;
var G__26667 = (0);
var G__26668 = (0);
seq__26644_26648 = G__26665;
chunk__26645_26649 = G__26666;
count__26646_26650 = G__26667;
i__26647_26651 = G__26668;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20285__auto__ = goog.require__;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26669__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26670__i = 0, G__26670__a = new Array(arguments.length -  0);
while (G__26670__i < G__26670__a.length) {G__26670__a[G__26670__i] = arguments[G__26670__i + 0]; ++G__26670__i;}
  args = new cljs.core.IndexedSeq(G__26670__a,0);
} 
return G__26669__delegate.call(this,args);};
G__26669.cljs$lang$maxFixedArity = 0;
G__26669.cljs$lang$applyTo = (function (arglist__26671){
var args = cljs.core.seq(arglist__26671);
return G__26669__delegate(args);
});
G__26669.cljs$core$IFn$_invoke$arity$variadic = G__26669__delegate;
return G__26669;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26673 = cljs.core._EQ_;
var expr__26674 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26673.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26674))){
var path_parts = ((function (pred__26673,expr__26674){
return (function (p1__26672_SHARP_){
return clojure.string.split.call(null,p1__26672_SHARP_,/[\/\\]/);
});})(pred__26673,expr__26674))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26673,expr__26674){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26676){if((e26676 instanceof Error)){
var e = e26676;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26676;

}
}})());
});
;})(path_parts,sep,root,pred__26673,expr__26674))
} else {
if(cljs.core.truth_(pred__26673.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26674))){
return ((function (pred__26673,expr__26674){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26673,expr__26674){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26673,expr__26674))
);

return deferred.addErrback(((function (deferred,pred__26673,expr__26674){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26673,expr__26674))
);
});
;})(pred__26673,expr__26674))
} else {
return ((function (pred__26673,expr__26674){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26673,expr__26674))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26677,callback){
var map__26680 = p__26677;
var map__26680__$1 = ((((!((map__26680 == null)))?((((map__26680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26680):map__26680);
var file_msg = map__26680__$1;
var request_url = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26680,map__26680__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26680,map__26680__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__){
return (function (state_26704){
var state_val_26705 = (state_26704[(1)]);
if((state_val_26705 === (7))){
var inst_26700 = (state_26704[(2)]);
var state_26704__$1 = state_26704;
var statearr_26706_26726 = state_26704__$1;
(statearr_26706_26726[(2)] = inst_26700);

(statearr_26706_26726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (1))){
var state_26704__$1 = state_26704;
var statearr_26707_26727 = state_26704__$1;
(statearr_26707_26727[(2)] = null);

(statearr_26707_26727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (4))){
var inst_26684 = (state_26704[(7)]);
var inst_26684__$1 = (state_26704[(2)]);
var state_26704__$1 = (function (){var statearr_26708 = state_26704;
(statearr_26708[(7)] = inst_26684__$1);

return statearr_26708;
})();
if(cljs.core.truth_(inst_26684__$1)){
var statearr_26709_26728 = state_26704__$1;
(statearr_26709_26728[(1)] = (5));

} else {
var statearr_26710_26729 = state_26704__$1;
(statearr_26710_26729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (6))){
var state_26704__$1 = state_26704;
var statearr_26711_26730 = state_26704__$1;
(statearr_26711_26730[(2)] = null);

(statearr_26711_26730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (3))){
var inst_26702 = (state_26704[(2)]);
var state_26704__$1 = state_26704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26704__$1,inst_26702);
} else {
if((state_val_26705 === (2))){
var state_26704__$1 = state_26704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26704__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26705 === (11))){
var inst_26696 = (state_26704[(2)]);
var state_26704__$1 = (function (){var statearr_26712 = state_26704;
(statearr_26712[(8)] = inst_26696);

return statearr_26712;
})();
var statearr_26713_26731 = state_26704__$1;
(statearr_26713_26731[(2)] = null);

(statearr_26713_26731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (9))){
var inst_26690 = (state_26704[(9)]);
var inst_26688 = (state_26704[(10)]);
var inst_26692 = inst_26690.call(null,inst_26688);
var state_26704__$1 = state_26704;
var statearr_26714_26732 = state_26704__$1;
(statearr_26714_26732[(2)] = inst_26692);

(statearr_26714_26732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (5))){
var inst_26684 = (state_26704[(7)]);
var inst_26686 = figwheel.client.file_reloading.blocking_load.call(null,inst_26684);
var state_26704__$1 = state_26704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26704__$1,(8),inst_26686);
} else {
if((state_val_26705 === (10))){
var inst_26688 = (state_26704[(10)]);
var inst_26694 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26688);
var state_26704__$1 = state_26704;
var statearr_26715_26733 = state_26704__$1;
(statearr_26715_26733[(2)] = inst_26694);

(statearr_26715_26733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (8))){
var inst_26690 = (state_26704[(9)]);
var inst_26684 = (state_26704[(7)]);
var inst_26688 = (state_26704[(2)]);
var inst_26689 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26690__$1 = cljs.core.get.call(null,inst_26689,inst_26684);
var state_26704__$1 = (function (){var statearr_26716 = state_26704;
(statearr_26716[(9)] = inst_26690__$1);

(statearr_26716[(10)] = inst_26688);

return statearr_26716;
})();
if(cljs.core.truth_(inst_26690__$1)){
var statearr_26717_26734 = state_26704__$1;
(statearr_26717_26734[(1)] = (9));

} else {
var statearr_26718_26735 = state_26704__$1;
(statearr_26718_26735[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22508__auto__))
;
return ((function (switch__22396__auto__,c__22508__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22397__auto__ = null;
var figwheel$client$file_reloading$state_machine__22397__auto____0 = (function (){
var statearr_26722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26722[(0)] = figwheel$client$file_reloading$state_machine__22397__auto__);

(statearr_26722[(1)] = (1));

return statearr_26722;
});
var figwheel$client$file_reloading$state_machine__22397__auto____1 = (function (state_26704){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_26704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e26723){if((e26723 instanceof Object)){
var ex__22400__auto__ = e26723;
var statearr_26724_26736 = state_26704;
(statearr_26724_26736[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26737 = state_26704;
state_26704 = G__26737;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22397__auto__ = function(state_26704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22397__auto____1.call(this,state_26704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22397__auto____0;
figwheel$client$file_reloading$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22397__auto____1;
return figwheel$client$file_reloading$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__))
})();
var state__22510__auto__ = (function (){var statearr_26725 = f__22509__auto__.call(null);
(statearr_26725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_26725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__))
);

return c__22508__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26738,callback){
var map__26741 = p__26738;
var map__26741__$1 = ((((!((map__26741 == null)))?((((map__26741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26741):map__26741);
var file_msg = map__26741__$1;
var namespace = cljs.core.get.call(null,map__26741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26741,map__26741__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26741,map__26741__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26743){
var map__26746 = p__26743;
var map__26746__$1 = ((((!((map__26746 == null)))?((((map__26746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26746):map__26746);
var file_msg = map__26746__$1;
var namespace = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20273__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20273__auto__){
var or__20285__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
var or__20285__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto____$1)){
return or__20285__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20273__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26748,callback){
var map__26751 = p__26748;
var map__26751__$1 = ((((!((map__26751 == null)))?((((map__26751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26751):map__26751);
var file_msg = map__26751__$1;
var request_url = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22508__auto___26855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___26855,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___26855,out){
return (function (state_26837){
var state_val_26838 = (state_26837[(1)]);
if((state_val_26838 === (1))){
var inst_26811 = cljs.core.seq.call(null,files);
var inst_26812 = cljs.core.first.call(null,inst_26811);
var inst_26813 = cljs.core.next.call(null,inst_26811);
var inst_26814 = files;
var state_26837__$1 = (function (){var statearr_26839 = state_26837;
(statearr_26839[(7)] = inst_26814);

(statearr_26839[(8)] = inst_26812);

(statearr_26839[(9)] = inst_26813);

return statearr_26839;
})();
var statearr_26840_26856 = state_26837__$1;
(statearr_26840_26856[(2)] = null);

(statearr_26840_26856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (2))){
var inst_26814 = (state_26837[(7)]);
var inst_26820 = (state_26837[(10)]);
var inst_26819 = cljs.core.seq.call(null,inst_26814);
var inst_26820__$1 = cljs.core.first.call(null,inst_26819);
var inst_26821 = cljs.core.next.call(null,inst_26819);
var inst_26822 = (inst_26820__$1 == null);
var inst_26823 = cljs.core.not.call(null,inst_26822);
var state_26837__$1 = (function (){var statearr_26841 = state_26837;
(statearr_26841[(11)] = inst_26821);

(statearr_26841[(10)] = inst_26820__$1);

return statearr_26841;
})();
if(inst_26823){
var statearr_26842_26857 = state_26837__$1;
(statearr_26842_26857[(1)] = (4));

} else {
var statearr_26843_26858 = state_26837__$1;
(statearr_26843_26858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (3))){
var inst_26835 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26837__$1,inst_26835);
} else {
if((state_val_26838 === (4))){
var inst_26820 = (state_26837[(10)]);
var inst_26825 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26820);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(7),inst_26825);
} else {
if((state_val_26838 === (5))){
var inst_26831 = cljs.core.async.close_BANG_.call(null,out);
var state_26837__$1 = state_26837;
var statearr_26844_26859 = state_26837__$1;
(statearr_26844_26859[(2)] = inst_26831);

(statearr_26844_26859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (6))){
var inst_26833 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26845_26860 = state_26837__$1;
(statearr_26845_26860[(2)] = inst_26833);

(statearr_26845_26860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (7))){
var inst_26821 = (state_26837[(11)]);
var inst_26827 = (state_26837[(2)]);
var inst_26828 = cljs.core.async.put_BANG_.call(null,out,inst_26827);
var inst_26814 = inst_26821;
var state_26837__$1 = (function (){var statearr_26846 = state_26837;
(statearr_26846[(7)] = inst_26814);

(statearr_26846[(12)] = inst_26828);

return statearr_26846;
})();
var statearr_26847_26861 = state_26837__$1;
(statearr_26847_26861[(2)] = null);

(statearr_26847_26861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22508__auto___26855,out))
;
return ((function (switch__22396__auto__,c__22508__auto___26855,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto____0 = (function (){
var statearr_26851 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26851[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto__);

(statearr_26851[(1)] = (1));

return statearr_26851;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto____1 = (function (state_26837){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_26837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e26852){if((e26852 instanceof Object)){
var ex__22400__auto__ = e26852;
var statearr_26853_26862 = state_26837;
(statearr_26853_26862[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26863 = state_26837;
state_26837 = G__26863;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto__ = function(state_26837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto____1.call(this,state_26837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___26855,out))
})();
var state__22510__auto__ = (function (){var statearr_26854 = f__22509__auto__.call(null);
(statearr_26854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___26855);

return statearr_26854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___26855,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26864,opts){
var map__26868 = p__26864;
var map__26868__$1 = ((((!((map__26868 == null)))?((((map__26868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868):map__26868);
var eval_body = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20273__auto__ = eval_body;
if(cljs.core.truth_(and__20273__auto__)){
return typeof eval_body === 'string';
} else {
return and__20273__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26870){var e = e26870;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26871_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26871_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26880){
var vec__26881 = p__26880;
var k = cljs.core.nth.call(null,vec__26881,(0),null);
var v = cljs.core.nth.call(null,vec__26881,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26884){
var vec__26885 = p__26884;
var k = cljs.core.nth.call(null,vec__26885,(0),null);
var v = cljs.core.nth.call(null,vec__26885,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26891,p__26892){
var map__27140 = p__26891;
var map__27140__$1 = ((((!((map__27140 == null)))?((((map__27140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27140):map__27140);
var opts = map__27140__$1;
var before_jsload = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27141 = p__26892;
var map__27141__$1 = ((((!((map__27141 == null)))?((((map__27141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27141):map__27141);
var msg = map__27141__$1;
var files = cljs.core.get.call(null,map__27141__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27141__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27141__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27295){
var state_val_27296 = (state_27295[(1)]);
if((state_val_27296 === (7))){
var inst_27155 = (state_27295[(7)]);
var inst_27158 = (state_27295[(8)]);
var inst_27157 = (state_27295[(9)]);
var inst_27156 = (state_27295[(10)]);
var inst_27163 = cljs.core._nth.call(null,inst_27156,inst_27158);
var inst_27164 = figwheel.client.file_reloading.eval_body.call(null,inst_27163,opts);
var inst_27165 = (inst_27158 + (1));
var tmp27297 = inst_27155;
var tmp27298 = inst_27157;
var tmp27299 = inst_27156;
var inst_27155__$1 = tmp27297;
var inst_27156__$1 = tmp27299;
var inst_27157__$1 = tmp27298;
var inst_27158__$1 = inst_27165;
var state_27295__$1 = (function (){var statearr_27300 = state_27295;
(statearr_27300[(11)] = inst_27164);

(statearr_27300[(7)] = inst_27155__$1);

(statearr_27300[(8)] = inst_27158__$1);

(statearr_27300[(9)] = inst_27157__$1);

(statearr_27300[(10)] = inst_27156__$1);

return statearr_27300;
})();
var statearr_27301_27387 = state_27295__$1;
(statearr_27301_27387[(2)] = null);

(statearr_27301_27387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (20))){
var inst_27198 = (state_27295[(12)]);
var inst_27206 = figwheel.client.file_reloading.sort_files.call(null,inst_27198);
var state_27295__$1 = state_27295;
var statearr_27302_27388 = state_27295__$1;
(statearr_27302_27388[(2)] = inst_27206);

(statearr_27302_27388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (27))){
var state_27295__$1 = state_27295;
var statearr_27303_27389 = state_27295__$1;
(statearr_27303_27389[(2)] = null);

(statearr_27303_27389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (1))){
var inst_27147 = (state_27295[(13)]);
var inst_27144 = before_jsload.call(null,files);
var inst_27145 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27146 = (function (){return ((function (inst_27147,inst_27144,inst_27145,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26888_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26888_SHARP_);
});
;})(inst_27147,inst_27144,inst_27145,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27147__$1 = cljs.core.filter.call(null,inst_27146,files);
var inst_27148 = cljs.core.not_empty.call(null,inst_27147__$1);
var state_27295__$1 = (function (){var statearr_27304 = state_27295;
(statearr_27304[(14)] = inst_27144);

(statearr_27304[(15)] = inst_27145);

(statearr_27304[(13)] = inst_27147__$1);

return statearr_27304;
})();
if(cljs.core.truth_(inst_27148)){
var statearr_27305_27390 = state_27295__$1;
(statearr_27305_27390[(1)] = (2));

} else {
var statearr_27306_27391 = state_27295__$1;
(statearr_27306_27391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (24))){
var state_27295__$1 = state_27295;
var statearr_27307_27392 = state_27295__$1;
(statearr_27307_27392[(2)] = null);

(statearr_27307_27392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (39))){
var inst_27248 = (state_27295[(16)]);
var state_27295__$1 = state_27295;
var statearr_27308_27393 = state_27295__$1;
(statearr_27308_27393[(2)] = inst_27248);

(statearr_27308_27393[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (46))){
var inst_27290 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27309_27394 = state_27295__$1;
(statearr_27309_27394[(2)] = inst_27290);

(statearr_27309_27394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (4))){
var inst_27192 = (state_27295[(2)]);
var inst_27193 = cljs.core.List.EMPTY;
var inst_27194 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27193);
var inst_27195 = (function (){return ((function (inst_27192,inst_27193,inst_27194,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26889_SHARP_){
var and__20273__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26889_SHARP_);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26889_SHARP_));
} else {
return and__20273__auto__;
}
});
;})(inst_27192,inst_27193,inst_27194,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27196 = cljs.core.filter.call(null,inst_27195,files);
var inst_27197 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27198 = cljs.core.concat.call(null,inst_27196,inst_27197);
var state_27295__$1 = (function (){var statearr_27310 = state_27295;
(statearr_27310[(17)] = inst_27192);

(statearr_27310[(12)] = inst_27198);

(statearr_27310[(18)] = inst_27194);

return statearr_27310;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27311_27395 = state_27295__$1;
(statearr_27311_27395[(1)] = (16));

} else {
var statearr_27312_27396 = state_27295__$1;
(statearr_27312_27396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (15))){
var inst_27182 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27313_27397 = state_27295__$1;
(statearr_27313_27397[(2)] = inst_27182);

(statearr_27313_27397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (21))){
var inst_27208 = (state_27295[(19)]);
var inst_27208__$1 = (state_27295[(2)]);
var inst_27209 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27208__$1);
var state_27295__$1 = (function (){var statearr_27314 = state_27295;
(statearr_27314[(19)] = inst_27208__$1);

return statearr_27314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27295__$1,(22),inst_27209);
} else {
if((state_val_27296 === (31))){
var inst_27293 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27295__$1,inst_27293);
} else {
if((state_val_27296 === (32))){
var inst_27248 = (state_27295[(16)]);
var inst_27253 = inst_27248.cljs$lang$protocol_mask$partition0$;
var inst_27254 = (inst_27253 & (64));
var inst_27255 = inst_27248.cljs$core$ISeq$;
var inst_27256 = (cljs.core.PROTOCOL_SENTINEL === inst_27255);
var inst_27257 = (inst_27254) || (inst_27256);
var state_27295__$1 = state_27295;
if(cljs.core.truth_(inst_27257)){
var statearr_27315_27398 = state_27295__$1;
(statearr_27315_27398[(1)] = (35));

} else {
var statearr_27316_27399 = state_27295__$1;
(statearr_27316_27399[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (40))){
var inst_27270 = (state_27295[(20)]);
var inst_27269 = (state_27295[(2)]);
var inst_27270__$1 = cljs.core.get.call(null,inst_27269,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27271 = cljs.core.get.call(null,inst_27269,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27272 = cljs.core.not_empty.call(null,inst_27270__$1);
var state_27295__$1 = (function (){var statearr_27317 = state_27295;
(statearr_27317[(20)] = inst_27270__$1);

(statearr_27317[(21)] = inst_27271);

return statearr_27317;
})();
if(cljs.core.truth_(inst_27272)){
var statearr_27318_27400 = state_27295__$1;
(statearr_27318_27400[(1)] = (41));

} else {
var statearr_27319_27401 = state_27295__$1;
(statearr_27319_27401[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (33))){
var state_27295__$1 = state_27295;
var statearr_27320_27402 = state_27295__$1;
(statearr_27320_27402[(2)] = false);

(statearr_27320_27402[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (13))){
var inst_27168 = (state_27295[(22)]);
var inst_27172 = cljs.core.chunk_first.call(null,inst_27168);
var inst_27173 = cljs.core.chunk_rest.call(null,inst_27168);
var inst_27174 = cljs.core.count.call(null,inst_27172);
var inst_27155 = inst_27173;
var inst_27156 = inst_27172;
var inst_27157 = inst_27174;
var inst_27158 = (0);
var state_27295__$1 = (function (){var statearr_27321 = state_27295;
(statearr_27321[(7)] = inst_27155);

(statearr_27321[(8)] = inst_27158);

(statearr_27321[(9)] = inst_27157);

(statearr_27321[(10)] = inst_27156);

return statearr_27321;
})();
var statearr_27322_27403 = state_27295__$1;
(statearr_27322_27403[(2)] = null);

(statearr_27322_27403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (22))){
var inst_27212 = (state_27295[(23)]);
var inst_27216 = (state_27295[(24)]);
var inst_27211 = (state_27295[(25)]);
var inst_27208 = (state_27295[(19)]);
var inst_27211__$1 = (state_27295[(2)]);
var inst_27212__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27211__$1);
var inst_27213 = (function (){var all_files = inst_27208;
var res_SINGLEQUOTE_ = inst_27211__$1;
var res = inst_27212__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27212,inst_27216,inst_27211,inst_27208,inst_27211__$1,inst_27212__$1,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26890_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26890_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27212,inst_27216,inst_27211,inst_27208,inst_27211__$1,inst_27212__$1,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27214 = cljs.core.filter.call(null,inst_27213,inst_27211__$1);
var inst_27215 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27216__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27215);
var inst_27217 = cljs.core.not_empty.call(null,inst_27216__$1);
var state_27295__$1 = (function (){var statearr_27323 = state_27295;
(statearr_27323[(23)] = inst_27212__$1);

(statearr_27323[(26)] = inst_27214);

(statearr_27323[(24)] = inst_27216__$1);

(statearr_27323[(25)] = inst_27211__$1);

return statearr_27323;
})();
if(cljs.core.truth_(inst_27217)){
var statearr_27324_27404 = state_27295__$1;
(statearr_27324_27404[(1)] = (23));

} else {
var statearr_27325_27405 = state_27295__$1;
(statearr_27325_27405[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (36))){
var state_27295__$1 = state_27295;
var statearr_27326_27406 = state_27295__$1;
(statearr_27326_27406[(2)] = false);

(statearr_27326_27406[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (41))){
var inst_27270 = (state_27295[(20)]);
var inst_27274 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27275 = cljs.core.map.call(null,inst_27274,inst_27270);
var inst_27276 = cljs.core.pr_str.call(null,inst_27275);
var inst_27277 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27276)].join('');
var inst_27278 = figwheel.client.utils.log.call(null,inst_27277);
var state_27295__$1 = state_27295;
var statearr_27327_27407 = state_27295__$1;
(statearr_27327_27407[(2)] = inst_27278);

(statearr_27327_27407[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (43))){
var inst_27271 = (state_27295[(21)]);
var inst_27281 = (state_27295[(2)]);
var inst_27282 = cljs.core.not_empty.call(null,inst_27271);
var state_27295__$1 = (function (){var statearr_27328 = state_27295;
(statearr_27328[(27)] = inst_27281);

return statearr_27328;
})();
if(cljs.core.truth_(inst_27282)){
var statearr_27329_27408 = state_27295__$1;
(statearr_27329_27408[(1)] = (44));

} else {
var statearr_27330_27409 = state_27295__$1;
(statearr_27330_27409[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (29))){
var inst_27212 = (state_27295[(23)]);
var inst_27214 = (state_27295[(26)]);
var inst_27248 = (state_27295[(16)]);
var inst_27216 = (state_27295[(24)]);
var inst_27211 = (state_27295[(25)]);
var inst_27208 = (state_27295[(19)]);
var inst_27244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27247 = (function (){var all_files = inst_27208;
var res_SINGLEQUOTE_ = inst_27211;
var res = inst_27212;
var files_not_loaded = inst_27214;
var dependencies_that_loaded = inst_27216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27248,inst_27216,inst_27211,inst_27208,inst_27244,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27246){
var map__27331 = p__27246;
var map__27331__$1 = ((((!((map__27331 == null)))?((((map__27331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27331):map__27331);
var namespace = cljs.core.get.call(null,map__27331__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27248,inst_27216,inst_27211,inst_27208,inst_27244,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27248__$1 = cljs.core.group_by.call(null,inst_27247,inst_27214);
var inst_27250 = (inst_27248__$1 == null);
var inst_27251 = cljs.core.not.call(null,inst_27250);
var state_27295__$1 = (function (){var statearr_27333 = state_27295;
(statearr_27333[(28)] = inst_27244);

(statearr_27333[(16)] = inst_27248__$1);

return statearr_27333;
})();
if(inst_27251){
var statearr_27334_27410 = state_27295__$1;
(statearr_27334_27410[(1)] = (32));

} else {
var statearr_27335_27411 = state_27295__$1;
(statearr_27335_27411[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (44))){
var inst_27271 = (state_27295[(21)]);
var inst_27284 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27271);
var inst_27285 = cljs.core.pr_str.call(null,inst_27284);
var inst_27286 = [cljs.core.str("not required: "),cljs.core.str(inst_27285)].join('');
var inst_27287 = figwheel.client.utils.log.call(null,inst_27286);
var state_27295__$1 = state_27295;
var statearr_27336_27412 = state_27295__$1;
(statearr_27336_27412[(2)] = inst_27287);

(statearr_27336_27412[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (6))){
var inst_27189 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27337_27413 = state_27295__$1;
(statearr_27337_27413[(2)] = inst_27189);

(statearr_27337_27413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (28))){
var inst_27214 = (state_27295[(26)]);
var inst_27241 = (state_27295[(2)]);
var inst_27242 = cljs.core.not_empty.call(null,inst_27214);
var state_27295__$1 = (function (){var statearr_27338 = state_27295;
(statearr_27338[(29)] = inst_27241);

return statearr_27338;
})();
if(cljs.core.truth_(inst_27242)){
var statearr_27339_27414 = state_27295__$1;
(statearr_27339_27414[(1)] = (29));

} else {
var statearr_27340_27415 = state_27295__$1;
(statearr_27340_27415[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (25))){
var inst_27212 = (state_27295[(23)]);
var inst_27228 = (state_27295[(2)]);
var inst_27229 = cljs.core.not_empty.call(null,inst_27212);
var state_27295__$1 = (function (){var statearr_27341 = state_27295;
(statearr_27341[(30)] = inst_27228);

return statearr_27341;
})();
if(cljs.core.truth_(inst_27229)){
var statearr_27342_27416 = state_27295__$1;
(statearr_27342_27416[(1)] = (26));

} else {
var statearr_27343_27417 = state_27295__$1;
(statearr_27343_27417[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (34))){
var inst_27264 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
if(cljs.core.truth_(inst_27264)){
var statearr_27344_27418 = state_27295__$1;
(statearr_27344_27418[(1)] = (38));

} else {
var statearr_27345_27419 = state_27295__$1;
(statearr_27345_27419[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (17))){
var state_27295__$1 = state_27295;
var statearr_27346_27420 = state_27295__$1;
(statearr_27346_27420[(2)] = recompile_dependents);

(statearr_27346_27420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (3))){
var state_27295__$1 = state_27295;
var statearr_27347_27421 = state_27295__$1;
(statearr_27347_27421[(2)] = null);

(statearr_27347_27421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (12))){
var inst_27185 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27348_27422 = state_27295__$1;
(statearr_27348_27422[(2)] = inst_27185);

(statearr_27348_27422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (2))){
var inst_27147 = (state_27295[(13)]);
var inst_27154 = cljs.core.seq.call(null,inst_27147);
var inst_27155 = inst_27154;
var inst_27156 = null;
var inst_27157 = (0);
var inst_27158 = (0);
var state_27295__$1 = (function (){var statearr_27349 = state_27295;
(statearr_27349[(7)] = inst_27155);

(statearr_27349[(8)] = inst_27158);

(statearr_27349[(9)] = inst_27157);

(statearr_27349[(10)] = inst_27156);

return statearr_27349;
})();
var statearr_27350_27423 = state_27295__$1;
(statearr_27350_27423[(2)] = null);

(statearr_27350_27423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (23))){
var inst_27212 = (state_27295[(23)]);
var inst_27214 = (state_27295[(26)]);
var inst_27216 = (state_27295[(24)]);
var inst_27211 = (state_27295[(25)]);
var inst_27208 = (state_27295[(19)]);
var inst_27219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27221 = (function (){var all_files = inst_27208;
var res_SINGLEQUOTE_ = inst_27211;
var res = inst_27212;
var files_not_loaded = inst_27214;
var dependencies_that_loaded = inst_27216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27216,inst_27211,inst_27208,inst_27219,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27220){
var map__27351 = p__27220;
var map__27351__$1 = ((((!((map__27351 == null)))?((((map__27351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27351):map__27351);
var request_url = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27216,inst_27211,inst_27208,inst_27219,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27222 = cljs.core.reverse.call(null,inst_27216);
var inst_27223 = cljs.core.map.call(null,inst_27221,inst_27222);
var inst_27224 = cljs.core.pr_str.call(null,inst_27223);
var inst_27225 = figwheel.client.utils.log.call(null,inst_27224);
var state_27295__$1 = (function (){var statearr_27353 = state_27295;
(statearr_27353[(31)] = inst_27219);

return statearr_27353;
})();
var statearr_27354_27424 = state_27295__$1;
(statearr_27354_27424[(2)] = inst_27225);

(statearr_27354_27424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (35))){
var state_27295__$1 = state_27295;
var statearr_27355_27425 = state_27295__$1;
(statearr_27355_27425[(2)] = true);

(statearr_27355_27425[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (19))){
var inst_27198 = (state_27295[(12)]);
var inst_27204 = figwheel.client.file_reloading.expand_files.call(null,inst_27198);
var state_27295__$1 = state_27295;
var statearr_27356_27426 = state_27295__$1;
(statearr_27356_27426[(2)] = inst_27204);

(statearr_27356_27426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (11))){
var state_27295__$1 = state_27295;
var statearr_27357_27427 = state_27295__$1;
(statearr_27357_27427[(2)] = null);

(statearr_27357_27427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (9))){
var inst_27187 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27358_27428 = state_27295__$1;
(statearr_27358_27428[(2)] = inst_27187);

(statearr_27358_27428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (5))){
var inst_27158 = (state_27295[(8)]);
var inst_27157 = (state_27295[(9)]);
var inst_27160 = (inst_27158 < inst_27157);
var inst_27161 = inst_27160;
var state_27295__$1 = state_27295;
if(cljs.core.truth_(inst_27161)){
var statearr_27359_27429 = state_27295__$1;
(statearr_27359_27429[(1)] = (7));

} else {
var statearr_27360_27430 = state_27295__$1;
(statearr_27360_27430[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (14))){
var inst_27168 = (state_27295[(22)]);
var inst_27177 = cljs.core.first.call(null,inst_27168);
var inst_27178 = figwheel.client.file_reloading.eval_body.call(null,inst_27177,opts);
var inst_27179 = cljs.core.next.call(null,inst_27168);
var inst_27155 = inst_27179;
var inst_27156 = null;
var inst_27157 = (0);
var inst_27158 = (0);
var state_27295__$1 = (function (){var statearr_27361 = state_27295;
(statearr_27361[(32)] = inst_27178);

(statearr_27361[(7)] = inst_27155);

(statearr_27361[(8)] = inst_27158);

(statearr_27361[(9)] = inst_27157);

(statearr_27361[(10)] = inst_27156);

return statearr_27361;
})();
var statearr_27362_27431 = state_27295__$1;
(statearr_27362_27431[(2)] = null);

(statearr_27362_27431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (45))){
var state_27295__$1 = state_27295;
var statearr_27363_27432 = state_27295__$1;
(statearr_27363_27432[(2)] = null);

(statearr_27363_27432[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (26))){
var inst_27212 = (state_27295[(23)]);
var inst_27214 = (state_27295[(26)]);
var inst_27216 = (state_27295[(24)]);
var inst_27211 = (state_27295[(25)]);
var inst_27208 = (state_27295[(19)]);
var inst_27231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27233 = (function (){var all_files = inst_27208;
var res_SINGLEQUOTE_ = inst_27211;
var res = inst_27212;
var files_not_loaded = inst_27214;
var dependencies_that_loaded = inst_27216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27216,inst_27211,inst_27208,inst_27231,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27232){
var map__27364 = p__27232;
var map__27364__$1 = ((((!((map__27364 == null)))?((((map__27364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27364):map__27364);
var namespace = cljs.core.get.call(null,map__27364__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27364__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27216,inst_27211,inst_27208,inst_27231,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27234 = cljs.core.map.call(null,inst_27233,inst_27212);
var inst_27235 = cljs.core.pr_str.call(null,inst_27234);
var inst_27236 = figwheel.client.utils.log.call(null,inst_27235);
var inst_27237 = (function (){var all_files = inst_27208;
var res_SINGLEQUOTE_ = inst_27211;
var res = inst_27212;
var files_not_loaded = inst_27214;
var dependencies_that_loaded = inst_27216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27216,inst_27211,inst_27208,inst_27231,inst_27233,inst_27234,inst_27235,inst_27236,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27212,inst_27214,inst_27216,inst_27211,inst_27208,inst_27231,inst_27233,inst_27234,inst_27235,inst_27236,state_val_27296,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27238 = setTimeout(inst_27237,(10));
var state_27295__$1 = (function (){var statearr_27366 = state_27295;
(statearr_27366[(33)] = inst_27231);

(statearr_27366[(34)] = inst_27236);

return statearr_27366;
})();
var statearr_27367_27433 = state_27295__$1;
(statearr_27367_27433[(2)] = inst_27238);

(statearr_27367_27433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (16))){
var state_27295__$1 = state_27295;
var statearr_27368_27434 = state_27295__$1;
(statearr_27368_27434[(2)] = reload_dependents);

(statearr_27368_27434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (38))){
var inst_27248 = (state_27295[(16)]);
var inst_27266 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27248);
var state_27295__$1 = state_27295;
var statearr_27369_27435 = state_27295__$1;
(statearr_27369_27435[(2)] = inst_27266);

(statearr_27369_27435[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (30))){
var state_27295__$1 = state_27295;
var statearr_27370_27436 = state_27295__$1;
(statearr_27370_27436[(2)] = null);

(statearr_27370_27436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (10))){
var inst_27168 = (state_27295[(22)]);
var inst_27170 = cljs.core.chunked_seq_QMARK_.call(null,inst_27168);
var state_27295__$1 = state_27295;
if(inst_27170){
var statearr_27371_27437 = state_27295__$1;
(statearr_27371_27437[(1)] = (13));

} else {
var statearr_27372_27438 = state_27295__$1;
(statearr_27372_27438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (18))){
var inst_27202 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
if(cljs.core.truth_(inst_27202)){
var statearr_27373_27439 = state_27295__$1;
(statearr_27373_27439[(1)] = (19));

} else {
var statearr_27374_27440 = state_27295__$1;
(statearr_27374_27440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (42))){
var state_27295__$1 = state_27295;
var statearr_27375_27441 = state_27295__$1;
(statearr_27375_27441[(2)] = null);

(statearr_27375_27441[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (37))){
var inst_27261 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27376_27442 = state_27295__$1;
(statearr_27376_27442[(2)] = inst_27261);

(statearr_27376_27442[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (8))){
var inst_27155 = (state_27295[(7)]);
var inst_27168 = (state_27295[(22)]);
var inst_27168__$1 = cljs.core.seq.call(null,inst_27155);
var state_27295__$1 = (function (){var statearr_27377 = state_27295;
(statearr_27377[(22)] = inst_27168__$1);

return statearr_27377;
})();
if(inst_27168__$1){
var statearr_27378_27443 = state_27295__$1;
(statearr_27378_27443[(1)] = (10));

} else {
var statearr_27379_27444 = state_27295__$1;
(statearr_27379_27444[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22396__auto__,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto____0 = (function (){
var statearr_27383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27383[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto__);

(statearr_27383[(1)] = (1));

return statearr_27383;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto____1 = (function (state_27295){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_27295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e27384){if((e27384 instanceof Object)){
var ex__22400__auto__ = e27384;
var statearr_27385_27445 = state_27295;
(statearr_27385_27445[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27446 = state_27295;
state_27295 = G__27446;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto__ = function(state_27295){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto____1.call(this,state_27295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22510__auto__ = (function (){var statearr_27386 = f__22509__auto__.call(null);
(statearr_27386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_27386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__,map__27140,map__27140__$1,opts,before_jsload,on_jsload,reload_dependents,map__27141,map__27141__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22508__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27449,link){
var map__27452 = p__27449;
var map__27452__$1 = ((((!((map__27452 == null)))?((((map__27452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27452):map__27452);
var file = cljs.core.get.call(null,map__27452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27452,map__27452__$1,file){
return (function (p1__27447_SHARP_,p2__27448_SHARP_){
if(cljs.core._EQ_.call(null,p1__27447_SHARP_,p2__27448_SHARP_)){
return p1__27447_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27452,map__27452__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27458){
var map__27459 = p__27458;
var map__27459__$1 = ((((!((map__27459 == null)))?((((map__27459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27459):map__27459);
var match_length = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27454_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27454_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27461 = [];
var len__21393__auto___27464 = arguments.length;
var i__21394__auto___27465 = (0);
while(true){
if((i__21394__auto___27465 < len__21393__auto___27464)){
args27461.push((arguments[i__21394__auto___27465]));

var G__27466 = (i__21394__auto___27465 + (1));
i__21394__auto___27465 = G__27466;
continue;
} else {
}
break;
}

var G__27463 = args27461.length;
switch (G__27463) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27461.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27468_SHARP_,p2__27469_SHARP_){
return cljs.core.assoc.call(null,p1__27468_SHARP_,cljs.core.get.call(null,p2__27469_SHARP_,key),p2__27469_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27470){
var map__27473 = p__27470;
var map__27473__$1 = ((((!((map__27473 == null)))?((((map__27473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);
var f_data = map__27473__$1;
var file = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27475,files_msg){
var map__27482 = p__27475;
var map__27482__$1 = ((((!((map__27482 == null)))?((((map__27482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27482):map__27482);
var opts = map__27482__$1;
var on_cssload = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27484_27488 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27485_27489 = null;
var count__27486_27490 = (0);
var i__27487_27491 = (0);
while(true){
if((i__27487_27491 < count__27486_27490)){
var f_27492 = cljs.core._nth.call(null,chunk__27485_27489,i__27487_27491);
figwheel.client.file_reloading.reload_css_file.call(null,f_27492);

var G__27493 = seq__27484_27488;
var G__27494 = chunk__27485_27489;
var G__27495 = count__27486_27490;
var G__27496 = (i__27487_27491 + (1));
seq__27484_27488 = G__27493;
chunk__27485_27489 = G__27494;
count__27486_27490 = G__27495;
i__27487_27491 = G__27496;
continue;
} else {
var temp__4657__auto___27497 = cljs.core.seq.call(null,seq__27484_27488);
if(temp__4657__auto___27497){
var seq__27484_27498__$1 = temp__4657__auto___27497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27484_27498__$1)){
var c__21099__auto___27499 = cljs.core.chunk_first.call(null,seq__27484_27498__$1);
var G__27500 = cljs.core.chunk_rest.call(null,seq__27484_27498__$1);
var G__27501 = c__21099__auto___27499;
var G__27502 = cljs.core.count.call(null,c__21099__auto___27499);
var G__27503 = (0);
seq__27484_27488 = G__27500;
chunk__27485_27489 = G__27501;
count__27486_27490 = G__27502;
i__27487_27491 = G__27503;
continue;
} else {
var f_27504 = cljs.core.first.call(null,seq__27484_27498__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27504);

var G__27505 = cljs.core.next.call(null,seq__27484_27498__$1);
var G__27506 = null;
var G__27507 = (0);
var G__27508 = (0);
seq__27484_27488 = G__27505;
chunk__27485_27489 = G__27506;
count__27486_27490 = G__27507;
i__27487_27491 = G__27508;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27482,map__27482__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27482,map__27482__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1483227854250