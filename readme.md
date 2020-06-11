<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [api](#api)
    - [setTitle](#settitle)
    - [setXAxisFontStyle](#setxaxisfontstyle)
    - [setYAxisFontStyle](#setyaxisfontstyle)
    - [setXAxisFontWeight](#setxaxisfontweight)
    - [setYAxisFontWeight](#setyaxisfontweight)
    - [setXAxisFontColor](#setxaxisfontcolor)
    - [setYAxisFontColor](#setyaxisfontcolor)
    - [setXAxisSplitLine](#setxaxissplitline)
    - [setYAxisSplitLine](#setyaxissplitline)
    - [setXAxisInterval](#setxaxisinterval)
    - [setYAxisInterval](#setyaxisinterval)
    - [setAxisType](#setaxistype)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## api

#### setTitle
***
```charts.setTitle(title):设置标题```
1. title: 标题名称
***

#### setXAxisFontStyle
***
```charts.setXAxisFontStyle(style): 设置X轴的坐标字体```
1. style: 
    + 'normal'
    + 'italic'
    + 'oblique'
***


#### setYAxisFontStyle
***
```charts.setYAxisFontStyle(style): 设置Y轴的坐标字体```
1. style: 
    + 'normal'
    + 'italic'
    + 'oblique'
***

#### setXAxisFontWeight
***
```charts.setXAxisFontWeight(weight): 设置X轴的坐标间隔线```
1. weight: number字符串
***

#### setYAxisFontWeight
***
```charts.setYAxisFontWeight(weight): 设置Y轴的坐标间隔线```
1. weight: number字符串
***

#### setXAxisFontColor
***
```charts.setXAxisFontColor(rgb): 设置X轴的坐标字体颜色```
1. rgb: 
    + rgb格式
    + color单词
    + 数字像素值
***

#### setYAxisFontColor
***
```charts.setYAxisFontColor(rgb): 设置Y轴的坐标字体颜色```
1. rgb: 
    + rgb格式
    + color单词
    + 数字像素值
***

#### setXAxisSplitLine
***
```charts.setXAxisSplitLine(show): 设置X轴的坐标间隔线```
1. show: true/false
***

#### setYAxisSplitLine
***
```charts.setAxisSplitLine(show): 设置Y轴的坐标间隔线```
1. show: true/false

+ 同时设置为true，可形成坐标网格
***


#### setXAxisInterval
+ 坐标轴刻度标签的显示间隔，在类目轴中有效。
***
```charts.setXAxisInterval(weight): 设置X轴的坐标显示间隔```
1. weight: number字符串
***

#### setYAxisInterval
+ 坐标轴刻度标签的显示间隔，在类目轴中有效。
***
```charts.setXAxisInterval(weight): 设置X轴的坐标显示间隔```
1. weight: number字符串
***


#### setAxisType
***
```charts.setAxisType(axis, type, format): 坐标轴类型设置```

1. axis:坐标轴类型，传入xAxis或yAxis
2. type(默认为category):
    + value: 数值轴，适用于连续数据
    + category: 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
    + time: 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
    + log: 对数轴。适用于对数数据。
3. format:  type=time时，支持两种日期格式，(HH:mm:ss)/(yyyy-mm-dd HH:mm:ss)
***






