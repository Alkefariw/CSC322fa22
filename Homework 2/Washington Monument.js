function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 10, 95);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  draw();
  renderer.render(scene, camera);
}

init();

const WashingtonMonument = [];
const vertices = [
  [-27.5, 0.0, 27.5,
    27.5, 0.0, 27.5,
    17.0, 500.0, 17.0,
    -17.0, 500.0, 17.0
  ],
  [27.5, 0.0, 27.5,
    27.5, 0.0, -27.5,
    17.0, 500.0, -17.0,
    17.0, 500.0, 17.0
  ],
  [27.5, 0.0, -27.5,
    -27.5, 0.0, -27.5,
    -17.0, 500.0, -17.0,
    17.0, 500.0, -17.0
  ],
  [-27.5, 0.0, -27.5,
    -27.5, 0.0, 27.5,
    -17.0, 500.0, 17.0,
    -17.0, 500.0, -17.0
  ],

  [-17.0, 500.0, 17.0,
    17.0, 500.0, 17.0,
    0.0, 555.0, 0.0
  ],
  [17.0, 500.0, 17.0,
    17.0, 500.0, -17.0,
    0.0, 555.0, 0.0
  ],
  [17.0, 500.0, -17.0,
    -17.0, 500.0, -17.0,
    0.0, 555.0, 0.0
  ],
  [-17.0, 500.0, -17.0,
    -17.0, 500.0, 17.0,
    0.0, 555.0, 0.0
  ],
];
const normals = [
  [1, 1, 2,
    1, 1, 2,
    1, 1, 2,
    1, 1, 2
  ],
  [2, 1, 0,
    2, 1, 0,
    2, 1, 0,
    2, 1, 0
  ],
  [1, 1, -2,
    1, 1, -2,
    1, 1, -2,
    1, 1, -2
  ],
  [-2, 1, 0,
    -2, 1, 0,
    -2, 1, 0,
    -2, 1, 0
  ],
 
  [1, 1, 2,
    1, 1, 2,
    1, 1, 2
  ],
  [2, 1, 0,
    2, 1, 0,
    2, 1, 0
  ],
  [1, 1, -2,
    1, 1, -2,
    1, 1, -2
  ],
  [-2, 1, 0,
    -2, 1, 0,
    -2, 1, 0
  ],
];
const colors = [
  [
    -1.0, 0.0, 1.0,
    -1.0, 0.0, 1.0,
    -1.0, 0.0, 1.0,
    -1.0, 0.0, 1.0,
  ],
  [
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
  ],
  [
    1.5, 0.6, 0.5,
    1.5, 0.6, 0.5,
    1.5, 0.6, 0.5,
    1.5, 0.6, 0.5,
  ],
  [
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
  ],
    [
    1.5, 0.5, 1.5,
    1.5, 0.5, 1.5,
    1.5, 0.5, 1.5,
  ],
  [
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
  ],
  [
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
  ],
  [
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
  ],
];
const indices = [
  [0, 1, 2,
    0, 2, 3
  ],
  [0, 1, 2,
    0, 2, 3
  ],
  [0, 1, 2,
    0, 2, 3
  ],
  [0, 1, 2,
    0, 2, 3
  ],

  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
];
for (let i = 0; i < vertices.length; i++) {
  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(indices[i]);
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals[i], 3));
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices[i], 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors[i], 3));
  const material = new THREE.MeshPhongMaterial({
    vertexColors: true
  });
  const ii = new THREE.Mesh(geometry, material);
  WashingtonMonument.push(ii);
  scene.add(ii);
}
const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);


for (let i = 0; i < WashingtonMonument.length; i++) {
  WashingtonMonument[i].position.set(-25, -200, 0);
  WashingtonMonument[i].applyMatrix4(new THREE.Matrix4().makeScale(0.10, 0.10, 0.10));
}
draw = function() {
  for (let i = 0; i < WashingtonMonument.length; i++) {
    WashingtonMonument[i].applyMatrix4(new THREE.Matrix4().makeRotationY(0.019));
  }
}
animate();
