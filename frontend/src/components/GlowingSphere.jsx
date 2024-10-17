import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GlowingSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    // Append the renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a sphere geometry and material
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshNormalMaterial({
      color: 0xff69b4, // Dark pink color
      emissive: 0xff69b4, // Emissive color
      emissiveIntensity: 1.5, // Increase emissive intensity for a stronger glow
      metalness: 0.5, // Add some metallic sheen
      roughness: 0.1, // Less rough for a smoother finish
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add a glowing sphere for shadow effect
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff69b4, // Same color as the sphere
      transparent: true,
      opacity: 0.8, // Set transparency
    });

    const glowSphere = new THREE.Mesh(geometry, glowMaterial);
    glowSphere.scale.set(10, 10, 10); // Scale it up to create a glow effect
    scene.add(glowSphere);

    // Add a point light to illuminate the sphere
    const light = new THREE.PointLight(0xffffff, 2, 100); // Increase light intensity
    light.position.set(10, 10, 10);
    scene.add(light);

    // Set the camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01; // Rotate the sphere
      sphere.rotation.y += 0.01; // Rotate the sphere
      glowSphere.rotation.x += 0.01; // Rotate the glow sphere
      glowSphere.rotation.y += 0.01; // Rotate the glow sphere
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to remove the renderer on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default GlowingSphere;
