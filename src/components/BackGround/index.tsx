import React, { Suspense, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SITE_BLUE = '#3b82f6';
const SITE_SKY = '#60a5fa';
const SITE_VIOLET = '#8b5cf6';
const SITE_PINK = '#f472b6';
const PARTICLE_COLORS = [SITE_BLUE, SITE_SKY, SITE_VIOLET, SITE_PINK];

function SceneWrapper({ children }: { children: React.ReactNode }) {
    const groupRef = useRef<THREE.Group | null>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame((_: any, delta: number) => {
        if (!groupRef.current) {
            return;
        }

        const lerpFactor = Math.min(delta * 3.5, 0.12);
        groupRef.current.rotation.x += ((mouse.current.y * 0.22) - groupRef.current.rotation.x) * lerpFactor;
        groupRef.current.rotation.y += ((mouse.current.x * 0.28) - groupRef.current.rotation.y) * lerpFactor;
        groupRef.current.rotation.z += (0 - groupRef.current.rotation.z) * lerpFactor;
    });

    return <group ref={groupRef}>{children}</group>;
}

interface HeroModelProps {
    onReady?: () => void;
}

function HeroModel({ onReady }: HeroModelProps) {
    const modelRef = useRef<THREE.Group | null>(null);
    const introProgressRef = useRef(0);
    const gltf = useLoader(GLTFLoader, '/models/source/The%20MODEL.glb');

    const { scene, scale, baseY, materials } = useMemo(() => {
        const clone = gltf.scene.clone(true);
        const modelMaterials: THREE.Material[] = [];

        clone.traverse((child) => {
            if (!(child instanceof THREE.Mesh)) {
                return;
            }

            child.castShadow = false;
            child.receiveShadow = false;

            if (Array.isArray(child.material)) {
                child.material.forEach((material) => {
                    material.transparent = true;
                    material.opacity = 0;
                    modelMaterials.push(material);
                });
                return;
            }

            child.material.transparent = true;
            child.material.opacity = 0;
            modelMaterials.push(child.material);
        });

        const box = new THREE.Box3().setFromObject(clone);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z) || 1;
        const targetSize = 2.8;
        const fittedScale = targetSize / maxDimension;

        clone.position.sub(center);
        clone.position.y -= size.y * 0.08;

        return {
            scene: clone,
            scale: fittedScale,
            baseY: -0.2,
            materials: modelMaterials,
        };
    }, [gltf.scene]);

    useEffect(() => {
        onReady?.();
    }, [onReady]);

    useFrame((_, delta) => {
        if (!modelRef.current) {
            return;
        }

        introProgressRef.current = Math.min(introProgressRef.current + delta * 0.85, 1);

        const easedProgress = 1 - Math.pow(1 - introProgressRef.current, 3);
        const animatedScale = scale * (0.88 + easedProgress * 0.12);

        modelRef.current.scale.setScalar(animatedScale);
        modelRef.current.position.y = baseY + (1 - easedProgress) * -0.35;

        materials.forEach((material) => {
            material.opacity = 0.95 * easedProgress;
        });
    });

    return (
        <group ref={modelRef} position={[0, baseY, 0]} rotation={[0.18, 1, 0]} scale={scale}>
            <primitive object={scene} />
        </group>
    );
}


function ParticleField() {
    const innerPointsRef = useRef<THREE.Points | null>(null);
    const outerPointsRef = useRef<THREE.Points | null>(null);

    const particleCount = useMemo(() => {
        const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
        const isCompactScreen = window.innerWidth < 768;

        if (isCompactScreen || deviceMemory <= 4) {
            return 1800;
        }

        return 2800;
    }, []);

    const sprite = useMemo(() => {
        const size = 128;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext('2d');
        if (!context) {
            return null;
        }

        const gradient = context.createRadialGradient(
            size / 2,
            size / 2,
            0,
            size / 2,
            size / 2,
            size / 2
        );

        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.65, 'rgba(255, 255, 255, 0.95)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }, []);

    const innerPositions = useMemo(() => {
        const data = new Float32Array(particleCount * 3);

        for (let index = 0; index < particleCount; index += 1) {
            const stride = index * 3;
            const radius = 3.6 + Math.random() * 7.2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            data[stride] = radius * Math.sin(phi) * Math.cos(theta);
            data[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
            data[stride + 2] = radius * Math.cos(phi);
        }

        return data;
    }, [particleCount]);

    const outerParticleCount = useMemo(() => Math.floor(particleCount * 0.45), [particleCount]);

    const outerPositions = useMemo(() => {
        const data = new Float32Array(outerParticleCount * 3);

        for (let index = 0; index < outerParticleCount; index += 1) {
            const stride = index * 3;
            const radius = 8.5 + Math.random() * 8.5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            data[stride] = radius * Math.sin(phi) * Math.cos(theta);
            data[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
            data[stride + 2] = radius * Math.cos(phi);
        }

        return data;
    }, [outerParticleCount]);

    const innerColors = useMemo(() => {
        const data = new Float32Array(particleCount * 3);

        for (let index = 0; index < particleCount; index += 1) {
            const stride = index * 3;
            const color = new THREE.Color(
                PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
            );

            data[stride] = color.r;
            data[stride + 1] = color.g;
            data[stride + 2] = color.b;
        }

        return data;
    }, [particleCount]);

    const outerColors = useMemo(() => {
        const data = new Float32Array(outerParticleCount * 3);

        for (let index = 0; index < outerParticleCount; index += 1) {
            const stride = index * 3;
            const color = new THREE.Color(
                PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
            );

            data[stride] = color.r;
            data[stride + 1] = color.g;
            data[stride + 2] = color.b;
        }

        return data;
    }, [outerParticleCount]);

    useFrame((_, delta) => {
        const lerpFactor = Math.min(delta * 1.8, 0.08);

        if (innerPointsRef.current) {
            innerPointsRef.current.rotation.y += (0.015 - innerPointsRef.current.rotation.y * 0.02) * lerpFactor;
            innerPointsRef.current.rotation.x += (0.01 - innerPointsRef.current.rotation.x * 0.02) * lerpFactor;
        }

        if (outerPointsRef.current) {
            outerPointsRef.current.rotation.y += (-0.01 - outerPointsRef.current.rotation.y * 0.015) * lerpFactor;
            outerPointsRef.current.rotation.x += (0.006 - outerPointsRef.current.rotation.x * 0.015) * lerpFactor;
        }
    });

    return (
        <>
            <points ref={outerPointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={outerPositions.length / 3}
                        array={outerPositions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={outerColors.length / 3}
                        array={outerColors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#ffffff"
                    map={sprite ?? undefined}
                    alphaMap={sprite ?? undefined}
                    size={0.028}
                    sizeAttenuation
                    transparent
                    opacity={0.68}
                    depthWrite={false}
                    vertexColors
                    alphaTest={0.001}
                    toneMapped={false}
                />
            </points>

            <points ref={innerPointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={innerPositions.length / 3}
                        array={innerPositions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={innerColors.length / 3}
                        array={innerColors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#ffffff"
                    map={sprite ?? undefined}
                    alphaMap={sprite ?? undefined}
                    size={0.034}
                    sizeAttenuation
                    transparent
                    opacity={1}
                    depthWrite={false}
                    vertexColors
                    alphaTest={0.001}
                    toneMapped={false}
                />
            </points>
        </>
    );
}

interface BackgroundProps {
    onModelReady?: () => void;
}

const Background: React.FC<BackgroundProps> = ({ onModelReady }) => {
    return (
        <div className="background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]">
                <Canvas
                    camera={{
                        fov: 55,
                        near: 0.1,
                        far: 100,
                        position: [0, 0, 6.5],
                    }}
                    gl={{ alpha: true, antialias: true }}
                    onCreated={({ gl, camera }) => {
                        gl.setClearColor(0x000000, 0);
                        camera.lookAt(0, 0, 0);
                    }}
                >
                    {/* <fog attach="fog" args={['#08111f', 6, 18]} /> */}
                    <ambientLight intensity={1.85} color="#f8fbff" />
                    <directionalLight position={[0, 6, 1.5]} intensity={1.25} color="#ffffff" />
                    <directionalLight position={[4, 5, 6]} intensity={1.35} color={SITE_SKY} />
                    <directionalLight position={[-5, -2, 3]} intensity={0.95} color={SITE_PINK} />

                    <SceneWrapper>
                        <Suspense fallback={null}>
                            <HeroModel onReady={onModelReady} />
                        </Suspense>
                        <ParticleField />
                    </SceneWrapper>
                </Canvas>
            </div>

            {/* <div className="absolute inset-0 bg-[#07111d]/7" /> */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),_transparent_24%)]" />
        </div>
    );
};

export default Background;