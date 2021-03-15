import ApiLoader from "./api-loader";

let ApiLoaderInstance = null;

export const initApiLoader = config => {
  ApiLoaderInstance = new ApiLoader(config);
  ApiLoaderInstance.load();
};

export { ApiLoaderInstance };
