IP
---
普通IP定位

### Usage
```js
const queryIP = require('@4/baidu-map/sdk/ip')

queryIP(ak, ip).then(console.log)
```

### 响应示例
```js
{  
    address: "CN|北京|北京|None|CHINANET|1|None",    // 详细地址信息  
    content:    // 结构信息  
    {  
        address: "北京市",    // 简要地址信息  
        address_detail:    // 结构化地址信息  
        {  
            city: "北京市",    // 城市  
            city_code: 131,    // 百度城市代码  
            province: "北京市",    // 省份      
        },  
        point:    // 当前城市中心点  
        {  
            x: "116.39564504",    // 当前城市中心点经度
            y: "39.92998578"    // 当前城市中心点纬度
        }  
    },  
    status: 0    // 结果状态返回码  
}
```
