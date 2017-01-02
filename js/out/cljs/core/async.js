// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22553 = [];
var len__21393__auto___22559 = arguments.length;
var i__21394__auto___22560 = (0);
while(true){
if((i__21394__auto___22560 < len__21393__auto___22559)){
args22553.push((arguments[i__21394__auto___22560]));

var G__22561 = (i__21394__auto___22560 + (1));
i__21394__auto___22560 = G__22561;
continue;
} else {
}
break;
}

var G__22555 = args22553.length;
switch (G__22555) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22553.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22556 = (function (f,blockable,meta22557){
this.f = f;
this.blockable = blockable;
this.meta22557 = meta22557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22558,meta22557__$1){
var self__ = this;
var _22558__$1 = this;
return (new cljs.core.async.t_cljs$core$async22556(self__.f,self__.blockable,meta22557__$1));
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22558){
var self__ = this;
var _22558__$1 = this;
return self__.meta22557;
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22557","meta22557",-510878828,null)], null);
});

cljs.core.async.t_cljs$core$async22556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22556";

cljs.core.async.t_cljs$core$async22556.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async22556");
});

cljs.core.async.__GT_t_cljs$core$async22556 = (function cljs$core$async$__GT_t_cljs$core$async22556(f__$1,blockable__$1,meta22557){
return (new cljs.core.async.t_cljs$core$async22556(f__$1,blockable__$1,meta22557));
});

}

return (new cljs.core.async.t_cljs$core$async22556(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22565 = [];
var len__21393__auto___22568 = arguments.length;
var i__21394__auto___22569 = (0);
while(true){
if((i__21394__auto___22569 < len__21393__auto___22568)){
args22565.push((arguments[i__21394__auto___22569]));

var G__22570 = (i__21394__auto___22569 + (1));
i__21394__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var G__22567 = args22565.length;
switch (G__22567) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22565.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22572 = [];
var len__21393__auto___22575 = arguments.length;
var i__21394__auto___22576 = (0);
while(true){
if((i__21394__auto___22576 < len__21393__auto___22575)){
args22572.push((arguments[i__21394__auto___22576]));

var G__22577 = (i__21394__auto___22576 + (1));
i__21394__auto___22576 = G__22577;
continue;
} else {
}
break;
}

var G__22574 = args22572.length;
switch (G__22574) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22572.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22579 = [];
var len__21393__auto___22582 = arguments.length;
var i__21394__auto___22583 = (0);
while(true){
if((i__21394__auto___22583 < len__21393__auto___22582)){
args22579.push((arguments[i__21394__auto___22583]));

var G__22584 = (i__21394__auto___22583 + (1));
i__21394__auto___22583 = G__22584;
continue;
} else {
}
break;
}

var G__22581 = args22579.length;
switch (G__22581) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22579.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22586 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22586);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22586,ret){
return (function (){
return fn1.call(null,val_22586);
});})(val_22586,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22587 = [];
var len__21393__auto___22590 = arguments.length;
var i__21394__auto___22591 = (0);
while(true){
if((i__21394__auto___22591 < len__21393__auto___22590)){
args22587.push((arguments[i__21394__auto___22591]));

var G__22592 = (i__21394__auto___22591 + (1));
i__21394__auto___22591 = G__22592;
continue;
} else {
}
break;
}

var G__22589 = args22587.length;
switch (G__22589) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22587.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21203__auto___22594 = n;
var x_22595 = (0);
while(true){
if((x_22595 < n__21203__auto___22594)){
(a[x_22595] = (0));

var G__22596 = (x_22595 + (1));
x_22595 = G__22596;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22597 = (i + (1));
i = G__22597;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22601 = (function (flag,meta22602){
this.flag = flag;
this.meta22602 = meta22602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22603,meta22602__$1){
var self__ = this;
var _22603__$1 = this;
return (new cljs.core.async.t_cljs$core$async22601(self__.flag,meta22602__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22603){
var self__ = this;
var _22603__$1 = this;
return self__.meta22602;
});})(flag))
;

cljs.core.async.t_cljs$core$async22601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22601.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22602","meta22602",585155523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22601";

cljs.core.async.t_cljs$core$async22601.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async22601");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22601 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22601(flag__$1,meta22602){
return (new cljs.core.async.t_cljs$core$async22601(flag__$1,meta22602));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22601(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22607 = (function (flag,cb,meta22608){
this.flag = flag;
this.cb = cb;
this.meta22608 = meta22608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22609,meta22608__$1){
var self__ = this;
var _22609__$1 = this;
return (new cljs.core.async.t_cljs$core$async22607(self__.flag,self__.cb,meta22608__$1));
});

cljs.core.async.t_cljs$core$async22607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22609){
var self__ = this;
var _22609__$1 = this;
return self__.meta22608;
});

cljs.core.async.t_cljs$core$async22607.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22608","meta22608",2065509476,null)], null);
});

cljs.core.async.t_cljs$core$async22607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22607";

cljs.core.async.t_cljs$core$async22607.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async22607");
});

cljs.core.async.__GT_t_cljs$core$async22607 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22607(flag__$1,cb__$1,meta22608){
return (new cljs.core.async.t_cljs$core$async22607(flag__$1,cb__$1,meta22608));
});

}

return (new cljs.core.async.t_cljs$core$async22607(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22610_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22610_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22611_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22611_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20285__auto__ = wport;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22612 = (i + (1));
i = G__22612;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20285__auto__ = ret;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20273__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20273__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___22618 = arguments.length;
var i__21394__auto___22619 = (0);
while(true){
if((i__21394__auto___22619 < len__21393__auto___22618)){
args__21400__auto__.push((arguments[i__21394__auto___22619]));

var G__22620 = (i__21394__auto___22619 + (1));
i__21394__auto___22619 = G__22620;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22615){
var map__22616 = p__22615;
var map__22616__$1 = ((((!((map__22616 == null)))?((((map__22616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22616):map__22616);
var opts = map__22616__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22613){
var G__22614 = cljs.core.first.call(null,seq22613);
var seq22613__$1 = cljs.core.next.call(null,seq22613);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22614,seq22613__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22621 = [];
var len__21393__auto___22671 = arguments.length;
var i__21394__auto___22672 = (0);
while(true){
if((i__21394__auto___22672 < len__21393__auto___22671)){
args22621.push((arguments[i__21394__auto___22672]));

var G__22673 = (i__21394__auto___22672 + (1));
i__21394__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var G__22623 = args22621.length;
switch (G__22623) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22621.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22508__auto___22675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___22675){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___22675){
return (function (state_22647){
var state_val_22648 = (state_22647[(1)]);
if((state_val_22648 === (7))){
var inst_22643 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
var statearr_22649_22676 = state_22647__$1;
(statearr_22649_22676[(2)] = inst_22643);

(statearr_22649_22676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (1))){
var state_22647__$1 = state_22647;
var statearr_22650_22677 = state_22647__$1;
(statearr_22650_22677[(2)] = null);

(statearr_22650_22677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (4))){
var inst_22626 = (state_22647[(7)]);
var inst_22626__$1 = (state_22647[(2)]);
var inst_22627 = (inst_22626__$1 == null);
var state_22647__$1 = (function (){var statearr_22651 = state_22647;
(statearr_22651[(7)] = inst_22626__$1);

return statearr_22651;
})();
if(cljs.core.truth_(inst_22627)){
var statearr_22652_22678 = state_22647__$1;
(statearr_22652_22678[(1)] = (5));

} else {
var statearr_22653_22679 = state_22647__$1;
(statearr_22653_22679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (13))){
var state_22647__$1 = state_22647;
var statearr_22654_22680 = state_22647__$1;
(statearr_22654_22680[(2)] = null);

(statearr_22654_22680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (6))){
var inst_22626 = (state_22647[(7)]);
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22647__$1,(11),to,inst_22626);
} else {
if((state_val_22648 === (3))){
var inst_22645 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22647__$1,inst_22645);
} else {
if((state_val_22648 === (12))){
var state_22647__$1 = state_22647;
var statearr_22655_22681 = state_22647__$1;
(statearr_22655_22681[(2)] = null);

(statearr_22655_22681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (2))){
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22647__$1,(4),from);
} else {
if((state_val_22648 === (11))){
var inst_22636 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
if(cljs.core.truth_(inst_22636)){
var statearr_22656_22682 = state_22647__$1;
(statearr_22656_22682[(1)] = (12));

} else {
var statearr_22657_22683 = state_22647__$1;
(statearr_22657_22683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (9))){
var state_22647__$1 = state_22647;
var statearr_22658_22684 = state_22647__$1;
(statearr_22658_22684[(2)] = null);

(statearr_22658_22684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (5))){
var state_22647__$1 = state_22647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22659_22685 = state_22647__$1;
(statearr_22659_22685[(1)] = (8));

} else {
var statearr_22660_22686 = state_22647__$1;
(statearr_22660_22686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (14))){
var inst_22641 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
var statearr_22661_22687 = state_22647__$1;
(statearr_22661_22687[(2)] = inst_22641);

(statearr_22661_22687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (10))){
var inst_22633 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
var statearr_22662_22688 = state_22647__$1;
(statearr_22662_22688[(2)] = inst_22633);

(statearr_22662_22688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (8))){
var inst_22630 = cljs.core.async.close_BANG_.call(null,to);
var state_22647__$1 = state_22647;
var statearr_22663_22689 = state_22647__$1;
(statearr_22663_22689[(2)] = inst_22630);

(statearr_22663_22689[(1)] = (10));


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
});})(c__22508__auto___22675))
;
return ((function (switch__22396__auto__,c__22508__auto___22675){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_22667 = [null,null,null,null,null,null,null,null];
(statearr_22667[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_22667[(1)] = (1));

return statearr_22667;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_22647){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_22647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e22668){if((e22668 instanceof Object)){
var ex__22400__auto__ = e22668;
var statearr_22669_22690 = state_22647;
(statearr_22669_22690[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22691 = state_22647;
state_22647 = G__22691;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_22647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_22647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___22675))
})();
var state__22510__auto__ = (function (){var statearr_22670 = f__22509__auto__.call(null);
(statearr_22670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___22675);

return statearr_22670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___22675))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22879){
var vec__22880 = p__22879;
var v = cljs.core.nth.call(null,vec__22880,(0),null);
var p = cljs.core.nth.call(null,vec__22880,(1),null);
var job = vec__22880;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22508__auto___23066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___23066,res,vec__22880,v,p,job,jobs,results){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___23066,res,vec__22880,v,p,job,jobs,results){
return (function (state_22887){
var state_val_22888 = (state_22887[(1)]);
if((state_val_22888 === (1))){
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22887__$1,(2),res,v);
} else {
if((state_val_22888 === (2))){
var inst_22884 = (state_22887[(2)]);
var inst_22885 = cljs.core.async.close_BANG_.call(null,res);
var state_22887__$1 = (function (){var statearr_22889 = state_22887;
(statearr_22889[(7)] = inst_22884);

return statearr_22889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22887__$1,inst_22885);
} else {
return null;
}
}
});})(c__22508__auto___23066,res,vec__22880,v,p,job,jobs,results))
;
return ((function (switch__22396__auto__,c__22508__auto___23066,res,vec__22880,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0 = (function (){
var statearr_22893 = [null,null,null,null,null,null,null,null];
(statearr_22893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__);

(statearr_22893[(1)] = (1));

return statearr_22893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1 = (function (state_22887){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_22887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object)){
var ex__22400__auto__ = e22894;
var statearr_22895_23067 = state_22887;
(statearr_22895_23067[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23068 = state_22887;
state_22887 = G__23068;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = function(state_22887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1.call(this,state_22887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___23066,res,vec__22880,v,p,job,jobs,results))
})();
var state__22510__auto__ = (function (){var statearr_22896 = f__22509__auto__.call(null);
(statearr_22896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___23066);

return statearr_22896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___23066,res,vec__22880,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22897){
var vec__22898 = p__22897;
var v = cljs.core.nth.call(null,vec__22898,(0),null);
var p = cljs.core.nth.call(null,vec__22898,(1),null);
var job = vec__22898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21203__auto___23069 = n;
var __23070 = (0);
while(true){
if((__23070 < n__21203__auto___23069)){
var G__22901_23071 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22901_23071) {
case "compute":
var c__22508__auto___23073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23070,c__22508__auto___23073,G__22901_23071,n__21203__auto___23069,jobs,results,process,async){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (__23070,c__22508__auto___23073,G__22901_23071,n__21203__auto___23069,jobs,results,process,async){
return (function (state_22914){
var state_val_22915 = (state_22914[(1)]);
if((state_val_22915 === (1))){
var state_22914__$1 = state_22914;
var statearr_22916_23074 = state_22914__$1;
(statearr_22916_23074[(2)] = null);

(statearr_22916_23074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (2))){
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22914__$1,(4),jobs);
} else {
if((state_val_22915 === (3))){
var inst_22912 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22914__$1,inst_22912);
} else {
if((state_val_22915 === (4))){
var inst_22904 = (state_22914[(2)]);
var inst_22905 = process.call(null,inst_22904);
var state_22914__$1 = state_22914;
if(cljs.core.truth_(inst_22905)){
var statearr_22917_23075 = state_22914__$1;
(statearr_22917_23075[(1)] = (5));

} else {
var statearr_22918_23076 = state_22914__$1;
(statearr_22918_23076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (5))){
var state_22914__$1 = state_22914;
var statearr_22919_23077 = state_22914__$1;
(statearr_22919_23077[(2)] = null);

(statearr_22919_23077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (6))){
var state_22914__$1 = state_22914;
var statearr_22920_23078 = state_22914__$1;
(statearr_22920_23078[(2)] = null);

(statearr_22920_23078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (7))){
var inst_22910 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22921_23079 = state_22914__$1;
(statearr_22921_23079[(2)] = inst_22910);

(statearr_22921_23079[(1)] = (3));


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
});})(__23070,c__22508__auto___23073,G__22901_23071,n__21203__auto___23069,jobs,results,process,async))
;
return ((function (__23070,switch__22396__auto__,c__22508__auto___23073,G__22901_23071,n__21203__auto___23069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0 = (function (){
var statearr_22925 = [null,null,null,null,null,null,null];
(statearr_22925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__);

(statearr_22925[(1)] = (1));

return statearr_22925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1 = (function (state_22914){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_22914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e22926){if((e22926 instanceof Object)){
var ex__22400__auto__ = e22926;
var statearr_22927_23080 = state_22914;
(statearr_22927_23080[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23081 = state_22914;
state_22914 = G__23081;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__;
})()
;})(__23070,switch__22396__auto__,c__22508__auto___23073,G__22901_23071,n__21203__auto___23069,jobs,results,process,async))
})();
var state__22510__auto__ = (function (){var statearr_22928 = f__22509__auto__.call(null);
(statearr_22928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___23073);

return statearr_22928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(__23070,c__22508__auto___23073,G__22901_23071,n__21203__auto___23069,jobs,results,process,async))
);


break;
case "async":
var c__22508__auto___23082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23070,c__22508__auto___23082,G__22901_23071,n__21203__auto___23069,jobs,results,process,async){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (__23070,c__22508__auto___23082,G__22901_23071,n__21203__auto___23069,jobs,results,process,async){
return (function (state_22941){
var state_val_22942 = (state_22941[(1)]);
if((state_val_22942 === (1))){
var state_22941__$1 = state_22941;
var statearr_22943_23083 = state_22941__$1;
(statearr_22943_23083[(2)] = null);

(statearr_22943_23083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22942 === (2))){
var state_22941__$1 = state_22941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22941__$1,(4),jobs);
} else {
if((state_val_22942 === (3))){
var inst_22939 = (state_22941[(2)]);
var state_22941__$1 = state_22941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22941__$1,inst_22939);
} else {
if((state_val_22942 === (4))){
var inst_22931 = (state_22941[(2)]);
var inst_22932 = async.call(null,inst_22931);
var state_22941__$1 = state_22941;
if(cljs.core.truth_(inst_22932)){
var statearr_22944_23084 = state_22941__$1;
(statearr_22944_23084[(1)] = (5));

} else {
var statearr_22945_23085 = state_22941__$1;
(statearr_22945_23085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22942 === (5))){
var state_22941__$1 = state_22941;
var statearr_22946_23086 = state_22941__$1;
(statearr_22946_23086[(2)] = null);

(statearr_22946_23086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22942 === (6))){
var state_22941__$1 = state_22941;
var statearr_22947_23087 = state_22941__$1;
(statearr_22947_23087[(2)] = null);

(statearr_22947_23087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22942 === (7))){
var inst_22937 = (state_22941[(2)]);
var state_22941__$1 = state_22941;
var statearr_22948_23088 = state_22941__$1;
(statearr_22948_23088[(2)] = inst_22937);

(statearr_22948_23088[(1)] = (3));


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
});})(__23070,c__22508__auto___23082,G__22901_23071,n__21203__auto___23069,jobs,results,process,async))
;
return ((function (__23070,switch__22396__auto__,c__22508__auto___23082,G__22901_23071,n__21203__auto___23069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0 = (function (){
var statearr_22952 = [null,null,null,null,null,null,null];
(statearr_22952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__);

(statearr_22952[(1)] = (1));

return statearr_22952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1 = (function (state_22941){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_22941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e22953){if((e22953 instanceof Object)){
var ex__22400__auto__ = e22953;
var statearr_22954_23089 = state_22941;
(statearr_22954_23089[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23090 = state_22941;
state_22941 = G__23090;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = function(state_22941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1.call(this,state_22941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__;
})()
;})(__23070,switch__22396__auto__,c__22508__auto___23082,G__22901_23071,n__21203__auto___23069,jobs,results,process,async))
})();
var state__22510__auto__ = (function (){var statearr_22955 = f__22509__auto__.call(null);
(statearr_22955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___23082);

return statearr_22955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(__23070,c__22508__auto___23082,G__22901_23071,n__21203__auto___23069,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23091 = (__23070 + (1));
__23070 = G__23091;
continue;
} else {
}
break;
}

var c__22508__auto___23092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___23092,jobs,results,process,async){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___23092,jobs,results,process,async){
return (function (state_22977){
var state_val_22978 = (state_22977[(1)]);
if((state_val_22978 === (1))){
var state_22977__$1 = state_22977;
var statearr_22979_23093 = state_22977__$1;
(statearr_22979_23093[(2)] = null);

(statearr_22979_23093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (2))){
var state_22977__$1 = state_22977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22977__$1,(4),from);
} else {
if((state_val_22978 === (3))){
var inst_22975 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22977__$1,inst_22975);
} else {
if((state_val_22978 === (4))){
var inst_22958 = (state_22977[(7)]);
var inst_22958__$1 = (state_22977[(2)]);
var inst_22959 = (inst_22958__$1 == null);
var state_22977__$1 = (function (){var statearr_22980 = state_22977;
(statearr_22980[(7)] = inst_22958__$1);

return statearr_22980;
})();
if(cljs.core.truth_(inst_22959)){
var statearr_22981_23094 = state_22977__$1;
(statearr_22981_23094[(1)] = (5));

} else {
var statearr_22982_23095 = state_22977__$1;
(statearr_22982_23095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (5))){
var inst_22961 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22977__$1 = state_22977;
var statearr_22983_23096 = state_22977__$1;
(statearr_22983_23096[(2)] = inst_22961);

(statearr_22983_23096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (6))){
var inst_22963 = (state_22977[(8)]);
var inst_22958 = (state_22977[(7)]);
var inst_22963__$1 = cljs.core.async.chan.call(null,(1));
var inst_22964 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22965 = [inst_22958,inst_22963__$1];
var inst_22966 = (new cljs.core.PersistentVector(null,2,(5),inst_22964,inst_22965,null));
var state_22977__$1 = (function (){var statearr_22984 = state_22977;
(statearr_22984[(8)] = inst_22963__$1);

return statearr_22984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22977__$1,(8),jobs,inst_22966);
} else {
if((state_val_22978 === (7))){
var inst_22973 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
var statearr_22985_23097 = state_22977__$1;
(statearr_22985_23097[(2)] = inst_22973);

(statearr_22985_23097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (8))){
var inst_22963 = (state_22977[(8)]);
var inst_22968 = (state_22977[(2)]);
var state_22977__$1 = (function (){var statearr_22986 = state_22977;
(statearr_22986[(9)] = inst_22968);

return statearr_22986;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22977__$1,(9),results,inst_22963);
} else {
if((state_val_22978 === (9))){
var inst_22970 = (state_22977[(2)]);
var state_22977__$1 = (function (){var statearr_22987 = state_22977;
(statearr_22987[(10)] = inst_22970);

return statearr_22987;
})();
var statearr_22988_23098 = state_22977__$1;
(statearr_22988_23098[(2)] = null);

(statearr_22988_23098[(1)] = (2));


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
});})(c__22508__auto___23092,jobs,results,process,async))
;
return ((function (switch__22396__auto__,c__22508__auto___23092,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0 = (function (){
var statearr_22992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__);

(statearr_22992[(1)] = (1));

return statearr_22992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1 = (function (state_22977){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_22977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e22993){if((e22993 instanceof Object)){
var ex__22400__auto__ = e22993;
var statearr_22994_23099 = state_22977;
(statearr_22994_23099[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_22977;
state_22977 = G__23100;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = function(state_22977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1.call(this,state_22977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___23092,jobs,results,process,async))
})();
var state__22510__auto__ = (function (){var statearr_22995 = f__22509__auto__.call(null);
(statearr_22995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___23092);

return statearr_22995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___23092,jobs,results,process,async))
);


var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__,jobs,results,process,async){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__,jobs,results,process,async){
return (function (state_23033){
var state_val_23034 = (state_23033[(1)]);
if((state_val_23034 === (7))){
var inst_23029 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23035_23101 = state_23033__$1;
(statearr_23035_23101[(2)] = inst_23029);

(statearr_23035_23101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (20))){
var state_23033__$1 = state_23033;
var statearr_23036_23102 = state_23033__$1;
(statearr_23036_23102[(2)] = null);

(statearr_23036_23102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (1))){
var state_23033__$1 = state_23033;
var statearr_23037_23103 = state_23033__$1;
(statearr_23037_23103[(2)] = null);

(statearr_23037_23103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (4))){
var inst_22998 = (state_23033[(7)]);
var inst_22998__$1 = (state_23033[(2)]);
var inst_22999 = (inst_22998__$1 == null);
var state_23033__$1 = (function (){var statearr_23038 = state_23033;
(statearr_23038[(7)] = inst_22998__$1);

return statearr_23038;
})();
if(cljs.core.truth_(inst_22999)){
var statearr_23039_23104 = state_23033__$1;
(statearr_23039_23104[(1)] = (5));

} else {
var statearr_23040_23105 = state_23033__$1;
(statearr_23040_23105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (15))){
var inst_23011 = (state_23033[(8)]);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23033__$1,(18),to,inst_23011);
} else {
if((state_val_23034 === (21))){
var inst_23024 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23041_23106 = state_23033__$1;
(statearr_23041_23106[(2)] = inst_23024);

(statearr_23041_23106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (13))){
var inst_23026 = (state_23033[(2)]);
var state_23033__$1 = (function (){var statearr_23042 = state_23033;
(statearr_23042[(9)] = inst_23026);

return statearr_23042;
})();
var statearr_23043_23107 = state_23033__$1;
(statearr_23043_23107[(2)] = null);

(statearr_23043_23107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (6))){
var inst_22998 = (state_23033[(7)]);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23033__$1,(11),inst_22998);
} else {
if((state_val_23034 === (17))){
var inst_23019 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
if(cljs.core.truth_(inst_23019)){
var statearr_23044_23108 = state_23033__$1;
(statearr_23044_23108[(1)] = (19));

} else {
var statearr_23045_23109 = state_23033__$1;
(statearr_23045_23109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (3))){
var inst_23031 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23033__$1,inst_23031);
} else {
if((state_val_23034 === (12))){
var inst_23008 = (state_23033[(10)]);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23033__$1,(14),inst_23008);
} else {
if((state_val_23034 === (2))){
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23033__$1,(4),results);
} else {
if((state_val_23034 === (19))){
var state_23033__$1 = state_23033;
var statearr_23046_23110 = state_23033__$1;
(statearr_23046_23110[(2)] = null);

(statearr_23046_23110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (11))){
var inst_23008 = (state_23033[(2)]);
var state_23033__$1 = (function (){var statearr_23047 = state_23033;
(statearr_23047[(10)] = inst_23008);

return statearr_23047;
})();
var statearr_23048_23111 = state_23033__$1;
(statearr_23048_23111[(2)] = null);

(statearr_23048_23111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (9))){
var state_23033__$1 = state_23033;
var statearr_23049_23112 = state_23033__$1;
(statearr_23049_23112[(2)] = null);

(statearr_23049_23112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (5))){
var state_23033__$1 = state_23033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23050_23113 = state_23033__$1;
(statearr_23050_23113[(1)] = (8));

} else {
var statearr_23051_23114 = state_23033__$1;
(statearr_23051_23114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (14))){
var inst_23011 = (state_23033[(8)]);
var inst_23013 = (state_23033[(11)]);
var inst_23011__$1 = (state_23033[(2)]);
var inst_23012 = (inst_23011__$1 == null);
var inst_23013__$1 = cljs.core.not.call(null,inst_23012);
var state_23033__$1 = (function (){var statearr_23052 = state_23033;
(statearr_23052[(8)] = inst_23011__$1);

(statearr_23052[(11)] = inst_23013__$1);

return statearr_23052;
})();
if(inst_23013__$1){
var statearr_23053_23115 = state_23033__$1;
(statearr_23053_23115[(1)] = (15));

} else {
var statearr_23054_23116 = state_23033__$1;
(statearr_23054_23116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (16))){
var inst_23013 = (state_23033[(11)]);
var state_23033__$1 = state_23033;
var statearr_23055_23117 = state_23033__$1;
(statearr_23055_23117[(2)] = inst_23013);

(statearr_23055_23117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (10))){
var inst_23005 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23056_23118 = state_23033__$1;
(statearr_23056_23118[(2)] = inst_23005);

(statearr_23056_23118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (18))){
var inst_23016 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23057_23119 = state_23033__$1;
(statearr_23057_23119[(2)] = inst_23016);

(statearr_23057_23119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (8))){
var inst_23002 = cljs.core.async.close_BANG_.call(null,to);
var state_23033__$1 = state_23033;
var statearr_23058_23120 = state_23033__$1;
(statearr_23058_23120[(2)] = inst_23002);

(statearr_23058_23120[(1)] = (10));


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
});})(c__22508__auto__,jobs,results,process,async))
;
return ((function (switch__22396__auto__,c__22508__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0 = (function (){
var statearr_23062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__);

(statearr_23062[(1)] = (1));

return statearr_23062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1 = (function (state_23033){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_23033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e23063){if((e23063 instanceof Object)){
var ex__22400__auto__ = e23063;
var statearr_23064_23121 = state_23033;
(statearr_23064_23121[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23122 = state_23033;
state_23033 = G__23122;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__ = function(state_23033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1.call(this,state_23033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__,jobs,results,process,async))
})();
var state__22510__auto__ = (function (){var statearr_23065 = f__22509__auto__.call(null);
(statearr_23065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_23065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__,jobs,results,process,async))
);

return c__22508__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23123 = [];
var len__21393__auto___23126 = arguments.length;
var i__21394__auto___23127 = (0);
while(true){
if((i__21394__auto___23127 < len__21393__auto___23126)){
args23123.push((arguments[i__21394__auto___23127]));

var G__23128 = (i__21394__auto___23127 + (1));
i__21394__auto___23127 = G__23128;
continue;
} else {
}
break;
}

var G__23125 = args23123.length;
switch (G__23125) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23123.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23130 = [];
var len__21393__auto___23133 = arguments.length;
var i__21394__auto___23134 = (0);
while(true){
if((i__21394__auto___23134 < len__21393__auto___23133)){
args23130.push((arguments[i__21394__auto___23134]));

var G__23135 = (i__21394__auto___23134 + (1));
i__21394__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var G__23132 = args23130.length;
switch (G__23132) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23130.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23137 = [];
var len__21393__auto___23190 = arguments.length;
var i__21394__auto___23191 = (0);
while(true){
if((i__21394__auto___23191 < len__21393__auto___23190)){
args23137.push((arguments[i__21394__auto___23191]));

var G__23192 = (i__21394__auto___23191 + (1));
i__21394__auto___23191 = G__23192;
continue;
} else {
}
break;
}

var G__23139 = args23137.length;
switch (G__23139) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23137.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22508__auto___23194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___23194,tc,fc){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___23194,tc,fc){
return (function (state_23165){
var state_val_23166 = (state_23165[(1)]);
if((state_val_23166 === (7))){
var inst_23161 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
var statearr_23167_23195 = state_23165__$1;
(statearr_23167_23195[(2)] = inst_23161);

(statearr_23167_23195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (1))){
var state_23165__$1 = state_23165;
var statearr_23168_23196 = state_23165__$1;
(statearr_23168_23196[(2)] = null);

(statearr_23168_23196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (4))){
var inst_23142 = (state_23165[(7)]);
var inst_23142__$1 = (state_23165[(2)]);
var inst_23143 = (inst_23142__$1 == null);
var state_23165__$1 = (function (){var statearr_23169 = state_23165;
(statearr_23169[(7)] = inst_23142__$1);

return statearr_23169;
})();
if(cljs.core.truth_(inst_23143)){
var statearr_23170_23197 = state_23165__$1;
(statearr_23170_23197[(1)] = (5));

} else {
var statearr_23171_23198 = state_23165__$1;
(statearr_23171_23198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (13))){
var state_23165__$1 = state_23165;
var statearr_23172_23199 = state_23165__$1;
(statearr_23172_23199[(2)] = null);

(statearr_23172_23199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (6))){
var inst_23142 = (state_23165[(7)]);
var inst_23148 = p.call(null,inst_23142);
var state_23165__$1 = state_23165;
if(cljs.core.truth_(inst_23148)){
var statearr_23173_23200 = state_23165__$1;
(statearr_23173_23200[(1)] = (9));

} else {
var statearr_23174_23201 = state_23165__$1;
(statearr_23174_23201[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (3))){
var inst_23163 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23165__$1,inst_23163);
} else {
if((state_val_23166 === (12))){
var state_23165__$1 = state_23165;
var statearr_23175_23202 = state_23165__$1;
(statearr_23175_23202[(2)] = null);

(statearr_23175_23202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (2))){
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23165__$1,(4),ch);
} else {
if((state_val_23166 === (11))){
var inst_23142 = (state_23165[(7)]);
var inst_23152 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23165__$1,(8),inst_23152,inst_23142);
} else {
if((state_val_23166 === (9))){
var state_23165__$1 = state_23165;
var statearr_23176_23203 = state_23165__$1;
(statearr_23176_23203[(2)] = tc);

(statearr_23176_23203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (5))){
var inst_23145 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23146 = cljs.core.async.close_BANG_.call(null,fc);
var state_23165__$1 = (function (){var statearr_23177 = state_23165;
(statearr_23177[(8)] = inst_23145);

return statearr_23177;
})();
var statearr_23178_23204 = state_23165__$1;
(statearr_23178_23204[(2)] = inst_23146);

(statearr_23178_23204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (14))){
var inst_23159 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
var statearr_23179_23205 = state_23165__$1;
(statearr_23179_23205[(2)] = inst_23159);

(statearr_23179_23205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (10))){
var state_23165__$1 = state_23165;
var statearr_23180_23206 = state_23165__$1;
(statearr_23180_23206[(2)] = fc);

(statearr_23180_23206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (8))){
var inst_23154 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
if(cljs.core.truth_(inst_23154)){
var statearr_23181_23207 = state_23165__$1;
(statearr_23181_23207[(1)] = (12));

} else {
var statearr_23182_23208 = state_23165__$1;
(statearr_23182_23208[(1)] = (13));

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
});})(c__22508__auto___23194,tc,fc))
;
return ((function (switch__22396__auto__,c__22508__auto___23194,tc,fc){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_23186 = [null,null,null,null,null,null,null,null,null];
(statearr_23186[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_23186[(1)] = (1));

return statearr_23186;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_23165){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_23165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e23187){if((e23187 instanceof Object)){
var ex__22400__auto__ = e23187;
var statearr_23188_23209 = state_23165;
(statearr_23188_23209[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23210 = state_23165;
state_23165 = G__23210;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_23165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_23165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___23194,tc,fc))
})();
var state__22510__auto__ = (function (){var statearr_23189 = f__22509__auto__.call(null);
(statearr_23189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___23194);

return statearr_23189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___23194,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__){
return (function (state_23274){
var state_val_23275 = (state_23274[(1)]);
if((state_val_23275 === (7))){
var inst_23270 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23276_23297 = state_23274__$1;
(statearr_23276_23297[(2)] = inst_23270);

(statearr_23276_23297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (1))){
var inst_23254 = init;
var state_23274__$1 = (function (){var statearr_23277 = state_23274;
(statearr_23277[(7)] = inst_23254);

return statearr_23277;
})();
var statearr_23278_23298 = state_23274__$1;
(statearr_23278_23298[(2)] = null);

(statearr_23278_23298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (4))){
var inst_23257 = (state_23274[(8)]);
var inst_23257__$1 = (state_23274[(2)]);
var inst_23258 = (inst_23257__$1 == null);
var state_23274__$1 = (function (){var statearr_23279 = state_23274;
(statearr_23279[(8)] = inst_23257__$1);

return statearr_23279;
})();
if(cljs.core.truth_(inst_23258)){
var statearr_23280_23299 = state_23274__$1;
(statearr_23280_23299[(1)] = (5));

} else {
var statearr_23281_23300 = state_23274__$1;
(statearr_23281_23300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (6))){
var inst_23257 = (state_23274[(8)]);
var inst_23254 = (state_23274[(7)]);
var inst_23261 = (state_23274[(9)]);
var inst_23261__$1 = f.call(null,inst_23254,inst_23257);
var inst_23262 = cljs.core.reduced_QMARK_.call(null,inst_23261__$1);
var state_23274__$1 = (function (){var statearr_23282 = state_23274;
(statearr_23282[(9)] = inst_23261__$1);

return statearr_23282;
})();
if(inst_23262){
var statearr_23283_23301 = state_23274__$1;
(statearr_23283_23301[(1)] = (8));

} else {
var statearr_23284_23302 = state_23274__$1;
(statearr_23284_23302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (3))){
var inst_23272 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23274__$1,inst_23272);
} else {
if((state_val_23275 === (2))){
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23274__$1,(4),ch);
} else {
if((state_val_23275 === (9))){
var inst_23261 = (state_23274[(9)]);
var inst_23254 = inst_23261;
var state_23274__$1 = (function (){var statearr_23285 = state_23274;
(statearr_23285[(7)] = inst_23254);

return statearr_23285;
})();
var statearr_23286_23303 = state_23274__$1;
(statearr_23286_23303[(2)] = null);

(statearr_23286_23303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (5))){
var inst_23254 = (state_23274[(7)]);
var state_23274__$1 = state_23274;
var statearr_23287_23304 = state_23274__$1;
(statearr_23287_23304[(2)] = inst_23254);

(statearr_23287_23304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (10))){
var inst_23268 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23288_23305 = state_23274__$1;
(statearr_23288_23305[(2)] = inst_23268);

(statearr_23288_23305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (8))){
var inst_23261 = (state_23274[(9)]);
var inst_23264 = cljs.core.deref.call(null,inst_23261);
var state_23274__$1 = state_23274;
var statearr_23289_23306 = state_23274__$1;
(statearr_23289_23306[(2)] = inst_23264);

(statearr_23289_23306[(1)] = (10));


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
});})(c__22508__auto__))
;
return ((function (switch__22396__auto__,c__22508__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22397__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22397__auto____0 = (function (){
var statearr_23293 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23293[(0)] = cljs$core$async$reduce_$_state_machine__22397__auto__);

(statearr_23293[(1)] = (1));

return statearr_23293;
});
var cljs$core$async$reduce_$_state_machine__22397__auto____1 = (function (state_23274){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_23274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e23294){if((e23294 instanceof Object)){
var ex__22400__auto__ = e23294;
var statearr_23295_23307 = state_23274;
(statearr_23295_23307[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23308 = state_23274;
state_23274 = G__23308;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22397__auto__ = function(state_23274){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22397__auto____1.call(this,state_23274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22397__auto____0;
cljs$core$async$reduce_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22397__auto____1;
return cljs$core$async$reduce_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__))
})();
var state__22510__auto__ = (function (){var statearr_23296 = f__22509__auto__.call(null);
(statearr_23296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_23296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__))
);

return c__22508__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__,f__$1){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__,f__$1){
return (function (state_23328){
var state_val_23329 = (state_23328[(1)]);
if((state_val_23329 === (1))){
var inst_23323 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23328__$1 = state_23328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23328__$1,(2),inst_23323);
} else {
if((state_val_23329 === (2))){
var inst_23325 = (state_23328[(2)]);
var inst_23326 = f__$1.call(null,inst_23325);
var state_23328__$1 = state_23328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23328__$1,inst_23326);
} else {
return null;
}
}
});})(c__22508__auto__,f__$1))
;
return ((function (switch__22396__auto__,c__22508__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22397__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22397__auto____0 = (function (){
var statearr_23333 = [null,null,null,null,null,null,null];
(statearr_23333[(0)] = cljs$core$async$transduce_$_state_machine__22397__auto__);

(statearr_23333[(1)] = (1));

return statearr_23333;
});
var cljs$core$async$transduce_$_state_machine__22397__auto____1 = (function (state_23328){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_23328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e23334){if((e23334 instanceof Object)){
var ex__22400__auto__ = e23334;
var statearr_23335_23337 = state_23328;
(statearr_23335_23337[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23338 = state_23328;
state_23328 = G__23338;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22397__auto__ = function(state_23328){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22397__auto____1.call(this,state_23328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22397__auto____0;
cljs$core$async$transduce_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22397__auto____1;
return cljs$core$async$transduce_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__,f__$1))
})();
var state__22510__auto__ = (function (){var statearr_23336 = f__22509__auto__.call(null);
(statearr_23336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_23336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__,f__$1))
);

return c__22508__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23339 = [];
var len__21393__auto___23391 = arguments.length;
var i__21394__auto___23392 = (0);
while(true){
if((i__21394__auto___23392 < len__21393__auto___23391)){
args23339.push((arguments[i__21394__auto___23392]));

var G__23393 = (i__21394__auto___23392 + (1));
i__21394__auto___23392 = G__23393;
continue;
} else {
}
break;
}

var G__23341 = args23339.length;
switch (G__23341) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23339.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__){
return (function (state_23366){
var state_val_23367 = (state_23366[(1)]);
if((state_val_23367 === (7))){
var inst_23348 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
var statearr_23368_23395 = state_23366__$1;
(statearr_23368_23395[(2)] = inst_23348);

(statearr_23368_23395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (1))){
var inst_23342 = cljs.core.seq.call(null,coll);
var inst_23343 = inst_23342;
var state_23366__$1 = (function (){var statearr_23369 = state_23366;
(statearr_23369[(7)] = inst_23343);

return statearr_23369;
})();
var statearr_23370_23396 = state_23366__$1;
(statearr_23370_23396[(2)] = null);

(statearr_23370_23396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (4))){
var inst_23343 = (state_23366[(7)]);
var inst_23346 = cljs.core.first.call(null,inst_23343);
var state_23366__$1 = state_23366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23366__$1,(7),ch,inst_23346);
} else {
if((state_val_23367 === (13))){
var inst_23360 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
var statearr_23371_23397 = state_23366__$1;
(statearr_23371_23397[(2)] = inst_23360);

(statearr_23371_23397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (6))){
var inst_23351 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
if(cljs.core.truth_(inst_23351)){
var statearr_23372_23398 = state_23366__$1;
(statearr_23372_23398[(1)] = (8));

} else {
var statearr_23373_23399 = state_23366__$1;
(statearr_23373_23399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (3))){
var inst_23364 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23366__$1,inst_23364);
} else {
if((state_val_23367 === (12))){
var state_23366__$1 = state_23366;
var statearr_23374_23400 = state_23366__$1;
(statearr_23374_23400[(2)] = null);

(statearr_23374_23400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (2))){
var inst_23343 = (state_23366[(7)]);
var state_23366__$1 = state_23366;
if(cljs.core.truth_(inst_23343)){
var statearr_23375_23401 = state_23366__$1;
(statearr_23375_23401[(1)] = (4));

} else {
var statearr_23376_23402 = state_23366__$1;
(statearr_23376_23402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (11))){
var inst_23357 = cljs.core.async.close_BANG_.call(null,ch);
var state_23366__$1 = state_23366;
var statearr_23377_23403 = state_23366__$1;
(statearr_23377_23403[(2)] = inst_23357);

(statearr_23377_23403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (9))){
var state_23366__$1 = state_23366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23378_23404 = state_23366__$1;
(statearr_23378_23404[(1)] = (11));

} else {
var statearr_23379_23405 = state_23366__$1;
(statearr_23379_23405[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (5))){
var inst_23343 = (state_23366[(7)]);
var state_23366__$1 = state_23366;
var statearr_23380_23406 = state_23366__$1;
(statearr_23380_23406[(2)] = inst_23343);

(statearr_23380_23406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (10))){
var inst_23362 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
var statearr_23381_23407 = state_23366__$1;
(statearr_23381_23407[(2)] = inst_23362);

(statearr_23381_23407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (8))){
var inst_23343 = (state_23366[(7)]);
var inst_23353 = cljs.core.next.call(null,inst_23343);
var inst_23343__$1 = inst_23353;
var state_23366__$1 = (function (){var statearr_23382 = state_23366;
(statearr_23382[(7)] = inst_23343__$1);

return statearr_23382;
})();
var statearr_23383_23408 = state_23366__$1;
(statearr_23383_23408[(2)] = null);

(statearr_23383_23408[(1)] = (2));


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
});})(c__22508__auto__))
;
return ((function (switch__22396__auto__,c__22508__auto__){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_23387 = [null,null,null,null,null,null,null,null];
(statearr_23387[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_23387[(1)] = (1));

return statearr_23387;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_23366){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_23366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e23388){if((e23388 instanceof Object)){
var ex__22400__auto__ = e23388;
var statearr_23389_23409 = state_23366;
(statearr_23389_23409[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23410 = state_23366;
state_23366 = G__23410;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_23366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_23366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__))
})();
var state__22510__auto__ = (function (){var statearr_23390 = f__22509__auto__.call(null);
(statearr_23390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_23390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__))
);

return c__22508__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20948__auto__ = (((_ == null))?null:_);
var m__20949__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,_);
} else {
var m__20949__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20949__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m);
} else {
var m__20949__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23636 = (function (ch,cs,meta23637){
this.ch = ch;
this.cs = cs;
this.meta23637 = meta23637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23638,meta23637__$1){
var self__ = this;
var _23638__$1 = this;
return (new cljs.core.async.t_cljs$core$async23636(self__.ch,self__.cs,meta23637__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23638){
var self__ = this;
var _23638__$1 = this;
return self__.meta23637;
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23637","meta23637",1977646732,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23636";

cljs.core.async.t_cljs$core$async23636.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async23636");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23636 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23636(ch__$1,cs__$1,meta23637){
return (new cljs.core.async.t_cljs$core$async23636(ch__$1,cs__$1,meta23637));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23636(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22508__auto___23861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___23861,cs,m,dchan,dctr,done){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___23861,cs,m,dchan,dctr,done){
return (function (state_23773){
var state_val_23774 = (state_23773[(1)]);
if((state_val_23774 === (7))){
var inst_23769 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23775_23862 = state_23773__$1;
(statearr_23775_23862[(2)] = inst_23769);

(statearr_23775_23862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (20))){
var inst_23672 = (state_23773[(7)]);
var inst_23684 = cljs.core.first.call(null,inst_23672);
var inst_23685 = cljs.core.nth.call(null,inst_23684,(0),null);
var inst_23686 = cljs.core.nth.call(null,inst_23684,(1),null);
var state_23773__$1 = (function (){var statearr_23776 = state_23773;
(statearr_23776[(8)] = inst_23685);

return statearr_23776;
})();
if(cljs.core.truth_(inst_23686)){
var statearr_23777_23863 = state_23773__$1;
(statearr_23777_23863[(1)] = (22));

} else {
var statearr_23778_23864 = state_23773__$1;
(statearr_23778_23864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (27))){
var inst_23716 = (state_23773[(9)]);
var inst_23721 = (state_23773[(10)]);
var inst_23714 = (state_23773[(11)]);
var inst_23641 = (state_23773[(12)]);
var inst_23721__$1 = cljs.core._nth.call(null,inst_23714,inst_23716);
var inst_23722 = cljs.core.async.put_BANG_.call(null,inst_23721__$1,inst_23641,done);
var state_23773__$1 = (function (){var statearr_23779 = state_23773;
(statearr_23779[(10)] = inst_23721__$1);

return statearr_23779;
})();
if(cljs.core.truth_(inst_23722)){
var statearr_23780_23865 = state_23773__$1;
(statearr_23780_23865[(1)] = (30));

} else {
var statearr_23781_23866 = state_23773__$1;
(statearr_23781_23866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (1))){
var state_23773__$1 = state_23773;
var statearr_23782_23867 = state_23773__$1;
(statearr_23782_23867[(2)] = null);

(statearr_23782_23867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (24))){
var inst_23672 = (state_23773[(7)]);
var inst_23691 = (state_23773[(2)]);
var inst_23692 = cljs.core.next.call(null,inst_23672);
var inst_23650 = inst_23692;
var inst_23651 = null;
var inst_23652 = (0);
var inst_23653 = (0);
var state_23773__$1 = (function (){var statearr_23783 = state_23773;
(statearr_23783[(13)] = inst_23691);

(statearr_23783[(14)] = inst_23652);

(statearr_23783[(15)] = inst_23651);

(statearr_23783[(16)] = inst_23653);

(statearr_23783[(17)] = inst_23650);

return statearr_23783;
})();
var statearr_23784_23868 = state_23773__$1;
(statearr_23784_23868[(2)] = null);

(statearr_23784_23868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (39))){
var state_23773__$1 = state_23773;
var statearr_23788_23869 = state_23773__$1;
(statearr_23788_23869[(2)] = null);

(statearr_23788_23869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (4))){
var inst_23641 = (state_23773[(12)]);
var inst_23641__$1 = (state_23773[(2)]);
var inst_23642 = (inst_23641__$1 == null);
var state_23773__$1 = (function (){var statearr_23789 = state_23773;
(statearr_23789[(12)] = inst_23641__$1);

return statearr_23789;
})();
if(cljs.core.truth_(inst_23642)){
var statearr_23790_23870 = state_23773__$1;
(statearr_23790_23870[(1)] = (5));

} else {
var statearr_23791_23871 = state_23773__$1;
(statearr_23791_23871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (15))){
var inst_23652 = (state_23773[(14)]);
var inst_23651 = (state_23773[(15)]);
var inst_23653 = (state_23773[(16)]);
var inst_23650 = (state_23773[(17)]);
var inst_23668 = (state_23773[(2)]);
var inst_23669 = (inst_23653 + (1));
var tmp23785 = inst_23652;
var tmp23786 = inst_23651;
var tmp23787 = inst_23650;
var inst_23650__$1 = tmp23787;
var inst_23651__$1 = tmp23786;
var inst_23652__$1 = tmp23785;
var inst_23653__$1 = inst_23669;
var state_23773__$1 = (function (){var statearr_23792 = state_23773;
(statearr_23792[(14)] = inst_23652__$1);

(statearr_23792[(15)] = inst_23651__$1);

(statearr_23792[(16)] = inst_23653__$1);

(statearr_23792[(17)] = inst_23650__$1);

(statearr_23792[(18)] = inst_23668);

return statearr_23792;
})();
var statearr_23793_23872 = state_23773__$1;
(statearr_23793_23872[(2)] = null);

(statearr_23793_23872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (21))){
var inst_23695 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23797_23873 = state_23773__$1;
(statearr_23797_23873[(2)] = inst_23695);

(statearr_23797_23873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (31))){
var inst_23721 = (state_23773[(10)]);
var inst_23725 = done.call(null,null);
var inst_23726 = cljs.core.async.untap_STAR_.call(null,m,inst_23721);
var state_23773__$1 = (function (){var statearr_23798 = state_23773;
(statearr_23798[(19)] = inst_23725);

return statearr_23798;
})();
var statearr_23799_23874 = state_23773__$1;
(statearr_23799_23874[(2)] = inst_23726);

(statearr_23799_23874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (32))){
var inst_23716 = (state_23773[(9)]);
var inst_23715 = (state_23773[(20)]);
var inst_23714 = (state_23773[(11)]);
var inst_23713 = (state_23773[(21)]);
var inst_23728 = (state_23773[(2)]);
var inst_23729 = (inst_23716 + (1));
var tmp23794 = inst_23715;
var tmp23795 = inst_23714;
var tmp23796 = inst_23713;
var inst_23713__$1 = tmp23796;
var inst_23714__$1 = tmp23795;
var inst_23715__$1 = tmp23794;
var inst_23716__$1 = inst_23729;
var state_23773__$1 = (function (){var statearr_23800 = state_23773;
(statearr_23800[(9)] = inst_23716__$1);

(statearr_23800[(20)] = inst_23715__$1);

(statearr_23800[(11)] = inst_23714__$1);

(statearr_23800[(22)] = inst_23728);

(statearr_23800[(21)] = inst_23713__$1);

return statearr_23800;
})();
var statearr_23801_23875 = state_23773__$1;
(statearr_23801_23875[(2)] = null);

(statearr_23801_23875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (40))){
var inst_23741 = (state_23773[(23)]);
var inst_23745 = done.call(null,null);
var inst_23746 = cljs.core.async.untap_STAR_.call(null,m,inst_23741);
var state_23773__$1 = (function (){var statearr_23802 = state_23773;
(statearr_23802[(24)] = inst_23745);

return statearr_23802;
})();
var statearr_23803_23876 = state_23773__$1;
(statearr_23803_23876[(2)] = inst_23746);

(statearr_23803_23876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (33))){
var inst_23732 = (state_23773[(25)]);
var inst_23734 = cljs.core.chunked_seq_QMARK_.call(null,inst_23732);
var state_23773__$1 = state_23773;
if(inst_23734){
var statearr_23804_23877 = state_23773__$1;
(statearr_23804_23877[(1)] = (36));

} else {
var statearr_23805_23878 = state_23773__$1;
(statearr_23805_23878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (13))){
var inst_23662 = (state_23773[(26)]);
var inst_23665 = cljs.core.async.close_BANG_.call(null,inst_23662);
var state_23773__$1 = state_23773;
var statearr_23806_23879 = state_23773__$1;
(statearr_23806_23879[(2)] = inst_23665);

(statearr_23806_23879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (22))){
var inst_23685 = (state_23773[(8)]);
var inst_23688 = cljs.core.async.close_BANG_.call(null,inst_23685);
var state_23773__$1 = state_23773;
var statearr_23807_23880 = state_23773__$1;
(statearr_23807_23880[(2)] = inst_23688);

(statearr_23807_23880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (36))){
var inst_23732 = (state_23773[(25)]);
var inst_23736 = cljs.core.chunk_first.call(null,inst_23732);
var inst_23737 = cljs.core.chunk_rest.call(null,inst_23732);
var inst_23738 = cljs.core.count.call(null,inst_23736);
var inst_23713 = inst_23737;
var inst_23714 = inst_23736;
var inst_23715 = inst_23738;
var inst_23716 = (0);
var state_23773__$1 = (function (){var statearr_23808 = state_23773;
(statearr_23808[(9)] = inst_23716);

(statearr_23808[(20)] = inst_23715);

(statearr_23808[(11)] = inst_23714);

(statearr_23808[(21)] = inst_23713);

return statearr_23808;
})();
var statearr_23809_23881 = state_23773__$1;
(statearr_23809_23881[(2)] = null);

(statearr_23809_23881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (41))){
var inst_23732 = (state_23773[(25)]);
var inst_23748 = (state_23773[(2)]);
var inst_23749 = cljs.core.next.call(null,inst_23732);
var inst_23713 = inst_23749;
var inst_23714 = null;
var inst_23715 = (0);
var inst_23716 = (0);
var state_23773__$1 = (function (){var statearr_23810 = state_23773;
(statearr_23810[(9)] = inst_23716);

(statearr_23810[(20)] = inst_23715);

(statearr_23810[(11)] = inst_23714);

(statearr_23810[(27)] = inst_23748);

(statearr_23810[(21)] = inst_23713);

return statearr_23810;
})();
var statearr_23811_23882 = state_23773__$1;
(statearr_23811_23882[(2)] = null);

(statearr_23811_23882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (43))){
var state_23773__$1 = state_23773;
var statearr_23812_23883 = state_23773__$1;
(statearr_23812_23883[(2)] = null);

(statearr_23812_23883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (29))){
var inst_23757 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23813_23884 = state_23773__$1;
(statearr_23813_23884[(2)] = inst_23757);

(statearr_23813_23884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (44))){
var inst_23766 = (state_23773[(2)]);
var state_23773__$1 = (function (){var statearr_23814 = state_23773;
(statearr_23814[(28)] = inst_23766);

return statearr_23814;
})();
var statearr_23815_23885 = state_23773__$1;
(statearr_23815_23885[(2)] = null);

(statearr_23815_23885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (6))){
var inst_23705 = (state_23773[(29)]);
var inst_23704 = cljs.core.deref.call(null,cs);
var inst_23705__$1 = cljs.core.keys.call(null,inst_23704);
var inst_23706 = cljs.core.count.call(null,inst_23705__$1);
var inst_23707 = cljs.core.reset_BANG_.call(null,dctr,inst_23706);
var inst_23712 = cljs.core.seq.call(null,inst_23705__$1);
var inst_23713 = inst_23712;
var inst_23714 = null;
var inst_23715 = (0);
var inst_23716 = (0);
var state_23773__$1 = (function (){var statearr_23816 = state_23773;
(statearr_23816[(29)] = inst_23705__$1);

(statearr_23816[(9)] = inst_23716);

(statearr_23816[(20)] = inst_23715);

(statearr_23816[(11)] = inst_23714);

(statearr_23816[(21)] = inst_23713);

(statearr_23816[(30)] = inst_23707);

return statearr_23816;
})();
var statearr_23817_23886 = state_23773__$1;
(statearr_23817_23886[(2)] = null);

(statearr_23817_23886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (28))){
var inst_23732 = (state_23773[(25)]);
var inst_23713 = (state_23773[(21)]);
var inst_23732__$1 = cljs.core.seq.call(null,inst_23713);
var state_23773__$1 = (function (){var statearr_23818 = state_23773;
(statearr_23818[(25)] = inst_23732__$1);

return statearr_23818;
})();
if(inst_23732__$1){
var statearr_23819_23887 = state_23773__$1;
(statearr_23819_23887[(1)] = (33));

} else {
var statearr_23820_23888 = state_23773__$1;
(statearr_23820_23888[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (25))){
var inst_23716 = (state_23773[(9)]);
var inst_23715 = (state_23773[(20)]);
var inst_23718 = (inst_23716 < inst_23715);
var inst_23719 = inst_23718;
var state_23773__$1 = state_23773;
if(cljs.core.truth_(inst_23719)){
var statearr_23821_23889 = state_23773__$1;
(statearr_23821_23889[(1)] = (27));

} else {
var statearr_23822_23890 = state_23773__$1;
(statearr_23822_23890[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (34))){
var state_23773__$1 = state_23773;
var statearr_23823_23891 = state_23773__$1;
(statearr_23823_23891[(2)] = null);

(statearr_23823_23891[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (17))){
var state_23773__$1 = state_23773;
var statearr_23824_23892 = state_23773__$1;
(statearr_23824_23892[(2)] = null);

(statearr_23824_23892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (3))){
var inst_23771 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23773__$1,inst_23771);
} else {
if((state_val_23774 === (12))){
var inst_23700 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23825_23893 = state_23773__$1;
(statearr_23825_23893[(2)] = inst_23700);

(statearr_23825_23893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (2))){
var state_23773__$1 = state_23773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23773__$1,(4),ch);
} else {
if((state_val_23774 === (23))){
var state_23773__$1 = state_23773;
var statearr_23826_23894 = state_23773__$1;
(statearr_23826_23894[(2)] = null);

(statearr_23826_23894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (35))){
var inst_23755 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23827_23895 = state_23773__$1;
(statearr_23827_23895[(2)] = inst_23755);

(statearr_23827_23895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (19))){
var inst_23672 = (state_23773[(7)]);
var inst_23676 = cljs.core.chunk_first.call(null,inst_23672);
var inst_23677 = cljs.core.chunk_rest.call(null,inst_23672);
var inst_23678 = cljs.core.count.call(null,inst_23676);
var inst_23650 = inst_23677;
var inst_23651 = inst_23676;
var inst_23652 = inst_23678;
var inst_23653 = (0);
var state_23773__$1 = (function (){var statearr_23828 = state_23773;
(statearr_23828[(14)] = inst_23652);

(statearr_23828[(15)] = inst_23651);

(statearr_23828[(16)] = inst_23653);

(statearr_23828[(17)] = inst_23650);

return statearr_23828;
})();
var statearr_23829_23896 = state_23773__$1;
(statearr_23829_23896[(2)] = null);

(statearr_23829_23896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (11))){
var inst_23650 = (state_23773[(17)]);
var inst_23672 = (state_23773[(7)]);
var inst_23672__$1 = cljs.core.seq.call(null,inst_23650);
var state_23773__$1 = (function (){var statearr_23830 = state_23773;
(statearr_23830[(7)] = inst_23672__$1);

return statearr_23830;
})();
if(inst_23672__$1){
var statearr_23831_23897 = state_23773__$1;
(statearr_23831_23897[(1)] = (16));

} else {
var statearr_23832_23898 = state_23773__$1;
(statearr_23832_23898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (9))){
var inst_23702 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23833_23899 = state_23773__$1;
(statearr_23833_23899[(2)] = inst_23702);

(statearr_23833_23899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (5))){
var inst_23648 = cljs.core.deref.call(null,cs);
var inst_23649 = cljs.core.seq.call(null,inst_23648);
var inst_23650 = inst_23649;
var inst_23651 = null;
var inst_23652 = (0);
var inst_23653 = (0);
var state_23773__$1 = (function (){var statearr_23834 = state_23773;
(statearr_23834[(14)] = inst_23652);

(statearr_23834[(15)] = inst_23651);

(statearr_23834[(16)] = inst_23653);

(statearr_23834[(17)] = inst_23650);

return statearr_23834;
})();
var statearr_23835_23900 = state_23773__$1;
(statearr_23835_23900[(2)] = null);

(statearr_23835_23900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (14))){
var state_23773__$1 = state_23773;
var statearr_23836_23901 = state_23773__$1;
(statearr_23836_23901[(2)] = null);

(statearr_23836_23901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (45))){
var inst_23763 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23837_23902 = state_23773__$1;
(statearr_23837_23902[(2)] = inst_23763);

(statearr_23837_23902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (26))){
var inst_23705 = (state_23773[(29)]);
var inst_23759 = (state_23773[(2)]);
var inst_23760 = cljs.core.seq.call(null,inst_23705);
var state_23773__$1 = (function (){var statearr_23838 = state_23773;
(statearr_23838[(31)] = inst_23759);

return statearr_23838;
})();
if(inst_23760){
var statearr_23839_23903 = state_23773__$1;
(statearr_23839_23903[(1)] = (42));

} else {
var statearr_23840_23904 = state_23773__$1;
(statearr_23840_23904[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (16))){
var inst_23672 = (state_23773[(7)]);
var inst_23674 = cljs.core.chunked_seq_QMARK_.call(null,inst_23672);
var state_23773__$1 = state_23773;
if(inst_23674){
var statearr_23841_23905 = state_23773__$1;
(statearr_23841_23905[(1)] = (19));

} else {
var statearr_23842_23906 = state_23773__$1;
(statearr_23842_23906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (38))){
var inst_23752 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23843_23907 = state_23773__$1;
(statearr_23843_23907[(2)] = inst_23752);

(statearr_23843_23907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (30))){
var state_23773__$1 = state_23773;
var statearr_23844_23908 = state_23773__$1;
(statearr_23844_23908[(2)] = null);

(statearr_23844_23908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (10))){
var inst_23651 = (state_23773[(15)]);
var inst_23653 = (state_23773[(16)]);
var inst_23661 = cljs.core._nth.call(null,inst_23651,inst_23653);
var inst_23662 = cljs.core.nth.call(null,inst_23661,(0),null);
var inst_23663 = cljs.core.nth.call(null,inst_23661,(1),null);
var state_23773__$1 = (function (){var statearr_23845 = state_23773;
(statearr_23845[(26)] = inst_23662);

return statearr_23845;
})();
if(cljs.core.truth_(inst_23663)){
var statearr_23846_23909 = state_23773__$1;
(statearr_23846_23909[(1)] = (13));

} else {
var statearr_23847_23910 = state_23773__$1;
(statearr_23847_23910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (18))){
var inst_23698 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23848_23911 = state_23773__$1;
(statearr_23848_23911[(2)] = inst_23698);

(statearr_23848_23911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (42))){
var state_23773__$1 = state_23773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23773__$1,(45),dchan);
} else {
if((state_val_23774 === (37))){
var inst_23741 = (state_23773[(23)]);
var inst_23732 = (state_23773[(25)]);
var inst_23641 = (state_23773[(12)]);
var inst_23741__$1 = cljs.core.first.call(null,inst_23732);
var inst_23742 = cljs.core.async.put_BANG_.call(null,inst_23741__$1,inst_23641,done);
var state_23773__$1 = (function (){var statearr_23849 = state_23773;
(statearr_23849[(23)] = inst_23741__$1);

return statearr_23849;
})();
if(cljs.core.truth_(inst_23742)){
var statearr_23850_23912 = state_23773__$1;
(statearr_23850_23912[(1)] = (39));

} else {
var statearr_23851_23913 = state_23773__$1;
(statearr_23851_23913[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (8))){
var inst_23652 = (state_23773[(14)]);
var inst_23653 = (state_23773[(16)]);
var inst_23655 = (inst_23653 < inst_23652);
var inst_23656 = inst_23655;
var state_23773__$1 = state_23773;
if(cljs.core.truth_(inst_23656)){
var statearr_23852_23914 = state_23773__$1;
(statearr_23852_23914[(1)] = (10));

} else {
var statearr_23853_23915 = state_23773__$1;
(statearr_23853_23915[(1)] = (11));

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
});})(c__22508__auto___23861,cs,m,dchan,dctr,done))
;
return ((function (switch__22396__auto__,c__22508__auto___23861,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22397__auto__ = null;
var cljs$core$async$mult_$_state_machine__22397__auto____0 = (function (){
var statearr_23857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23857[(0)] = cljs$core$async$mult_$_state_machine__22397__auto__);

(statearr_23857[(1)] = (1));

return statearr_23857;
});
var cljs$core$async$mult_$_state_machine__22397__auto____1 = (function (state_23773){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_23773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e23858){if((e23858 instanceof Object)){
var ex__22400__auto__ = e23858;
var statearr_23859_23916 = state_23773;
(statearr_23859_23916[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23917 = state_23773;
state_23773 = G__23917;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22397__auto__ = function(state_23773){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22397__auto____1.call(this,state_23773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22397__auto____0;
cljs$core$async$mult_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22397__auto____1;
return cljs$core$async$mult_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___23861,cs,m,dchan,dctr,done))
})();
var state__22510__auto__ = (function (){var statearr_23860 = f__22509__auto__.call(null);
(statearr_23860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___23861);

return statearr_23860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___23861,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23918 = [];
var len__21393__auto___23921 = arguments.length;
var i__21394__auto___23922 = (0);
while(true){
if((i__21394__auto___23922 < len__21393__auto___23921)){
args23918.push((arguments[i__21394__auto___23922]));

var G__23923 = (i__21394__auto___23922 + (1));
i__21394__auto___23922 = G__23923;
continue;
} else {
}
break;
}

var G__23920 = args23918.length;
switch (G__23920) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23918.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m);
} else {
var m__20949__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,state_map);
} else {
var m__20949__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,mode);
} else {
var m__20949__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___23935 = arguments.length;
var i__21394__auto___23936 = (0);
while(true){
if((i__21394__auto___23936 < len__21393__auto___23935)){
args__21400__auto__.push((arguments[i__21394__auto___23936]));

var G__23937 = (i__21394__auto___23936 + (1));
i__21394__auto___23936 = G__23937;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((3) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21401__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23929){
var map__23930 = p__23929;
var map__23930__$1 = ((((!((map__23930 == null)))?((((map__23930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23930):map__23930);
var opts = map__23930__$1;
var statearr_23932_23938 = state;
(statearr_23932_23938[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23930,map__23930__$1,opts){
return (function (val){
var statearr_23933_23939 = state;
(statearr_23933_23939[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23930,map__23930__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23934_23940 = state;
(statearr_23934_23940[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23925){
var G__23926 = cljs.core.first.call(null,seq23925);
var seq23925__$1 = cljs.core.next.call(null,seq23925);
var G__23927 = cljs.core.first.call(null,seq23925__$1);
var seq23925__$2 = cljs.core.next.call(null,seq23925__$1);
var G__23928 = cljs.core.first.call(null,seq23925__$2);
var seq23925__$3 = cljs.core.next.call(null,seq23925__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23926,G__23927,G__23928,seq23925__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24108 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24109){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24109 = meta24109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24110,meta24109__$1){
var self__ = this;
var _24110__$1 = this;
return (new cljs.core.async.t_cljs$core$async24108(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24109__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24110){
var self__ = this;
var _24110__$1 = this;
return self__.meta24109;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24109","meta24109",-683013253,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24108";

cljs.core.async.t_cljs$core$async24108.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24108");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24108 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24108(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24109){
return (new cljs.core.async.t_cljs$core$async24108(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24109));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24108(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22508__auto___24275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___24275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___24275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24212){
var state_val_24213 = (state_24212[(1)]);
if((state_val_24213 === (7))){
var inst_24127 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
var statearr_24214_24276 = state_24212__$1;
(statearr_24214_24276[(2)] = inst_24127);

(statearr_24214_24276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (20))){
var inst_24139 = (state_24212[(7)]);
var state_24212__$1 = state_24212;
var statearr_24215_24277 = state_24212__$1;
(statearr_24215_24277[(2)] = inst_24139);

(statearr_24215_24277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (27))){
var state_24212__$1 = state_24212;
var statearr_24216_24278 = state_24212__$1;
(statearr_24216_24278[(2)] = null);

(statearr_24216_24278[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (1))){
var inst_24114 = (state_24212[(8)]);
var inst_24114__$1 = calc_state.call(null);
var inst_24116 = (inst_24114__$1 == null);
var inst_24117 = cljs.core.not.call(null,inst_24116);
var state_24212__$1 = (function (){var statearr_24217 = state_24212;
(statearr_24217[(8)] = inst_24114__$1);

return statearr_24217;
})();
if(inst_24117){
var statearr_24218_24279 = state_24212__$1;
(statearr_24218_24279[(1)] = (2));

} else {
var statearr_24219_24280 = state_24212__$1;
(statearr_24219_24280[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (24))){
var inst_24163 = (state_24212[(9)]);
var inst_24186 = (state_24212[(10)]);
var inst_24172 = (state_24212[(11)]);
var inst_24186__$1 = inst_24163.call(null,inst_24172);
var state_24212__$1 = (function (){var statearr_24220 = state_24212;
(statearr_24220[(10)] = inst_24186__$1);

return statearr_24220;
})();
if(cljs.core.truth_(inst_24186__$1)){
var statearr_24221_24281 = state_24212__$1;
(statearr_24221_24281[(1)] = (29));

} else {
var statearr_24222_24282 = state_24212__$1;
(statearr_24222_24282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (4))){
var inst_24130 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24130)){
var statearr_24223_24283 = state_24212__$1;
(statearr_24223_24283[(1)] = (8));

} else {
var statearr_24224_24284 = state_24212__$1;
(statearr_24224_24284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (15))){
var inst_24157 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24157)){
var statearr_24225_24285 = state_24212__$1;
(statearr_24225_24285[(1)] = (19));

} else {
var statearr_24226_24286 = state_24212__$1;
(statearr_24226_24286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (21))){
var inst_24162 = (state_24212[(12)]);
var inst_24162__$1 = (state_24212[(2)]);
var inst_24163 = cljs.core.get.call(null,inst_24162__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24164 = cljs.core.get.call(null,inst_24162__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24165 = cljs.core.get.call(null,inst_24162__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24212__$1 = (function (){var statearr_24227 = state_24212;
(statearr_24227[(13)] = inst_24164);

(statearr_24227[(9)] = inst_24163);

(statearr_24227[(12)] = inst_24162__$1);

return statearr_24227;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24212__$1,(22),inst_24165);
} else {
if((state_val_24213 === (31))){
var inst_24194 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24194)){
var statearr_24228_24287 = state_24212__$1;
(statearr_24228_24287[(1)] = (32));

} else {
var statearr_24229_24288 = state_24212__$1;
(statearr_24229_24288[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (32))){
var inst_24171 = (state_24212[(14)]);
var state_24212__$1 = state_24212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24212__$1,(35),out,inst_24171);
} else {
if((state_val_24213 === (33))){
var inst_24162 = (state_24212[(12)]);
var inst_24139 = inst_24162;
var state_24212__$1 = (function (){var statearr_24230 = state_24212;
(statearr_24230[(7)] = inst_24139);

return statearr_24230;
})();
var statearr_24231_24289 = state_24212__$1;
(statearr_24231_24289[(2)] = null);

(statearr_24231_24289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (13))){
var inst_24139 = (state_24212[(7)]);
var inst_24146 = inst_24139.cljs$lang$protocol_mask$partition0$;
var inst_24147 = (inst_24146 & (64));
var inst_24148 = inst_24139.cljs$core$ISeq$;
var inst_24149 = (cljs.core.PROTOCOL_SENTINEL === inst_24148);
var inst_24150 = (inst_24147) || (inst_24149);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24150)){
var statearr_24232_24290 = state_24212__$1;
(statearr_24232_24290[(1)] = (16));

} else {
var statearr_24233_24291 = state_24212__$1;
(statearr_24233_24291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (22))){
var inst_24171 = (state_24212[(14)]);
var inst_24172 = (state_24212[(11)]);
var inst_24170 = (state_24212[(2)]);
var inst_24171__$1 = cljs.core.nth.call(null,inst_24170,(0),null);
var inst_24172__$1 = cljs.core.nth.call(null,inst_24170,(1),null);
var inst_24173 = (inst_24171__$1 == null);
var inst_24174 = cljs.core._EQ_.call(null,inst_24172__$1,change);
var inst_24175 = (inst_24173) || (inst_24174);
var state_24212__$1 = (function (){var statearr_24234 = state_24212;
(statearr_24234[(14)] = inst_24171__$1);

(statearr_24234[(11)] = inst_24172__$1);

return statearr_24234;
})();
if(cljs.core.truth_(inst_24175)){
var statearr_24235_24292 = state_24212__$1;
(statearr_24235_24292[(1)] = (23));

} else {
var statearr_24236_24293 = state_24212__$1;
(statearr_24236_24293[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (36))){
var inst_24162 = (state_24212[(12)]);
var inst_24139 = inst_24162;
var state_24212__$1 = (function (){var statearr_24237 = state_24212;
(statearr_24237[(7)] = inst_24139);

return statearr_24237;
})();
var statearr_24238_24294 = state_24212__$1;
(statearr_24238_24294[(2)] = null);

(statearr_24238_24294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (29))){
var inst_24186 = (state_24212[(10)]);
var state_24212__$1 = state_24212;
var statearr_24239_24295 = state_24212__$1;
(statearr_24239_24295[(2)] = inst_24186);

(statearr_24239_24295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (6))){
var state_24212__$1 = state_24212;
var statearr_24240_24296 = state_24212__$1;
(statearr_24240_24296[(2)] = false);

(statearr_24240_24296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (28))){
var inst_24182 = (state_24212[(2)]);
var inst_24183 = calc_state.call(null);
var inst_24139 = inst_24183;
var state_24212__$1 = (function (){var statearr_24241 = state_24212;
(statearr_24241[(7)] = inst_24139);

(statearr_24241[(15)] = inst_24182);

return statearr_24241;
})();
var statearr_24242_24297 = state_24212__$1;
(statearr_24242_24297[(2)] = null);

(statearr_24242_24297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (25))){
var inst_24208 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
var statearr_24243_24298 = state_24212__$1;
(statearr_24243_24298[(2)] = inst_24208);

(statearr_24243_24298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (34))){
var inst_24206 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
var statearr_24244_24299 = state_24212__$1;
(statearr_24244_24299[(2)] = inst_24206);

(statearr_24244_24299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (17))){
var state_24212__$1 = state_24212;
var statearr_24245_24300 = state_24212__$1;
(statearr_24245_24300[(2)] = false);

(statearr_24245_24300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (3))){
var state_24212__$1 = state_24212;
var statearr_24246_24301 = state_24212__$1;
(statearr_24246_24301[(2)] = false);

(statearr_24246_24301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (12))){
var inst_24210 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24212__$1,inst_24210);
} else {
if((state_val_24213 === (2))){
var inst_24114 = (state_24212[(8)]);
var inst_24119 = inst_24114.cljs$lang$protocol_mask$partition0$;
var inst_24120 = (inst_24119 & (64));
var inst_24121 = inst_24114.cljs$core$ISeq$;
var inst_24122 = (cljs.core.PROTOCOL_SENTINEL === inst_24121);
var inst_24123 = (inst_24120) || (inst_24122);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24123)){
var statearr_24247_24302 = state_24212__$1;
(statearr_24247_24302[(1)] = (5));

} else {
var statearr_24248_24303 = state_24212__$1;
(statearr_24248_24303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (23))){
var inst_24171 = (state_24212[(14)]);
var inst_24177 = (inst_24171 == null);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24177)){
var statearr_24249_24304 = state_24212__$1;
(statearr_24249_24304[(1)] = (26));

} else {
var statearr_24250_24305 = state_24212__$1;
(statearr_24250_24305[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (35))){
var inst_24197 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
if(cljs.core.truth_(inst_24197)){
var statearr_24251_24306 = state_24212__$1;
(statearr_24251_24306[(1)] = (36));

} else {
var statearr_24252_24307 = state_24212__$1;
(statearr_24252_24307[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (19))){
var inst_24139 = (state_24212[(7)]);
var inst_24159 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24139);
var state_24212__$1 = state_24212;
var statearr_24253_24308 = state_24212__$1;
(statearr_24253_24308[(2)] = inst_24159);

(statearr_24253_24308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (11))){
var inst_24139 = (state_24212[(7)]);
var inst_24143 = (inst_24139 == null);
var inst_24144 = cljs.core.not.call(null,inst_24143);
var state_24212__$1 = state_24212;
if(inst_24144){
var statearr_24254_24309 = state_24212__$1;
(statearr_24254_24309[(1)] = (13));

} else {
var statearr_24255_24310 = state_24212__$1;
(statearr_24255_24310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (9))){
var inst_24114 = (state_24212[(8)]);
var state_24212__$1 = state_24212;
var statearr_24256_24311 = state_24212__$1;
(statearr_24256_24311[(2)] = inst_24114);

(statearr_24256_24311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (5))){
var state_24212__$1 = state_24212;
var statearr_24257_24312 = state_24212__$1;
(statearr_24257_24312[(2)] = true);

(statearr_24257_24312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (14))){
var state_24212__$1 = state_24212;
var statearr_24258_24313 = state_24212__$1;
(statearr_24258_24313[(2)] = false);

(statearr_24258_24313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (26))){
var inst_24172 = (state_24212[(11)]);
var inst_24179 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24172);
var state_24212__$1 = state_24212;
var statearr_24259_24314 = state_24212__$1;
(statearr_24259_24314[(2)] = inst_24179);

(statearr_24259_24314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (16))){
var state_24212__$1 = state_24212;
var statearr_24260_24315 = state_24212__$1;
(statearr_24260_24315[(2)] = true);

(statearr_24260_24315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (38))){
var inst_24202 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
var statearr_24261_24316 = state_24212__$1;
(statearr_24261_24316[(2)] = inst_24202);

(statearr_24261_24316[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (30))){
var inst_24164 = (state_24212[(13)]);
var inst_24163 = (state_24212[(9)]);
var inst_24172 = (state_24212[(11)]);
var inst_24189 = cljs.core.empty_QMARK_.call(null,inst_24163);
var inst_24190 = inst_24164.call(null,inst_24172);
var inst_24191 = cljs.core.not.call(null,inst_24190);
var inst_24192 = (inst_24189) && (inst_24191);
var state_24212__$1 = state_24212;
var statearr_24262_24317 = state_24212__$1;
(statearr_24262_24317[(2)] = inst_24192);

(statearr_24262_24317[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (10))){
var inst_24114 = (state_24212[(8)]);
var inst_24135 = (state_24212[(2)]);
var inst_24136 = cljs.core.get.call(null,inst_24135,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24137 = cljs.core.get.call(null,inst_24135,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24138 = cljs.core.get.call(null,inst_24135,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24139 = inst_24114;
var state_24212__$1 = (function (){var statearr_24263 = state_24212;
(statearr_24263[(16)] = inst_24138);

(statearr_24263[(17)] = inst_24137);

(statearr_24263[(7)] = inst_24139);

(statearr_24263[(18)] = inst_24136);

return statearr_24263;
})();
var statearr_24264_24318 = state_24212__$1;
(statearr_24264_24318[(2)] = null);

(statearr_24264_24318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (18))){
var inst_24154 = (state_24212[(2)]);
var state_24212__$1 = state_24212;
var statearr_24265_24319 = state_24212__$1;
(statearr_24265_24319[(2)] = inst_24154);

(statearr_24265_24319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (37))){
var state_24212__$1 = state_24212;
var statearr_24266_24320 = state_24212__$1;
(statearr_24266_24320[(2)] = null);

(statearr_24266_24320[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24213 === (8))){
var inst_24114 = (state_24212[(8)]);
var inst_24132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24114);
var state_24212__$1 = state_24212;
var statearr_24267_24321 = state_24212__$1;
(statearr_24267_24321[(2)] = inst_24132);

(statearr_24267_24321[(1)] = (10));


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
});})(c__22508__auto___24275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22396__auto__,c__22508__auto___24275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22397__auto__ = null;
var cljs$core$async$mix_$_state_machine__22397__auto____0 = (function (){
var statearr_24271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24271[(0)] = cljs$core$async$mix_$_state_machine__22397__auto__);

(statearr_24271[(1)] = (1));

return statearr_24271;
});
var cljs$core$async$mix_$_state_machine__22397__auto____1 = (function (state_24212){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e24272){if((e24272 instanceof Object)){
var ex__22400__auto__ = e24272;
var statearr_24273_24322 = state_24212;
(statearr_24273_24322[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24323 = state_24212;
state_24212 = G__24323;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22397__auto__ = function(state_24212){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22397__auto____1.call(this,state_24212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22397__auto____0;
cljs$core$async$mix_$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22397__auto____1;
return cljs$core$async$mix_$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___24275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22510__auto__ = (function (){var statearr_24274 = f__22509__auto__.call(null);
(statearr_24274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___24275);

return statearr_24274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___24275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20949__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p,v,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24324 = [];
var len__21393__auto___24327 = arguments.length;
var i__21394__auto___24328 = (0);
while(true){
if((i__21394__auto___24328 < len__21393__auto___24327)){
args24324.push((arguments[i__21394__auto___24328]));

var G__24329 = (i__21394__auto___24328 + (1));
i__21394__auto___24328 = G__24329;
continue;
} else {
}
break;
}

var G__24326 = args24324.length;
switch (G__24326) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24324.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p);
} else {
var m__20949__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p,v);
} else {
var m__20949__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24332 = [];
var len__21393__auto___24457 = arguments.length;
var i__21394__auto___24458 = (0);
while(true){
if((i__21394__auto___24458 < len__21393__auto___24457)){
args24332.push((arguments[i__21394__auto___24458]));

var G__24459 = (i__21394__auto___24458 + (1));
i__21394__auto___24458 = G__24459;
continue;
} else {
}
break;
}

var G__24334 = args24332.length;
switch (G__24334) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24332.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20285__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20285__auto__,mults){
return (function (p1__24331_SHARP_){
if(cljs.core.truth_(p1__24331_SHARP_.call(null,topic))){
return p1__24331_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24331_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20285__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24335 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24336){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24336 = meta24336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24337,meta24336__$1){
var self__ = this;
var _24337__$1 = this;
return (new cljs.core.async.t_cljs$core$async24335(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24336__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24337){
var self__ = this;
var _24337__$1 = this;
return self__.meta24336;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24336","meta24336",1953980927,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24335";

cljs.core.async.t_cljs$core$async24335.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24335");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24335 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24335(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24336){
return (new cljs.core.async.t_cljs$core$async24335(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24336));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24335(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22508__auto___24461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___24461,mults,ensure_mult,p){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___24461,mults,ensure_mult,p){
return (function (state_24409){
var state_val_24410 = (state_24409[(1)]);
if((state_val_24410 === (7))){
var inst_24405 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
var statearr_24411_24462 = state_24409__$1;
(statearr_24411_24462[(2)] = inst_24405);

(statearr_24411_24462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (20))){
var state_24409__$1 = state_24409;
var statearr_24412_24463 = state_24409__$1;
(statearr_24412_24463[(2)] = null);

(statearr_24412_24463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (1))){
var state_24409__$1 = state_24409;
var statearr_24413_24464 = state_24409__$1;
(statearr_24413_24464[(2)] = null);

(statearr_24413_24464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (24))){
var inst_24388 = (state_24409[(7)]);
var inst_24397 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24388);
var state_24409__$1 = state_24409;
var statearr_24414_24465 = state_24409__$1;
(statearr_24414_24465[(2)] = inst_24397);

(statearr_24414_24465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (4))){
var inst_24340 = (state_24409[(8)]);
var inst_24340__$1 = (state_24409[(2)]);
var inst_24341 = (inst_24340__$1 == null);
var state_24409__$1 = (function (){var statearr_24415 = state_24409;
(statearr_24415[(8)] = inst_24340__$1);

return statearr_24415;
})();
if(cljs.core.truth_(inst_24341)){
var statearr_24416_24466 = state_24409__$1;
(statearr_24416_24466[(1)] = (5));

} else {
var statearr_24417_24467 = state_24409__$1;
(statearr_24417_24467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (15))){
var inst_24382 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
var statearr_24418_24468 = state_24409__$1;
(statearr_24418_24468[(2)] = inst_24382);

(statearr_24418_24468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (21))){
var inst_24402 = (state_24409[(2)]);
var state_24409__$1 = (function (){var statearr_24419 = state_24409;
(statearr_24419[(9)] = inst_24402);

return statearr_24419;
})();
var statearr_24420_24469 = state_24409__$1;
(statearr_24420_24469[(2)] = null);

(statearr_24420_24469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (13))){
var inst_24364 = (state_24409[(10)]);
var inst_24366 = cljs.core.chunked_seq_QMARK_.call(null,inst_24364);
var state_24409__$1 = state_24409;
if(inst_24366){
var statearr_24421_24470 = state_24409__$1;
(statearr_24421_24470[(1)] = (16));

} else {
var statearr_24422_24471 = state_24409__$1;
(statearr_24422_24471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (22))){
var inst_24394 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
if(cljs.core.truth_(inst_24394)){
var statearr_24423_24472 = state_24409__$1;
(statearr_24423_24472[(1)] = (23));

} else {
var statearr_24424_24473 = state_24409__$1;
(statearr_24424_24473[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (6))){
var inst_24388 = (state_24409[(7)]);
var inst_24390 = (state_24409[(11)]);
var inst_24340 = (state_24409[(8)]);
var inst_24388__$1 = topic_fn.call(null,inst_24340);
var inst_24389 = cljs.core.deref.call(null,mults);
var inst_24390__$1 = cljs.core.get.call(null,inst_24389,inst_24388__$1);
var state_24409__$1 = (function (){var statearr_24425 = state_24409;
(statearr_24425[(7)] = inst_24388__$1);

(statearr_24425[(11)] = inst_24390__$1);

return statearr_24425;
})();
if(cljs.core.truth_(inst_24390__$1)){
var statearr_24426_24474 = state_24409__$1;
(statearr_24426_24474[(1)] = (19));

} else {
var statearr_24427_24475 = state_24409__$1;
(statearr_24427_24475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (25))){
var inst_24399 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
var statearr_24428_24476 = state_24409__$1;
(statearr_24428_24476[(2)] = inst_24399);

(statearr_24428_24476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (17))){
var inst_24364 = (state_24409[(10)]);
var inst_24373 = cljs.core.first.call(null,inst_24364);
var inst_24374 = cljs.core.async.muxch_STAR_.call(null,inst_24373);
var inst_24375 = cljs.core.async.close_BANG_.call(null,inst_24374);
var inst_24376 = cljs.core.next.call(null,inst_24364);
var inst_24350 = inst_24376;
var inst_24351 = null;
var inst_24352 = (0);
var inst_24353 = (0);
var state_24409__$1 = (function (){var statearr_24429 = state_24409;
(statearr_24429[(12)] = inst_24375);

(statearr_24429[(13)] = inst_24353);

(statearr_24429[(14)] = inst_24352);

(statearr_24429[(15)] = inst_24351);

(statearr_24429[(16)] = inst_24350);

return statearr_24429;
})();
var statearr_24430_24477 = state_24409__$1;
(statearr_24430_24477[(2)] = null);

(statearr_24430_24477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (3))){
var inst_24407 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24409__$1,inst_24407);
} else {
if((state_val_24410 === (12))){
var inst_24384 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
var statearr_24431_24478 = state_24409__$1;
(statearr_24431_24478[(2)] = inst_24384);

(statearr_24431_24478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (2))){
var state_24409__$1 = state_24409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24409__$1,(4),ch);
} else {
if((state_val_24410 === (23))){
var state_24409__$1 = state_24409;
var statearr_24432_24479 = state_24409__$1;
(statearr_24432_24479[(2)] = null);

(statearr_24432_24479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (19))){
var inst_24390 = (state_24409[(11)]);
var inst_24340 = (state_24409[(8)]);
var inst_24392 = cljs.core.async.muxch_STAR_.call(null,inst_24390);
var state_24409__$1 = state_24409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24409__$1,(22),inst_24392,inst_24340);
} else {
if((state_val_24410 === (11))){
var inst_24364 = (state_24409[(10)]);
var inst_24350 = (state_24409[(16)]);
var inst_24364__$1 = cljs.core.seq.call(null,inst_24350);
var state_24409__$1 = (function (){var statearr_24433 = state_24409;
(statearr_24433[(10)] = inst_24364__$1);

return statearr_24433;
})();
if(inst_24364__$1){
var statearr_24434_24480 = state_24409__$1;
(statearr_24434_24480[(1)] = (13));

} else {
var statearr_24435_24481 = state_24409__$1;
(statearr_24435_24481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (9))){
var inst_24386 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
var statearr_24436_24482 = state_24409__$1;
(statearr_24436_24482[(2)] = inst_24386);

(statearr_24436_24482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (5))){
var inst_24347 = cljs.core.deref.call(null,mults);
var inst_24348 = cljs.core.vals.call(null,inst_24347);
var inst_24349 = cljs.core.seq.call(null,inst_24348);
var inst_24350 = inst_24349;
var inst_24351 = null;
var inst_24352 = (0);
var inst_24353 = (0);
var state_24409__$1 = (function (){var statearr_24437 = state_24409;
(statearr_24437[(13)] = inst_24353);

(statearr_24437[(14)] = inst_24352);

(statearr_24437[(15)] = inst_24351);

(statearr_24437[(16)] = inst_24350);

return statearr_24437;
})();
var statearr_24438_24483 = state_24409__$1;
(statearr_24438_24483[(2)] = null);

(statearr_24438_24483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (14))){
var state_24409__$1 = state_24409;
var statearr_24442_24484 = state_24409__$1;
(statearr_24442_24484[(2)] = null);

(statearr_24442_24484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (16))){
var inst_24364 = (state_24409[(10)]);
var inst_24368 = cljs.core.chunk_first.call(null,inst_24364);
var inst_24369 = cljs.core.chunk_rest.call(null,inst_24364);
var inst_24370 = cljs.core.count.call(null,inst_24368);
var inst_24350 = inst_24369;
var inst_24351 = inst_24368;
var inst_24352 = inst_24370;
var inst_24353 = (0);
var state_24409__$1 = (function (){var statearr_24443 = state_24409;
(statearr_24443[(13)] = inst_24353);

(statearr_24443[(14)] = inst_24352);

(statearr_24443[(15)] = inst_24351);

(statearr_24443[(16)] = inst_24350);

return statearr_24443;
})();
var statearr_24444_24485 = state_24409__$1;
(statearr_24444_24485[(2)] = null);

(statearr_24444_24485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (10))){
var inst_24353 = (state_24409[(13)]);
var inst_24352 = (state_24409[(14)]);
var inst_24351 = (state_24409[(15)]);
var inst_24350 = (state_24409[(16)]);
var inst_24358 = cljs.core._nth.call(null,inst_24351,inst_24353);
var inst_24359 = cljs.core.async.muxch_STAR_.call(null,inst_24358);
var inst_24360 = cljs.core.async.close_BANG_.call(null,inst_24359);
var inst_24361 = (inst_24353 + (1));
var tmp24439 = inst_24352;
var tmp24440 = inst_24351;
var tmp24441 = inst_24350;
var inst_24350__$1 = tmp24441;
var inst_24351__$1 = tmp24440;
var inst_24352__$1 = tmp24439;
var inst_24353__$1 = inst_24361;
var state_24409__$1 = (function (){var statearr_24445 = state_24409;
(statearr_24445[(17)] = inst_24360);

(statearr_24445[(13)] = inst_24353__$1);

(statearr_24445[(14)] = inst_24352__$1);

(statearr_24445[(15)] = inst_24351__$1);

(statearr_24445[(16)] = inst_24350__$1);

return statearr_24445;
})();
var statearr_24446_24486 = state_24409__$1;
(statearr_24446_24486[(2)] = null);

(statearr_24446_24486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (18))){
var inst_24379 = (state_24409[(2)]);
var state_24409__$1 = state_24409;
var statearr_24447_24487 = state_24409__$1;
(statearr_24447_24487[(2)] = inst_24379);

(statearr_24447_24487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24410 === (8))){
var inst_24353 = (state_24409[(13)]);
var inst_24352 = (state_24409[(14)]);
var inst_24355 = (inst_24353 < inst_24352);
var inst_24356 = inst_24355;
var state_24409__$1 = state_24409;
if(cljs.core.truth_(inst_24356)){
var statearr_24448_24488 = state_24409__$1;
(statearr_24448_24488[(1)] = (10));

} else {
var statearr_24449_24489 = state_24409__$1;
(statearr_24449_24489[(1)] = (11));

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
});})(c__22508__auto___24461,mults,ensure_mult,p))
;
return ((function (switch__22396__auto__,c__22508__auto___24461,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_24453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24453[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_24453[(1)] = (1));

return statearr_24453;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_24409){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e24454){if((e24454 instanceof Object)){
var ex__22400__auto__ = e24454;
var statearr_24455_24490 = state_24409;
(statearr_24455_24490[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24491 = state_24409;
state_24409 = G__24491;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_24409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_24409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___24461,mults,ensure_mult,p))
})();
var state__22510__auto__ = (function (){var statearr_24456 = f__22509__auto__.call(null);
(statearr_24456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___24461);

return statearr_24456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___24461,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24492 = [];
var len__21393__auto___24495 = arguments.length;
var i__21394__auto___24496 = (0);
while(true){
if((i__21394__auto___24496 < len__21393__auto___24495)){
args24492.push((arguments[i__21394__auto___24496]));

var G__24497 = (i__21394__auto___24496 + (1));
i__21394__auto___24496 = G__24497;
continue;
} else {
}
break;
}

var G__24494 = args24492.length;
switch (G__24494) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24492.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24499 = [];
var len__21393__auto___24502 = arguments.length;
var i__21394__auto___24503 = (0);
while(true){
if((i__21394__auto___24503 < len__21393__auto___24502)){
args24499.push((arguments[i__21394__auto___24503]));

var G__24504 = (i__21394__auto___24503 + (1));
i__21394__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var G__24501 = args24499.length;
switch (G__24501) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24499.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24506 = [];
var len__21393__auto___24577 = arguments.length;
var i__21394__auto___24578 = (0);
while(true){
if((i__21394__auto___24578 < len__21393__auto___24577)){
args24506.push((arguments[i__21394__auto___24578]));

var G__24579 = (i__21394__auto___24578 + (1));
i__21394__auto___24578 = G__24579;
continue;
} else {
}
break;
}

var G__24508 = args24506.length;
switch (G__24508) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24506.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22508__auto___24581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___24581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___24581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24547){
var state_val_24548 = (state_24547[(1)]);
if((state_val_24548 === (7))){
var state_24547__$1 = state_24547;
var statearr_24549_24582 = state_24547__$1;
(statearr_24549_24582[(2)] = null);

(statearr_24549_24582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (1))){
var state_24547__$1 = state_24547;
var statearr_24550_24583 = state_24547__$1;
(statearr_24550_24583[(2)] = null);

(statearr_24550_24583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (4))){
var inst_24511 = (state_24547[(7)]);
var inst_24513 = (inst_24511 < cnt);
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24513)){
var statearr_24551_24584 = state_24547__$1;
(statearr_24551_24584[(1)] = (6));

} else {
var statearr_24552_24585 = state_24547__$1;
(statearr_24552_24585[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (15))){
var inst_24543 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24553_24586 = state_24547__$1;
(statearr_24553_24586[(2)] = inst_24543);

(statearr_24553_24586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (13))){
var inst_24536 = cljs.core.async.close_BANG_.call(null,out);
var state_24547__$1 = state_24547;
var statearr_24554_24587 = state_24547__$1;
(statearr_24554_24587[(2)] = inst_24536);

(statearr_24554_24587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (6))){
var state_24547__$1 = state_24547;
var statearr_24555_24588 = state_24547__$1;
(statearr_24555_24588[(2)] = null);

(statearr_24555_24588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (3))){
var inst_24545 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24547__$1,inst_24545);
} else {
if((state_val_24548 === (12))){
var inst_24533 = (state_24547[(8)]);
var inst_24533__$1 = (state_24547[(2)]);
var inst_24534 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24533__$1);
var state_24547__$1 = (function (){var statearr_24556 = state_24547;
(statearr_24556[(8)] = inst_24533__$1);

return statearr_24556;
})();
if(cljs.core.truth_(inst_24534)){
var statearr_24557_24589 = state_24547__$1;
(statearr_24557_24589[(1)] = (13));

} else {
var statearr_24558_24590 = state_24547__$1;
(statearr_24558_24590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (2))){
var inst_24510 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24511 = (0);
var state_24547__$1 = (function (){var statearr_24559 = state_24547;
(statearr_24559[(7)] = inst_24511);

(statearr_24559[(9)] = inst_24510);

return statearr_24559;
})();
var statearr_24560_24591 = state_24547__$1;
(statearr_24560_24591[(2)] = null);

(statearr_24560_24591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (11))){
var inst_24511 = (state_24547[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24547,(10),Object,null,(9));
var inst_24520 = chs__$1.call(null,inst_24511);
var inst_24521 = done.call(null,inst_24511);
var inst_24522 = cljs.core.async.take_BANG_.call(null,inst_24520,inst_24521);
var state_24547__$1 = state_24547;
var statearr_24561_24592 = state_24547__$1;
(statearr_24561_24592[(2)] = inst_24522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (9))){
var inst_24511 = (state_24547[(7)]);
var inst_24524 = (state_24547[(2)]);
var inst_24525 = (inst_24511 + (1));
var inst_24511__$1 = inst_24525;
var state_24547__$1 = (function (){var statearr_24562 = state_24547;
(statearr_24562[(7)] = inst_24511__$1);

(statearr_24562[(10)] = inst_24524);

return statearr_24562;
})();
var statearr_24563_24593 = state_24547__$1;
(statearr_24563_24593[(2)] = null);

(statearr_24563_24593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (5))){
var inst_24531 = (state_24547[(2)]);
var state_24547__$1 = (function (){var statearr_24564 = state_24547;
(statearr_24564[(11)] = inst_24531);

return statearr_24564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24547__$1,(12),dchan);
} else {
if((state_val_24548 === (14))){
var inst_24533 = (state_24547[(8)]);
var inst_24538 = cljs.core.apply.call(null,f,inst_24533);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24547__$1,(16),out,inst_24538);
} else {
if((state_val_24548 === (16))){
var inst_24540 = (state_24547[(2)]);
var state_24547__$1 = (function (){var statearr_24565 = state_24547;
(statearr_24565[(12)] = inst_24540);

return statearr_24565;
})();
var statearr_24566_24594 = state_24547__$1;
(statearr_24566_24594[(2)] = null);

(statearr_24566_24594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (10))){
var inst_24515 = (state_24547[(2)]);
var inst_24516 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24547__$1 = (function (){var statearr_24567 = state_24547;
(statearr_24567[(13)] = inst_24515);

return statearr_24567;
})();
var statearr_24568_24595 = state_24547__$1;
(statearr_24568_24595[(2)] = inst_24516);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (8))){
var inst_24529 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24569_24596 = state_24547__$1;
(statearr_24569_24596[(2)] = inst_24529);

(statearr_24569_24596[(1)] = (5));


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
});})(c__22508__auto___24581,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22396__auto__,c__22508__auto___24581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_24573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24573[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_24573[(1)] = (1));

return statearr_24573;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_24547){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e24574){if((e24574 instanceof Object)){
var ex__22400__auto__ = e24574;
var statearr_24575_24597 = state_24547;
(statearr_24575_24597[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24598 = state_24547;
state_24547 = G__24598;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_24547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_24547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___24581,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22510__auto__ = (function (){var statearr_24576 = f__22509__auto__.call(null);
(statearr_24576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___24581);

return statearr_24576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___24581,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24600 = [];
var len__21393__auto___24658 = arguments.length;
var i__21394__auto___24659 = (0);
while(true){
if((i__21394__auto___24659 < len__21393__auto___24658)){
args24600.push((arguments[i__21394__auto___24659]));

var G__24660 = (i__21394__auto___24659 + (1));
i__21394__auto___24659 = G__24660;
continue;
} else {
}
break;
}

var G__24602 = args24600.length;
switch (G__24602) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24600.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22508__auto___24662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___24662,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___24662,out){
return (function (state_24634){
var state_val_24635 = (state_24634[(1)]);
if((state_val_24635 === (7))){
var inst_24613 = (state_24634[(7)]);
var inst_24614 = (state_24634[(8)]);
var inst_24613__$1 = (state_24634[(2)]);
var inst_24614__$1 = cljs.core.nth.call(null,inst_24613__$1,(0),null);
var inst_24615 = cljs.core.nth.call(null,inst_24613__$1,(1),null);
var inst_24616 = (inst_24614__$1 == null);
var state_24634__$1 = (function (){var statearr_24636 = state_24634;
(statearr_24636[(9)] = inst_24615);

(statearr_24636[(7)] = inst_24613__$1);

(statearr_24636[(8)] = inst_24614__$1);

return statearr_24636;
})();
if(cljs.core.truth_(inst_24616)){
var statearr_24637_24663 = state_24634__$1;
(statearr_24637_24663[(1)] = (8));

} else {
var statearr_24638_24664 = state_24634__$1;
(statearr_24638_24664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (1))){
var inst_24603 = cljs.core.vec.call(null,chs);
var inst_24604 = inst_24603;
var state_24634__$1 = (function (){var statearr_24639 = state_24634;
(statearr_24639[(10)] = inst_24604);

return statearr_24639;
})();
var statearr_24640_24665 = state_24634__$1;
(statearr_24640_24665[(2)] = null);

(statearr_24640_24665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (4))){
var inst_24604 = (state_24634[(10)]);
var state_24634__$1 = state_24634;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24634__$1,(7),inst_24604);
} else {
if((state_val_24635 === (6))){
var inst_24630 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24641_24666 = state_24634__$1;
(statearr_24641_24666[(2)] = inst_24630);

(statearr_24641_24666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (3))){
var inst_24632 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24634__$1,inst_24632);
} else {
if((state_val_24635 === (2))){
var inst_24604 = (state_24634[(10)]);
var inst_24606 = cljs.core.count.call(null,inst_24604);
var inst_24607 = (inst_24606 > (0));
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24607)){
var statearr_24643_24667 = state_24634__$1;
(statearr_24643_24667[(1)] = (4));

} else {
var statearr_24644_24668 = state_24634__$1;
(statearr_24644_24668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (11))){
var inst_24604 = (state_24634[(10)]);
var inst_24623 = (state_24634[(2)]);
var tmp24642 = inst_24604;
var inst_24604__$1 = tmp24642;
var state_24634__$1 = (function (){var statearr_24645 = state_24634;
(statearr_24645[(11)] = inst_24623);

(statearr_24645[(10)] = inst_24604__$1);

return statearr_24645;
})();
var statearr_24646_24669 = state_24634__$1;
(statearr_24646_24669[(2)] = null);

(statearr_24646_24669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (9))){
var inst_24614 = (state_24634[(8)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24634__$1,(11),out,inst_24614);
} else {
if((state_val_24635 === (5))){
var inst_24628 = cljs.core.async.close_BANG_.call(null,out);
var state_24634__$1 = state_24634;
var statearr_24647_24670 = state_24634__$1;
(statearr_24647_24670[(2)] = inst_24628);

(statearr_24647_24670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (10))){
var inst_24626 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24648_24671 = state_24634__$1;
(statearr_24648_24671[(2)] = inst_24626);

(statearr_24648_24671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (8))){
var inst_24615 = (state_24634[(9)]);
var inst_24613 = (state_24634[(7)]);
var inst_24614 = (state_24634[(8)]);
var inst_24604 = (state_24634[(10)]);
var inst_24618 = (function (){var cs = inst_24604;
var vec__24609 = inst_24613;
var v = inst_24614;
var c = inst_24615;
return ((function (cs,vec__24609,v,c,inst_24615,inst_24613,inst_24614,inst_24604,state_val_24635,c__22508__auto___24662,out){
return (function (p1__24599_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24599_SHARP_);
});
;})(cs,vec__24609,v,c,inst_24615,inst_24613,inst_24614,inst_24604,state_val_24635,c__22508__auto___24662,out))
})();
var inst_24619 = cljs.core.filterv.call(null,inst_24618,inst_24604);
var inst_24604__$1 = inst_24619;
var state_24634__$1 = (function (){var statearr_24649 = state_24634;
(statearr_24649[(10)] = inst_24604__$1);

return statearr_24649;
})();
var statearr_24650_24672 = state_24634__$1;
(statearr_24650_24672[(2)] = null);

(statearr_24650_24672[(1)] = (2));


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
});})(c__22508__auto___24662,out))
;
return ((function (switch__22396__auto__,c__22508__auto___24662,out){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_24654 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24654[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_24654[(1)] = (1));

return statearr_24654;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_24634){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e24655){if((e24655 instanceof Object)){
var ex__22400__auto__ = e24655;
var statearr_24656_24673 = state_24634;
(statearr_24656_24673[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24674 = state_24634;
state_24634 = G__24674;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_24634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_24634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___24662,out))
})();
var state__22510__auto__ = (function (){var statearr_24657 = f__22509__auto__.call(null);
(statearr_24657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___24662);

return statearr_24657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___24662,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24675 = [];
var len__21393__auto___24724 = arguments.length;
var i__21394__auto___24725 = (0);
while(true){
if((i__21394__auto___24725 < len__21393__auto___24724)){
args24675.push((arguments[i__21394__auto___24725]));

var G__24726 = (i__21394__auto___24725 + (1));
i__21394__auto___24725 = G__24726;
continue;
} else {
}
break;
}

var G__24677 = args24675.length;
switch (G__24677) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24675.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22508__auto___24728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___24728,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___24728,out){
return (function (state_24701){
var state_val_24702 = (state_24701[(1)]);
if((state_val_24702 === (7))){
var inst_24683 = (state_24701[(7)]);
var inst_24683__$1 = (state_24701[(2)]);
var inst_24684 = (inst_24683__$1 == null);
var inst_24685 = cljs.core.not.call(null,inst_24684);
var state_24701__$1 = (function (){var statearr_24703 = state_24701;
(statearr_24703[(7)] = inst_24683__$1);

return statearr_24703;
})();
if(inst_24685){
var statearr_24704_24729 = state_24701__$1;
(statearr_24704_24729[(1)] = (8));

} else {
var statearr_24705_24730 = state_24701__$1;
(statearr_24705_24730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (1))){
var inst_24678 = (0);
var state_24701__$1 = (function (){var statearr_24706 = state_24701;
(statearr_24706[(8)] = inst_24678);

return statearr_24706;
})();
var statearr_24707_24731 = state_24701__$1;
(statearr_24707_24731[(2)] = null);

(statearr_24707_24731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (4))){
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24701__$1,(7),ch);
} else {
if((state_val_24702 === (6))){
var inst_24696 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24708_24732 = state_24701__$1;
(statearr_24708_24732[(2)] = inst_24696);

(statearr_24708_24732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (3))){
var inst_24698 = (state_24701[(2)]);
var inst_24699 = cljs.core.async.close_BANG_.call(null,out);
var state_24701__$1 = (function (){var statearr_24709 = state_24701;
(statearr_24709[(9)] = inst_24698);

return statearr_24709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24701__$1,inst_24699);
} else {
if((state_val_24702 === (2))){
var inst_24678 = (state_24701[(8)]);
var inst_24680 = (inst_24678 < n);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24680)){
var statearr_24710_24733 = state_24701__$1;
(statearr_24710_24733[(1)] = (4));

} else {
var statearr_24711_24734 = state_24701__$1;
(statearr_24711_24734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (11))){
var inst_24678 = (state_24701[(8)]);
var inst_24688 = (state_24701[(2)]);
var inst_24689 = (inst_24678 + (1));
var inst_24678__$1 = inst_24689;
var state_24701__$1 = (function (){var statearr_24712 = state_24701;
(statearr_24712[(8)] = inst_24678__$1);

(statearr_24712[(10)] = inst_24688);

return statearr_24712;
})();
var statearr_24713_24735 = state_24701__$1;
(statearr_24713_24735[(2)] = null);

(statearr_24713_24735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (9))){
var state_24701__$1 = state_24701;
var statearr_24714_24736 = state_24701__$1;
(statearr_24714_24736[(2)] = null);

(statearr_24714_24736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (5))){
var state_24701__$1 = state_24701;
var statearr_24715_24737 = state_24701__$1;
(statearr_24715_24737[(2)] = null);

(statearr_24715_24737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (10))){
var inst_24693 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24716_24738 = state_24701__$1;
(statearr_24716_24738[(2)] = inst_24693);

(statearr_24716_24738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (8))){
var inst_24683 = (state_24701[(7)]);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24701__$1,(11),out,inst_24683);
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
});})(c__22508__auto___24728,out))
;
return ((function (switch__22396__auto__,c__22508__auto___24728,out){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_24720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24720[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_24720[(1)] = (1));

return statearr_24720;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_24701){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e24721){if((e24721 instanceof Object)){
var ex__22400__auto__ = e24721;
var statearr_24722_24739 = state_24701;
(statearr_24722_24739[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24740 = state_24701;
state_24701 = G__24740;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_24701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_24701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___24728,out))
})();
var state__22510__auto__ = (function (){var statearr_24723 = f__22509__auto__.call(null);
(statearr_24723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___24728);

return statearr_24723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___24728,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24748 = (function (f,ch,meta24749){
this.f = f;
this.ch = ch;
this.meta24749 = meta24749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24750,meta24749__$1){
var self__ = this;
var _24750__$1 = this;
return (new cljs.core.async.t_cljs$core$async24748(self__.f,self__.ch,meta24749__$1));
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24750){
var self__ = this;
var _24750__$1 = this;
return self__.meta24749;
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24751 = (function (f,ch,meta24749,_,fn1,meta24752){
this.f = f;
this.ch = ch;
this.meta24749 = meta24749;
this._ = _;
this.fn1 = fn1;
this.meta24752 = meta24752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24753,meta24752__$1){
var self__ = this;
var _24753__$1 = this;
return (new cljs.core.async.t_cljs$core$async24751(self__.f,self__.ch,self__.meta24749,self__._,self__.fn1,meta24752__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24753){
var self__ = this;
var _24753__$1 = this;
return self__.meta24752;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24741_SHARP_){
return f1.call(null,(((p1__24741_SHARP_ == null))?null:self__.f.call(null,p1__24741_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24751.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24749","meta24749",-951873875,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24748","cljs.core.async/t_cljs$core$async24748",-623822021,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24752","meta24752",-1516728639,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24751";

cljs.core.async.t_cljs$core$async24751.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24751");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24751 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24751(f__$1,ch__$1,meta24749__$1,___$2,fn1__$1,meta24752){
return (new cljs.core.async.t_cljs$core$async24751(f__$1,ch__$1,meta24749__$1,___$2,fn1__$1,meta24752));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24751(self__.f,self__.ch,self__.meta24749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20273__auto__ = ret;
if(cljs.core.truth_(and__20273__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20273__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24749","meta24749",-951873875,null)], null);
});

cljs.core.async.t_cljs$core$async24748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24748";

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24748");
});

cljs.core.async.__GT_t_cljs$core$async24748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24748(f__$1,ch__$1,meta24749){
return (new cljs.core.async.t_cljs$core$async24748(f__$1,ch__$1,meta24749));
});

}

return (new cljs.core.async.t_cljs$core$async24748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24757 = (function (f,ch,meta24758){
this.f = f;
this.ch = ch;
this.meta24758 = meta24758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24759,meta24758__$1){
var self__ = this;
var _24759__$1 = this;
return (new cljs.core.async.t_cljs$core$async24757(self__.f,self__.ch,meta24758__$1));
});

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24759){
var self__ = this;
var _24759__$1 = this;
return self__.meta24758;
});

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24758","meta24758",-518829566,null)], null);
});

cljs.core.async.t_cljs$core$async24757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24757";

cljs.core.async.t_cljs$core$async24757.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24757");
});

cljs.core.async.__GT_t_cljs$core$async24757 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24757(f__$1,ch__$1,meta24758){
return (new cljs.core.async.t_cljs$core$async24757(f__$1,ch__$1,meta24758));
});

}

return (new cljs.core.async.t_cljs$core$async24757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24763 = (function (p,ch,meta24764){
this.p = p;
this.ch = ch;
this.meta24764 = meta24764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24765,meta24764__$1){
var self__ = this;
var _24765__$1 = this;
return (new cljs.core.async.t_cljs$core$async24763(self__.p,self__.ch,meta24764__$1));
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24765){
var self__ = this;
var _24765__$1 = this;
return self__.meta24764;
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24764","meta24764",1397673599,null)], null);
});

cljs.core.async.t_cljs$core$async24763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24763";

cljs.core.async.t_cljs$core$async24763.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24763");
});

cljs.core.async.__GT_t_cljs$core$async24763 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24763(p__$1,ch__$1,meta24764){
return (new cljs.core.async.t_cljs$core$async24763(p__$1,ch__$1,meta24764));
});

}

return (new cljs.core.async.t_cljs$core$async24763(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24766 = [];
var len__21393__auto___24810 = arguments.length;
var i__21394__auto___24811 = (0);
while(true){
if((i__21394__auto___24811 < len__21393__auto___24810)){
args24766.push((arguments[i__21394__auto___24811]));

var G__24812 = (i__21394__auto___24811 + (1));
i__21394__auto___24811 = G__24812;
continue;
} else {
}
break;
}

var G__24768 = args24766.length;
switch (G__24768) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24766.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22508__auto___24814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___24814,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___24814,out){
return (function (state_24789){
var state_val_24790 = (state_24789[(1)]);
if((state_val_24790 === (7))){
var inst_24785 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24791_24815 = state_24789__$1;
(statearr_24791_24815[(2)] = inst_24785);

(statearr_24791_24815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (1))){
var state_24789__$1 = state_24789;
var statearr_24792_24816 = state_24789__$1;
(statearr_24792_24816[(2)] = null);

(statearr_24792_24816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (4))){
var inst_24771 = (state_24789[(7)]);
var inst_24771__$1 = (state_24789[(2)]);
var inst_24772 = (inst_24771__$1 == null);
var state_24789__$1 = (function (){var statearr_24793 = state_24789;
(statearr_24793[(7)] = inst_24771__$1);

return statearr_24793;
})();
if(cljs.core.truth_(inst_24772)){
var statearr_24794_24817 = state_24789__$1;
(statearr_24794_24817[(1)] = (5));

} else {
var statearr_24795_24818 = state_24789__$1;
(statearr_24795_24818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (6))){
var inst_24771 = (state_24789[(7)]);
var inst_24776 = p.call(null,inst_24771);
var state_24789__$1 = state_24789;
if(cljs.core.truth_(inst_24776)){
var statearr_24796_24819 = state_24789__$1;
(statearr_24796_24819[(1)] = (8));

} else {
var statearr_24797_24820 = state_24789__$1;
(statearr_24797_24820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (3))){
var inst_24787 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24789__$1,inst_24787);
} else {
if((state_val_24790 === (2))){
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24789__$1,(4),ch);
} else {
if((state_val_24790 === (11))){
var inst_24779 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24798_24821 = state_24789__$1;
(statearr_24798_24821[(2)] = inst_24779);

(statearr_24798_24821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (9))){
var state_24789__$1 = state_24789;
var statearr_24799_24822 = state_24789__$1;
(statearr_24799_24822[(2)] = null);

(statearr_24799_24822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (5))){
var inst_24774 = cljs.core.async.close_BANG_.call(null,out);
var state_24789__$1 = state_24789;
var statearr_24800_24823 = state_24789__$1;
(statearr_24800_24823[(2)] = inst_24774);

(statearr_24800_24823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (10))){
var inst_24782 = (state_24789[(2)]);
var state_24789__$1 = (function (){var statearr_24801 = state_24789;
(statearr_24801[(8)] = inst_24782);

return statearr_24801;
})();
var statearr_24802_24824 = state_24789__$1;
(statearr_24802_24824[(2)] = null);

(statearr_24802_24824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (8))){
var inst_24771 = (state_24789[(7)]);
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24789__$1,(11),out,inst_24771);
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
});})(c__22508__auto___24814,out))
;
return ((function (switch__22396__auto__,c__22508__auto___24814,out){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_24806 = [null,null,null,null,null,null,null,null,null];
(statearr_24806[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_24806[(1)] = (1));

return statearr_24806;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_24789){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e24807){if((e24807 instanceof Object)){
var ex__22400__auto__ = e24807;
var statearr_24808_24825 = state_24789;
(statearr_24808_24825[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24826 = state_24789;
state_24789 = G__24826;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_24789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_24789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___24814,out))
})();
var state__22510__auto__ = (function (){var statearr_24809 = f__22509__auto__.call(null);
(statearr_24809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___24814);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___24814,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24827 = [];
var len__21393__auto___24830 = arguments.length;
var i__21394__auto___24831 = (0);
while(true){
if((i__21394__auto___24831 < len__21393__auto___24830)){
args24827.push((arguments[i__21394__auto___24831]));

var G__24832 = (i__21394__auto___24831 + (1));
i__21394__auto___24831 = G__24832;
continue;
} else {
}
break;
}

var G__24829 = args24827.length;
switch (G__24829) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24827.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto__){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto__){
return (function (state_24999){
var state_val_25000 = (state_24999[(1)]);
if((state_val_25000 === (7))){
var inst_24995 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25001_25042 = state_24999__$1;
(statearr_25001_25042[(2)] = inst_24995);

(statearr_25001_25042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (20))){
var inst_24965 = (state_24999[(7)]);
var inst_24976 = (state_24999[(2)]);
var inst_24977 = cljs.core.next.call(null,inst_24965);
var inst_24951 = inst_24977;
var inst_24952 = null;
var inst_24953 = (0);
var inst_24954 = (0);
var state_24999__$1 = (function (){var statearr_25002 = state_24999;
(statearr_25002[(8)] = inst_24976);

(statearr_25002[(9)] = inst_24951);

(statearr_25002[(10)] = inst_24952);

(statearr_25002[(11)] = inst_24953);

(statearr_25002[(12)] = inst_24954);

return statearr_25002;
})();
var statearr_25003_25043 = state_24999__$1;
(statearr_25003_25043[(2)] = null);

(statearr_25003_25043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (1))){
var state_24999__$1 = state_24999;
var statearr_25004_25044 = state_24999__$1;
(statearr_25004_25044[(2)] = null);

(statearr_25004_25044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (4))){
var inst_24940 = (state_24999[(13)]);
var inst_24940__$1 = (state_24999[(2)]);
var inst_24941 = (inst_24940__$1 == null);
var state_24999__$1 = (function (){var statearr_25005 = state_24999;
(statearr_25005[(13)] = inst_24940__$1);

return statearr_25005;
})();
if(cljs.core.truth_(inst_24941)){
var statearr_25006_25045 = state_24999__$1;
(statearr_25006_25045[(1)] = (5));

} else {
var statearr_25007_25046 = state_24999__$1;
(statearr_25007_25046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (15))){
var state_24999__$1 = state_24999;
var statearr_25011_25047 = state_24999__$1;
(statearr_25011_25047[(2)] = null);

(statearr_25011_25047[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (21))){
var state_24999__$1 = state_24999;
var statearr_25012_25048 = state_24999__$1;
(statearr_25012_25048[(2)] = null);

(statearr_25012_25048[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (13))){
var inst_24951 = (state_24999[(9)]);
var inst_24952 = (state_24999[(10)]);
var inst_24953 = (state_24999[(11)]);
var inst_24954 = (state_24999[(12)]);
var inst_24961 = (state_24999[(2)]);
var inst_24962 = (inst_24954 + (1));
var tmp25008 = inst_24951;
var tmp25009 = inst_24952;
var tmp25010 = inst_24953;
var inst_24951__$1 = tmp25008;
var inst_24952__$1 = tmp25009;
var inst_24953__$1 = tmp25010;
var inst_24954__$1 = inst_24962;
var state_24999__$1 = (function (){var statearr_25013 = state_24999;
(statearr_25013[(9)] = inst_24951__$1);

(statearr_25013[(14)] = inst_24961);

(statearr_25013[(10)] = inst_24952__$1);

(statearr_25013[(11)] = inst_24953__$1);

(statearr_25013[(12)] = inst_24954__$1);

return statearr_25013;
})();
var statearr_25014_25049 = state_24999__$1;
(statearr_25014_25049[(2)] = null);

(statearr_25014_25049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (22))){
var state_24999__$1 = state_24999;
var statearr_25015_25050 = state_24999__$1;
(statearr_25015_25050[(2)] = null);

(statearr_25015_25050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (6))){
var inst_24940 = (state_24999[(13)]);
var inst_24949 = f.call(null,inst_24940);
var inst_24950 = cljs.core.seq.call(null,inst_24949);
var inst_24951 = inst_24950;
var inst_24952 = null;
var inst_24953 = (0);
var inst_24954 = (0);
var state_24999__$1 = (function (){var statearr_25016 = state_24999;
(statearr_25016[(9)] = inst_24951);

(statearr_25016[(10)] = inst_24952);

(statearr_25016[(11)] = inst_24953);

(statearr_25016[(12)] = inst_24954);

return statearr_25016;
})();
var statearr_25017_25051 = state_24999__$1;
(statearr_25017_25051[(2)] = null);

(statearr_25017_25051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (17))){
var inst_24965 = (state_24999[(7)]);
var inst_24969 = cljs.core.chunk_first.call(null,inst_24965);
var inst_24970 = cljs.core.chunk_rest.call(null,inst_24965);
var inst_24971 = cljs.core.count.call(null,inst_24969);
var inst_24951 = inst_24970;
var inst_24952 = inst_24969;
var inst_24953 = inst_24971;
var inst_24954 = (0);
var state_24999__$1 = (function (){var statearr_25018 = state_24999;
(statearr_25018[(9)] = inst_24951);

(statearr_25018[(10)] = inst_24952);

(statearr_25018[(11)] = inst_24953);

(statearr_25018[(12)] = inst_24954);

return statearr_25018;
})();
var statearr_25019_25052 = state_24999__$1;
(statearr_25019_25052[(2)] = null);

(statearr_25019_25052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (3))){
var inst_24997 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24999__$1,inst_24997);
} else {
if((state_val_25000 === (12))){
var inst_24985 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25020_25053 = state_24999__$1;
(statearr_25020_25053[(2)] = inst_24985);

(statearr_25020_25053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (2))){
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24999__$1,(4),in$);
} else {
if((state_val_25000 === (23))){
var inst_24993 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25021_25054 = state_24999__$1;
(statearr_25021_25054[(2)] = inst_24993);

(statearr_25021_25054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (19))){
var inst_24980 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25022_25055 = state_24999__$1;
(statearr_25022_25055[(2)] = inst_24980);

(statearr_25022_25055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (11))){
var inst_24951 = (state_24999[(9)]);
var inst_24965 = (state_24999[(7)]);
var inst_24965__$1 = cljs.core.seq.call(null,inst_24951);
var state_24999__$1 = (function (){var statearr_25023 = state_24999;
(statearr_25023[(7)] = inst_24965__$1);

return statearr_25023;
})();
if(inst_24965__$1){
var statearr_25024_25056 = state_24999__$1;
(statearr_25024_25056[(1)] = (14));

} else {
var statearr_25025_25057 = state_24999__$1;
(statearr_25025_25057[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (9))){
var inst_24987 = (state_24999[(2)]);
var inst_24988 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24999__$1 = (function (){var statearr_25026 = state_24999;
(statearr_25026[(15)] = inst_24987);

return statearr_25026;
})();
if(cljs.core.truth_(inst_24988)){
var statearr_25027_25058 = state_24999__$1;
(statearr_25027_25058[(1)] = (21));

} else {
var statearr_25028_25059 = state_24999__$1;
(statearr_25028_25059[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (5))){
var inst_24943 = cljs.core.async.close_BANG_.call(null,out);
var state_24999__$1 = state_24999;
var statearr_25029_25060 = state_24999__$1;
(statearr_25029_25060[(2)] = inst_24943);

(statearr_25029_25060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (14))){
var inst_24965 = (state_24999[(7)]);
var inst_24967 = cljs.core.chunked_seq_QMARK_.call(null,inst_24965);
var state_24999__$1 = state_24999;
if(inst_24967){
var statearr_25030_25061 = state_24999__$1;
(statearr_25030_25061[(1)] = (17));

} else {
var statearr_25031_25062 = state_24999__$1;
(statearr_25031_25062[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (16))){
var inst_24983 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25032_25063 = state_24999__$1;
(statearr_25032_25063[(2)] = inst_24983);

(statearr_25032_25063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (10))){
var inst_24952 = (state_24999[(10)]);
var inst_24954 = (state_24999[(12)]);
var inst_24959 = cljs.core._nth.call(null,inst_24952,inst_24954);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24999__$1,(13),out,inst_24959);
} else {
if((state_val_25000 === (18))){
var inst_24965 = (state_24999[(7)]);
var inst_24974 = cljs.core.first.call(null,inst_24965);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24999__$1,(20),out,inst_24974);
} else {
if((state_val_25000 === (8))){
var inst_24953 = (state_24999[(11)]);
var inst_24954 = (state_24999[(12)]);
var inst_24956 = (inst_24954 < inst_24953);
var inst_24957 = inst_24956;
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24957)){
var statearr_25033_25064 = state_24999__$1;
(statearr_25033_25064[(1)] = (10));

} else {
var statearr_25034_25065 = state_24999__$1;
(statearr_25034_25065[(1)] = (11));

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
});})(c__22508__auto__))
;
return ((function (switch__22396__auto__,c__22508__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22397__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22397__auto____0 = (function (){
var statearr_25038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25038[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22397__auto__);

(statearr_25038[(1)] = (1));

return statearr_25038;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22397__auto____1 = (function (state_24999){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_24999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e25039){if((e25039 instanceof Object)){
var ex__22400__auto__ = e25039;
var statearr_25040_25066 = state_24999;
(statearr_25040_25066[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25067 = state_24999;
state_24999 = G__25067;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22397__auto__ = function(state_24999){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22397__auto____1.call(this,state_24999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22397__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22397__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto__))
})();
var state__22510__auto__ = (function (){var statearr_25041 = f__22509__auto__.call(null);
(statearr_25041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto__);

return statearr_25041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto__))
);

return c__22508__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25068 = [];
var len__21393__auto___25071 = arguments.length;
var i__21394__auto___25072 = (0);
while(true){
if((i__21394__auto___25072 < len__21393__auto___25071)){
args25068.push((arguments[i__21394__auto___25072]));

var G__25073 = (i__21394__auto___25072 + (1));
i__21394__auto___25072 = G__25073;
continue;
} else {
}
break;
}

var G__25070 = args25068.length;
switch (G__25070) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25068.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25075 = [];
var len__21393__auto___25078 = arguments.length;
var i__21394__auto___25079 = (0);
while(true){
if((i__21394__auto___25079 < len__21393__auto___25078)){
args25075.push((arguments[i__21394__auto___25079]));

var G__25080 = (i__21394__auto___25079 + (1));
i__21394__auto___25079 = G__25080;
continue;
} else {
}
break;
}

var G__25077 = args25075.length;
switch (G__25077) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25075.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25082 = [];
var len__21393__auto___25133 = arguments.length;
var i__21394__auto___25134 = (0);
while(true){
if((i__21394__auto___25134 < len__21393__auto___25133)){
args25082.push((arguments[i__21394__auto___25134]));

var G__25135 = (i__21394__auto___25134 + (1));
i__21394__auto___25134 = G__25135;
continue;
} else {
}
break;
}

var G__25084 = args25082.length;
switch (G__25084) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25082.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22508__auto___25137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___25137,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___25137,out){
return (function (state_25108){
var state_val_25109 = (state_25108[(1)]);
if((state_val_25109 === (7))){
var inst_25103 = (state_25108[(2)]);
var state_25108__$1 = state_25108;
var statearr_25110_25138 = state_25108__$1;
(statearr_25110_25138[(2)] = inst_25103);

(statearr_25110_25138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (1))){
var inst_25085 = null;
var state_25108__$1 = (function (){var statearr_25111 = state_25108;
(statearr_25111[(7)] = inst_25085);

return statearr_25111;
})();
var statearr_25112_25139 = state_25108__$1;
(statearr_25112_25139[(2)] = null);

(statearr_25112_25139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (4))){
var inst_25088 = (state_25108[(8)]);
var inst_25088__$1 = (state_25108[(2)]);
var inst_25089 = (inst_25088__$1 == null);
var inst_25090 = cljs.core.not.call(null,inst_25089);
var state_25108__$1 = (function (){var statearr_25113 = state_25108;
(statearr_25113[(8)] = inst_25088__$1);

return statearr_25113;
})();
if(inst_25090){
var statearr_25114_25140 = state_25108__$1;
(statearr_25114_25140[(1)] = (5));

} else {
var statearr_25115_25141 = state_25108__$1;
(statearr_25115_25141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (6))){
var state_25108__$1 = state_25108;
var statearr_25116_25142 = state_25108__$1;
(statearr_25116_25142[(2)] = null);

(statearr_25116_25142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (3))){
var inst_25105 = (state_25108[(2)]);
var inst_25106 = cljs.core.async.close_BANG_.call(null,out);
var state_25108__$1 = (function (){var statearr_25117 = state_25108;
(statearr_25117[(9)] = inst_25105);

return statearr_25117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25108__$1,inst_25106);
} else {
if((state_val_25109 === (2))){
var state_25108__$1 = state_25108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25108__$1,(4),ch);
} else {
if((state_val_25109 === (11))){
var inst_25088 = (state_25108[(8)]);
var inst_25097 = (state_25108[(2)]);
var inst_25085 = inst_25088;
var state_25108__$1 = (function (){var statearr_25118 = state_25108;
(statearr_25118[(10)] = inst_25097);

(statearr_25118[(7)] = inst_25085);

return statearr_25118;
})();
var statearr_25119_25143 = state_25108__$1;
(statearr_25119_25143[(2)] = null);

(statearr_25119_25143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (9))){
var inst_25088 = (state_25108[(8)]);
var state_25108__$1 = state_25108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25108__$1,(11),out,inst_25088);
} else {
if((state_val_25109 === (5))){
var inst_25085 = (state_25108[(7)]);
var inst_25088 = (state_25108[(8)]);
var inst_25092 = cljs.core._EQ_.call(null,inst_25088,inst_25085);
var state_25108__$1 = state_25108;
if(inst_25092){
var statearr_25121_25144 = state_25108__$1;
(statearr_25121_25144[(1)] = (8));

} else {
var statearr_25122_25145 = state_25108__$1;
(statearr_25122_25145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (10))){
var inst_25100 = (state_25108[(2)]);
var state_25108__$1 = state_25108;
var statearr_25123_25146 = state_25108__$1;
(statearr_25123_25146[(2)] = inst_25100);

(statearr_25123_25146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25109 === (8))){
var inst_25085 = (state_25108[(7)]);
var tmp25120 = inst_25085;
var inst_25085__$1 = tmp25120;
var state_25108__$1 = (function (){var statearr_25124 = state_25108;
(statearr_25124[(7)] = inst_25085__$1);

return statearr_25124;
})();
var statearr_25125_25147 = state_25108__$1;
(statearr_25125_25147[(2)] = null);

(statearr_25125_25147[(1)] = (2));


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
});})(c__22508__auto___25137,out))
;
return ((function (switch__22396__auto__,c__22508__auto___25137,out){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_25129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25129[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_25129[(1)] = (1));

return statearr_25129;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_25108){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_25108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e25130){if((e25130 instanceof Object)){
var ex__22400__auto__ = e25130;
var statearr_25131_25148 = state_25108;
(statearr_25131_25148[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25149 = state_25108;
state_25108 = G__25149;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_25108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_25108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___25137,out))
})();
var state__22510__auto__ = (function (){var statearr_25132 = f__22509__auto__.call(null);
(statearr_25132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___25137);

return statearr_25132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___25137,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25150 = [];
var len__21393__auto___25220 = arguments.length;
var i__21394__auto___25221 = (0);
while(true){
if((i__21394__auto___25221 < len__21393__auto___25220)){
args25150.push((arguments[i__21394__auto___25221]));

var G__25222 = (i__21394__auto___25221 + (1));
i__21394__auto___25221 = G__25222;
continue;
} else {
}
break;
}

var G__25152 = args25150.length;
switch (G__25152) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25150.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22508__auto___25224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___25224,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___25224,out){
return (function (state_25190){
var state_val_25191 = (state_25190[(1)]);
if((state_val_25191 === (7))){
var inst_25186 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25192_25225 = state_25190__$1;
(statearr_25192_25225[(2)] = inst_25186);

(statearr_25192_25225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (1))){
var inst_25153 = (new Array(n));
var inst_25154 = inst_25153;
var inst_25155 = (0);
var state_25190__$1 = (function (){var statearr_25193 = state_25190;
(statearr_25193[(7)] = inst_25155);

(statearr_25193[(8)] = inst_25154);

return statearr_25193;
})();
var statearr_25194_25226 = state_25190__$1;
(statearr_25194_25226[(2)] = null);

(statearr_25194_25226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (4))){
var inst_25158 = (state_25190[(9)]);
var inst_25158__$1 = (state_25190[(2)]);
var inst_25159 = (inst_25158__$1 == null);
var inst_25160 = cljs.core.not.call(null,inst_25159);
var state_25190__$1 = (function (){var statearr_25195 = state_25190;
(statearr_25195[(9)] = inst_25158__$1);

return statearr_25195;
})();
if(inst_25160){
var statearr_25196_25227 = state_25190__$1;
(statearr_25196_25227[(1)] = (5));

} else {
var statearr_25197_25228 = state_25190__$1;
(statearr_25197_25228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (15))){
var inst_25180 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25198_25229 = state_25190__$1;
(statearr_25198_25229[(2)] = inst_25180);

(statearr_25198_25229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (13))){
var state_25190__$1 = state_25190;
var statearr_25199_25230 = state_25190__$1;
(statearr_25199_25230[(2)] = null);

(statearr_25199_25230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (6))){
var inst_25155 = (state_25190[(7)]);
var inst_25176 = (inst_25155 > (0));
var state_25190__$1 = state_25190;
if(cljs.core.truth_(inst_25176)){
var statearr_25200_25231 = state_25190__$1;
(statearr_25200_25231[(1)] = (12));

} else {
var statearr_25201_25232 = state_25190__$1;
(statearr_25201_25232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (3))){
var inst_25188 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25190__$1,inst_25188);
} else {
if((state_val_25191 === (12))){
var inst_25154 = (state_25190[(8)]);
var inst_25178 = cljs.core.vec.call(null,inst_25154);
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25190__$1,(15),out,inst_25178);
} else {
if((state_val_25191 === (2))){
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25190__$1,(4),ch);
} else {
if((state_val_25191 === (11))){
var inst_25170 = (state_25190[(2)]);
var inst_25171 = (new Array(n));
var inst_25154 = inst_25171;
var inst_25155 = (0);
var state_25190__$1 = (function (){var statearr_25202 = state_25190;
(statearr_25202[(7)] = inst_25155);

(statearr_25202[(8)] = inst_25154);

(statearr_25202[(10)] = inst_25170);

return statearr_25202;
})();
var statearr_25203_25233 = state_25190__$1;
(statearr_25203_25233[(2)] = null);

(statearr_25203_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (9))){
var inst_25154 = (state_25190[(8)]);
var inst_25168 = cljs.core.vec.call(null,inst_25154);
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25190__$1,(11),out,inst_25168);
} else {
if((state_val_25191 === (5))){
var inst_25155 = (state_25190[(7)]);
var inst_25158 = (state_25190[(9)]);
var inst_25154 = (state_25190[(8)]);
var inst_25163 = (state_25190[(11)]);
var inst_25162 = (inst_25154[inst_25155] = inst_25158);
var inst_25163__$1 = (inst_25155 + (1));
var inst_25164 = (inst_25163__$1 < n);
var state_25190__$1 = (function (){var statearr_25204 = state_25190;
(statearr_25204[(12)] = inst_25162);

(statearr_25204[(11)] = inst_25163__$1);

return statearr_25204;
})();
if(cljs.core.truth_(inst_25164)){
var statearr_25205_25234 = state_25190__$1;
(statearr_25205_25234[(1)] = (8));

} else {
var statearr_25206_25235 = state_25190__$1;
(statearr_25206_25235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (14))){
var inst_25183 = (state_25190[(2)]);
var inst_25184 = cljs.core.async.close_BANG_.call(null,out);
var state_25190__$1 = (function (){var statearr_25208 = state_25190;
(statearr_25208[(13)] = inst_25183);

return statearr_25208;
})();
var statearr_25209_25236 = state_25190__$1;
(statearr_25209_25236[(2)] = inst_25184);

(statearr_25209_25236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (10))){
var inst_25174 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25210_25237 = state_25190__$1;
(statearr_25210_25237[(2)] = inst_25174);

(statearr_25210_25237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (8))){
var inst_25154 = (state_25190[(8)]);
var inst_25163 = (state_25190[(11)]);
var tmp25207 = inst_25154;
var inst_25154__$1 = tmp25207;
var inst_25155 = inst_25163;
var state_25190__$1 = (function (){var statearr_25211 = state_25190;
(statearr_25211[(7)] = inst_25155);

(statearr_25211[(8)] = inst_25154__$1);

return statearr_25211;
})();
var statearr_25212_25238 = state_25190__$1;
(statearr_25212_25238[(2)] = null);

(statearr_25212_25238[(1)] = (2));


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
});})(c__22508__auto___25224,out))
;
return ((function (switch__22396__auto__,c__22508__auto___25224,out){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_25216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25216[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_25216[(1)] = (1));

return statearr_25216;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_25190){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_25190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object)){
var ex__22400__auto__ = e25217;
var statearr_25218_25239 = state_25190;
(statearr_25218_25239[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25240 = state_25190;
state_25190 = G__25240;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_25190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_25190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___25224,out))
})();
var state__22510__auto__ = (function (){var statearr_25219 = f__22509__auto__.call(null);
(statearr_25219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___25224);

return statearr_25219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___25224,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25241 = [];
var len__21393__auto___25315 = arguments.length;
var i__21394__auto___25316 = (0);
while(true){
if((i__21394__auto___25316 < len__21393__auto___25315)){
args25241.push((arguments[i__21394__auto___25316]));

var G__25317 = (i__21394__auto___25316 + (1));
i__21394__auto___25316 = G__25317;
continue;
} else {
}
break;
}

var G__25243 = args25241.length;
switch (G__25243) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25241.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22508__auto___25319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22508__auto___25319,out){
return (function (){
var f__22509__auto__ = (function (){var switch__22396__auto__ = ((function (c__22508__auto___25319,out){
return (function (state_25285){
var state_val_25286 = (state_25285[(1)]);
if((state_val_25286 === (7))){
var inst_25281 = (state_25285[(2)]);
var state_25285__$1 = state_25285;
var statearr_25287_25320 = state_25285__$1;
(statearr_25287_25320[(2)] = inst_25281);

(statearr_25287_25320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (1))){
var inst_25244 = [];
var inst_25245 = inst_25244;
var inst_25246 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25285__$1 = (function (){var statearr_25288 = state_25285;
(statearr_25288[(7)] = inst_25245);

(statearr_25288[(8)] = inst_25246);

return statearr_25288;
})();
var statearr_25289_25321 = state_25285__$1;
(statearr_25289_25321[(2)] = null);

(statearr_25289_25321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (4))){
var inst_25249 = (state_25285[(9)]);
var inst_25249__$1 = (state_25285[(2)]);
var inst_25250 = (inst_25249__$1 == null);
var inst_25251 = cljs.core.not.call(null,inst_25250);
var state_25285__$1 = (function (){var statearr_25290 = state_25285;
(statearr_25290[(9)] = inst_25249__$1);

return statearr_25290;
})();
if(inst_25251){
var statearr_25291_25322 = state_25285__$1;
(statearr_25291_25322[(1)] = (5));

} else {
var statearr_25292_25323 = state_25285__$1;
(statearr_25292_25323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (15))){
var inst_25275 = (state_25285[(2)]);
var state_25285__$1 = state_25285;
var statearr_25293_25324 = state_25285__$1;
(statearr_25293_25324[(2)] = inst_25275);

(statearr_25293_25324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (13))){
var state_25285__$1 = state_25285;
var statearr_25294_25325 = state_25285__$1;
(statearr_25294_25325[(2)] = null);

(statearr_25294_25325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (6))){
var inst_25245 = (state_25285[(7)]);
var inst_25270 = inst_25245.length;
var inst_25271 = (inst_25270 > (0));
var state_25285__$1 = state_25285;
if(cljs.core.truth_(inst_25271)){
var statearr_25295_25326 = state_25285__$1;
(statearr_25295_25326[(1)] = (12));

} else {
var statearr_25296_25327 = state_25285__$1;
(statearr_25296_25327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (3))){
var inst_25283 = (state_25285[(2)]);
var state_25285__$1 = state_25285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25285__$1,inst_25283);
} else {
if((state_val_25286 === (12))){
var inst_25245 = (state_25285[(7)]);
var inst_25273 = cljs.core.vec.call(null,inst_25245);
var state_25285__$1 = state_25285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25285__$1,(15),out,inst_25273);
} else {
if((state_val_25286 === (2))){
var state_25285__$1 = state_25285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25285__$1,(4),ch);
} else {
if((state_val_25286 === (11))){
var inst_25249 = (state_25285[(9)]);
var inst_25253 = (state_25285[(10)]);
var inst_25263 = (state_25285[(2)]);
var inst_25264 = [];
var inst_25265 = inst_25264.push(inst_25249);
var inst_25245 = inst_25264;
var inst_25246 = inst_25253;
var state_25285__$1 = (function (){var statearr_25297 = state_25285;
(statearr_25297[(11)] = inst_25265);

(statearr_25297[(7)] = inst_25245);

(statearr_25297[(12)] = inst_25263);

(statearr_25297[(8)] = inst_25246);

return statearr_25297;
})();
var statearr_25298_25328 = state_25285__$1;
(statearr_25298_25328[(2)] = null);

(statearr_25298_25328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (9))){
var inst_25245 = (state_25285[(7)]);
var inst_25261 = cljs.core.vec.call(null,inst_25245);
var state_25285__$1 = state_25285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25285__$1,(11),out,inst_25261);
} else {
if((state_val_25286 === (5))){
var inst_25246 = (state_25285[(8)]);
var inst_25249 = (state_25285[(9)]);
var inst_25253 = (state_25285[(10)]);
var inst_25253__$1 = f.call(null,inst_25249);
var inst_25254 = cljs.core._EQ_.call(null,inst_25253__$1,inst_25246);
var inst_25255 = cljs.core.keyword_identical_QMARK_.call(null,inst_25246,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25256 = (inst_25254) || (inst_25255);
var state_25285__$1 = (function (){var statearr_25299 = state_25285;
(statearr_25299[(10)] = inst_25253__$1);

return statearr_25299;
})();
if(cljs.core.truth_(inst_25256)){
var statearr_25300_25329 = state_25285__$1;
(statearr_25300_25329[(1)] = (8));

} else {
var statearr_25301_25330 = state_25285__$1;
(statearr_25301_25330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (14))){
var inst_25278 = (state_25285[(2)]);
var inst_25279 = cljs.core.async.close_BANG_.call(null,out);
var state_25285__$1 = (function (){var statearr_25303 = state_25285;
(statearr_25303[(13)] = inst_25278);

return statearr_25303;
})();
var statearr_25304_25331 = state_25285__$1;
(statearr_25304_25331[(2)] = inst_25279);

(statearr_25304_25331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (10))){
var inst_25268 = (state_25285[(2)]);
var state_25285__$1 = state_25285;
var statearr_25305_25332 = state_25285__$1;
(statearr_25305_25332[(2)] = inst_25268);

(statearr_25305_25332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25286 === (8))){
var inst_25245 = (state_25285[(7)]);
var inst_25249 = (state_25285[(9)]);
var inst_25253 = (state_25285[(10)]);
var inst_25258 = inst_25245.push(inst_25249);
var tmp25302 = inst_25245;
var inst_25245__$1 = tmp25302;
var inst_25246 = inst_25253;
var state_25285__$1 = (function (){var statearr_25306 = state_25285;
(statearr_25306[(14)] = inst_25258);

(statearr_25306[(7)] = inst_25245__$1);

(statearr_25306[(8)] = inst_25246);

return statearr_25306;
})();
var statearr_25307_25333 = state_25285__$1;
(statearr_25307_25333[(2)] = null);

(statearr_25307_25333[(1)] = (2));


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
});})(c__22508__auto___25319,out))
;
return ((function (switch__22396__auto__,c__22508__auto___25319,out){
return (function() {
var cljs$core$async$state_machine__22397__auto__ = null;
var cljs$core$async$state_machine__22397__auto____0 = (function (){
var statearr_25311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25311[(0)] = cljs$core$async$state_machine__22397__auto__);

(statearr_25311[(1)] = (1));

return statearr_25311;
});
var cljs$core$async$state_machine__22397__auto____1 = (function (state_25285){
while(true){
var ret_value__22398__auto__ = (function (){try{while(true){
var result__22399__auto__ = switch__22396__auto__.call(null,state_25285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22399__auto__;
}
break;
}
}catch (e25312){if((e25312 instanceof Object)){
var ex__22400__auto__ = e25312;
var statearr_25313_25334 = state_25285;
(statearr_25313_25334[(5)] = ex__22400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25335 = state_25285;
state_25285 = G__25335;
continue;
} else {
return ret_value__22398__auto__;
}
break;
}
});
cljs$core$async$state_machine__22397__auto__ = function(state_25285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22397__auto____1.call(this,state_25285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22397__auto____0;
cljs$core$async$state_machine__22397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22397__auto____1;
return cljs$core$async$state_machine__22397__auto__;
})()
;})(switch__22396__auto__,c__22508__auto___25319,out))
})();
var state__22510__auto__ = (function (){var statearr_25314 = f__22509__auto__.call(null);
(statearr_25314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22508__auto___25319);

return statearr_25314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22510__auto__);
});})(c__22508__auto___25319,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1483227851985