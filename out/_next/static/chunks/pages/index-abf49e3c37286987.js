(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(53678)}])},66116:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(51438),a=t(52951),i=t(88029),o=t(16567),s=t(85893),l=t(67294),c=t(33756),u=t(65392);var d=t(47568),h=t(70655),f=t(26608),p=t(14205),v=t(32587);function m(e){return x.apply(this,arguments)}function x(){return(x=(0,d.Z)((function(e){var n,t,r,a,i;return(0,h.__generator)(this,(function(o){return e.createDefaultCamera(!0,!0),(n=e.cameras.pop()).name="arcCam",n.alpha=3,n.beta=1,n.useFramingBehavior=!0,(t=n.getBehaviorByName("Framing")).framingTime=0,t.elevationReturnTime=-1,r=e.getWorldExtends(),t.zoomOnBoundingInfo(r.min,r.max),n.pinchPrecision=200/n.radius,n.lowerRadiusLimit=50,n.upperRadiusLimit=1*n.radius,n.radius=800,n.wheelDeltaPercentage=.01,n.pinchDeltaPercentage=.01,n.attachControl(!0,!0),n.panningSensibility=6.5,a=new v.e("hemi",0,e),e.lights.push(a),i=e.createDefaultEnvironment(),e.environmentTexture=new u.BtG("/textures/studio.env",e),i.setMainColor(u.Wot.Gray()),e.cameras[0]=n,[2,n]}))}))).apply(this,arguments)}t(60652);function _(e){return g.apply(this,arguments)}function g(){return(g=(0,d.Z)((function(e){var n,t;return(0,h.__generator)(this,(function(r){return n=new XMLHttpRequest,t=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"binary",mode:"cors"}),n.open("GET",e,t),n.send(),n.onload=function(){200===n.status||console.log("Error:"+n.status)},[2]}))}))).apply(this,arguments)}function w(e,n){return b.apply(this,arguments)}function b(){return(b=(0,d.Z)((function(e,n){var t;return(0,h.__generator)(this,(function(r){switch(r.label){case 0:return t=e.getNodeByName("__root__"),[4,u.n0n.LoadAssetContainerAsync(n).then((function(e){var n=e.meshes[0];return n.rotationQuaternion=null,n.rotate(u.RDh.X,Math.PI/2,u.TaI.LOCAL),e.materials.forEach((function(e,n){e.clearCoat.isEnabled=!0,e.clearCoat.intensity=1,e.clearCoat.roughness=.5})),e}))];case 1:return r.sent().addAllToScene(),e.render(!0,!0),null!=t&&(t.dispose(),e.render(!0,!0)),[2]}}))}))).apply(this,arguments)}function y(e,n){var t=u.n0n.LoadAssetContainer(n,"",e,(function(n){var t=n.meshes[0];return t.rotationQuaternion=null,t.rotate(u.RDh.X,Math.PI/2,u.TaI.LOCAL),n.materials.forEach((function(e,n){e.clearCoat.isEnabled=!0,e.clearCoat.intensity=1,e.clearCoat.roughness=.5})),n.addAllToScene(),e.rootNodes[0].dispose(),e.render(!0,!0),n}));return e.render(!0,!0),t}function C(){return(C=(0,d.Z)((function(e,n,t){var r,a,i,o,s,l,c,u,d,v;return(0,h.__generator)(this,(function(h){switch(h.label){case 0:return r=!0,i=!1,[4,w(n,t[a=0])];case 1:return h.sent(),[4,m(n)];case 2:return o=h.sent(),n.render(!0,!0),e.hideLoadingUI(),[4,t.map((function(e){return _(e)}))];case 3:return h.sent(),n.render(!0,!0),s=function(){o.update(),r&&(r=!r,n.executeWhenReady((function(){return r=!0})),n.render(!0,!0))},e.runRenderLoop(s),o.onViewMatrixChangedObservable.add((function(){r=!0})),l=f.in.CreateFullscreenUI("UI"),(c=new f.eL("stackPanel")).isVertical=!1,c.height="100px",c.fontSize="14px",c.horizontalAlignment=f.oT.HORIZONTAL_ALIGNMENT_CENTER,(u=new f.eL("stackOutside")).verticalAlignment=f.oT.VERTICAL_ALIGNMENT_TOP,u.addControl(c),l.addControl(u),(d=f.zx.CreateSimpleButton("Play","Play")).width="50px",d.height="25px",d.color="white",d.background="gray",d.onPointerDownObservable.add((function(){(i=!i)?(d.textBlock.text="Pause",v.handle=setInterval((function(){a=++a%t.length,v.value=a}),83)):(d.textBlock.text="Play",clearInterval(v.handle),n.render(!0,!0))})),c.addControl(d),(v=new f.iR("FrameSlider")).value=a,v.minimum=0,v.maximum=t.length-1,v.step=1,v.isThumbCircle=!0,v.isThumbClamped=!0,v.height="20px",v.width="200px",v.onValueChangedObservable.add((function(e){y(n,t[e]),a=e})),v.onPointerDownObservable.add((function(){i&&(d.textBlock.text="Play",clearInterval(v.handle))})),c.addControl(v),v.value=a,n.onKeyboardObservable.add((function(e){if(e.type===p.OG.KEYDOWN)switch(e.event.key){case"z":i&&(clearInterval(v.handle),d.textBlock.text="Play",i=!i),--a<0&&(a=t.length-1),v.value=a;break;case"x":i&&(clearInterval(v.handle),d.textBlock.text="Play",i=!i),a=++a%t.length,v.value=a}})),[2,o]}}))}))).apply(this,arguments)}var N=function(e){(0,i.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,a.Z)(t,[{key:"onSceneMount",value:function(e){var n=e.scene,t=n.getEngine(),r=function(e){var n=e.scenesRoot,t=e.startNum,r=e.numFiles,a=e.filePrefix;return Array.from(new Array(r),(function(e,n){return n+t})).map((function(e){return n+a+e+".glb"}))}(this);t.displayLoadingUI(),new u.YfP("RequiredCam",new u.Pa4(0,1,0),n),function(e,n,t){C.apply(this,arguments)}(t,n,r)}},{key:"render",value:function(){return(0,s.jsx)(c.D4V,{antialias:!0,adaptToDeviceRatio:!0,canvasId:this.props.canvasId,children:(0,s.jsx)(c.xsS,{onSceneMount:this.onSceneMount,scenesRoot:this.props.scenesRoot,startNum:this.props.startNum,numFiles:this.props.numFiles,filePrefix:this.props.filePrefix})})}}]),t}(l.Component);N.defaultProps={scenesRoot:"https://cdn.glitch.me/",startNum:1,numFiles:100,filePrefix:"7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"}},92204:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(85893),a=t(9008),i=t.n(a);function o(e){return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}var s=t(25675),l=t.n(s),c=t(33952),u=t.n(c);function d(){return(0,r.jsxs)("footer",{className:u().footer,children:["Made with\xa0",(0,r.jsx)(l(),{priority:!0,src:"/netliheart.svg",alt:"Netlify Logo",className:u().logo,width:20,height:20}),"\xa0by",(0,r.jsx)("strong",{children:"\xa0MinesBioImaging"})]})}var h=t(41664),f=t.n(h),p=t(19202),v=t.n(p);function m(){return(0,r.jsx)("div",{className:v().navbar,children:(0,r.jsxs)("div",{className:v().dropdown,children:[(0,r.jsx)("button",{className:v().dropbtn,children:"Large Targets"}),(0,r.jsxs)("div",{className:v().dropdown_content,children:[(0,r.jsx)(f(),{href:"/",passHref:!0,children:"BCell"}),(0,r.jsx)(f(),{href:"/eat_d3HL60",passHref:!0,children:"d3HL60"}),(0,r.jsx)(f(),{href:"/eat_Wil2S",passHref:!0,children:"Wil2s"})]})]})})}function x(e){var n=e.children,t=e.title,a=void 0===t?"The all new BabylonJS-Viewer!":t;return(0,r.jsxs)("div",{children:[(0,r.jsx)(o,{title:a}),(0,r.jsx)(m,{}),(0,r.jsx)("main",{children:n}),(0,r.jsx)(d,{})]})}},53678:function(e,n,t){"use strict";t.r(n),t.d(n,{Home:function(){return o},default:function(){return o}});var r=t(85893),a=t(92204),i=t(66116);function o(){return(0,r.jsxs)(a.Z,{title:"Babylon-Viewer",children:[(0,r.jsx)("strong",{children:"Interactive Isosurface Viewer"}),(0,r.jsx)(i.Z,{canvasId:"renderCanvas",startNum:1,numFiles:100})]})}},33952:function(e){e.exports={footer:"Footer_footer__Tl1eP"}},19202:function(e){e.exports={navbar:"navbar_navbar__jP4A8",dropdown:"navbar_dropdown__8E7Uj",dropbtn:"navbar_dropbtn__sVKvK",dropdown_content:"navbar_dropdown_content__xqz5e"}}},function(e){e.O(0,[928,770,942,568,315,421,774,888,179],(function(){return n=75557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);