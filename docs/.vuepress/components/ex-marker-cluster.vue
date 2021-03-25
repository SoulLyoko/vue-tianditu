<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-marker-cluster :markers="markers" :styles="styles" @click="clusterClick"></tdt-marker-cluster>
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
      }),
      styles: [
        {
          url: "http://api.tianditu.gov.cn/img/map/cluster/heart30.png",
          size: [30, 26], //图片大小
          offset: [-15, -13], //显示图片的偏移量
          textColor: "#000000", //显示数字的颜色
          textSize: 8, //显示文字的大小
          range: [0, 50]
        },
        {
          url: "http://api.tianditu.gov.cn/img/map/cluster/heart40.png",
          size: [42, 36],
          offset: [-20, -17],
          textColor: "#ff0000",
          textSize: 10,
          range: [50, 400]
        },
        {
          url: "http://api.tianditu.gov.cn/img/map/cluster/heart50.png",
          size: [52, 46],
          offset: [-10, -22],
          textColor: "white",
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
