/** @format */

// import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";
import html2canvas from "html2canvas";

//LightMode
let lightMode = true;

//Create a clock for rotation
const clock = new THREE.Clock();

// Set rotate boolean variable
let rotateModel = true;

//Ugh, don't ask about this stuff
let controls;

// Creates empty mesh container
const myMesh = new THREE.Mesh();

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0, 0, 0);

//Lights
const pointLight1 = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight1.position.set(100, 100, 400);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 0.5, 0, 0);
pointLight2.position.set(-500, 100, -400);
scene.add(pointLight2);

// Parameters
const stlLoader = new STLLoader();

//Material
const material = new THREE.MeshStandardMaterial();
material.flatShading = true;
material.side = THREE.DoubleSide;

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    2000
);

// Renderer
const renderer = new THREE.WebGLRenderer();

let effect;

let characters = " .:-+*=%@#";
const effectSize = { amount: 0.205 };
let backgroundColor = "black";
let ASCIIColor = "white";

function createEffect() {
    effect = new AsciiEffect(renderer, characters, {
        invert: true,
        resolution: effectSize.amount,
    });
    effect.setSize(sizes.width, sizes.height);
    effect.domElement.style.color = ASCIIColor;
    // effect.domElement.style.backgroundColor = backgroundColor;
    effect.domElement.classList.add("asciiBox");
}

createEffect();

document.body.appendChild(effect.domElement);

document.getElementById("ascii").style.whiteSpace = "prewrap";

stlLoader.load("./models/EM.stl", function (geometry) {
    myMesh.material = material;
    myMesh.geometry = geometry;

    var tempGeometry = new THREE.Mesh(geometry, material);
    myMesh.position.copy = tempGeometry.position;

    geometry.computeVertexNormals();
    myMesh.geometry.center();

    myMesh.rotation.x = (-90 * Math.PI) / 180;

    myMesh.geometry.computeBoundingBox();
    var bbox = myMesh.geometry.boundingBox;

    myMesh.position.y = (bbox.max.z - bbox.min.z) / 5;

    camera.position.x = bbox.max.x * 4;
    camera.position.y = bbox.max.y;
    camera.position.z = bbox.max.z * 3;

    // move camera to the bottom and look up, zoom in very close

    // 將相機放置在物體的底部以下
    // camera.position.z = 0;
    //camera.lookAt(0, 0, 0);
    // camera.zoom = 0.5;
    // camera.updateProjectionMatrix();

    scene.add(myMesh);

    //controls = new OrbitControls(camera, effect.domElement);

    function tick() {
        if (rotateModel == true) {
            const elapsedTime = clock.getElapsedTime();
            myMesh.rotation.z = elapsedTime / 3;
            render();
            window.requestAnimationFrame(tick);
        } else {
            render();
            window.requestAnimationFrame(tick);
        }
    }

    function render() {
        effect.render(scene, camera);
    }

    tick();
});

const keyframes = [
    {
        rx: 1.5707953337814393,
        ry: -9.503825893487959e-7,
        rz: 1.2544634559949106,
        px: -0.18851380350171026,
        py: 0.003374259693436188,
        pz: 0.03300631548899701,
    },
    {
        px: -2.1797208198865823,
        py: 0.7456858904043902,
        pz: 1.259941607611314,
        rx: -0.10187680375576487,
        ry: -1.3965809813885177,
        rz: -0.10034508895856986,
    },
    {
        px: -1.1034436569318822,
        py: 0.7620751528401553,
        pz: 1.9652184488834998,
        rx: -0.029276658833755884,
        ry: -0.18859301653013388,
        rz: -0.005490215016934513,
    },
    {
        px: 3.6492892876810172,
        py: 1.4758909584810571,
        pz: 4.158788031597712,
        rx: -0.2220876074269339,
        ry: 0.684948575340779,
        rz: 0.14189637418696438,
    },
];

let lastScroll = 0;

const scrollAnimation = () => {
    const scrollY = window.scrollY;
    let t = scrollY / window.innerHeight;
    document.body.style.setProperty("--t", t);
    document.body.setAttribute("data-section", Math.floor(t + .2));
    let process = t;
    // 100 to transition, 50 to stop
    const data = Math.floor(process);
    process -= data;
       // process *= 1.5;
        camera.position.x =
            keyframes[data].px +
            (keyframes[data + 1].px - keyframes[data].px) * process;
        camera.position.y =
            keyframes[data].py +
            (keyframes[data + 1].py - keyframes[data].py) * process;
        camera.position.z =
            keyframes[data].pz +
            (keyframes[data + 1].pz - keyframes[data].pz) * process;
        camera.rotation.x =
            keyframes[data].rx +
            (keyframes[data + 1].rx - keyframes[data].rx) * process;
        camera.rotation.y =
            keyframes[data].ry +
            (keyframes[data + 1].ry - keyframes[data].ry) * process;
        camera.rotation.z =
            keyframes[data].rz +
            (keyframes[data + 1].rz - keyframes[data].rz) * process;
if (process > 2)
};
scrollAnimation();
window.addEventListener("scroll", scrollAnimation);

function rotateMode() {
    rotateModel = !rotateModel;
}

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
}
