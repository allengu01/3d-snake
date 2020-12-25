import React from "react";
import * as THREE from "three";
import "./Game.css";

const width = window.innerWidth * 2 / 3, height = window.innerHeight;

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.initiate.bind(this);
		this.startAnimation.bind(this);
		this.stopAnimation.bind(this);
		this.changeGrid.bind(this);
		this.handleKeyDown.bind(this);

		this.initiate();
	}

	componentDidMount() {
		this.mount.appendChild(this.renderer.domElement);
		this.renderer.render(this.scene, this.camera);
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
	}
	
	componentDidUpdate() {
		if (this.props.change === "grid") {
			this.changeGrid(this.props.gridSize);
			this.renderer.render(this.scene, this.camera);
		}
		else if (this.props.change === "start") {
			if (!this.started) {
				this.startAnimation();
			}
		}
		else if (this.props.change === "stop") {
			this.stopAnimation();
		}
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown.bind(this));
	}

	initiate() {
		this.animation = undefined;
		this.started = false;
		this.dir = new THREE.Vector3(0, 0, 1);
		this.current = new THREE.Vector3(0, 0, 0);
		this.gridSize = this.props.gridSize;
		this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setSize(width, height);

		this.snakeGeometry = new THREE.BoxGeometry(1, 1, 1);
		this.snakeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.snakeBox = new THREE.Mesh(this.snakeGeometry, this.snakeMaterial);

		this.gridGeometry = new THREE.BoxGeometry(this.props.gridSize, this.props.gridSize, this.props.gridSize);
		this.gridMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.2});
		this.grid = new THREE.Mesh(this.gridGeometry, this.gridMaterial);

		this.scene.add(this.snakeBox);
		this.scene.add(this.grid);

		this.camera.position.set(this.props.gridSize, this.props.gridSize, this.props.gridSize);
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	}

	changeGrid(newSize) {
		const previousSize = this.grid.geometry.parameters.height;
		this.grid.scale.set(newSize/previousSize, newSize/previousSize, newSize/previousSize);
		this.camera.position.set(newSize, newSize, newSize);
	}

	startAnimation() {
		this.started = true;
		const animate = () => {
			setTimeout(() => {
				if (this.started) {
					this.animation = requestAnimationFrame(animate);

					var new_cube = new THREE.Mesh(this.snakeGeometry, this.snakeMaterial);

					this.scene.add(new_cube);
					this.current.add(this.dir);
					new_cube.position.set(this.current.getComponent(0), this.current.getComponent(1), this.current.getComponent(2));
					this.renderer.render(this.scene, this.camera);
				}
			}, 1000);
		};
		
		this.animation = requestAnimationFrame(animate);
	}

	stopAnimation() {
		this.started = false;
	}

	handleKeyDown(e) {
		console.log("here", this.started);
		console.log(this);
		if (!this.started) {
			return;
		}
		console.log("pass");
		e.preventDefault();
		switch(e.keyCode) {
			case 37:
				this.dir = new THREE.Vector3(-1, 0, 0);
				break;
			case 38:
				this.dir = new THREE.Vector3(0, 1, 0);
				break;
			case 39:
				this.dir = new THREE.Vector3(1, 0, 0);
				break;
			case 40:
				this.dir = new THREE.Vector3(0, -1, 0);
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div className="Game" ref={ref => (this.mount = ref)} onKeyDown={this.handleKeyDown} />
		)
	}
}

export default Game;