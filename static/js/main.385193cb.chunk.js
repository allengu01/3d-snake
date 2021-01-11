(this["webpackJsonp3d-snake"]=this["webpackJsonp3d-snake"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(7),i=n.n(s),o=n(11),r=n.n(o),c=(n(18),n(0)),h=n(4),d=n(1),l=n(2),u=(n(19),n(6)),p=n(5),b=(n(20),n(12)),j=function e(t,n){Object(c.a)(this,e),this.position=t,this.path=n},m=function e(){var t=this;Object(c.a)(this,e),this.hashPosition=function(e){var t=e.getComponent(0),n=e.getComponent(1),a=e.getComponent(2);function s(e,t){return(e+t)*(e+t+1)/2+t}return a=a>=0?2*a:2*-a-1,s(s(t=t>=0?2*t:2*-t-1,n=n>=0?2*n:2*-n-1),a)},this.nextMove=function(e,n,a,s){var i=function(e,n){var a=t.directions[n],s=e.clone();return s.add(a),s},o=function(a,s){return!s.has(t.hashPosition(a))&&"snake"!==e[t.hashPosition(a)]&&Math.abs(a.getComponent(0))<=n/2&&Math.abs(a.getComponent(1))<=n/2&&Math.abs(a.getComponent(2))<=n/2},r=function(e,n){for(var a=new Set,s=[new j(e.clone(),[])];s.length;){var r=s.shift(),c=r.position,h=r.path;if(!a.has(t.hashPosition(c.clone()))){if(a.add(t.hashPosition(c.clone())),t.hashPosition(c)===t.hashPosition(n))return h;for(var d=0,l=Object.keys(t.directions);d<l.length;d++){var u=l[d],p=i(c,u);if(o(p,a)){var m=Object(b.a)(h);m.push(u),s.push(new j(p,m))}}}}return[]}(a,s);if(r)return r[0];for(var c=0,h=Object.keys(t.directions);c<h.length;c++){var d=h[c],l=i(a,d);if(o(l,new Set))return[d]}return[]},this.directions={"+x":new p.j(1,0,0),"-x":new p.j(-1,0,0),"+y":new p.j(0,1,0),"-y":new p.j(0,-1,0),"+z":new p.j(0,0,1),"-z":new p.j(0,0,-1)}},g=2*window.innerWidth/3,v=window.innerHeight,O={"+x":new p.j(1,0,0),"-x":new p.j(-1,0,0),"+y":new p.j(0,1,0),"-y":new p.j(0,-1,0),"+z":new p.j(0,0,1),"-z":new p.j(0,0,-1)},f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initiate.bind(Object(u.a)(a)),a.reset.bind(Object(u.a)(a)),a.changeScore.bind(Object(u.a)(a)),a.turn.bind(Object(u.a)(a)),a.hashPosition.bind(Object(u.a)(a)),a.getRandomBetween.bind(Object(u.a)(a)),a.moveFoodRandomly.bind(Object(u.a)(a)),a.createFood.bind(Object(u.a)(a)),a.createSnakeBody.bind(Object(u.a)(a)),a.moveSnakeBody.bind(Object(u.a)(a)),a.createBounds.bind(Object(u.a)(a)),a.changeBounds.bind(Object(u.a)(a)),a.gameOver.bind(Object(u.a)(a)),a.startAnimation.bind(Object(u.a)(a)),a.stopAnimation.bind(Object(u.a)(a)),a.handleKeyDown.bind(Object(u.a)(a)),a.initiate(),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.mount.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera),document.addEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"componentDidUpdate",value:function(){"bounds"===this.props.change?(this.changeBounds(this.props.boundsSize),this.renderer.render(this.scene,this.camera)):"player"===this.props.change?"pathfinding"===this.props.player&&this.createPathfindingAI():"start"===this.props.change?this.startAnimation():"stop"===this.props.change?this.stopAnimation():"reset"===this.props.change?(this.reset(),this.renderer.render(this.scene,this.camera)):"gameover"===this.props.change&&this.stopAnimation()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"initiate",value:function(){this.animation=void 0,this.camera=new p.g(75,g/v,.1,1e3),this.scene=new p.i,this.renderer=new p.k({antialias:!0,alpha:!0}),this.renderer.setSize(g,v),this.renderer.setClearColor(0,0),this.boundsMaterial=new p.f({color:16711680,transparent:!0,opacity:.15}),this.bounds=this.createBounds(),this.scene.add(this.bounds),this.snake=[],this.snakeGeometry=new p.a(1,1,1),this.snakeMaterial=new p.f({color:65280}),this.foodGeometry=new p.a(1,1,1),this.foodMaterial=new p.f({color:16711680}),this.light=new p.h(16777215,1,0),this.light.position.set(30,30,30),this.scene.add(this.light),this.camera.position.set(.8*this.props.boundsSize,.8*this.props.boundsSize,this.props.boundsSize),this.camera.lookAt(new p.j(0,0,0)),this.reset()}},{key:"reset",value:function(){for(this.changeScore(0),this.grid={},this.snakeHeadPosition=new p.j(0,0,0),this.dir="+z",this.food&&this.scene.remove(this.food);this.snake.length>0;)this.scene.remove(this.snake.pop());this.createSnakeBody(0,0,0);var e=this.createFood(0,0,0);this.scene.add(e),this.food=this.moveFoodRandomly(e)}},{key:"createFood",value:function(e,t,n){var a=new p.c,s=new p.e(this.foodGeometry,this.foodMaterial),i=new p.b(s.geometry),o=new p.d(i);return o.material.depthTest=!1,o.material.opacity=.25,o.material.transparent=!0,a.add(s),a.add(o),a.position.set(e,t,n),a}},{key:"hashPosition",value:function(e){var t=e.getComponent(0),n=e.getComponent(1),a=e.getComponent(2);function s(e,t){return(e+t)*(e+t+1)/2+t}return a=a>=0?2*a:2*-a-1,s(s(t=t>=0?2*t:2*-t-1,n=n>=0?2*n:2*-n-1),a)}},{key:"getRandomBetween",value:function(e,t){return Math.floor(Math.random()*(t-e)+e)}},{key:"moveFoodRandomly",value:function(e){for(var t=Math.ceil(-this.props.boundsSize/2),n=Math.floor(this.props.boundsSize/2),a=[],s=t;s<=n;s++)for(var i=t;i<=n;i++)for(var o=t;o<=n;o++){var r=new p.j(s,i,o);"snake"!==this.grid[this.hashPosition(r)]&&"food"!==this.grid[this.hashPosition(r)]&&a.push(r)}this.grid[this.hashPosition(e.position)]="empty";var c=a[this.getRandomBetween(0,a.length)];return console.log("FOOD",c),e.position.set(c.getComponent(0),c.getComponent(1),c.getComponent(2)),this.grid[this.hashPosition(c)]="food",e}},{key:"createSnakeBody",value:function(e,t,n){var a=new p.c,s=new p.e(this.snakeGeometry,this.snakeMaterial),i=new p.b(s.geometry),o=new p.d(i);return o.material.depthTest=!1,o.material.opacity=.25,o.material.transparent=!0,a.add(s),a.add(o),a.position.set(e,t,n),this.snake.push(a),this.grid[this.hashPosition(a.position)]="snake",this.scene.add(a),a}},{key:"moveSnakeBody",value:function(e,t,n,a){var s=e.position;if(this.grid[this.hashPosition(s)]="empty","snake"!==this.grid[this.hashPosition(new p.j(t,n,a))])return Math.abs(t)>=this.props.boundsSize/2||Math.abs(n)>=this.props.boundsSize/2||Math.abs(a)>=this.props.boundsSize/2?void this.gameOver("Out of bounds"):(this.snake.splice(this.snake.indexOf(e),1),e.position.set(t,n,a),this.grid[this.hashPosition(e.position)]="snake",this.snake.push(e),e);this.gameOver("Hit itself")}},{key:"createBounds",value:function(){var e=new p.c,t=new p.a(this.props.boundsSize,this.props.boundsSize,this.props.boundsSize,this.props.boundsSize/5,this.props.boundsSize/5,this.props.boundsSize/5),n=new p.e(t,this.boundsMaterial),a=new p.b(n.geometry),s=new p.d(a);return s.material.depthTest=!1,s.material.opacity=.25,s.material.transparent=!0,e.add(n),e.add(s),e}},{key:"changeBounds",value:function(e){this.scene.remove(this.bounds),this.bounds=this.createBounds(),this.scene.add(this.bounds),this.reset(),this.camera.position.set(.8*e,.8*e,e)}},{key:"changeScore",value:function(e){this.score=e,this.props.onScoreChange(this.score)}},{key:"turn",value:function(){if(this.snakeHeadPosition.add(O[this.dir]),console.log("SNAKE:",this.snakeHeadPosition),"food"===this.grid[this.hashPosition(this.snakeHeadPosition)]?(this.changeScore(this.score+1),this.moveFoodRandomly(this.food),this.createSnakeBody(this.snakeHeadPosition.getComponent(0),this.snakeHeadPosition.getComponent(1),this.snakeHeadPosition.getComponent(2)),this.renderer.render(this.scene,this.camera)):(this.moveSnakeBody(this.snake[0],this.snakeHeadPosition.getComponent(0),this.snakeHeadPosition.getComponent(1),this.snakeHeadPosition.getComponent(2)),this.renderer.render(this.scene,this.camera)),"pathfinding"===this.props.player)if(this.ai&&this.ai instanceof m){var e=this.ai.nextMove(this.grid,this.props.boundsSize,this.snakeHeadPosition,this.food.position);e&&(this.dir=e)}else console.log("AI Object does not exist or is not an instance of PathAI")}},{key:"gameOver",value:function(e){this.props.onGameOver(e)}},{key:"startAnimation",value:function(){var e=this;this.animation=requestAnimationFrame((function t(){setTimeout((function(){"started"===e.props.gameState&&(e.animation=requestAnimationFrame(t),e.turn())}),1e3/e.props.speed)}))}},{key:"stopAnimation",value:function(){}},{key:"handleKeyDown",value:function(e){if(e.preventDefault(),32===e.keyCode)this.props.onSpaceBar();else{if("started"!==this.props.gameState||"you"!==this.props.player)return;switch(console.log("pass"),e.keyCode){case 37:this.dir="-x";break;case 38:this.dir="-z";break;case 39:this.dir="+x";break;case 40:this.dir="+z";break;case 88:this.dir="-y";break;case 90:this.dir="+y"}}}},{key:"createPathfindingAI",value:function(){this.ai=new m}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"Game",children:Object(a.jsx)("div",{className:"Gameboard",ref:function(t){return e.mount=t},onKeyDown:this.handleKeyDown})})}}]),n}(i.a.Component),S=(n(21),n.p+"static/media/controls.acff3c6d.svg"),k=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Instructions",children:[Object(a.jsx)("div",{className:"Instructions-Header",children:"Instructions"}),Object(a.jsxs)("ol",{children:[Object(a.jsx)("li",{children:"Choose the size."}),Object(a.jsx)("li",{children:'Click "Start" or use the space bar to begin playing.'}),Object(a.jsx)("li",{children:'Check out my Pathfinding AI play the game (under "Player"). Keep the size to "Small".'}),Object(a.jsx)("li",{children:"Have fun :)"})]})]})}}]),n}(i.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.props.onBoundsSizeChange(e.target.value)},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:"bounds-size-label",children:["Size:",Object(a.jsxs)("select",{className:"bounds-size-select",value:this.props.value,onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"7",children:"Small"}),Object(a.jsx)("option",{value:"15",children:"Medium"}),Object(a.jsx)("option",{value:"25",children:"Large"})]})]})})}}]),n}(i.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.props.onSpeedChange(e.target.value)},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:"speed-label",children:["Speed:",Object(a.jsxs)("select",{className:"speed-select",value:this.props.value,onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"1.5",children:"Slow"}),Object(a.jsx)("option",{value:"3",children:"Medium"}),Object(a.jsx)("option",{value:"6",children:"Fast"})]})]})})}}]),n}(i.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.onPlayerChange(t.target.value)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:"player-label",children:["Player:",Object(a.jsxs)("select",{className:"player-select",value:this.props.value,onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"you",children:"You"}),Object(a.jsx)("option",{value:"pathfinding",children:"Pathfinding AI"})]})]})})}}]),n}(i.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClick",value:function(e){this.props.onStartClick()}},{key:"render",value:function(){return Object(a.jsx)("a",{className:"start-button",children:Object(a.jsx)("button",{onClick:this.handleClick,children:"Start"})})}}]),n}(i.a.Component),P=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClick",value:function(e){this.props.onStopClick()}},{key:"render",value:function(){return Object(a.jsx)("a",{className:"start-button",children:Object(a.jsx)("button",{onClick:this.handleClick,children:"Stop"})})}}]),n}(i.a.Component),z=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClick",value:function(e){this.props.onResetClick()}},{key:"render",value:function(){return Object(a.jsx)("a",{className:"reset-button",children:Object(a.jsx)("button",{onClick:this.handleClick,children:"Reset"})})}}]),n}(i.a.Component),B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Controls",children:[Object(a.jsx)("div",{children:"Controls"}),Object(a.jsx)("img",{src:S,alt:"Controls",width:"200px",height:"200px"})]})}}]),n}(i.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ToDo",children:["To Do:",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Better 3D depth or grid?"}),Object(a.jsx)("li",{children:"Leaderboard"})]})]})}}]),n}(i.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Settings",children:[Object(a.jsx)(k,{}),Object(a.jsx)(y,{value:this.props.boundsSize,onBoundsSizeChange:this.props.onBoundsSizeChange}),Object(a.jsx)(C,{value:this.props.speed,onSpeedChange:this.props.onSpeedChange}),Object(a.jsx)(x,{value:this.props.player,onPlayerChange:this.props.onPlayerChange}),Object(a.jsxs)("div",{className:"SettingsButtons",children:[Object(a.jsx)(w,{onStartClick:this.props.onStartClick}),Object(a.jsx)(P,{onStopClick:this.props.onStopClick}),Object(a.jsx)(z,{onResetClick:this.props.onResetClick})]}),Object(a.jsx)(B,{}),Object(a.jsx)(N,{})]})}}]),n}(i.a.Component),A=(n(22),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Scoreboard",children:["Score: ",this.props.score]})}}]),n}(i.a.Component)),F=(n(23),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Message-Container",children:Object(a.jsx)("div",{className:"Message",id:this.props.gameState,children:this.props.message})})}}]),n}(i.a.Component)),H=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleBoundsSizeChange=function(e){"initial"===a.state.gameState&&a.setState({change:"bounds",boundsSize:e})},a.handleSpeedChange=function(e){"initial"===a.state.gameState&&a.setState({change:"speed",speed:e})},a.handlePlayerChange=function(e){"initial"===a.state.gameState&&a.setState({change:"player",player:e})},a.handleStartClick=function(){console.log(a.state.gameState),"initial"!==a.state.gameState&&"stopped"!==a.state.gameState||a.setState({change:"start",gameState:"started",message:""})},a.handleStopClick=function(){"started"===a.state.gameState&&a.setState({change:"stop",gameState:"stopped",message:"Paused: Press space to start"})},a.handleSpaceBar=function(){"initial"===a.state.gameState||"stopped"===a.state.gameState?a.setState({change:"start",gameState:"started",message:""}):"started"===a.state.gameState?a.setState({change:"stop",gameState:"stopped",message:"Paused: Press space to start"}):"gameover"===a.state.gameState&&a.setState({change:"reset",gameState:"initial",message:"Press space to start"})},a.handleResetClick=function(){a.setState({change:"reset",gameState:"initial",message:"Press space to start"})},a.handleScoreChange=function(e){a.setState({change:"score",score:e})},a.handleGameOver=function(e){a.setState({change:"gameover",gameState:"gameover",message:"Game Over: ".concat(e)})},a.state={change:null,gameState:"initial",message:"Press space to start",boundsSize:7,speed:3,score:0,player:"you"},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"App-Game",children:Object(a.jsx)(f,{change:this.state.change,boundsSize:this.state.boundsSize,speed:this.state.speed,gameState:this.state.gameState,player:this.state.player,onSpaceBar:this.handleSpaceBar,onScoreChange:this.handleScoreChange,onGameOver:this.handleGameOver})}),Object(a.jsx)("div",{className:"App-Settings",children:Object(a.jsx)(M,{gameState:this.state.gameState,boundsSize:this.state.boundsSize,speed:this.state.speed,player:this.state.player,onBoundsSizeChange:this.handleBoundsSizeChange,onSpeedChange:this.handleSpeedChange,onPlayerChange:this.handlePlayerChange,onStartClick:this.handleStartClick,onStopClick:this.handleStopClick,onResetClick:this.handleResetClick})}),Object(a.jsx)("div",{className:"App-Scoreboard",children:Object(a.jsx)(A,{score:this.state.score})}),Object(a.jsx)("div",{className:"App-Message",children:Object(a.jsx)(F,{gameState:this.state.gameState,message:this.state.message})})]})}}]),n}(i.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root")),D()}},[[24,1,2]]]);
//# sourceMappingURL=main.385193cb.chunk.js.map