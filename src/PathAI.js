import * as THREE from "three";

class PathAI { 
    constructor() {
        this.directions = {"+x": new THREE.Vector3(1, 0, 0),
                            "-x": new THREE.Vector3(-1, 0, 0),
                            "+y": new THREE.Vector3(0, 1, 0),
                            "-y": new THREE.Vector3(0, -1, 0),
                            "+z": new THREE.Vector3(0, 0, 1),
                            "-z": new THREE.Vector3(0, 0, -1)};
    }

    hashPosition = (position) => {
		var x = position.getComponent(0), y = position.getComponent(1), z = position.getComponent(2);
		x = x >= 0 ? x * 2 : -x * 2 - 1;
		y = y >= 0 ? y * 2 : -y * 2 - 1;
		z = z >= 0 ? z * 2 : -z * 2 - 1;
		
		function cantorPair(a, b) {
			return (a + b) * (a + b + 1) / 2 + b;
		}
		return cantorPair(cantorPair(x, y), z);
	}

    nextMove = (grid, boundsSize, currentHeadPosition, foodPosition) => { 
        const getNextPosition = (currentPosition, direction) => {
            const deltaPosition = this.directions[direction];
            const newPosition = currentPosition.clone();
            newPosition.add(deltaPosition);
            return newPosition;
        }
    
        const validatePosition = (position, visited) => {
            return !visited.has(this.hashPosition(position)) && grid[this.hashPosition(position)] !== "snake" && Math.abs(position.getComponent(0)) <= boundsSize / 2 && Math.abs(position.getComponent(1)) <= boundsSize / 2 && Math.abs(position.getComponent(2)) <= boundsSize / 2;
        }
        
        const bfs = (start, target) => {
            var visited = new Set();
            var queue = [new PositionPath(start.clone(), [])];

            while (queue.length) {
                console.log(queue.length);
                const currentPositionPath = queue.shift();
                const currentPosition = currentPositionPath.position;
                const currentPath = currentPositionPath.path;
                
                if (visited.has(this.hashPosition(currentPosition.clone()))) {
                    continue;
                }
                
                visited.add(this.hashPosition(currentPosition.clone()));
                
                if (this.hashPosition(currentPosition) === this.hashPosition(target)) {
                    return currentPath
                }
                for (const direction of Object.keys(this.directions)) {
                    const nextPosition = getNextPosition(currentPosition, direction);
                    if (validatePosition(nextPosition, visited)) {
                        var newPath = [...currentPath];
                        newPath.push(direction);
                        queue.push(new PositionPath(nextPosition, newPath));
                    }
                }
            }
            return [];
        }

        // const currentHeadPosition = [currentHeadVector.getComponent(0), currentHeadVector.getComponent(1), currentHeadVector.getComponent(2)];
        // const foodPosition = [foodVector.getComponent(0), foodVector.getComponent(1), foodVector.getComponent(2)];
        const path = bfs(currentHeadPosition, foodPosition);
        if (path) {
            return path[0];
        }
        else {
            // Choose random viable direction if possible. If no viable direction, move forward (game over).
            for (const direction of Object.keys(this.directions)) {
                const nextPosition = getNextPosition(currentHeadPosition, direction);
                if (validatePosition(nextPosition, new Set())) {
                    return [direction];
                }
            }
            return [];
        }
    }
}

class PositionPath {
    constructor(position, path) {
        this.position = position;
        this.path = path;
    }
}

export default PathAI;