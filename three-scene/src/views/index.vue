<template>
  <div id="container"></div>
</template>

<script>
import * as Three from 'three';
export default {
  name: 'index',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods:{
    init: function () {
      let container = document.getElementById('container')
      this.camera = new Three.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.01, 1000)
      this.camera.position.z = 200
      this.camera.position.x = 0
      this.camera.position.y = 0
      // 创建场景对象Scene
      this.scene = new Three.Scene()
      // 创建网络模型
      // let geometry = new Three.SphereDeometry(60, 40, 40) //创建一个球体几何对象
      let geometry = new Three.BoxGeometry(50, 50, 50) //创建一个立方体几何对象Geometry
      let material = new Three.MeshNormalMaterial({
        color: 0x0000ff
      }) //材质对象Material
      this.mesh = new Three.Mesh(geometry, material) //网络模型对象Mesh
      this.scene.add(this.mesh) //网络模型添加到场景中

      //点光源
      let point = new Three.PointLight(0x444444)
      point.position.set(1, 1, 1)
      this.scene.add(point)

      // 环境光
      let ambient = new Three.AmbientLight(0x444444)
      this.scene.add(ambient)

      this.renderer = new Three.WebGLRenderer({antialias: true})
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>

<style>
#container {
  height: 100vh;
}
</style>