export default defineEventHandler((event) => {
  return {
    query: getQuery(event),
    params: getRouterParams(event),
    requestHeaders: getRequestHeaders(event),
    method: getMethod(event),
  };
  return "Hello test";
});
