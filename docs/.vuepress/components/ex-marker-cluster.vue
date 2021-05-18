<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-marker-cluster :markers="markers" @click="clusterClick" :styles="styles"></tdt-marker-cluster>
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
      }),
      styles: [
        {
          url: "/vue-tianditu/cluster0.png",
          size: [30, 30], //图片大小
          offset: [0, 0], //显示图片的偏移量
          textColor: "#000000", //显示数字的颜色
          textSize: 8, //显示文字的大小
          range: [0, 50] //显示该图标的范围
        },
        {
          url: "/vue-tianditu/cluster1.png",
          size: [40, 40],
          offset: [0, 0],
          textColor: "#000000",
          textSize: 10,
          range: [50, 400]
        },
        {
          url: "/vue-tianditu/cluster2.png",
          size: [50, 50],
          offset: [0, 0],
          textColor: "#000000",
          textSize: 12,
          range: [400, 500]
        }
      ]
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
