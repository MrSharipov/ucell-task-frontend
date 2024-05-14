import {createError} from "#app";

export const validateRouterNumberParamsByUrl = (route:any) => {
  if (/^[0-9]{1,20}$/.test(route.params.url)) {
    return true;
  } else {
    throw createError({statusCode: 404, statusMessage: 'page_not_found'});
  }
}
 export const generateDefaultRouterMeta = (meta: object = {}): object => {
  return {
    middleware: 'auth',
    ...meta,
  }
}
