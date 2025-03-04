# 3D Physics World Game

A 3D physics-based game built with React Three Fiber and Rapier physics engine, based on [Wawa Sensei's](https://wawasensei.dev/) excellent course.

## Overview

This project demonstrates essential concepts of 3D physics in web development, creating an interactive game where players can:
- Move a cube character with keyboard controls
- Experience realistic physics with gravity and collisions
- Interact with dynamic elements like a rotating swiper
- Navigate through teleportation gates
- Respawn when falling off the playground

## Technologies Used

- React Three Fiber - React renderer for Three.js
- @react-three/rapier - Physics engine integration
- @react-three/drei - Useful helpers and abstractions
- Three.js - 3D graphics library

## Features

- Physics-based movement and collisions
- Third-person camera controller
- Dynamic obstacles (rotating swiper)
- Teleportation system
- Respawn mechanism
- Realistic shadows and lighting

## Controls

To add animated instructions to your game, you can use Three.js animations in your React components:

```jsx
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'

export const Instructions = () => {
  const textRef = useRef()
  
  useFrame((state) => {
    // Make text float up and down
    textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 2
    // Slowly rotate
    textRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.1}
      position={[0, 2, 0]}
    >
      Use WASD to move
      <meshStandardMaterial color="yellow" />
    </Text3D>
  )
}
```

Add this component to your scene to display animated 3D text instructions.

Game Controls:
- Arrow keys / WASD - Move the character
- Space - Jump
- Left/Right arrows - Rotate character
- Up/Down arrows - Move forward/backward

## Credits

This project is based on the course material from [Wawa Sensei](https://wawasensei.dev/). The 3D assets are from the Mini-Game Variety Pack by Kay Lousberg.

### Special Thanks
- Wawa Sensei for the excellent course and tutorials
- Kay Lousberg for the Mini-Game Variety Pack assets
- The React Three Fiber and Rapier communities

## License

This project is for educational purposes. The course content belongs to Wawa Sensei, and the 3D assets are from Kay Lousberg's Mini-Game Variety Pack.
