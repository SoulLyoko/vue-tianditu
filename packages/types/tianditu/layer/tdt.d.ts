declare namespace T {
  class TileLayerTDT extends TileLayer {
    constructor(url: string, opts?: TileLayerTDTOptions);
  }

  interface TileLayerTDTOptions extends TileLayerOptions {
    /** 用来描述图层信息 */
    attribution?: string;
  }
}
