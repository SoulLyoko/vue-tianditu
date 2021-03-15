import { toIcon, toLngLat } from "../utils/converter";

export default {
  data() {
    return {
      $tdtRoute: null,
      geocoder: null,
      showRoute: false,
      policy: 0,
      routePoints: [],
      startTool: null,
      endTool: null,
      startIcon: null, //起点图标
      endIcon: null, //终点图标
      startPoint: [],
      endPoint: [],
      startAddr: "",
      endAddr: "",
      duration: "",
      distance: ""
    };
  },
  watch: {
    startPoint(val) {
      if (val && val.length) {
        this.showRoute = true;
        this.geocoder.getLocation(toLngLat(this.startPoint), res => {
          this.startAddr = res.getAddressComponent().poi;
        });
        this.searchDrivingRoute();
      }
    },
    endPoint(val) {
      if (val && val.length) {
        this.showRoute = true;
        this.geocoder.getLocation(toLngLat(this.endPoint), res => {
          this.endAddr = res.getAddressComponent().poi;
        });
        this.searchDrivingRoute();
      }
    },
    policy() {
      this.searchDrivingRoute();
    }
  },
  methods: {
    initRoute() {
      this.$tdtRoute = new T.DrivingRoute(this.$tdtMap, {
        policy: this.policy, //驾车策略
        onSearchComplete: this.routeResult //检索完成后的回调函数
      });
      this.geocoder = new T.Geocoder();
      this.startIcon = toIcon({
        iconUrl: "http://lbs.tianditu.gov.cn/images/bus/start.png",
        iconSize: [44, 34],
        iconAnchor: [12, 31]
      });
      this.endIcon = toIcon({
        iconUrl: "http://lbs.tianditu.gov.cn/images/bus/end.png",
        iconSize: [44, 34],
        iconAnchor: [12, 31]
      });
      this.startTool = new T.MarkTool(this.$tdtMap, {
        icon: this.startIcon,
        follow: true
      });
      this.endTool = new T.MarkTool(this.$tdtMap, {
        icon: this.endIcon,
        follow: true
      });
      this.startTool.on("mouseup", e => {
        this.routePoints.push(e.currentMarker);
        this.startPoint = [e.currentLnglat.lng, e.currentLnglat.lat];
      });
      this.endTool.on("mouseup", e => {
        this.routePoints.push(e.currentMarker);
        this.endPoint = [e.currentLnglat.lng, e.currentLnglat.lat];
      });
    },
    /**
     * 导航
     */
    searchDrivingRoute() {
      if (!this.startPoint.length || !this.endPoint.length) return;
      this.clearAll();
      //设置驾车策略
      this.$tdtRoute.setPolicy(this.policy);
      //驾车路线搜索
      this.$tdtRoute.search(toLngLat(this.startPoint), toLngLat(this.endPoint));
    },
    //路线搜索结果
    routeResult(result) {
      //添加起始点
      this.createStartMarker(result);
      //获得单条驾车方案结果对象
      let plan = result.getPlan(0);
      //秒换算
      let hour = 0;
      let minute = 0;
      let second = +plan.getDuration();
      if (second >= 60) {
        if (second % 60 >= 0) {
          minute = Math.floor(second / 60);
          second = second % 60;
          if (minute >= 60) {
            hour = Math.floor(minute / 60);
            minute = minute % 60;
          }
        }
      }
      this.duration =
        (hour ? `${hour}小时` : "") +
        (minute ? `${minute}分` : "") +
        `${second}秒`;
      this.distance = plan.getDistance() + "公里";

      //显示驾车线路
      //创建线对象
      let line = new T.Polyline(plan.getPath(), {
        color: "#2C64A7",
        weight: 5,
        opacity: 0.9
      });
      //向地图上添加线
      this.$tdtMap.addOverLay(line);
      this.routePoints.push(line);
      //显示最佳级别
      this.$tdtMap.setViewport(plan.getPath());
    },
    //添加起始点
    createStartMarker(result) {
      let startMarker = new T.Marker(result.getStart(), {
        icon: this.startIcon
      });
      let endMarker = new T.Marker(result.getEnd(), {
        icon: this.endIcon
      });
      this.$tdtMap.addOverLay(startMarker);
      this.$tdtMap.addOverLay(endMarker);
      this.routePoints.push(startMarker);
      this.routePoints.push(endMarker);
    },
    clearRoute() {
      this.routePoints.forEach(item => {
        this.$tdtMap.removeOverLay(item);
      });
      this.$tdtMap.closeInfoWindow();
      this.duration = "";
      this.distance = "";
      this.$tdtRoute.clearResults();
    },
    closeRoute() {
      this.showRoute = false;
      this.clearRoute();
      this.startAddr = "";
      this.endAddr = "";
      this.startPoint = [];
      this.endPoint = [];
    }
  }
};
