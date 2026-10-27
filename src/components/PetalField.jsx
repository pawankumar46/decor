import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Lightweight Three.js petal / pollen field for the hero.
 * Pauses when off-screen or when the user prefers reduced motion.
 */
const PetalField = ({ className = '' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const count = 48;
    const geometry = new THREE.PlaneGeometry(0.18, 0.28);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xc4a574, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: 0x6bb3a3, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: 0xe8d9c0, transparent: true, opacity: 0.5, side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
    ];

    const petals = [];
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(geometry, materials[i % materials.length]);
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.userData = {
        speed: 0.15 + Math.random() * 0.35,
        sway: 0.2 + Math.random() * 0.5,
        spin: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
      };
      scene.add(mesh);
      petals.push(mesh);
    }

    let frameId;
    let running = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!running) return;
      const t = clock.getElapsedTime();
      petals.forEach((p) => {
        const { speed, sway, spin, phase } = p.userData;
        p.position.y -= speed * 0.01;
        p.position.x += Math.sin(t * sway + phase) * 0.004;
        p.rotation.z += spin;
        p.rotation.x += spin * 0.4;
        if (p.position.y < -5) {
          p.position.y = 5;
          p.position.x = (Math.random() - 0.5) * 14;
        }
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) {
          clock.start();
          frameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(frameId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(mount);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      geometry.dispose();
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
};

export default PetalField;
