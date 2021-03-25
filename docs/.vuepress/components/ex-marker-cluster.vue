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
      center: [113.280637, 23.125178],
      zoom: 6,
      markers: new Array(500).fill(0).map((item, index) => {
        return {
          icon: {
            iconUrl: index > 250 ? "/marker_red.png" : "/marker_blue.png",
            iconSize: [18, 26],
            iconAnchor: [9, 26]
          },
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
