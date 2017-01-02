// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28821){
var map__28846 = p__28821;
var map__28846__$1 = ((((!((map__28846 == null)))?((((map__28846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28846):map__28846);
var m = map__28846__$1;
var n = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28848_28870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28849_28871 = null;
var count__28850_28872 = (0);
var i__28851_28873 = (0);
while(true){
if((i__28851_28873 < count__28850_28872)){
var f_28874 = cljs.core._nth.call(null,chunk__28849_28871,i__28851_28873);
cljs.core.println.call(null,"  ",f_28874);

var G__28875 = seq__28848_28870;
var G__28876 = chunk__28849_28871;
var G__28877 = count__28850_28872;
var G__28878 = (i__28851_28873 + (1));
seq__28848_28870 = G__28875;
chunk__28849_28871 = G__28876;
count__28850_28872 = G__28877;
i__28851_28873 = G__28878;
continue;
} else {
var temp__4657__auto___28879 = cljs.core.seq.call(null,seq__28848_28870);
if(temp__4657__auto___28879){
var seq__28848_28880__$1 = temp__4657__auto___28879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28848_28880__$1)){
var c__21099__auto___28881 = cljs.core.chunk_first.call(null,seq__28848_28880__$1);
var G__28882 = cljs.core.chunk_rest.call(null,seq__28848_28880__$1);
var G__28883 = c__21099__auto___28881;
var G__28884 = cljs.core.count.call(null,c__21099__auto___28881);
var G__28885 = (0);
seq__28848_28870 = G__28882;
chunk__28849_28871 = G__28883;
count__28850_28872 = G__28884;
i__28851_28873 = G__28885;
continue;
} else {
var f_28886 = cljs.core.first.call(null,seq__28848_28880__$1);
cljs.core.println.call(null,"  ",f_28886);

var G__28887 = cljs.core.next.call(null,seq__28848_28880__$1);
var G__28888 = null;
var G__28889 = (0);
var G__28890 = (0);
seq__28848_28870 = G__28887;
chunk__28849_28871 = G__28888;
count__28850_28872 = G__28889;
i__28851_28873 = G__28890;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28891 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20285__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28891);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28891)))?cljs.core.second.call(null,arglists_28891):arglists_28891));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28852_28892 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28853_28893 = null;
var count__28854_28894 = (0);
var i__28855_28895 = (0);
while(true){
if((i__28855_28895 < count__28854_28894)){
var vec__28856_28896 = cljs.core._nth.call(null,chunk__28853_28893,i__28855_28895);
var name_28897 = cljs.core.nth.call(null,vec__28856_28896,(0),null);
var map__28859_28898 = cljs.core.nth.call(null,vec__28856_28896,(1),null);
var map__28859_28899__$1 = ((((!((map__28859_28898 == null)))?((((map__28859_28898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28859_28898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28859_28898):map__28859_28898);
var doc_28900 = cljs.core.get.call(null,map__28859_28899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28901 = cljs.core.get.call(null,map__28859_28899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28897);

cljs.core.println.call(null," ",arglists_28901);

if(cljs.core.truth_(doc_28900)){
cljs.core.println.call(null," ",doc_28900);
} else {
}

var G__28902 = seq__28852_28892;
var G__28903 = chunk__28853_28893;
var G__28904 = count__28854_28894;
var G__28905 = (i__28855_28895 + (1));
seq__28852_28892 = G__28902;
chunk__28853_28893 = G__28903;
count__28854_28894 = G__28904;
i__28855_28895 = G__28905;
continue;
} else {
var temp__4657__auto___28906 = cljs.core.seq.call(null,seq__28852_28892);
if(temp__4657__auto___28906){
var seq__28852_28907__$1 = temp__4657__auto___28906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28852_28907__$1)){
var c__21099__auto___28908 = cljs.core.chunk_first.call(null,seq__28852_28907__$1);
var G__28909 = cljs.core.chunk_rest.call(null,seq__28852_28907__$1);
var G__28910 = c__21099__auto___28908;
var G__28911 = cljs.core.count.call(null,c__21099__auto___28908);
var G__28912 = (0);
seq__28852_28892 = G__28909;
chunk__28853_28893 = G__28910;
count__28854_28894 = G__28911;
i__28855_28895 = G__28912;
continue;
} else {
var vec__28861_28913 = cljs.core.first.call(null,seq__28852_28907__$1);
var name_28914 = cljs.core.nth.call(null,vec__28861_28913,(0),null);
var map__28864_28915 = cljs.core.nth.call(null,vec__28861_28913,(1),null);
var map__28864_28916__$1 = ((((!((map__28864_28915 == null)))?((((map__28864_28915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28864_28915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28864_28915):map__28864_28915);
var doc_28917 = cljs.core.get.call(null,map__28864_28916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28918 = cljs.core.get.call(null,map__28864_28916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28914);

cljs.core.println.call(null," ",arglists_28918);

if(cljs.core.truth_(doc_28917)){
cljs.core.println.call(null," ",doc_28917);
} else {
}

var G__28919 = cljs.core.next.call(null,seq__28852_28907__$1);
var G__28920 = null;
var G__28921 = (0);
var G__28922 = (0);
seq__28852_28892 = G__28919;
chunk__28853_28893 = G__28920;
count__28854_28894 = G__28921;
i__28855_28895 = G__28922;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28866 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28867 = null;
var count__28868 = (0);
var i__28869 = (0);
while(true){
if((i__28869 < count__28868)){
var role = cljs.core._nth.call(null,chunk__28867,i__28869);
var temp__4657__auto___28923__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28923__$1)){
var spec_28924 = temp__4657__auto___28923__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28924));
} else {
}

var G__28925 = seq__28866;
var G__28926 = chunk__28867;
var G__28927 = count__28868;
var G__28928 = (i__28869 + (1));
seq__28866 = G__28925;
chunk__28867 = G__28926;
count__28868 = G__28927;
i__28869 = G__28928;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28866);
if(temp__4657__auto____$1){
var seq__28866__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28866__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__28866__$1);
var G__28929 = cljs.core.chunk_rest.call(null,seq__28866__$1);
var G__28930 = c__21099__auto__;
var G__28931 = cljs.core.count.call(null,c__21099__auto__);
var G__28932 = (0);
seq__28866 = G__28929;
chunk__28867 = G__28930;
count__28868 = G__28931;
i__28869 = G__28932;
continue;
} else {
var role = cljs.core.first.call(null,seq__28866__$1);
var temp__4657__auto___28933__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28933__$2)){
var spec_28934 = temp__4657__auto___28933__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28934));
} else {
}

var G__28935 = cljs.core.next.call(null,seq__28866__$1);
var G__28936 = null;
var G__28937 = (0);
var G__28938 = (0);
seq__28866 = G__28935;
chunk__28867 = G__28936;
count__28868 = G__28937;
i__28869 = G__28938;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1483227855917