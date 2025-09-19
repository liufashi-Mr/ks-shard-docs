import { get, cloneDeep } from 'lodash';
import {
  getPath,
  BaseStore as getBaseStore,
  storeHooks,
  request,
  FetchListParams,
  FormattedDefault,
  formatFetchListParams,
} from '@ks-console/shared';

const { getStoreWithQueryHooks } = storeHooks;
const module = 'mock-data';

const apiVersion = 'https://m1.apifoxmock.com/m1/6723821-6434759-default/mock-data';

const mapper = (item: any): FormattedDefault => item;

const getFilterParams = (params: Record<string, any>) => {
  const result = { ...params };
  if (result.department) {
    result.department = result.department;
  }
  if (result.status) {
    result.status = result.status;
  }
  return result;
};

const getListUrlFn = (params: any) => {
  return `${apiVersion}${getPath(params)}`;
};

const baseStore = getBaseStore({
  module,
  mapper,
  getResourceUrlFn: getListUrlFn,
  getListUrlFn,
});

const fetchList = async (
  { cluster, workspace, namespace, devops, ...params } = {} as FetchListParams,
): Promise<any> => {
  const formattedParams = formatFetchListParams(module, params);
  const { headers, ...params1 } = getFilterParams(formattedParams);

  const result: any =
    (await request.get(baseStore.getResourceUrl({ cluster, workspace, namespace, devops }), {
      params: params1,
      headers,
    })) ?? {};

  const data = (result.data || result.items || []).map((item: Record<string, unknown>) => ({
    cluster,
    ...item,
    ...mapper(item),
  }));

  return {
    data: data,
    total: data.length || 0,
    ...params,
    limit: Number(params.limit) || 10,
    page: Number(params.page) || 1,
  };
};

const store = {
  ...baseStore,
  fetchList,
  module,
  mapper,
};

export default getStoreWithQueryHooks(store);
