// Declare variables
let camera, scene, renderer, controls, container, loader;

// Get the container element
container = document.querySelector(".scene");

// Create the scene
scene = new THREE.Scene();

// Camera settings
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 500;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 0);

// Create the renderer
renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Append renderer's DOM element to the container
container.appendChild(renderer.domElement);

// Load the GLTF model and initialize the scene
loader = new THREE.GLTFLoader();
function init() {
  loader.load("3d/scene.gltf", function (gltf) {
    scene.add(gltf.scene);

    model = gltf.scene;
    animate(); // Start the animation loop
  });
}

// Animation loop
function animate() {
  requestAnimationFrame(animate); // Recursive animation loop
  controls.update(); // Update camera controls
  renderer.render(scene, camera); // Render the scene
}

// Initialize the scene
init();
