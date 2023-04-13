import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#EFBD480',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
})

export default state