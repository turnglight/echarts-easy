/**
 *based on echarts4.8.0
 *author:frontlich
 */
(function(window, ec, undefined){

    var _charts = window.charts;

    var option = {};

    //Object.assign()   ES2015
    //该方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    if (typeof Object.assign != 'function') {
        Object.assign = function(target) {
            'use strict';
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
            return target;
        };
    };

    function clone(target){          //克隆对象

        if(typeof target != 'object' || target == null){
            return target
        };

        if(target instanceof Array){
            var newArr = [];
            for(var i = 0; i < target.length; i++){
                newArr.push(clone(target[i]));
            }
            return newArr;
        };

        var newObj = new Object();

        for(var i in target){
            newObj[i] = clone(target[i]);
        }

        return newObj;
    };

    var Charts = function(type, selector){

        this.option = clone(option[type] || {});

        this.type = type;

        this.chart = ec.init(document.querySelector(selector));

    };

    Charts.prototype = {

        title : function(text, config){         //设置标题

            var oTitle = this.option.title || {};

            this.option.title = config ? Object.assign(oTitle, config) : oTitle;

            this.option.title.text = text;

            return this;
        },
        gird : function(show) {
            this.option[gird].show = show;
            return this;
        },
        legend : function(data, config){     //设置图例

            var oLegend = this.option.legend || {};

            this.option.legend = config ? Object.assign(oLegend, config) : oLegend;

            this.option.legend.data = data;

            return this;
        },
        // 设置坐标轴的显示间隔
        axisInterval: function(axis, interval='auto'){
            this.option[axis].axisLabel.interval = interval;
            return this;
        },
        // 设置坐标轴的字体样式
        axisStyle: function(axis, fontStyle='normal', fontWeight='normal', color='rgb(0,0,0)'){    //设置x,y数轴的字体风格
            this.option[axis].axisLabel.fontStyle = fontStyle;
            this.option[axis].axisLabel.fontWeight = fontWeight;
            this.option[axis].axisLabel.color = color;
            return this;
        },
        // 设置坐标轴的字体
        axisFontStyle: function(axis,fontStyle='normal'){
            this.option[axis].axisLabel.fontStyle = fontStyle;
            return this;
        },
        // 设置坐标轴的字体大小
        axisFontWeight: function(axis,fontWeight='normal'){
            this.option[axis].axisLabel.fontWeight = fontWeight;
            return this;
        },
        // 设置坐标轴的字体颜色
        axisFontColor: function(axis,color='rgb(0,0,0)'){
            this.option[axis].axisLabel.color = color;
            return this;
        },
        axis : function(axis, type, format,config){    //设置坐标轴
            var oAxis = this.option[axis] || {};
            this.option[axis] = config ? Object.assign(oAxis, config) : oAxis;
            if(typeof(type) == "undefined" || type == 'string') {
                this.option[axis].type = 'category';
            }else if(type == 'time'){
                this.option[axis].type = type;
                if(format == 'HH:mm:ss'){
                    this.option[axis].axisLabel.formatter = function(value, index){
                        // 格式化成月/日，只在第一个刻度显示年份
                        var date = new Date(value);
                        var texts = date.getHours() + ":" + (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+":"+ (date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
                        return texts;
                    }
                }else if(format == 'HH:mm'){
                    this.option[axis].axisLabel.formatter = function(value, index){
                        // 格式化成月/日，只在第一个刻度显示年份
                        var date = new Date(value);
                        var texts = date.getHours() + ":" + (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes());
                        return texts;
                    }
                }else if(format == 'yyyy-mm-dd HH:mm:ss'){
                    this.option[axis].axisLabel.formatter = function(value, index) {
                        // 格式化成月/日，只在第一个刻度显示年份
                        var date = new Date(value);
                        var texts = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
                        return texts;
                    }
                }

            }else{
                this.option[axis].type = type;
            }
            return this;
        },

        series : function(series, config){          //type:类型， series:同ehcarts的series

            var oSeries = clone(this.option.series || [{}]);

            this.option.series = clone(config ? [Object.assign(oSeries[0], config)] : oSeries);

            for(var i = 0; i < series.length; i++){
                this.option.series[i] = Object.assign({type:this.type}, oSeries[0], series[i]);
            };

            return this;
        },

        create : function(){              //创建图表
            //console.log(this.option);
            this.chart.setOption(this.option);
        }
    };


    var charts = function(type, selector){
        return new Charts(type, selector);
    };

    charts.setDefault = function(type, public){   //设置所有图表默认设置
        data = {
            title:{
                x:'center',
                textStyle:{
                    color:'green',
                }
            },
            tooltip:{
                formatter:'{c}'
            },
            grid:{
                show: false
            },
            xAxis:{
                splitLine:{
                    show:false
                },
                axisLabel:{
                    color: 'rgb(0, 0, 0)',
                    interval: 'auto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    formatter: function (value, index) {
                        return value;
                    }
                },

            },
            yAxis:{
                splitLine:{
                    show:false
                },
                axisLabel:{
                    color: 'rgb(0, 0, 0)',
                    fontStyle: 'normal',
                    fontWeight: 'normal'
                },
            }
        }
        option[type] = Object.assign(public || {}, data || {});

    };

    charts.changeDefault = function(type, newItem){       //只能添加和更改默认设置项，不能删除

        function change(option, newItem){
            for(var j in newItem){
                if(option.hasOwnProperty(j)){
                    if(typeof newItem[j] != 'object' || newItem[j] == null || newItem[j] instanceof Array){
                        option = Object.assign(option, newItem);
                    }else{
                        change(option[j], newItem[j]);
                    }
                }else{
                    option[j] = newItem[j];
                }
            }
        };

        change(option[type], newItem);
    };

    charts.cloneDefault = function(type, source){
        option[type] = clone(option[source]);
    };

    charts.extend = function(name, fun){

        for(var key in Charts.prototype){
            if(name === key){
                console.log('the key has been defined');
                return false;
            }
        };

        Charts.prototype[name] = fun;
    };

    charts.noConflict = function(){       //解决变量冲突

        if(window.charts === charts){
            window.charts = _charts;
        };

        return charts;
    };

    window.charts = charts;
    //module.exports = charts;

})(window, echarts);
