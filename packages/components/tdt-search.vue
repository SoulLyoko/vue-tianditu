<template>
  <div class="tdt-search">
    <el-input size="small" v-model="keyWord" placeholder="关键词" style="width:100%;" @keyup.enter.native="search()">
      <template #append>
        <el-tooltip effect="dark" content="搜索" placement="bottom">
          <el-button size="small" icon="el-icon-search" @click="search()"></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="导航" placement="bottom">
          <el-button
            size="small"
            icon="el-icon-position"
            @click="
              clearAll();
              showRoute = true;
            "
          ></el-button>
        </el-tooltip>
      </template>
    </el-input>

    <el-card class="search-suggest" v-if="suggestList.length">
      <div class="suggest-item" v-for="(suggest, index) in suggestList" :key="index" @click="suggestClick(suggest)">
        <i class="el-icon-search"></i>
        <span> {{ suggest.name }}</span>
      </div>
    </el-card>

    <el-card class="search-route" v-if="showRoute">
      <el-button type="text" size="small" class="search-close" icon="el-icon-close" @click="closeRoute()"></el-button>
      <el-radio-group v-model="policy" slot="header">
        <el-radio label="0">最少时间</el-radio>
        <el-radio label="1">最短距离</el-radio>
        <el-radio label="2">避开高速</el-radio>
        <el-radio label="3">步 行</el-radio>
      </el-radio-group>
      <el-input size="small" v-model="startAddr" placeholder="起点..." readonly style="width:100%;">
        <template #append>
          <el-tooltip effect="dark" content="标记起点" placement="bottom">
            <el-button
              icon="el-icon-location"
              @click="
                startTool.clear();
                startTool.open();
              "
            >
            </el-button>
          </el-tooltip>
        </template>
      </el-input>
      <br />
      <br />
      <el-input size="small" v-model="endAddr" placeholder="终点..." readonly style="width:100%;">
        <template #append>
          <el-tooltip effect="dark" content="标记终点" placement="bottom">
            <el-button
              icon="el-icon-location"
              @click="
                endTool.clear();
                endTool.open();
              "
            >
            </el-button>
          </el-tooltip>
        </template>
      </el-input>
      <strong v-if="duration && distance">总时间：{{ duration }} <br />总距离：{{ distance }}</strong>
    </el-card>

    <el-card class="search-result" v-if="showSearchResult">
      <el-button type="text" size="small" class="search-close" icon="el-icon-close" @click="clearSearch()"></el-button>
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
        <el-pagination
          small
          layout="prev, pager, next"
          :current-page.sync="page.currentPage"
          :pager-count="5"
          :total="page.total"
        >
        </el-pagination>
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
    </el-card>
    <div v-show="false">
      <div ref="infoWindow">
        <div>名称:{{ infoWindow.name }}</div>
        <div>地址:{{ infoWindow.address }}</div>
        <el-button type="text" size="mini" @click="startPoint = infoWindow.lnglat">设为起点</el-button>
        <el-button type="text" size="mini" @click="endPoint = infoWindow.lnglat">设为终点</el-button>
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
.tdt-search {
  font-size: 14px;
  width: 250px;

  .search-suggest {
    position: absolute;
    width: 100%;
    z-index: 1;
    .suggest-item {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .search-suggest,
  .search-result,
  .search-route {
    width: 100%;
    .el-card__header,
    .el-card__body {
      padding: 10px;
    }
  }

  .search-result,
  .search-route {
    position: relative;
    .search-close {
      position: absolute;
      right: 10px;
      top: 0;
    }
    .pois {
      .pois-item {
        padding: 5px 0;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
}
</style>
