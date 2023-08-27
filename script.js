import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

container = document.querySelector(".scene");
scene = new THREE.Scene();

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 500;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

function init() {}
