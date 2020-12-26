import React from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import "./Game.css";

const width = window.innerWidth * 2 / 3, height = window.innerHeight;
const dirs = {"+x": new THREE.Vector3(1, 0, 0),
			  "-x": new THREE.Vector3(-1, 0, 0),
		  	  "+y": new THREE.Vector3(0, 1, 0),
			  "-y": new THREE.Vector3(0, -1, 0),
			  "+z": new THREE.Vector3(0, 0, 1),
			  "-z": new THREE.Vector3(0, 0, -1)};

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.initiate.bind(this);
		this.reset.bind(this);
		this.changeScore.bind(this);
		this.turn.bind(this);
		this.hashPosition.bind(this);
		this.getRandomBetween.bind(this);
		this.moveFoodRandom.bind(this);
		this.createFood.bind(this);
		this.createSnakeBody.bind(this);
		this.moveSnakeBody.bind(this);
		this.createBounds.bind(this);
		this.changeBounds.bind(this);
		this.gameOver.bind(this);
		this.startAnimation.bind(this);
		this.stopAnimation.bind(this);
		this.handleKeyDown.bind(this);

		this.initiate();
	}

	componentDidMount() {
		this.mount.appendChild(this.renderer.domElement);
		this.renderer.render(this.scene, this.camera);
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
	}
	
	componentDidUpdate() {
		if (this.props.change === "bounds") {
			this.changeBounds(this.props.boundsSize);
			this.renderer.render(this.scene, this.camera);
		}
		else if (this.props.change === "start") {
			console.log(this.snake);
			this.startAnimation();
		}
		else if (this.props.change === "stop") {
			this.stopAnimation();
		}
		else if (this.props.change === "reset") {
			this.reset();
			this.renderer.render(this.scene, this.camera);
		}
		else if (this.props.change === "gameover") {
			this.stopAnimation();
		}
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown.bind(this));
	}

	initiate() {
		this.animation = undefined;
		this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
		this.renderer.setSize(width, height);
		this.renderer.setClearColor(0x000000, 0);
		
		this.boundsMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, transparent: true, opacity: 0.15});
		this.bounds = this.createBounds();
		this.scene.add(this.bounds);

		this.snake = [];
		this.snakeGeometry = new THREE.BoxGeometry(1, 1, 1);
		this.snakeMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});

		this.foodGeometry = new THREE.BoxGeometry(1, 1, 1);
		this.foodMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});

		this.light = new THREE.PointLight(0xFFFFFF, 1, 0);
		this.light.position.set(30, 30, 30);
		this.scene.add(this.light);

		this.camera.position.set(this.props.boundsSize, this.props.boundsSize, this.props.boundsSize * 1.25);
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));

		this.reset();
	}

	reset() {
		this.changeScore(0);
		this.grid = {};
		this.current = new THREE.Vector3(0, 0, 0);
		this.dir = "+z";

		if (this.food) {
			this.scene.remove(this.food);
		}
		while (this.snake.length > 0) {
			this.scene.remove(this.snake.pop());
		}

		this.createSnakeBody(0, 0, 0);

		var tmpFood = this.createFood(0, 0, 0);
		this.scene.add(tmpFood);
		this.food = this.moveFoodRandom(tmpFood);
	}

	createFood(x, y, z) {
		var food = new THREE.Group();
		const foodBox = new THREE.Mesh(this.foodGeometry, this.foodMaterial);
		const foodEdges = new THREE.EdgesGeometry(foodBox.geometry);
		const foodLines = new THREE.LineSegments(foodEdges);
		foodLines.material.depthTest = false;
		foodLines.material.opacity = 0.25;
		foodLines.material.transparent = true;
		food.add(foodBox);
		food.add(foodLines);
		food.position.set(x, y, z);
		return food;
	}

	hashPosition(position) {
		var x = position.getComponent(0), y = position.getComponent(1), z = position.getComponent(2);
		x = x >= 0 ? x * 2 : -x * 2 - 1;
		y = y >= 0 ? y * 2 : -y * 2 - 1;
		z = z >= 0 ? z * 2 : -z * 2 - 1;
		function cantorPair(a, b) {
			return (a + b) * (a + b + 1) / 2 + b;
		}
		return cantorPair(cantorPair(x, y), z);
	}

	getRandomBetween(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	moveFoodRandom(food) {
		this.grid[this.hashPosition(food.position)] = 'empty';

		const minBound = Math.ceil(-this.props.boundsSize / 2), maxBound = Math.floor(this.props.boundsSize / 2);
		var empties = [];
		for (let x = minBound; x <= maxBound; x++) {
			for (let y = minBound; y <= maxBound; y++) {
				for (let z = minBound; z <= maxBound; z++) {
					const position = new Vector3(x, y, z);
					if (this.grid[this.hashPosition(position)] !== 'snake' && this.grid[this.hashPosition(position)] !== 'food') {
						empties.push(position);
					}
				}
			}
		}
		const idx = this.getRandomBetween(0, empties.length);
		const position = empties[idx];
		food.position.set(position.getComponent(0), position.getComponent(1), position.getComponent(2));
		this.grid[this.hashPosition(position)] = 'food';
		return food;
	}

	createSnakeBody(x, y, z) {
		var snakeBody = new THREE.Group();
		const snakeBox = new THREE.Mesh(this.snakeGeometry, this.snakeMaterial);
		const snakeEdges = new THREE.EdgesGeometry(snakeBox.geometry);
		const snakeLines = new THREE.LineSegments(snakeEdges);
		snakeLines.material.depthTest = false;
		snakeLines.material.opacity = 0.25;
		snakeLines.material.transparent = true;
		snakeBody.add(snakeBox);
		snakeBody.add(snakeLines);
		snakeBody.position.set(x, y, z);
		
		this.snake.push(snakeBody);
		this.grid[this.hashPosition(snakeBody.position)] = 'snake';
		this.scene.add(snakeBody);
		return snakeBody;
	}

	moveSnakeBody(snakeBody, x, y, z) {
		const previousPosition = snakeBody.position;
		this.grid[this.hashPosition(previousPosition)] = 'empty';
		if (this.grid[this.hashPosition(new Vector3(x, y, z))] === 'snake') {
			console.log("Hit itself");
			this.gameOver();
			return;
		}
		else {
			this.snake.splice(this.snake.indexOf(snakeBody), 1);
			snakeBody.position.set(x, y, z);
			this.grid[this.hashPosition(snakeBody.position)] = 'snake';
			this.snake.push(snakeBody);
			return snakeBody;
		}
	}

	createBounds() {
		var bounds = new THREE.Group();
		const boundsGeometry = new THREE.BoxGeometry(this.props.boundsSize, this.props.boundsSize, this.props.boundsSize, this.props.boundsSize / 5, this.props.boundsSize / 5, this.props.boundsSize / 5);
		const boundsFaces = new THREE.Mesh(boundsGeometry, this.boundsMaterial);
		const boundsEdges = new THREE.EdgesGeometry(boundsFaces.geometry);
		const boundsLines = new THREE.LineSegments(boundsEdges);
		boundsLines.material.depthTest = false;
		boundsLines.material.opacity = 0.25;
		boundsLines.material.transparent = true;
		bounds.add(boundsFaces);
		bounds.add(boundsLines);
		return bounds;
	}

	changeBounds(newSize) {
		this.scene.remove(this.bounds);
		this.bounds = this.createBounds();
		this.scene.add(this.bounds);

		this.camera.position.set(newSize, newSize, newSize * 1.25);
	}

	changeScore(newScore) {
		this.score = newScore;
		this.props.onScoreChange(this.score);
	}

	turn() {
		this.current.add(dirs[this.dir]);
		// Snake goes outside boundaries
		if (Math.abs(this.current.getComponent(0)) >= this.props.boundsSize / 2 || Math.abs(this.current.getComponent(1)) >= this.props.boundsSize / 2 || Math.abs(this.current.getComponent(2)) >= this.props.boundsSize / 2) {
			console.log(this.current, this.props.boundsSize);
			console.log("Out of bounds");
			this.gameOver();
		}
		else if (this.grid[this.hashPosition(this.current)] === 'food') {
			this.changeScore(this.score + 1);
			this.moveFoodRandom(this.food);
			this.createSnakeBody(this.current.getComponent(0), this.current.getComponent(1), this.current.getComponent(2));
			this.renderer.render(this.scene, this.camera);
		}
		else {
			this.moveSnakeBody(this.snake[0], this.current.getComponent(0), this.current.getComponent(1), this.current.getComponent(2));
			this.renderer.render(this.scene, this.camera);
		}
	}

	gameOver() {
		this.props.onGameOver();
	}

	startAnimation() {
		const animate = () => {
			setTimeout(() => {
				if (this.props.gameState === "started") {
					this.animation = requestAnimationFrame(animate);
					this.turn();
				}
			}, 1000 / 1.5);
		};
		
		this.animation = requestAnimationFrame(animate);
	}

	stopAnimation() {
		// this.started = false;
	}

	handleKeyDown(e) {
		e.preventDefault();
		if (e.keyCode == 32) {
			this.props.onSpaceBar();
		}
		else if (this.props.gameState !== "started") {
			return;
		}
		else {
			console.log("pass");
			switch(e.keyCode) {
				case 37:
					this.dir = "-x";
					break;
				case 38:
					this.dir = "-z";
					break;
				case 39:
					this.dir = "+x";
					break;
				case 40:
					this.dir = "+z";
					break;
				case 88:
					this.dir = "-y";
					break;
				case 90:
					this.dir = "+y";
					break;
				default:
					break;
			}
		}
	}

	render() {
		return (
			<div className="Game">
				<div className="Gameboard" ref={ref => (this.mount = ref)} onKeyDown={this.handleKeyDown} />
			</div>
		)
	}
}

export default Game;