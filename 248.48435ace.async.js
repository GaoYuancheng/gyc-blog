"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[248],{30125:function(O,r){var e=function(){console.log("this is tool1")};r.Z=e},11982:function(O,r,e){var l=e(28152),C=e.n(l),y=e(50959),n=function(){var j=(0,y.useState)({}),v=C()(j,2),s=v[0],E=v[1];return{state:s}};r.Z=n},17248:function(O,r,e){e.r(r),e.d(r,{ClickWrap:function(){return y},Foo:function(){return j},GModal:function(){return b},GSelect:function(){return K},tool1:function(){return U.Z},useHooks1:function(){return $.Z}});var l=e(50959),C=function(o){var g=o.children,d=o.onClick,c=(0,l.useRef)(!1),h=l.cloneElement(g,{onMouseLeave:function(){c.current=!1},onMouseEnter:function(){c.current=!0}});return(0,l.useEffect)(function(){var a=document.body,i=function(t){c.current||d==null||d(t)};return a.addEventListener("click",i),function(){a.removeEventListener("click",i)}},[]),h},y=C,n=e(11527),x=function(o){return(0,n.jsx)("h4",{children:o.title})},j=x,v=e(77117),s=e.n(v),E=e(28152),D=e.n(E),I=e(95530),L=e.n(I),T=e(69243),R=e.n(T),N=e(10422),H=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],F=function(o){var g=o.onClose,d=o.className,c=o.title,h=o.header,a=h===void 0?!0:h,i=o.open,u=i===void 0?!0:i,t=o.style,f=o.targetNode,z=o.children,M=o.afterClose,W=o.destroyOnClose,J=W===void 0?!0:W,Q=L()(o,H),p=(0,l.useRef)(null),V=(0,l.useState)(!1),P=D()(V,2),X=P[0],Y=P[1],_=(0,l.useState)({}),G=D()(_,2),w=G[0],q=G[1],Z=(t==null?void 0:t.height)||400,k=(t==null?void 0:t.width)||520,ee=(t==null?void 0:t.top)||(window.innerHeight-Z)/2,ne=(t==null?void 0:t.left)||(window.innerWidth-k)/2,oe=(0,n.jsx)("div",s()(s()({className:R()("gModal",d),style:s()(s()(s()({width:k,height:Z},t),w),{},{display:u?"block":"none"})},Q),{},{children:(0,n.jsxs)("div",{className:"gModalContent",style:{},children:[a&&(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)("div",{className:"title",children:c}),(0,n.jsx)("div",{className:"closeIcon",children:(0,n.jsx)("div",{className:"closeImg",onClick:g,children:"x"})})]}),(0,n.jsx)("div",{className:"content",children:z})]})}));if((0,l.useEffect)(function(){u?(q({top:ee,left:ne}),Y(!0)):M==null||M()},[u]),!X)return null;var A=oe;return J?u?(0,n.jsx)("div",{ref:p,children:N.createPortal(A,f?f(p.current):document.body)}):null:(0,n.jsx)("div",{ref:p,children:N.createPortal(A,f?f(p.current):document.body)})},b=F,m=e(89293),B=function(){return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(m.Z.Option,{value:1,children:"1"}),(0,n.jsx)(m.Z.Option,{value:12,children:"12"}),(0,n.jsx)(m.Z.Option,{value:123,children:"123"})]})},K=B,U=e(30125),$=e(11982)}}]);
