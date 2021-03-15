export default {
  data() {
    return {
      suggestList: []
    };
  },
  watch: {
    keyWord(val) {
      if (val && !this.searching) {
        this.$tdtSuggest.search(val);
      } else {
        this.clearSuggest();
      }
    }
  },
  methods: {
    initSuggest() {
      this.$tdtSuggest = new T.LocalSearch(this.$tdtMap, {
        pageCapacity: this.pageSize || 10, //每页显示的数量
        onSearchComplete: this.suggestResult //接收数据的回调函数
      });
      this.$tdtMap.addEventListener("click", () => {
        //点击地图时关闭建议词列表
        this.clearSuggest();
      });
    },
    suggestResult(result) {
      this.clearSuggest();
      this.suggestList = result.getPois();
    },
    clearSuggest() {
      this.suggestList = [];
    },
    suggestClick(suggest) {
      this.keyWord = suggest.name;
      this.search();
      this.searching = true;
    }
  }
};
