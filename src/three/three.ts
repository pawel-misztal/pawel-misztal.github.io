import * as THREE from "three";
import { DisposeTracker } from "./disposeTracker";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
// Opcjonalnie: ShaderPass i CopyShader do finalnego renderowania
import { OrbitControls } from "three/examples/jsm/Addons.js";
export class ThreeRenderer {
  private container: HTMLElement;
  private animationID?: number;
  private prevTime!: number;
  public scrollY: number = 0;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  disposables: DisposeTracker;
  sun!: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.Material,
    THREE.Object3DEventMap
  >;
  planet!: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.Material,
    THREE.Object3DEventMap
  >;
  composer: EffectComposer;
  controlls!: OrbitControls;
  particleCount!: number;
  particles!: THREE.Points<THREE.BufferGeometry<THREE.NormalBufferAttributes, THREE.BufferGeometryEventMap>, THREE.PointsMaterial, THREE.Object3DEventMap>;
  angVel!: Float32Array<ArrayBuffer>;
  angle!: Float32Array<ArrayBuffer>;
  rand!: Float32Array<ArrayBuffer>;
  angVelStars!: Float32Array<ArrayBuffer>;
  angleStars!: Float32Array<ArrayBuffer>;
  xyDist!: Float32Array<ArrayBuffer>;
  particlesStars!: THREE.Points<THREE.BufferGeometry<THREE.NormalBufferAttributes, THREE.BufferGeometryEventMap>, THREE.PointsMaterial, THREE.Object3DEventMap>;
  particleCountStars!: number;

  public constructor(container: HTMLElement) {
    this.container = container;
    this.disposables = new DisposeTracker();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x18181b);
    const clientRect = this.container.getBoundingClientRect();
    // console.log(clientRect);
    // console.log(window.devicePixelRatio);
    this.camera = new THREE.PerspectiveCamera(
      30,
      clientRect.width / clientRect.height,
      0.1,
      1000
    );
    this.renderer = this.disposables.track(
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      })
    );
    // this.renderer.setClearColor(0x000000, 0);
    this.renderer.setClearColor(0x242424, 1);
    // this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    this.composer = this.disposables.track(new EffectComposer(this.renderer));
    const renderPass = this.disposables.track(
      new RenderPass(this.scene, this.camera)
    );
    // renderPass.overrideMaterial!.transparent = true;
    renderPass.clear = true;
    // renderPass.clearAlpha = 0;
    // renderPass.clearColor = new THREE.Color("rgba(0,0,0,0)");
    this.composer.addPass(renderPass);
    const bloomPass = this.disposables.track(
      new UnrealBloomPass(
        new THREE.Vector2(
          clientRect.width * window.devicePixelRatio,
          clientRect.height * window.devicePixelRatio
        ),
        1,
        1,
        0.01
      )
    );
    // bloomPass.renderToScreen =true
    this.composer.addPass(bloomPass);

    this.handleResize();
    addEventListener("resize", this.handleResize);

    container.appendChild(this.renderer.domElement);
    this.createScene();
    this.startLoop();
  }

  public createScene() {
    this.scene.add(
      this.disposables.track(new THREE.AmbientLight(0x404040, 50))
    );

    const geometry = this.disposables.track(new THREE.SphereGeometry(1));
    // const material = this.disposables.track(new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
    const material = this.disposables.track(
      new THREE.MeshStandardMaterial({
        color: 0xffffff, // Ciemny kolor bazowy
        emissive: "rgb(255, 153, 204)", // Kolor i intensywność "świecenia"
        emissiveIntensity: 1.2, // Zwiększona intensywność emisji
      })
    );
    this.sun = this.disposables.track(new THREE.Mesh(geometry, material));
    // this.scene.add(this.sun);



    const holeGeom = this.disposables.track(new THREE.SphereGeometry(0.2));
    const holeMat = this.disposables.track(
      new THREE.MeshBasicMaterial({color:0x000000})
    );
    const hole = this.disposables.track(new THREE.Mesh(holeGeom, holeMat));
    this.scene.add(hole);

    const planetGeom = this.disposables.track(new THREE.SphereGeometry(0.4));
    const planetMat = this.disposables.track(
      new THREE.MeshStandardMaterial({ color: "rgb(50,50,50)" })
    );
    this.planet = this.disposables.track(new THREE.Mesh(planetGeom, planetMat));
    // this.scene.add(this.planet);

    // const pointLight = this.disposables.track(
    //   new THREE.PointLight("rgb(255, 153, 204)", 20)
    // );
    // this.scene.add(pointLight);

    // const grid = this.disposables.track(new THREE.GridHelper());
    // this.scene.add(grid);

    // const helper = this.disposables.track(new THREE.CameraHelper( this.camera ));
    // this.scene.add( helper );
    // this.controlls = this.disposables.track(
    //   new OrbitControls(this.camera, this.renderer.domElement)
    // );
    // this.controlls.target = new THREE.Vector3(-1,0,0)
    
    // this.controlls.autoRotate = true;
    // this.controlls.autoRotateSpeed = 0.2;
    // this.controlls.enableRotate = true;
    // this.controlls.enableZoom = false;

    this.createHole(this.scene, 5000);
    this.createStars(this.scene, 1000);

    this.camera.position.z = 5;
    this.camera.position.x = 0;
    this.camera.position.y = 3
    this.camera.lookAt(
      new THREE.Vector3(-1,0,0)
    );
    const axis = new THREE.Vector3(0, 0, 1); // lokalna oś Z
    const angle = -10 * Math.PI / 180; // np. 45 stopni

    this.camera.rotateOnAxis(axis, angle);
    this.camera.position.y = 2.5

    // this.controlls.update();
  }

  private createHole(scene: THREE.Scene, amount:number) {
    this.particleCount = amount;
    const particleCount = this.particleCount;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    this.angVel = new Float32Array(particleCount);
    this.angle = new Float32Array(particleCount);
    this.rand = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const r = 4;
      let rand = Math.random(); 
      rand = Math.pow(rand,2) 
      const randAngle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (1 - rand) * 0.4;
      rand = rand + Math.cos(Math.abs(y) * 5) * 0.1
      const x = Math.sin(randAngle) * rand * r;
      const z = Math.cos(randAngle) * rand * r;

      this.rand[i] = rand;
      this.angVel[i] =  1 / (Math.pow(new THREE.Vector3(x,y,z).length() + 0.00001, 2))
      this.angle[i] = randAngle;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // positions[i * 3] = (Math.random() - 0.5) * 10;
      // positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      // positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const emission = 0.1;
      const base = 0.2
      colors[i * 3] = base + Math.random() * emission;
      colors[i * 3 + 1] = base +  Math.random() * emission;
      colors[i * 3 + 2] = base + Math.random() * emission;
    }

    const geom = this.disposables.track(new THREE.BufferGeometry());
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const loader = this.disposables.track(new THREE.TextureLoader());
    const circleTexture = loader.load('circle.webp');

    const mat = this.disposables.track(
      new THREE.PointsMaterial({
        size: 0.05,
        map : circleTexture,
        transparent: true,
        alphaTest: 0.5,
        vertexColors: true,
        sizeAttenuation: true,
      })
    );

    this.particles = new THREE.Points(geom, mat);
    scene.add(this.particles);
  }

  private createStars(scene: THREE.Scene, amount:number) {
    this.particleCountStars = amount;
    const particleCount = amount;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {

      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const emission = 0.1;
      const base = 0.2
      colors[i * 3] = base + Math.random() * emission;
      colors[i * 3 + 1] = base +  Math.random() * emission;
      colors[i * 3 + 2] = base + Math.random() * emission;
    }

    const geom = this.disposables.track(new THREE.BufferGeometry());
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const loader = this.disposables.track(new THREE.TextureLoader());
    const circleTexture = loader.load('circle.webp');

    const mat = this.disposables.track(
      new THREE.PointsMaterial({
        size: 0.03,
        map : circleTexture,
        transparent: true,
        alphaTest: 0.5,
        vertexColors: true,
        sizeAttenuation: true,
      })
    );

    this.particlesStars = new THREE.Points(geom, mat);
    scene.add(this.particlesStars);
  }

  private handleResize = () => {
    const clientRect = this.container.getBoundingClientRect();
    const w = clientRect.width;
    const h = clientRect.height;
    // const w = window.innerWidth;
    // const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.composer.setSize(w, h);
    this.composer.setPixelRatio(window.devicePixelRatio);
  };

  public startLoop() {
    this.animationID = requestAnimationFrame(this.loop);
    this.prevTime = Date.now();
  }
  private loop = () => {
    const dt = this.calculateDeltaTime();
    this.onUpdate(dt);
    // this.renderer.render(this.scene,this.camera);
    this.composer.render();
    this.animationID = requestAnimationFrame(this.loop);
  };

  private onUpdate(dt: number) {
    const timeSec = Date.now() / 1000;
    const dist = 2;
    const speed = 1;
    this.planet.position.x = Math.sin(timeSec * speed) * dist;
    this.planet.position.z = Math.cos(timeSec * speed) * dist;

    
    this.camera.position.y = 2.5 - this.scrollY
    // this.controlls.update(dt); 
    
    this.particlesStars?.rotateY(dt * 0.01);
    
    
    const posParticles = this.particles.geometry.attributes.position.array;
    const velMul = 0.05
    
    for(let i = 0; i < this.particleCount; i++) {
      const vel = this.angVel[i] * velMul;
      const angle = this.angle[i];
      const newAngle = angle + vel * dt;
      const rand = this.rand[i]
      
      this.angle[i] = newAngle;

         const r = 2;
      const x = Math.sin(newAngle) * rand * r;
      const z = Math.cos(newAngle) * rand * r;
      // const y = (Math.random() - 0.5) * (1 - rand) * 0.5;


      posParticles[i * 3] = x;
      // posParticles[i * 3 + 1] = y;
      posParticles[i * 3 + 2] = z;
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
  }

  private calculateDeltaTime() {
    const now = Date.now();
    const dt = now - this.prevTime;
    this.prevTime = now;
    return dt / 1000;
  }

  public dispose() {
    this.container.removeChild(this.renderer.domElement);
    if (this.animationID) cancelAnimationFrame(this.animationID);
    removeEventListener("resize", this.handleResize);
    this.disposables.disposeAll();
  }
}
