export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',       /* Required for CORS support to work */
      'Access-Control-Allow-Credentials': true, /* Required for cookies, authorization headers with HTTPS */
    },
    body: JSON.stringify({
      event,
      context
    })
  };
}
