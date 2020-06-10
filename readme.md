

## api
***
```charts.axis(axis, data, type,config);```

1. axis:坐标轴类型，传入xAxis或yAxis
2. type(默认为category):
    + value: 数值轴，适用于连续数据
    + category: 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
    + time: 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
    + log: 对数轴。适用于对数数据。
3. format:  (HH:mm:ss)/(yyyy-mm-dd HH:mm:ss),可以设置两种日期格式
4. config:配置项(可选)
***





