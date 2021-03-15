<template>
  <div class="tdt-search">
    <div class="search-wrapper">
      <el-input size="small" v-model="keyWord" placeholder="关键词" style="width:100px;" @change="search()"></el-input>
      <el-button size="small" @click="search()">搜索</el-button>
      <el-button
        size="small"
        @click="
          clearAll();
          showRoute = true;
        "
      >
        导航
      </el-button>
    </div>
    <div class="search-suggest" v-if="suggestList.length">
      <div class="suggest-item" v-for="(suggest, index) in suggestList" :key="index" @click="suggestClick(suggest)">
        {{ suggest.name }}
      </div>
    </div>
    <div class="search-route" v-if="showRoute">
      <span class="search-close" @click="closeRoute()">x</span>
      <div class="route-policy">
        <input type="radio" id="policy0" value="0" v-model="policy" />
        <label for="policy0">最少时间</label>
        <input type="radio" id="policy1" value="1" v-model="policy" />
        <label for="policy1">最短距离</label>
        <br />
        <input type="radio" id="policy2" value="2" v-model="policy" />
        <label for="policy2">避开高速</label>
        <input type="radio" id="policy3" value="3" v-model="policy" />
        <label for="policy3">步行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      </div>
      <div class="route-content">
        <p>
          <el-input size="mini" v-model="startAddr" placeholder="起点..." readonly style="width:120px;"></el-input>
          <el-button
            type="text"
            size="mini"
            @click="
              startTool.clear();
              startTool.open();
            "
          >
            设起点
          </el-button>
        </p>
        <p>
          <el-input size="mini" v-model="endAddr" placeholder="终点..." readonly style="width:120px;"></el-input>
          <el-button
            type="text"
            size="mini"
            @click="
              endTool.clear();
              endTool.open();
            "
          >
            设终点
          </el-button>
        </p>
        <strong v-if="duration && distance">总时间：{{ duration }} ，总距离：{{ distance }}</strong>
      </div>
    </div>
    <div class="search-result" v-if="showSearchResult">
      <span class="search-close" @click="clearSearch()">x</span>
      <div class="prompts" v-for="(prompt, promptIndex) in prompts" :key="promptIndex">
        <div v-if="prompt.type === 1">
          您是否要在
          <a href="javacript:;">{{ prompt.admins[0].name }}</a>
          搜索更多包含
          <strong>{{ prompt.keyword }}</strong>
          的相关内容？
        </div>
        <div v-else-if="prompt.type === 2">
          <p>
            在
            <strong>{{ prompt.admins[0].name }}</strong>
            没有搜索到与
            <strong>{{ prompt.keyword }}</strong>
            相关的结果。
          </p>
          <p v-if="prompt.DidYouMean">
            你是否要找
            <a href="javacript:;">{{ prompt.DidYouMean }}</a>
          </p>
        </div>
        <div v-else-if="prompt.type === 3">
          有以下相关结果，您是否要找：
          <p v-for="(admin, adminIndex) in prompt.admins" :key="adminIndex">
            <a>{{ admin.name }}</a>
          </p>
        </div>
      </div>
      <div class="pois" v-if="pois.length">
        <div class="pois-item" v-for="(poi, index) in pois" :key="index" @click="showPosition(poi)">
          <div>{{ poi.name }}</div>
          <div style="color:#aaa">{{ poi.address }}</div>
        </div>
        <div class="pois-page">
          共{{ page.total }}条
          <span class="pois-goto" @click="$tdtSearch.firstPage()">«</span>
          <span class="pois-goto" @click="$tdtSearch.previousPage()">‹</span>
          <input class="page-current" v-model="page.currentPage" />
          <span class="pois-goto" @click="$tdtSearch.nextPage()">›</span>
          <span class="pois-goto" @click="$tdtSearch.lastPage()">»</span>
        </div>
      </div>
      <div class="statistics" v-if="statistics">
        在中国以下城市有结果
        <ul>
          <li v-for="(city, index) in statistics.priorityCitys" :key="index">
            <a href="javacript:;">{{ city.name }}({{ city.count }})</a>
          </li>
        </ul>
      </div>
      <div class="suggests" v-if="suggests.length">
        建议词提示
        <ul>
          <li v-for="(suggest, index) in suggests" :key="index">
            {{ suggest.name }}
            {{ suggest.address }}
          </li>
        </ul>
      </div>
      <div class="line-data" v-if="lineData.length">
        公交提示
        <ul>
          <li v-for="(line, index) in lineData" :key="index">
            {{ line.name }}
            共
            {{ line.stationNum }}
            站
          </li>
        </ul>
      </div>
    </div>
    <div v-show="false">
      <div ref="infoWindow">
        <div>名称:{{ infoWindow.name }}</div>
        <div>地址:{{ infoWindow.address }}</div>
        <a href="javacript:;" @click="startPoint = infoWindow.lnglat">设为起点</a>
        <a href="javacript:;" @click="endPoint = infoWindow.lnglat">设为终点</a>
      </div>
    </div>
  </div>
</template>
<script>
import componentMixin from "../mixins/component-mixin";
import searchMixin from "../mixins/search-mixin";
import routeMixin from "../mixins/route-mixin";
import suggestMixin from "../mixins/suggest-mixin";

export default {
  name: "tdt-search",
  mixins: [componentMixin, searchMixin, routeMixin, suggestMixin],
  props: {
    specifyAdminCode: Number, // 行政区的国标码。
    queryType: Number, // 搜索类型,1表示普通搜索;2表示视野内搜索;4表示普通建议词搜索;5表示公交规划建议词搜索;7表示 纯POI搜索(不搜公交线）。
    pageCapacity: Number // 每页容量。
  },
  data() {
    return {};
  },
  methods: {
    initComponent(option) {
      return new Promise(resolve => {
        if (!T.LocalSearch || !T.DrivingRoute || !T.Geocoder || !T.MarkTool) {
          return setTimeout(() => {
            this.initComponent(option);
          });
        }
        this.initSearch();
        this.initRoute();
        this.initSuggest();
        resolve();
      });
    },
    clearAll() {
      this.clearSearch();
      this.clearRoute();
      this.clearSuggest();
      this.searching = false;
    }
  }
};
</script>

<style lang="scss">
$border: 1px solid #ddd;
$border-hover: 1px solid #ccc;
.tdt-search {
  font-size: 14px;

  .search-wrapper {
    .el-input {
      margin-right: 10px;
    }
  }

  .search-suggest {
    position: absolute;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    width: 230px;
    z-index: 1;
    .suggest-item {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .search-result,
  .search-route {
    position: relative;
    background: #fff;
    padding: 10px;
    border: $border;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    width: 210px;
    .search-close {
      position: absolute;
      right: 10px;
      top: 5px;
      color: #aaa;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: #666;
      }
    }
    .pois {
      .pois-item {
        padding: 5px 0;
        border-bottom: $border;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }
      }
      .pois-page {
        padding-top: 10px;
        .page-current {
          max-width: 30px;
          text-align: center;
        }
        .pois-goto {
          cursor: pointer;
          font-size: 20px;
        }
      }
    }
    .route-policy {
      text-align: center;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
