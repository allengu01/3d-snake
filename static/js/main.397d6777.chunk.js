(this["webpackJsonp3d-snake"]=this["webpackJsonp3d-snake"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(4),s=n(7),a=n.n(s),o=n(11),r=n.n(o),h=(n(17),n(0)),c=n(3),d=n(5),l=n(1),u=n(2),p=(n(18),n(6)),b=(n(19),2*window.innerWidth/3),m=window.innerHeight,j={"+x":new p.j(1,0,0),"-x":new p.j(-1,0,0),"+y":new p.j(0,1,0),"-y":new p.j(0,-1,0),"+z":new p.j(0,0,1),"-z":new p.j(0,0,-1)},g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).initiate.bind(Object(d.a)(i)),i.reset.bind(Object(d.a)(i)),i.turn.bind(Object(d.a)(i)),i.hashPosition.bind(Object(d.a)(i)),i.getRandomBetween.bind(Object(d.a)(i)),i.moveFoodRandom.bind(Object(d.a)(i)),i.createFood.bind(Object(d.a)(i)),i.createSnakeBody.bind(Object(d.a)(i)),i.moveSnakeBody.bind(Object(d.a)(i)),i.createBounds.bind(Object(d.a)(i)),i.changeBounds.bind(Object(d.a)(i)),i.gameOver.bind(Object(d.a)(i)),i.startAnimation.bind(Object(d.a)(i)),i.stopAnimation.bind(Object(d.a)(i)),i.handleKeyDown.bind(Object(d.a)(i)),i.initiate(),i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.mount.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera),document.addEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"componentDidUpdate",value:function(){"bounds"===this.props.change?(this.changeBounds(this.props.boundsSize),this.renderer.render(this.scene,this.camera)):"start"===this.props.change?(console.log(this.snake),this.startAnimation()):"stop"===this.props.change?this.stopAnimation():"reset"===this.props.change?(this.reset(),this.renderer.render(this.scene,this.camera)):"gameover"===this.props.change&&(this.stopAnimation(),this.lost=!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"initiate",value:function(){this.animation=void 0,console.log(this.grid),this.camera=new p.g(75,b/m,.1,1e3),this.scene=new p.i,this.renderer=new p.k({antialias:!0}),this.renderer.setSize(b,m),this.boundsMaterial=new p.f({color:16711680,transparent:!0,opacity:.15}),this.bounds=this.createBounds(),this.scene.add(this.bounds),this.snake=[],this.snakeGeometry=new p.a(1,1,1),this.snakeMaterial=new p.f({color:65280}),this.foodGeometry=new p.a(1,1,1),this.foodMaterial=new p.f({color:16711680}),this.light=new p.h(16777215,1,0),this.light.position.set(30,30,30),this.scene.add(this.light),this.camera.position.set(this.props.boundsSize,this.props.boundsSize,1.25*this.props.boundsSize),this.camera.lookAt(new p.j(0,0,0)),this.reset()}},{key:"reset",value:function(){for(this.grid={},this.current=new p.j(0,0,0),this.dir="+z",this.food&&this.scene.remove(this.food);this.snake.length>0;)this.scene.remove(this.snake.pop());this.createSnakeBody(0,0,0);var e=this.createFood(0,0,0);this.scene.add(e),this.food=this.moveFoodRandom(e)}},{key:"createFood",value:function(e,t,n){var i=new p.c,s=new p.e(this.foodGeometry,this.foodMaterial),a=new p.b(s.geometry),o=new p.d(a);return o.material.depthTest=!1,o.material.opacity=.25,o.material.transparent=!0,i.add(s),i.add(o),i.position.set(e,t,n),i}},{key:"hashPosition",value:function(e){var t=e.getComponent(0),n=e.getComponent(1),i=e.getComponent(2);function s(e,t){return(e+t)*(e+t+1)/2+t}return i=i>=0?2*i:2*-i-1,s(s(t=t>=0?2*t:2*-t-1,n=n>=0?2*n:2*-n-1),i)}},{key:"getRandomBetween",value:function(e,t){return Math.floor(Math.random()*(t-e)+e)}},{key:"moveFoodRandom",value:function(e){this.grid[this.hashPosition(e.position)]="empty";for(var t=Math.ceil(-this.props.boundsSize/2),n=Math.floor(this.props.boundsSize/2),i=[],s=t;s<=n;s++)for(var a=t;a<=n;a++)for(var o=t;o<=n;o++){var r=new p.j(s,a,o);"snake"!==this.grid[this.hashPosition(r)]&&"food"!==this.grid[this.hashPosition(r)]&&i.push(r)}var h=i[this.getRandomBetween(0,i.length)];return e.position.set(h.getComponent(0),h.getComponent(1),h.getComponent(2)),this.grid[this.hashPosition(h)]="food",e}},{key:"createSnakeBody",value:function(e,t,n){var i=new p.c,s=new p.e(this.snakeGeometry,this.snakeMaterial),a=new p.b(s.geometry),o=new p.d(a);return o.material.depthTest=!1,o.material.opacity=.25,o.material.transparent=!0,i.add(s),i.add(o),i.position.set(e,t,n),this.snake.push(i),this.grid[this.hashPosition(i.position)]="snake",this.scene.add(i),i}},{key:"moveSnakeBody",value:function(e,t,n,i){var s=e.position;return this.grid[this.hashPosition(s)]="empty","snake"===this.grid[this.hashPosition(new p.j(t,n,i))]?(console.log("Hit itself"),void this.gameOver()):(this.snake.splice(this.snake.indexOf(e),1),e.position.set(t,n,i),this.grid[this.hashPosition(e.position)]="snake",this.snake.push(e),e)}},{key:"createBounds",value:function(){var e=new p.c,t=new p.a(this.props.boundsSize,this.props.boundsSize,this.props.boundsSize,this.props.boundsSize/5,this.props.boundsSize/5,this.props.boundsSize/5),n=new p.e(t,this.boundsMaterial),i=new p.b(n.geometry),s=new p.d(i);return s.material.depthTest=!1,s.material.opacity=.25,s.material.transparent=!0,e.add(n),e.add(s),e}},{key:"changeBounds",value:function(e){this.scene.remove(this.bounds),this.bounds=this.createBounds(),this.scene.add(this.bounds),this.camera.position.set(e,e,1.25*e)}},{key:"turn",value:function(){this.current.add(j[this.dir]),Math.abs(this.current.getComponent(0))>=this.props.boundsSize/2||Math.abs(this.current.getComponent(1))>=this.props.boundsSize/2||Math.abs(this.current.getComponent(2))>=this.props.boundsSize/2?(console.log(this.current,this.props.boundsSize),console.log("Out of bounds"),this.gameOver()):"food"===this.grid[this.hashPosition(this.current)]?(this.moveFoodRandom(this.food),this.createSnakeBody(this.current.getComponent(0),this.current.getComponent(1),this.current.getComponent(2)),this.renderer.render(this.scene,this.camera)):(this.moveSnakeBody(this.snake[0],this.current.getComponent(0),this.current.getComponent(1),this.current.getComponent(2)),this.renderer.render(this.scene,this.camera))}},{key:"gameOver",value:function(){this.props.onGameOver()}},{key:"startAnimation",value:function(){var e=this;this.animation=requestAnimationFrame((function t(){setTimeout((function(){"started"===e.props.gameState&&(e.animation=requestAnimationFrame(t),e.turn())}),1e3)}))}},{key:"stopAnimation",value:function(){}},{key:"handleKeyDown",value:function(e){if("started"===this.props.gameState)switch(console.log("pass"),e.preventDefault(),e.keyCode){case 37:this.dir="-x";break;case 38:this.dir="-z";break;case 39:this.dir="+x";break;case 40:this.dir="+z";break;case 88:this.dir="-y";break;case 90:this.dir="+y"}}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"Game",ref:function(t){return e.mount=t},onKeyDown:this.handleKeyDown})}}]),n}(a.a.Component),k=n.p+"static/media/controls.8c7292f0.svg",v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"handleChange",value:function(e){"initial"===this.props.gameState&&this.props.onBoundsSizeChange(e.target.value)}},{key:"render",value:function(){return Object(i.jsxs)("label",{children:["Bounds Size:",Object(i.jsxs)("select",{value:this.props.value,onChange:this.handleChange,children:[Object(i.jsx)("option",{value:"7",children:"Small"}),Object(i.jsx)("option",{value:"15",children:"Medium"}),Object(i.jsx)("option",{value:"25",children:"Large"})]})]})}}]),n}(a.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"handleClick",value:function(e){this.props.onStartClick()}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"start-button",children:Object(i.jsx)("button",{onClick:this.handleClick,children:"Start"})})}}]),n}(a.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"handleClick",value:function(e){this.props.onStopClick()}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"start-button",children:Object(i.jsx)("button",{onClick:this.handleClick,children:"Stop"})})}}]),n}(a.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"handleClick",value:function(e){this.props.onResetClick()}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"reset-button",children:Object(i.jsx)("button",{onClick:this.handleClick,children:"Reset"})})}}]),n}(a.a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Controls",children:[Object(i.jsx)("div",{children:"Controls"}),Object(i.jsx)("img",{src:k,alt:"Controls",width:"320px",height:"320px"})]})}}]),n}(a.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v,{value:this.props.boundsSize,gameState:this.props.gameState,onBoundsSizeChange:this.props.onBoundsSizeChange}),Object(i.jsx)(O,{onStartClick:this.props.onStartClick}),Object(i.jsx)(f,{onStopClick:this.props.onStopClick}),Object(i.jsx)(S,{onResetClick:this.props.onResetClick}),Object(i.jsx)(C,{})]})}}]),n}(a.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state={change:null,gameState:"initial",boundsSize:7},i.handleBoundsSizeChange=i.handleBoundsSizeChange.bind(Object(d.a)(i)),i.handleStartClick=i.handleStartClick.bind(Object(d.a)(i)),i.handleStopClick=i.handleStopClick.bind(Object(d.a)(i)),i.handleResetClick=i.handleResetClick.bind(Object(d.a)(i)),i.handleGameOver=i.handleGameOver.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"handleBoundsSizeChange",value:function(e){"initial"===this.state.gameState&&this.setState({change:"bounds",boundsSize:e})}},{key:"handleStartClick",value:function(){console.log(this.state.gameState),"initial"!==this.state.gameState&&"stopped"!==this.state.gameState||this.setState({change:"start",gameState:"started"})}},{key:"handleStopClick",value:function(){"started"===this.state.gameState&&this.setState({change:"stop",gameState:"stopped"})}},{key:"handleResetClick",value:function(){this.setState({change:"reset",gameState:"initial"})}},{key:"handleGameOver",value:function(){this.setState({change:"gameover",gameState:"gameover"})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"App-Game",children:Object(i.jsx)(g,{change:this.state.change,boundsSize:this.state.boundsSize,gameState:this.state.gameState,onGameOver:this.handleGameOver})}),Object(i.jsx)("div",{className:"App-Settings",children:Object(i.jsx)(y,{gameState:this.state.gameState,boundsSize:this.state.boundsSize,onBoundsSizeChange:this.handleBoundsSizeChange,onStartClick:this.handleStartClick,onStopClick:this.handleStopClick,onResetClick:this.handleResetClick})})]})}}]),n}(a.a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),z()}},[[20,1,2]]]);
//# sourceMappingURL=main.397d6777.chunk.js.map