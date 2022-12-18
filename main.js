import './style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three'

const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer= new THREE.WebGLRenderer(
  {canvas: document.getElementById('bg')}
)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setZ(30);

const lorem = new THREE.TextureLoader().load('saturn.jpg');

const geometry = new THREE.SphereGeometry( 7.5, 16, 8 );
const material = new THREE.MeshStandardMaterial( { map: lorem } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const ipsum = new THREE.TextureLoader().load('ring.jpeg');

const geometry2 = new THREE.RingGeometry( 10, 20, 320 );
const material2 = new THREE.MeshStandardMaterial( { map: ipsum, side: THREE.DoubleSide } );
const torus = new THREE.Mesh( geometry2, material2 );
scene.add( torus );
torus.rotation.x+=300;

const controls = new OrbitControls(camera, renderer.domElement);


const light2 = new THREE.PointLight( 0xffffff, 3, 100 );
light2.position.set( 20, 20, 20 );
scene.add( light2 );


const lightHelper2= new THREE.PointLightHelper(light2);
const gridHelper= new THREE.GridHelper(100,100,100)
scene.add( lightHelper2,gridHelper );




function anime() {
  requestAnimationFrame(anime);
  torus.rotation.z+=0.1
  sphere.rotation.y+=0.1;
  controls.update()
  renderer.render(scene,camera);  
}

function studzianki() {
  const geometryz = new THREE.SphereGeometry( 0.5, 24, 24 );
  const materialz = new THREE.MeshBasicMaterial( { color: 0xffffff } );
  const zvezda= new THREE.Mesh( geometryz, materialz );
  const [a,b,c] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(100) )
  zvezda.position.set(a,b,c);
  scene.add(zvezda);
}

const space= new THREE.TextureLoader().load('space.jpg');
scene.background = space;

Array(200).fill().forEach(studzianki);

anime();