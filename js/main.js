import * as THREE from 'three';
import { GLTFLoader } from './GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({antialias:true});

const light = new THREE.AmbientLight(0xffffff,3);
scene.add(light)
const directionLight = new THREE.DirectionalLight(0xffffff,1);
directionLight.position.set(0,1,0);
scene.add(directionLight);


const loader = new GLTFLoader();

camera.position.set(0,0,80);

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

let tren;

let rueda1;
let rueda2;
let rueda3;
let rueda4;
let rueda5;
let rueda6;

loader.load('../modelo3D/Tren.glb',function(gltf){
    tren = gltf.scene;

    tren.position.set(0,-20,0);
    tren.scale.set(8,8,8);
    tren.rotation.y=75;

    rueda1 = tren.getObjectByName('Rueda_1');
    rueda2 = tren.getObjectByName('Rueda_2');
    rueda3 = tren.getObjectByName('Rueda_3');
    rueda4 = tren.getObjectByName('Rueda_4');
    rueda5 = tren.getObjectByName('Rueda_5');
    rueda6 = tren.getObjectByName('Rueda_6');

    scene.add(tren);
    animate();

},undefined, function(error){
    console.error(error);
});

function animate(){
    requestAnimationFrame(animate);
    if(tren){

    }
    renderer.render(scene,camera);
}

animate();

function movimientoTren(event){
    switch(event.key){
        case "ArrowUp":
            rueda1.rotation.x+=0.5;
            rueda2.rotation.x+=0.5;
            rueda3.rotation.x+=0.5;
            rueda4.rotation.x+=0.5;
            rueda5.rotation.x+=0.5;
            rueda6.rotation.x+=0.5;
            tren.position.z += 0.8;
            tren.position.x -= 0.5;
            tren.position.y -= 0.2;
            break;
        case "ArrowDown":
            rueda1.rotation.x-=0.5;
            rueda2.rotation.x-=0.5;
            rueda3.rotation.x-=0.5;
            rueda4.rotation.x-=0.5;
            rueda5.rotation.x-=0.5;
            rueda6.rotation.x-=0.5;
            tren.position.z -= 0.8;
            tren.position.x += 0.5;
            tren.position.y += 0.2;
            break;
    }
}

window.addEventListener('keydown',movimientoTren);