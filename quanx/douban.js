let obj = JSON.parse($response.body);

if (obj) {
  obj.items = obj.items.filter((i) => !i.ad_info);
  $done({ body: JSON.stringify(obj) });
} else $done({});
