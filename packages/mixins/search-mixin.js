import { toLngLat } from "../utils/converter";

export default {
  data() {
    return {
      $tdtSearch: null,
      searching: false,
      keyWord: "",
      page: {
        currentPage: 1,
        pageSize: 10,
        countpage: 0,
        total: 0
      },
      showSearchResult: false,
      infoWindow: {},
      pois: [],
      markers: [],
      polylines: [],
      prompts: [],
      statistics: null,
      suggests: [],
      lineData: []
    };
  },
  watch: {
    "page.currentPage"(val) {
      this.$tdtSearch.gotoPage(val);
    }
  },
  methods: {
    /**
     * 搜索
     */
    initSearch() {
      this.$tdtSearch = new T.LocalSearch(this.$tdtMap, {
        pageCapacity: this.pageSize || 10, //每页显示的数量
        onSearchComplete: this.localSearchResult //接收数据的回调函数
      });
    },
    search() {
      if (this.keyWord) {
        this.$tdtSearch.search(this.keyWord);
      } else {
        this.clearAll();
      }
    },
    localSearchResult(result) {
      console.log(result);
      //清空地图及搜索列表
      this.clearAll();
      //添加提示词
      this.prompts = result.getPrompt() || [];

      //根据返回类型解析搜索结果
      switch (parseInt(result.getResultType())) {
        case 1:
          //解析点数据结果
          this.getPois(result.getPois());
          break;
        case 2:
          //解析推荐城市
          this.statistics = result.getStatistics() || null;
          break;
        case 3:
          //解析行政区划边界
          this.getArea(result.getArea());
          break;
        case 4:
          //解析建议词信息
          this.suggests = result.getSuggests() || [];
          break;
        case 5:
          //解析公交信息
          this.lineData = result.getLineData() || [];
          break;
      }
      this.showSearchResult = true;
    },
    //解析点数据结果
    getPois(obj) {
      if (obj) {
        //坐标数组，设置最佳比例尺时会用到
        let zoomArr = [];
        for (let i = 0; i < obj.length; i++) {
          //坐标
          let lnglatArr = obj[i].lonlat.split(" ");
          let lnglat = toLngLat(lnglatArr);
          //创建标注对象
          let marker = new T.Marker(lnglat);
          this.pois.push({
            ...obj[i],
            lnglat: lnglatArr,
            marker
          });
          //地图上添加标注点
          this.$tdtMap.addOverLay(marker);
          zoomArr.push(lnglat);
          this.markers.push(marker);
          //注册标注点的点击事件
          marker.addEventListener("click", () => {
            this.showPosition({
              ...obj[i],
              lnglat: lnglatArr,
              marker
            });
          });
        }
        //显示地图的最佳级别
        this.$tdtMap.setViewport(zoomArr);
        //显示搜索结果
        this.page.total = this.$tdtSearch.getCountNumber();
        this.page.countPage = this.$tdtSearch.getCountPage();
        this.page.currentPage = this.$tdtSearch.getPageIndex();
      }
    },
    showPosition(obj) {
      this.infoWindow = obj;
      let winHtml = this.$refs.infoWindow;
      let markerInfoWin = new T.InfoWindow(winHtml, { autoPan: true });
      obj.marker.openInfoWindow(markerInfoWin);
      this.$emit("marker-click", { marker: obj.marker, info: this.infoWindow });
    },
    //解析行政区划边界
    getArea(obj) {
      if (obj) {
        if (obj.points) {
          //坐标数组，设置最佳比例尺时会用到
          let pointsArr = [];
          let points = obj.points;
          for (let i = 0; i < points.length; i++) {
            let regionLngLats = [];
            let regionArr = points[i].region.split(",");
            for (let m = 0; m < regionArr.length; m++) {
              let lnglatArr = regionArr[m].split(" ");
              let lnglat = new T.LngLat(lnglatArr[0], lnglatArr[1]);
              regionLngLats.push(lnglat);
              pointsArr.push(lnglat);
            }
            //创建线对象
            let line = new T.Polyline(regionLngLats, {
              color: "blue",
              weight: 3,
              opacity: 1,
              lineStyle: "dashed"
            });
            //向地图上添加线
            this.$tdtMap.addOverLay(line);
            this.polylines.push(line);
          }
          //显示最佳比例尺
          this.$tdtMap.setViewport(pointsArr);
        }
        if (obj.lonlat) {
          let regionArr = obj.lonlat.split(",");
          this.$tdtMap.panTo(new T.LngLat(regionArr[0], regionArr[1]));
        }
      }
    },
    //清空地图及搜索列表
    clearSearch() {
      if (this.$tdtSearch) {
        this.$tdtSearch.clearResults();
      }
      this.markers.forEach(marker => {
        this.$tdtMap.removeOverLay(marker);
      });
      this.polylines.forEach(polyline => {
        this.$tdtMap.removeOverLay(polyline);
      });
      this.pois = [];
      this.markers = [];
      this.polylines = [];
      this.prompts = [];
      this.statistics = null;
      this.suggests = [];
      this.lineData = [];
      this.$tdtMap.closeInfoWindow();
      this.showSearchResult = false;
      this.$emit("clear");
    }
  }
};
