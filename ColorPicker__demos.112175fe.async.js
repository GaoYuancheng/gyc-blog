"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[678,354],{29854:function(x,r,e){e.r(r);var l=e(58354),P=e(50959),C=e(11527),o=function(){var g=function(E){console.log("onChange",E)};return(0,C.jsx)(l.ColorPicker,{onChange:g,defaultValue:"#ffffff"})};r.default=o},90816:function(x,r,e){e.r(r);var l=e(28152),P=e.n(l),C=e(58354),o=e(50959),h=e(11527),g=function(){var E=(0,o.useState)("#ffffff"),y=P()(E,2),j=y[0],d=y[1],S=function(I){d(I)};return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:j}),(0,h.jsx)(C.ColorPicker,{value:j,onChange:S})]})};r.default=g},30125:function(x,r){var e=function(){console.log("this is tool1")};r.Z=e},58354:function(x,r,e){e.r(r),e.d(r,{ClickWrap:function(){return C},ColorPicker:function(){return g},Foo:function(){return y},GModal:function(){return $},GSelect:function(){return z},tool1:function(){return A.Z},tool2:function(){return Q}});var l=e(50959),P=function(n){var v=n.children,s=n.onClick,c=(0,l.useRef)(!1),m=l.cloneElement(v,{onMouseLeave:function(){c.current=!1},onMouseEnter:function(){c.current=!0}});return(0,l.useEffect)(function(){var u=document.body,i=function(t){c.current||s==null||s(t)};return u.addEventListener("click",i),function(){u.removeEventListener("click",i)}},[]),m},C=P,o=e(11527),h=function(n){var v=n.value,s=n.onChange,c=n.defaultValue,m=n.disabled,u=(0,l.useRef)(),i=function(t){u.current.value=t};return(0,l.useEffect)(function(){i(v)},[v]),(0,l.useEffect)(function(){c&&!v&&i(c)},[c]),(0,o.jsx)("div",{children:(0,o.jsx)("input",{ref:u,type:"color",onChange:function(t){s==null||s(t.target.value)},disabled:m})})},g=h,D=function(){console.log("util1")},E=function(n){return(0,A.Z)(),D(),(0,o.jsx)("h4",{children:n.title})},y=E,j=e(77117),d=e.n(j),S=e(28152),W=e.n(S),I=e(95530),K=e.n(I),U=e(69243),F=e.n(U),R=e(10422),Z=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],V=function(n){var v=n.onClose,s=n.className,c=n.title,m=n.header,u=m===void 0?!0:m,i=n.open,f=i===void 0?!0:i,t=n.style,M=n.targetNode,X=n.children,N=n.afterClose,L=n.destroyOnClose,Y=L===void 0?!0:L,b=K()(n,Z),O=(0,l.useRef)(null),w=(0,l.useState)(!1),T=W()(w,2),q=T[0],ee=T[1],ne=(0,l.useState)({}),G=W()(ne,2),oe=G[0],te=G[1],B=(t==null?void 0:t.height)||400,_=(t==null?void 0:t.width)||520,le=(t==null?void 0:t.top)||(window.innerHeight-B)/2,re=(t==null?void 0:t.left)||(window.innerWidth-_)/2,ae=(0,o.jsx)("div",d()(d()({className:F()("gModal",s),style:d()(d()(d()({width:_,height:B},t),oe),{},{display:f?"block":"none"})},b),{},{children:(0,o.jsxs)("div",{className:"gModalContent",style:{},children:[u&&(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("div",{className:"title",children:c}),(0,o.jsx)("div",{className:"closeIcon",children:(0,o.jsx)("div",{className:"closeImg",onClick:v,children:"x"})})]}),(0,o.jsx)("div",{className:"content",children:X})]})}));if((0,l.useEffect)(function(){f?(te({top:le,left:re}),ee(!0)):N==null||N()},[f]),!q)return null;var k=ae;return Y?f?(0,o.jsx)("div",{ref:O,children:R.createPortal(k,M?M(O.current):document.body)}):null:(0,o.jsx)("div",{ref:O,children:R.createPortal(k,M?M(O.current):document.body)})},$=V,p=e(89293),H=function(){return(0,o.jsxs)(p.Z,{className:"gselect",children:[(0,o.jsx)(p.Z.Option,{value:1,children:"1"}),(0,o.jsx)(p.Z.Option,{value:12,children:"12"}),(0,o.jsx)(p.Z.Option,{value:123,children:"123"})]})},se=function(){console.log("GSelectFunc")},z=H,A=e(30125);function J(a){console.log("->",a==null?void 0:a.sex)}var Q=J}}]);
