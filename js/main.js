import * as THREE from 'three';
import { GLTFLoader } from './GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({antialias:true});

const light = new THREE.AmbientLight(0xffffff,3);
scene.add(light)
const directionLight = new THREE.DirectionalLight(0xFF0E0E,1.9);
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
    tren.rotation.y=0;

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
    //if(tren){}
    renderer.render(scene,camera);
    
}

animate();

function movimientoTren(event){

//*************************************** IZQUIERDA *************************************/
    if(tren.rotation.y<=0.07&&tren.rotation.y>=-0.07){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z += 2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z -= 2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    break;
        }
    }
    if(tren.rotation.y<=-0.07&&tren.rotation.y>=-1.5707){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z += 2;
                // tren.position.x -= 0.5;
                // tren.position.y -= 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    if(tren.rotation.y<=-1.5707&&tren.rotation.y>=-3.1415){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z += 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    if(tren.rotation.y<=-3.1415&&tren.rotation.y>=-4.7122){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z += 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    if(tren.rotation.y<=-4.7122&&tren.rotation.y>=-6.2829){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z += 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }

//*************************************** DERECHA *************************************/
    if(tren.rotation.y>=0.07&&tren.rotation.y<=1.5707){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z += 2;
                // tren.position.x -= 0.5;
                // tren.position.y -= 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y-=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    if(tren.rotation.y>=1.5707&&tren.rotation.y<=3.1415){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z += 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    if(tren.rotation.y>=3.1415&&tren.rotation.y<=4.7122){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z += 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    if(tren.rotation.y>=4.7122&&tren.rotation.y<=6.2829){
        switch(event.key){
            case "ArrowUp":
                rueda1.rotation.x+=0.5;
                rueda2.rotation.x+=0.5;
                rueda3.rotation.x+=0.5;
                rueda4.rotation.x+=0.5;
                rueda5.rotation.x+=0.5;
                rueda6.rotation.x+=0.5;
                tren.position.z += 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowDown":
                rueda1.rotation.x-=0.5;
                rueda2.rotation.x-=0.5;
                rueda3.rotation.x-=0.5;
                rueda4.rotation.x-=0.5;
                rueda5.rotation.x-=0.5;
                rueda6.rotation.x-=0.5;
                tren.position.z -= 2;
                // tren.position.x += 0.5;
                // tren.position.y += 0.2;
                break;
            case "ArrowLeft":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y -=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
            case "ArrowRight":
                    rueda1.rotation.x-=0.5;
                    rueda2.rotation.x-=0.5;
                    rueda3.rotation.x-=0.5;
                    rueda4.rotation.x-=0.5;
                    rueda5.rotation.x-=0.5;
                    rueda6.rotation.x-=0.5;
                    tren.rotation.y +=0.07;
                    //tren.position.z += 2;
                    //tren.position.x += 0.05;
                    //tren.position.y -= 0.2;
                    break;
        }
    }
    //Redimencion del valor de rotacion si supera el rango determinado
    if(tren.rotation.y<=-6.2829 || tren.rotation.y>=6.2829){
        tren.rotation.y=0;
    }

    console.log("X: "+tren.position.x.toFixed(2)+" Y: "+tren.position.y.toFixed(2) +" Z: "+tren.position.z.toFixed(2));
    console.log("Grados X: "+tren.rotation.x.toFixed(2) +" Y: "+tren.rotation.y.toFixed(2) +" Z: "+tren.rotation.z.toFixed(2));
}

window.addEventListener('keydown',movimientoTren);

