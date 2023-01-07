import React, { useEffect } from 'react';
import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import * as TWEEN from "https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.esm.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import earthTextureImage from 'assets/images/earth_texture_4k.jpg';

function GlobeBackground(prop) {
    let scene, camera, renderer, sphere, controls;

    const loadTexture = (texture) => {
        const geometry = new THREE.SphereGeometry(5, 32, 32, 9); //
        const loader = new THREE.TextureLoader();
        const earthTexture = loader.load(earthTextureImage);
        const material = new THREE.MeshBasicMaterial({ map: earthTexture });
        sphere = new THREE.Mesh(geometry, material);
    }

    const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x = 0.75;
        sphere.rotation.y -= 0.002;
        controls.update();
        TWEEN.update();
        renderer.render(scene, camera);
    }

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    useEffect(() => {
        const mainContainer = document.getElementById(prop.pageId);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            85,
            mainContainer.clientWidth / mainContainer.clientHeight,
            0.1,
            1000
        );
        loadTexture("assets/images/earth_texture_4k.jpg");
        scene.add(sphere);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mainContainer.clientWidth, mainContainer.clientHeight);
        document.body.appendChild(renderer.domElement);

        renderer.domElement.id = prop.id;
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.bottom = 0;
        renderer.domElement.style.margin = '0 auto';
        renderer.domElement.style.left = 0;
        renderer.domElement.style.right = 0;
        renderer.domElement.style.zIndex = 0;

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;    // 컨트롤에 무게감(관성) 부여
        controls.enableRotate = false;  // 줌 비활성화
        controls.enableZoom = false;  // 줌 비활성화
        controls.minDistance = 5;
        controls.maxDistance = 100;

        camera.position.z = 10;   // 구체가 보여질 크기

        window.addEventListener('resize', onWindowResize, false);

        animate();
    }, []);

    return (
        <></>
    );
}

export default GlobeBackground;