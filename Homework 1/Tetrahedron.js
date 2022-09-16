const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(-37, -57, 63);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({
  color: 0x00ffff
});

const points = [];
points.push(new THREE.Vector3(-15, -1.3, -2.2));
points.push(new THREE.Vector3(14, 14, 1));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(-15, -1.3, -2.2));
points.push(new THREE.Vector3(0, -20, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(14, 14, 1));
points.push(new THREE.Vector3(0, -20, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);
