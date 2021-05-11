<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-marker-cluster :markers="markers" @click="clusterClick"></tdt-marker-cluster>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-marker-cluster",
  data() {
    return {
      center: [116.40969, 37.43997],
      zoom: 3,
      markers: new Array(500).fill(0).map((item, index) => {
        return {
          position: [Math.random() * 40 + 85, Math.random() * 30 + 21],
          extData: "cluster-" + index
        };
      })
    };
  },
  methods: {
    clusterClick(e) {
      console.log("cluster对象", e.target);
      console.log("marker对象", e.layer);
      console.log("extData", e.layer.options.extData);
    }
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
