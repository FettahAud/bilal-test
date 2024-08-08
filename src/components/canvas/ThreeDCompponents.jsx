'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect } from 'react'
import { motion } from 'framer-motion-3d'
import { useScroll, useTransform } from 'framer-motion'

export const Spring = (props) => {
  const { scene } = useGLTF('/spring.glb')
  useEffect(() => {
    scene.children[0].geometry.computeVertexNormals()
    scene.children[0].material = new THREE.MeshPhongMaterial({
      color: 'white',
      side: THREE.DoubleSide,
    })
  }, [])
  scene.rotation.order = 'ZYX'
  scene.rotation.z = THREE.MathUtils.degToRad(45)

  useFrame((state, delta) => (scene.rotation.x += delta))
  return <primitive scale={1.1} object={scene} {...props} />
}
export const Spring2 = ({ container }) => {
  const { scene } = useGLTF('/spring-2.glb')
  const { scrollYProgress } = useScroll({
    container,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [1, 180])

  useEffect(() => {
    scene.children[0].material = new THREE.MeshStandardMaterial({
      color: 'black',
      side: THREE.DoubleSide,
      metalness: 0.35,
      roughness: 0.25,
    })
  }, [])

  return <motion.primitive scale={2} position={[0, 0, 0]} object={scene} rotation-x={90} rotation-z={x} />
}
