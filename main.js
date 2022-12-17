import './style.css'

import * as THREE from 'three'

const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer= new THREE.WebGLRenderer(
  {canvas: document.getElementById('bg')}
)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setZ(30);

const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

function anime() {
  requestAnimationFrame(anime);
  cylinder.rotation.x+=0.01;
  cylinder.rotation.y+=0.01;
  cylinder.rotation.z+=0.01;

  renderer.render(scene,camera);  
}

anime();