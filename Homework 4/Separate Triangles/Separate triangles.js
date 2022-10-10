function init(){
 	renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 95);
}

init();

const vertices = new Float32Array( [
	 10.0,  10.0,  10.0,
	-10.0,  10.0,  10.0,
	-10.0, -10.0,  10.0,
   10.0,  10.0,  10.0,
  -10.0, -10.0,  10.0,
   10.0, -10.0,  10.0,

   10.0,  10.0, -10.0,
   10.0,  10.0,  10.0,
   10.0, -10.0,  10.0,
   10.0,  10.0, -10.0,
   10.0, -10.0,  10.0,
   10.0, -10.0, -10.0,

  -10.0,  10.0, -10.0,
   10.0,  10.0, -10.0,
   10.0, -10.0, -10.0,
  -10.0,  10.0, -10.0,
   10.0, -10.0, -10.0,
  -10.0, -10.0, -10.0,

  -10.0,  10.0,  10.0,
  -10.0,  10.0, -10.0,
  -10.0, -10.0, -10.0,
  -10.0,  10.0,  10.0,
  -10.0, -10.0, -10.0,
  -10.0, -10.0,  10.0,

   10.0,  10.0, -10.0,
  -10.0,  10.0, -10.0,
  -10.0,  10.0,  10.0,
   10.0,  10.0, -10.0,
  -10.0,  10.0,  10.0,
   10.0,  10.0,  10.0,

   10.0, -10.0,  10.0,
  -10.0, -10.0,  10.0,
  -10.0, -10.0, -10.0,
   10.0, -10.0,  10.0,
  -10.0, -10.0, -10.0,
   10.0, -10.0, -10.0,
] );

const geometry = new THREE.BufferGeometry();
 geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial( { color: 0xFF9900, wireframe: true } );
 
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate(){
 	requestAnimationFrame(animate);
  draw();
  renderer.render(scene, camera); 
}

draw = function(){
  cube.applyMatrix4(new THREE.Matrix4().makeRotationX(0.01));
  cube.applyMatrix4(new THREE.Matrix4().makeRotationY(0.01));
  cube.applyMatrix4(new THREE.Matrix4().makeRotationZ(0.01));
}

animate();
