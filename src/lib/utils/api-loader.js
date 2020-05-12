export default class ApiLoader {
  /**
   * @param config required 初始化参数
   */
  constructor(config) {
    this._config = {
      v: "4.0",
      tk: "",
      plugins: [],
      ...config
    };
    this._document = document;
    this._window = window;
    this._pluginsUrl = {
      D3: [
        "https://cdn.bootcss.com/d3/3.5.17/d3.js",
        "https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js"
      ],
      CarTrack: [
        "https://cdn.bootcss.com/d3/3.5.17/d3.js",
        "https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js",
        "https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.js"
      ],
      HeatmapOverlay: [
        "https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.js"
      ],
      BufferTool: [
        "https://cdn.bootcss.com/Turf.js/3.0.14/turf.js",
        "https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.js"
      ],
      ImageOverLayer: [
        "https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.js"
      ]
    };
  }

  load() {
    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }
    this._scriptLoadingPromise = new Promise((resolve, reject) => {
      const script = this._document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = `https://api.tianditu.gov.cn/api?v=${this._config.v}&tk=${this._config.tk}`;
      this._document.body.appendChild(script);
      script.onload = () => {
        if (this._config.plugins && this._config.plugins.length) {
          this.loadPlugins().then(resolve);
        } else {
          resolve();
        }
      };
      script.onerror = e => reject(e);
    });
    return this._scriptLoadingPromise;
  }

  loadPlugins() {
    return new Promise((resolve, reject) => {
      const promises = [];
      this._config.plugins.forEach((plugin, pindex) => {
        this._pluginsUrl[plugin] &&
          this._pluginsUrl[plugin].forEach((url, uindex) => {
            promises.push(this.loadOneScript(url));
          });
      });
      Promise.all(promises).then(resolve);
    });
  }

  loadOneScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      this._document.body.appendChild(script);
      script.onload = () => {
        resolve();
      };
      script.onerror = e => reject(e);
    });
  }
}
