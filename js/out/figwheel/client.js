// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30969 = [];
var len__21393__auto___30972 = arguments.length;
var i__21394__auto___30973 = (0);
while(true){
if((i__21394__auto___30973 < len__21393__auto___30972)){
args30969.push((arguments[i__21394__auto___30973]));

var G__30974 = (i__21394__auto___30973 + (1));
i__21394__auto___30973 = G__30974;
continue;
} else {
}
break;
}

var G__30971 = args30969.length;
switch (G__30971) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30969.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21400__auto__ = [];
var len__21393__auto___30977 = arguments.length;
var i__21394__auto___30978 = (0);
while(true){
if((i__21394__auto___30978 < len__21393__auto___30977)){
args__21400__auto__.push((arguments[i__21394__auto___30978]));

var G__30979 = (i__21394__auto___30978 + (1));
i__21394__auto___30978 = G__30979;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30976){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30976));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21400__auto__ = [];
var len__21393__auto___30981 = arguments.length;
var i__21394__auto___30982 = (0);
while(true){
if((i__21394__auto___30982 < len__21393__auto___30981)){
args__21400__auto__.push((arguments[i__21394__auto___30982]));

var G__30983 = (i__21394__auto___30982 + (1));
i__21394__auto___30982 = G__30983;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30980){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30980));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30984 = cljs.core._EQ_;
var expr__30985 = (function (){var or__20285__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30988){if((e30988 instanceof Error)){
var e = e30988;
return false;
} else {
throw e30988;

}
}})();
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30984.call(null,"true",expr__30985))){
return true;
} else {
if(cljs.core.truth_(pred__30984.call(null,"false",expr__30985))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30985)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30990){if((e30990 instanceof Error)){
var e = e30990;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30990;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30991){
var map__30994 = p__30991;
var map__30994__$1 = ((((!((map__30994 == null)))?((((map__30994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);
var message = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20285__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20273__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20273__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20273__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22508__auto___31156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___31156,ch){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___31156,ch){
return (function (state_31125){
var state_val_31126 = (state_31125[(1)]);
if((state_val_31126 === (7))){
var inst_31121 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31127_31157 = state_31125__$1;
(statearr_31127_31157[(2)] = inst_31121);

(statearr_31127_31157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (1))){
var state_31125__$1 = state_31125;
var statearr_31128_31158 = state_31125__$1;
(statearr_31128_31158[(2)] = null);

(statearr_31128_31158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (4))){
var inst_31078 = (state_31125[(7)]);
var inst_31078__$1 = (state_31125[(2)]);
var state_31125__$1 = (function (){var statearr_31129 = state_31125;
(statearr_31129[(7)] = inst_31078__$1);

return statearr_31129;
})();
if(cljs.core.truth_(inst_31078__$1)){
var statearr_31130_31159 = state_31125__$1;
(statearr_31130_31159[(1)] = (5));

} else {
var statearr_31131_31160 = state_31125__$1;
(statearr_31131_31160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (15))){
var inst_31085 = (state_31125[(8)]);
var inst_31100 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31085);
var inst_31101 = cljs.core.first.call(null,inst_31100);
var inst_31102 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31101);
var inst_31103 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31102)].join('');
var inst_31104 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31103);
var state_31125__$1 = state_31125;
var statearr_31132_31161 = state_31125__$1;
(statearr_31132_31161[(2)] = inst_31104);

(statearr_31132_31161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (13))){
var inst_31109 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31133_31162 = state_31125__$1;
(statearr_31133_31162[(2)] = inst_31109);

(statearr_31133_31162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (6))){
var state_31125__$1 = state_31125;
var statearr_31134_31163 = state_31125__$1;
(statearr_31134_31163[(2)] = null);

(statearr_31134_31163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (17))){
var inst_31107 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31135_31164 = state_31125__$1;
(statearr_31135_31164[(2)] = inst_31107);

(statearr_31135_31164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (3))){
var inst_31123 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31125__$1,inst_31123);
} else {
if((state_val_31126 === (12))){
var inst_31084 = (state_31125[(9)]);
var inst_31098 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31084,opts);
var state_31125__$1 = state_31125;
if(cljs.core.truth_(inst_31098)){
var statearr_31136_31165 = state_31125__$1;
(statearr_31136_31165[(1)] = (15));

} else {
var statearr_31137_31166 = state_31125__$1;
(statearr_31137_31166[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (2))){
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31125__$1,(4),ch);
} else {
if((state_val_31126 === (11))){
var inst_31085 = (state_31125[(8)]);
var inst_31090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31091 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31085);
var inst_31092 = cljs.core.async.timeout.call(null,(1000));
var inst_31093 = [inst_31091,inst_31092];
var inst_31094 = (new cljs.core.PersistentVector(null,2,(5),inst_31090,inst_31093,null));
var state_31125__$1 = state_31125;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31125__$1,(14),inst_31094);
} else {
if((state_val_31126 === (9))){
var inst_31085 = (state_31125[(8)]);
var inst_31111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31112 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31085);
var inst_31113 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31112);
var inst_31114 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31113)].join('');
var inst_31115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31114);
var state_31125__$1 = (function (){var statearr_31138 = state_31125;
(statearr_31138[(10)] = inst_31111);

return statearr_31138;
})();
var statearr_31139_31167 = state_31125__$1;
(statearr_31139_31167[(2)] = inst_31115);

(statearr_31139_31167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (5))){
var inst_31078 = (state_31125[(7)]);
var inst_31080 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31081 = (new cljs.core.PersistentArrayMap(null,2,inst_31080,null));
var inst_31082 = (new cljs.core.PersistentHashSet(null,inst_31081,null));
var inst_31083 = figwheel.client.focus_msgs.call(null,inst_31082,inst_31078);
var inst_31084 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31083);
var inst_31085 = cljs.core.first.call(null,inst_31083);
var inst_31086 = figwheel.client.autoload_QMARK_.call(null);
var state_31125__$1 = (function (){var statearr_31140 = state_31125;
(statearr_31140[(9)] = inst_31084);

(statearr_31140[(8)] = inst_31085);

return statearr_31140;
})();
if(cljs.core.truth_(inst_31086)){
var statearr_31141_31168 = state_31125__$1;
(statearr_31141_31168[(1)] = (8));

} else {
var statearr_31142_31169 = state_31125__$1;
(statearr_31142_31169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (14))){
var inst_31096 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31143_31170 = state_31125__$1;
(statearr_31143_31170[(2)] = inst_31096);

(statearr_31143_31170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (16))){
var state_31125__$1 = state_31125;
var statearr_31144_31171 = state_31125__$1;
(statearr_31144_31171[(2)] = null);

(statearr_31144_31171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (10))){
var inst_31117 = (state_31125[(2)]);
var state_31125__$1 = (function (){var statearr_31145 = state_31125;
(statearr_31145[(11)] = inst_31117);

return statearr_31145;
})();
var statearr_31146_31172 = state_31125__$1;
(statearr_31146_31172[(2)] = null);

(statearr_31146_31172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (8))){
var inst_31084 = (state_31125[(9)]);
var inst_31088 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31084,opts);
var state_31125__$1 = state_31125;
if(cljs.core.truth_(inst_31088)){
var statearr_31147_31173 = state_31125__$1;
(statearr_31147_31173[(1)] = (11));

} else {
var statearr_31148_31174 = state_31125__$1;
(statearr_31148_31174[(1)] = (12));

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
});})(c__22508__auto___31156,ch))
;
return ((function (switch__22396__auto__,c__22508__auto___31156,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22397__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22397__auto____0 = (function (){
var statearr_31152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31152[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22397__auto__);

(statearr_31152[(1)] = (1));

return statearr_31152;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22397__auto____1 = (function (state_31125){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_31125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e31153){if((e31153 instanceof Object)){
var ex__22400__auto__ = e31153;
var statearr_31154_31175 = state_31125;
(statearr_31154_31175[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31176 = state_31125;
state_31125 = G__31176;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22397__auto__ = function(state_31125){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22397__auto____1.call(this,state_31125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22397__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22397__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___31156,ch))
})();
var state__22510__auto__ = (function (){var statearr_31155 = f__22509__auto__.call(null);
(statearr_31155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___31156);

return statearr_31155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___31156,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31177_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31177_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31180 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31180){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31179){if((e31179 instanceof Error)){
var e = e31179;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31180], null));
} else {
var e = e31179;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31180))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31181){
var map__31190 = p__31181;
var map__31190__$1 = ((((!((map__31190 == null)))?((((map__31190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31190):map__31190);
var opts = map__31190__$1;
var build_id = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31190,map__31190__$1,opts,build_id){
return (function (p__31192){
var vec__31193 = p__31192;
var seq__31194 = cljs.core.seq.call(null,vec__31193);
var first__31195 = cljs.core.first.call(null,seq__31194);
var seq__31194__$1 = cljs.core.next.call(null,seq__31194);
var map__31196 = first__31195;
var map__31196__$1 = ((((!((map__31196 == null)))?((((map__31196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31196):map__31196);
var msg = map__31196__$1;
var msg_name = cljs.core.get.call(null,map__31196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31194__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31193,seq__31194,first__31195,seq__31194__$1,map__31196,map__31196__$1,msg,msg_name,_,map__31190,map__31190__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31193,seq__31194,first__31195,seq__31194__$1,map__31196,map__31196__$1,msg,msg_name,_,map__31190,map__31190__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31190,map__31190__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31204){
var vec__31205 = p__31204;
var seq__31206 = cljs.core.seq.call(null,vec__31205);
var first__31207 = cljs.core.first.call(null,seq__31206);
var seq__31206__$1 = cljs.core.next.call(null,seq__31206);
var map__31208 = first__31207;
var map__31208__$1 = ((((!((map__31208 == null)))?((((map__31208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31208):map__31208);
var msg = map__31208__$1;
var msg_name = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31206__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31210){
var map__31222 = p__31210;
var map__31222__$1 = ((((!((map__31222 == null)))?((((map__31222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31222):map__31222);
var on_compile_warning = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31222,map__31222__$1,on_compile_warning,on_compile_fail){
return (function (p__31224){
var vec__31225 = p__31224;
var seq__31226 = cljs.core.seq.call(null,vec__31225);
var first__31227 = cljs.core.first.call(null,seq__31226);
var seq__31226__$1 = cljs.core.next.call(null,seq__31226);
var map__31228 = first__31227;
var map__31228__$1 = ((((!((map__31228 == null)))?((((map__31228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31228):map__31228);
var msg = map__31228__$1;
var msg_name = cljs.core.get.call(null,map__31228__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31226__$1;
var pred__31230 = cljs.core._EQ_;
var expr__31231 = msg_name;
if(cljs.core.truth_(pred__31230.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31231))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31230.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31231))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31222,map__31222__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__,msg_hist,msg_names,msg){
return (function (state_31439){
var state_val_31440 = (state_31439[(1)]);
if((state_val_31440 === (7))){
var inst_31367 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31367)){
var statearr_31441_31487 = state_31439__$1;
(statearr_31441_31487[(1)] = (8));

} else {
var statearr_31442_31488 = state_31439__$1;
(statearr_31442_31488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (20))){
var inst_31433 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31443_31489 = state_31439__$1;
(statearr_31443_31489[(2)] = inst_31433);

(statearr_31443_31489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (27))){
var inst_31429 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31444_31490 = state_31439__$1;
(statearr_31444_31490[(2)] = inst_31429);

(statearr_31444_31490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (1))){
var inst_31360 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31360)){
var statearr_31445_31491 = state_31439__$1;
(statearr_31445_31491[(1)] = (2));

} else {
var statearr_31446_31492 = state_31439__$1;
(statearr_31446_31492[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (24))){
var inst_31431 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31447_31493 = state_31439__$1;
(statearr_31447_31493[(2)] = inst_31431);

(statearr_31447_31493[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (4))){
var inst_31437 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31439__$1,inst_31437);
} else {
if((state_val_31440 === (15))){
var inst_31435 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31448_31494 = state_31439__$1;
(statearr_31448_31494[(2)] = inst_31435);

(statearr_31448_31494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (21))){
var inst_31394 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31449_31495 = state_31439__$1;
(statearr_31449_31495[(2)] = inst_31394);

(statearr_31449_31495[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (31))){
var inst_31418 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31418)){
var statearr_31450_31496 = state_31439__$1;
(statearr_31450_31496[(1)] = (34));

} else {
var statearr_31451_31497 = state_31439__$1;
(statearr_31451_31497[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (32))){
var inst_31427 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31452_31498 = state_31439__$1;
(statearr_31452_31498[(2)] = inst_31427);

(statearr_31452_31498[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (33))){
var inst_31416 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31453_31499 = state_31439__$1;
(statearr_31453_31499[(2)] = inst_31416);

(statearr_31453_31499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (13))){
var inst_31381 = figwheel.client.heads_up.clear.call(null);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(16),inst_31381);
} else {
if((state_val_31440 === (22))){
var inst_31398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31399 = figwheel.client.heads_up.append_warning_message.call(null,inst_31398);
var state_31439__$1 = state_31439;
var statearr_31454_31500 = state_31439__$1;
(statearr_31454_31500[(2)] = inst_31399);

(statearr_31454_31500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (36))){
var inst_31425 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31455_31501 = state_31439__$1;
(statearr_31455_31501[(2)] = inst_31425);

(statearr_31455_31501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (29))){
var inst_31409 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31456_31502 = state_31439__$1;
(statearr_31456_31502[(2)] = inst_31409);

(statearr_31456_31502[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (6))){
var inst_31362 = (state_31439[(7)]);
var state_31439__$1 = state_31439;
var statearr_31457_31503 = state_31439__$1;
(statearr_31457_31503[(2)] = inst_31362);

(statearr_31457_31503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (28))){
var inst_31405 = (state_31439[(2)]);
var inst_31406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31407 = figwheel.client.heads_up.display_warning.call(null,inst_31406);
var state_31439__$1 = (function (){var statearr_31458 = state_31439;
(statearr_31458[(8)] = inst_31405);

return statearr_31458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(29),inst_31407);
} else {
if((state_val_31440 === (25))){
var inst_31403 = figwheel.client.heads_up.clear.call(null);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(28),inst_31403);
} else {
if((state_val_31440 === (34))){
var inst_31420 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(37),inst_31420);
} else {
if((state_val_31440 === (17))){
var inst_31387 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31459_31504 = state_31439__$1;
(statearr_31459_31504[(2)] = inst_31387);

(statearr_31459_31504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (3))){
var inst_31379 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31379)){
var statearr_31460_31505 = state_31439__$1;
(statearr_31460_31505[(1)] = (13));

} else {
var statearr_31461_31506 = state_31439__$1;
(statearr_31461_31506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (12))){
var inst_31375 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31462_31507 = state_31439__$1;
(statearr_31462_31507[(2)] = inst_31375);

(statearr_31462_31507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (2))){
var inst_31362 = (state_31439[(7)]);
var inst_31362__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31439__$1 = (function (){var statearr_31463 = state_31439;
(statearr_31463[(7)] = inst_31362__$1);

return statearr_31463;
})();
if(cljs.core.truth_(inst_31362__$1)){
var statearr_31464_31508 = state_31439__$1;
(statearr_31464_31508[(1)] = (5));

} else {
var statearr_31465_31509 = state_31439__$1;
(statearr_31465_31509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (23))){
var inst_31401 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31401)){
var statearr_31466_31510 = state_31439__$1;
(statearr_31466_31510[(1)] = (25));

} else {
var statearr_31467_31511 = state_31439__$1;
(statearr_31467_31511[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (35))){
var state_31439__$1 = state_31439;
var statearr_31468_31512 = state_31439__$1;
(statearr_31468_31512[(2)] = null);

(statearr_31468_31512[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (19))){
var inst_31396 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31396)){
var statearr_31469_31513 = state_31439__$1;
(statearr_31469_31513[(1)] = (22));

} else {
var statearr_31470_31514 = state_31439__$1;
(statearr_31470_31514[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (11))){
var inst_31371 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31471_31515 = state_31439__$1;
(statearr_31471_31515[(2)] = inst_31371);

(statearr_31471_31515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (9))){
var inst_31373 = figwheel.client.heads_up.clear.call(null);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(12),inst_31373);
} else {
if((state_val_31440 === (5))){
var inst_31364 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31439__$1 = state_31439;
var statearr_31472_31516 = state_31439__$1;
(statearr_31472_31516[(2)] = inst_31364);

(statearr_31472_31516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (14))){
var inst_31389 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31389)){
var statearr_31473_31517 = state_31439__$1;
(statearr_31473_31517[(1)] = (18));

} else {
var statearr_31474_31518 = state_31439__$1;
(statearr_31474_31518[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (26))){
var inst_31411 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31411)){
var statearr_31475_31519 = state_31439__$1;
(statearr_31475_31519[(1)] = (30));

} else {
var statearr_31476_31520 = state_31439__$1;
(statearr_31476_31520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (16))){
var inst_31383 = (state_31439[(2)]);
var inst_31384 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31385 = figwheel.client.heads_up.display_exception.call(null,inst_31384);
var state_31439__$1 = (function (){var statearr_31477 = state_31439;
(statearr_31477[(9)] = inst_31383);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(17),inst_31385);
} else {
if((state_val_31440 === (30))){
var inst_31413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31414 = figwheel.client.heads_up.display_warning.call(null,inst_31413);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(33),inst_31414);
} else {
if((state_val_31440 === (10))){
var inst_31377 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31478_31521 = state_31439__$1;
(statearr_31478_31521[(2)] = inst_31377);

(statearr_31478_31521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (18))){
var inst_31391 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31392 = figwheel.client.heads_up.display_exception.call(null,inst_31391);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(21),inst_31392);
} else {
if((state_val_31440 === (37))){
var inst_31422 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31479_31522 = state_31439__$1;
(statearr_31479_31522[(2)] = inst_31422);

(statearr_31479_31522[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (8))){
var inst_31369 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31439__$1,(11),inst_31369);
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
});})(c__22508__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22396__auto__,c__22508__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto____0 = (function (){
var statearr_31483 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31483[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto__);

(statearr_31483[(1)] = (1));

return statearr_31483;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto____1 = (function (state_31439){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_31439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e31484){if((e31484 instanceof Object)){
var ex__22400__auto__ = e31484;
var statearr_31485_31523 = state_31439;
(statearr_31485_31523[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31524 = state_31439;
state_31439 = G__31524;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto__ = function(state_31439){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto____1.call(this,state_31439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__,msg_hist,msg_names,msg))
})();
var state__22510__auto__ = (function (){var statearr_31486 = f__22509__auto__.call(null);
(statearr_31486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_31486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__,msg_hist,msg_names,msg))
);

return c__22508__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22508__auto___31587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___31587,ch){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___31587,ch){
return (function (state_31570){
var state_val_31571 = (state_31570[(1)]);
if((state_val_31571 === (1))){
var state_31570__$1 = state_31570;
var statearr_31572_31588 = state_31570__$1;
(statearr_31572_31588[(2)] = null);

(statearr_31572_31588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (2))){
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31570__$1,(4),ch);
} else {
if((state_val_31571 === (3))){
var inst_31568 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31570__$1,inst_31568);
} else {
if((state_val_31571 === (4))){
var inst_31558 = (state_31570[(7)]);
var inst_31558__$1 = (state_31570[(2)]);
var state_31570__$1 = (function (){var statearr_31573 = state_31570;
(statearr_31573[(7)] = inst_31558__$1);

return statearr_31573;
})();
if(cljs.core.truth_(inst_31558__$1)){
var statearr_31574_31589 = state_31570__$1;
(statearr_31574_31589[(1)] = (5));

} else {
var statearr_31575_31590 = state_31570__$1;
(statearr_31575_31590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (5))){
var inst_31558 = (state_31570[(7)]);
var inst_31560 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31558);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31570__$1,(8),inst_31560);
} else {
if((state_val_31571 === (6))){
var state_31570__$1 = state_31570;
var statearr_31576_31591 = state_31570__$1;
(statearr_31576_31591[(2)] = null);

(statearr_31576_31591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (7))){
var inst_31566 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31577_31592 = state_31570__$1;
(statearr_31577_31592[(2)] = inst_31566);

(statearr_31577_31592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (8))){
var inst_31562 = (state_31570[(2)]);
var state_31570__$1 = (function (){var statearr_31578 = state_31570;
(statearr_31578[(8)] = inst_31562);

return statearr_31578;
})();
var statearr_31579_31593 = state_31570__$1;
(statearr_31579_31593[(2)] = null);

(statearr_31579_31593[(1)] = (2));


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
});})(c__22508__auto___31587,ch))
;
return ((function (switch__22396__auto__,c__22508__auto___31587,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22397__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22397__auto____0 = (function (){
var statearr_31583 = [null,null,null,null,null,null,null,null,null];
(statearr_31583[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22397__auto__);

(statearr_31583[(1)] = (1));

return statearr_31583;
});
var figwheel$client$heads_up_plugin_$_state_machine__22397__auto____1 = (function (state_31570){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_31570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e31584){if((e31584 instanceof Object)){
var ex__22400__auto__ = e31584;
var statearr_31585_31594 = state_31570;
(statearr_31585_31594[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31595 = state_31570;
state_31570 = G__31595;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22397__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22397__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22397__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22397__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___31587,ch))
})();
var state__22510__auto__ = (function (){var statearr_31586 = f__22509__auto__.call(null);
(statearr_31586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___31587);

return statearr_31586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___31587,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__){
return (function (state_31616){
var state_val_31617 = (state_31616[(1)]);
if((state_val_31617 === (1))){
var inst_31611 = cljs.core.async.timeout.call(null,(3000));
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(2),inst_31611);
} else {
if((state_val_31617 === (2))){
var inst_31613 = (state_31616[(2)]);
var inst_31614 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31616__$1 = (function (){var statearr_31618 = state_31616;
(statearr_31618[(7)] = inst_31613);

return statearr_31618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31616__$1,inst_31614);
} else {
return null;
}
}
});})(c__22508__auto__))
;
return ((function (switch__22396__auto__,c__22508__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22397__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22397__auto____0 = (function (){
var statearr_31622 = [null,null,null,null,null,null,null,null];
(statearr_31622[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22397__auto__);

(statearr_31622[(1)] = (1));

return statearr_31622;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22397__auto____1 = (function (state_31616){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_31616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e31623){if((e31623 instanceof Object)){
var ex__22400__auto__ = e31623;
var statearr_31624_31626 = state_31616;
(statearr_31624_31626[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31627 = state_31616;
state_31616 = G__31627;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22397__auto__ = function(state_31616){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22397__auto____1.call(this,state_31616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22397__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22397__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__))
})();
var state__22510__auto__ = (function (){var statearr_31625 = f__22509__auto__.call(null);
(statearr_31625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_31625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__))
);

return c__22508__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (1))){
var inst_31644 = cljs.core.async.timeout.call(null,(2000));
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31650__$1,(2),inst_31644);
} else {
if((state_val_31651 === (2))){
var inst_31646 = (state_31650[(2)]);
var inst_31647 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31648 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31647);
var state_31650__$1 = (function (){var statearr_31652 = state_31650;
(statearr_31652[(7)] = inst_31646);

return statearr_31652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31650__$1,inst_31648);
} else {
return null;
}
}
});})(c__22508__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22396__auto__,c__22508__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto____0 = (function (){
var statearr_31656 = [null,null,null,null,null,null,null,null];
(statearr_31656[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto__);

(statearr_31656[(1)] = (1));

return statearr_31656;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto____1 = (function (state_31650){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_31650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e31657){if((e31657 instanceof Object)){
var ex__22400__auto__ = e31657;
var statearr_31658_31660 = state_31650;
(statearr_31658_31660[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31661 = state_31650;
state_31650 = G__31661;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22510__auto__ = (function (){var statearr_31659 = f__22509__auto__.call(null);
(statearr_31659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_31659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__,figwheel_version,temp__4657__auto__))
);

return c__22508__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31662){
var map__31666 = p__31662;
var map__31666__$1 = ((((!((map__31666 == null)))?((((map__31666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31666):map__31666);
var file = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31668 = "";
var G__31668__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31668),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31668);
var G__31668__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31668__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31668__$1);
if(cljs.core.truth_((function (){var and__20273__auto__ = line;
if(cljs.core.truth_(and__20273__auto__)){
return column;
} else {
return and__20273__auto__;
}
})())){
return [cljs.core.str(G__31668__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31668__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31669){
var map__31676 = p__31669;
var map__31676__$1 = ((((!((map__31676 == null)))?((((map__31676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31676):map__31676);
var ed = map__31676__$1;
var formatted_exception = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31678_31682 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31679_31683 = null;
var count__31680_31684 = (0);
var i__31681_31685 = (0);
while(true){
if((i__31681_31685 < count__31680_31684)){
var msg_31686 = cljs.core._nth.call(null,chunk__31679_31683,i__31681_31685);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31686);

var G__31687 = seq__31678_31682;
var G__31688 = chunk__31679_31683;
var G__31689 = count__31680_31684;
var G__31690 = (i__31681_31685 + (1));
seq__31678_31682 = G__31687;
chunk__31679_31683 = G__31688;
count__31680_31684 = G__31689;
i__31681_31685 = G__31690;
continue;
} else {
var temp__4657__auto___31691 = cljs.core.seq.call(null,seq__31678_31682);
if(temp__4657__auto___31691){
var seq__31678_31692__$1 = temp__4657__auto___31691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31678_31692__$1)){
var c__21099__auto___31693 = cljs.core.chunk_first.call(null,seq__31678_31692__$1);
var G__31694 = cljs.core.chunk_rest.call(null,seq__31678_31692__$1);
var G__31695 = c__21099__auto___31693;
var G__31696 = cljs.core.count.call(null,c__21099__auto___31693);
var G__31697 = (0);
seq__31678_31682 = G__31694;
chunk__31679_31683 = G__31695;
count__31680_31684 = G__31696;
i__31681_31685 = G__31697;
continue;
} else {
var msg_31698 = cljs.core.first.call(null,seq__31678_31692__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31698);

var G__31699 = cljs.core.next.call(null,seq__31678_31692__$1);
var G__31700 = null;
var G__31701 = (0);
var G__31702 = (0);
seq__31678_31682 = G__31699;
chunk__31679_31683 = G__31700;
count__31680_31684 = G__31701;
i__31681_31685 = G__31702;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31703){
var map__31706 = p__31703;
var map__31706__$1 = ((((!((map__31706 == null)))?((((map__31706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31706):map__31706);
var w = map__31706__$1;
var message = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20273__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20273__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20273__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31718 = cljs.core.seq.call(null,plugins);
var chunk__31719 = null;
var count__31720 = (0);
var i__31721 = (0);
while(true){
if((i__31721 < count__31720)){
var vec__31722 = cljs.core._nth.call(null,chunk__31719,i__31721);
var k = cljs.core.nth.call(null,vec__31722,(0),null);
var plugin = cljs.core.nth.call(null,vec__31722,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31728 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31718,chunk__31719,count__31720,i__31721,pl_31728,vec__31722,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31728.call(null,msg_hist);
});})(seq__31718,chunk__31719,count__31720,i__31721,pl_31728,vec__31722,k,plugin))
);
} else {
}

var G__31729 = seq__31718;
var G__31730 = chunk__31719;
var G__31731 = count__31720;
var G__31732 = (i__31721 + (1));
seq__31718 = G__31729;
chunk__31719 = G__31730;
count__31720 = G__31731;
i__31721 = G__31732;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31718);
if(temp__4657__auto__){
var seq__31718__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31718__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__31718__$1);
var G__31733 = cljs.core.chunk_rest.call(null,seq__31718__$1);
var G__31734 = c__21099__auto__;
var G__31735 = cljs.core.count.call(null,c__21099__auto__);
var G__31736 = (0);
seq__31718 = G__31733;
chunk__31719 = G__31734;
count__31720 = G__31735;
i__31721 = G__31736;
continue;
} else {
var vec__31725 = cljs.core.first.call(null,seq__31718__$1);
var k = cljs.core.nth.call(null,vec__31725,(0),null);
var plugin = cljs.core.nth.call(null,vec__31725,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31737 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31718,chunk__31719,count__31720,i__31721,pl_31737,vec__31725,k,plugin,seq__31718__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31737.call(null,msg_hist);
});})(seq__31718,chunk__31719,count__31720,i__31721,pl_31737,vec__31725,k,plugin,seq__31718__$1,temp__4657__auto__))
);
} else {
}

var G__31738 = cljs.core.next.call(null,seq__31718__$1);
var G__31739 = null;
var G__31740 = (0);
var G__31741 = (0);
seq__31718 = G__31738;
chunk__31719 = G__31739;
count__31720 = G__31740;
i__31721 = G__31741;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31742 = [];
var len__21393__auto___31749 = arguments.length;
var i__21394__auto___31750 = (0);
while(true){
if((i__21394__auto___31750 < len__21393__auto___31749)){
args31742.push((arguments[i__21394__auto___31750]));

var G__31751 = (i__21394__auto___31750 + (1));
i__21394__auto___31750 = G__31751;
continue;
} else {
}
break;
}

var G__31744 = args31742.length;
switch (G__31744) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31742.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31745_31753 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31746_31754 = null;
var count__31747_31755 = (0);
var i__31748_31756 = (0);
while(true){
if((i__31748_31756 < count__31747_31755)){
var msg_31757 = cljs.core._nth.call(null,chunk__31746_31754,i__31748_31756);
figwheel.client.socket.handle_incoming_message.call(null,msg_31757);

var G__31758 = seq__31745_31753;
var G__31759 = chunk__31746_31754;
var G__31760 = count__31747_31755;
var G__31761 = (i__31748_31756 + (1));
seq__31745_31753 = G__31758;
chunk__31746_31754 = G__31759;
count__31747_31755 = G__31760;
i__31748_31756 = G__31761;
continue;
} else {
var temp__4657__auto___31762 = cljs.core.seq.call(null,seq__31745_31753);
if(temp__4657__auto___31762){
var seq__31745_31763__$1 = temp__4657__auto___31762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31745_31763__$1)){
var c__21099__auto___31764 = cljs.core.chunk_first.call(null,seq__31745_31763__$1);
var G__31765 = cljs.core.chunk_rest.call(null,seq__31745_31763__$1);
var G__31766 = c__21099__auto___31764;
var G__31767 = cljs.core.count.call(null,c__21099__auto___31764);
var G__31768 = (0);
seq__31745_31753 = G__31765;
chunk__31746_31754 = G__31766;
count__31747_31755 = G__31767;
i__31748_31756 = G__31768;
continue;
} else {
var msg_31769 = cljs.core.first.call(null,seq__31745_31763__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31769);

var G__31770 = cljs.core.next.call(null,seq__31745_31763__$1);
var G__31771 = null;
var G__31772 = (0);
var G__31773 = (0);
seq__31745_31753 = G__31770;
chunk__31746_31754 = G__31771;
count__31747_31755 = G__31772;
i__31748_31756 = G__31773;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21400__auto__ = [];
var len__21393__auto___31778 = arguments.length;
var i__21394__auto___31779 = (0);
while(true){
if((i__21394__auto___31779 < len__21393__auto___31778)){
args__21400__auto__.push((arguments[i__21394__auto___31779]));

var G__31780 = (i__21394__auto___31779 + (1));
i__21394__auto___31779 = G__31780;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31775){
var map__31776 = p__31775;
var map__31776__$1 = ((((!((map__31776 == null)))?((((map__31776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31776):map__31776);
var opts = map__31776__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31774){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31774));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31782){if((e31782 instanceof Error)){
var e = e31782;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31782;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31786){
var map__31787 = p__31786;
var map__31787__$1 = ((((!((map__31787 == null)))?((((map__31787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31787):map__31787);
var msg_name = cljs.core.get.call(null,map__31787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1483227858780