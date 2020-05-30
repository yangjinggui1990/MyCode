<template>
  <div class="home">
    <header>
      <h1>数据可视化 - Echarts案例</h1>
    </header>
    <main>
      <div class="item">
        <div class="panel bar">
          <h2>柱形图</h2>
          <div class="echarts"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2 ref="h2">
            <span>点击切换数据1</span>
            <span>点击切换数据2</span>
          </h2>
          <div class="echarts"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>柱形图</h2>
          <div class="echarts"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="item">
        <div class="on">
          <div class="no-hd">
            <ul>
              <li>11</li>
              <li>22</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>11</li>
              <li>22</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="item">
        <div class="panel bar2">
          <h2>柱形图</h2>
          <div class="echarts"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>柱形图</h2>
          <div class="echarts"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>柱形图</h2>
          <div class="echarts"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this._barcharts();
    this._bar2charts();
    this._linecharts();
    this._line2charts();
    this._piecharts();
    this._pie2charts();
  },
  computed: {},
  methods: {
    _barcharts() {
      let myChart = echarts.init(document.querySelector(".bar .echarts"));
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "5%",
          right: "3%",
          bottom: "5%",
          top: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            },
            // 坐标轴刻度标签设置
            axisLabel: {
              color: "red"
            },
            // 坐标轴轴线设置
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            // 坐标轴刻度标签设置
            axisLabel: {
              color: "red"
            },
            axisLine: {
              // 坐标轴线线的颜色
              lineStyle: {
                color: "rgba(255, 255, 255, 0.1)",
                width: 2
              }
            },
            // 分隔线颜色设置
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.1)",
                width: 2
              }
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "50%",
            data: [10, 52, 200, 334, 390, 330, 220],
            // 图形样式
            itemStyle: {
              // 圆角半径
              barBorderRadius: 5
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    _bar2charts() {
      let myColor = ["red", "pink", "blue", "tan", "#ccc"];
      let myChart = echarts.init(document.querySelector(".bar2 .echarts"));
      let option = {
        grid: {
          left: "1%",
          top: "0%",
          bottom: "0%",
          right: "1%",
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: "category",
            data: ["巴西", "印尼", "美国", "印度", "中国"],
            inverse: true,
            // 坐标轴刻度
            axisTick: {
              show: false
            },
            // 坐标轴线的颜色
            axisLine: {
              show: false
            },
            axisLabel: {
              color: "#ccc"
            }
          },

          {
            type: "category",
            data: ["1", "2", "3", "4", "5"],
            // 翻转数据
            inverse: true,
            // 坐标轴刻度
            axisTick: {
              show: false
            },
            // 坐标轴线的颜色
            axisLine: {
              show: false
            },
            axisLabel: {
              color: "#ccc"
            }
          }
        ],
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [111, 112, 113, 114, 115],
            yAxisIndex: 0,
            // 图形上的文本标签
            label: {
              show: true,
              // 标签的位置
              position: "inside",
              // 显示data数据
              formatter: "{c}%"
            },
            itemStyle: {
              // 圆角半径
              barBorderRadius: 20,
              // 改变柱子颜色
              color: function(params) {
                return myColor[params.dataIndex];
              }
            },
            // 柱子之间距离
            barCategoryGap: 50,
            barWidth: 12
          },
          {
            name: "2012年",
            type: "bar",
            // 柱子之间距离
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [222, 223, 224, 225, 226, 227],
            itemStyle: {
              // 圆角半径
              barBorderRadius: 15,
              borderWidth: 3,
              color: "none",
              borderColor: "#ccc"
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    _linecharts() {
      let data1 = [
        {
          data: [
            [121, 135, 105, 133, 98, 238, 219],
            [420, 482, 491, 634, 990, 390, 319]
          ]
        },
        {
          data: [
            [199, 1111, 1000, 182, 682, 238, 219],
            [422, 486, 497, 638, 950, 380, 309]
          ]
        }
      ];
      let myChart = echarts.init(document.querySelector(".line .echarts"));
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告"],
          textStyle: {
            color: "#666"
          },
          right: "10%"
        },
        grid: {
          left: "1%",
          right: "3%",
          bottom: "3%",
          top: "20%",
          show: true,
          borderColor: "#ccc",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "red"
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "red"
          },
          splitLine: {
            lineStyle: {
              color: "#333"
            }
          }
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            smooth: true,
            data: data1[0].data[0]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            // 曲线带有弧度
            smooth: true,
            data: data1[0].data[1]
          }
        ]
      };
      myChart.setOption(option);
      Array.from(this.$refs.h2.children).forEach((item, index) => {
        item.onclick = function() {
          let obj = data1[index];
          option.series[0].data = obj.data[0];
          option.series[1].data = obj.data[1];
          myChart.setOption(option);
        };
      });
    },
    _line2charts() {
      let myChart = echarts.init(document.querySelector(".line2 .echarts"));
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告"],
          textStyle: {
            color: "red"
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisLabel: {
              textStyle: {
                color: "ten"
              }
            },
            axisLine: {
              lineStyle: {
                color: "red"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "ten"
              }
            },
            axisLine: {
              lineStyle: {
                color: "red"
              }
            },
            splitLine: {
              lineStyle: {
                color: "pink"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            smooth: true,
            // 填充颜色
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.5)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 132, 213, 0.1)" // 100% 处的颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            // 设置拐点
            symbol: "circle",
            symbolSize: 6,
            showSymbol: false,
            itemStyle: {
              borderWidth: 3,
              color: "pink",
              borderColor: "#ccc"
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
              color: "#f5f6f3",
              width: 2
            }
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.5)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 132, 213, 0.1)" // 100% 处的颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            // 设置拐点
            symbol: "circle",
            symbolSize: 6,
            showSymbol: false,
            itemStyle: {
              borderWidth: 3,
              color: "pink",
              borderColor: "#ccc"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };
      myChart.setOption(option);
    },
    _piecharts() {
      let myChart = echarts.init(document.querySelector(".pie .echarts"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          textStyle: {
            color: "pink"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["50%", "30%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    _pie2charts() {
      let myChart = echarts.init(document.querySelector(".pie2 .echarts"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "pink"
          }
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [20, 70],
            center: ["50%", "45%"],
            roseType: "radius",
            labelLine: {
              length: 1,
              length2: 2
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" }
            ]
          }
        ]
      };

      myChart.setOption(option);
    }
  },
  components: {}
};
</script>

<style lang="scss">
header {
  height: 10vh;
  background: burlywood;
  h1 {
    line-height: 10vh;
    text-align: center;
    font-size: 3vw;
    color: #ccc;
  }
}
main {
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 1vh 1vw 0;
  display: flex;
  .item {
    flex: 3;
  }
  .item:nth-child(2) {
    flex: 5;
    margin: 0 1vw 2vh;
  }
  .panel {
    position: relative;
    height: 40vh;
    padding: 0 1vw 2vh;
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 2vh;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      content: "";
    }
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      content: "";
    }
    .panel-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
        content: "";
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        content: "";
      }
    }
    h2 {
      height: 5vh;
      line-height: 5vh;
      text-align: center;
      color: #ccc;
      font-size: 1vw;
      font-weight: 500;
      span {
        margin: 0 10px;
      }
    }
    .echarts {
      height: 30vh;
    }
  }
  .on {
    padding: 2vh;
    background: coral;
    .no-hd {
      position: relative;
      border: 1px solid rgba(25, 186, 139, 17);
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
        content: "";
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        content: "";
      }
      ul {
        display: flex;
        li {
          position: relative;
          flex: 1;
          line-height: 8vh;
          text-align: center;
          font-size: 2vw;
          color: #ffeb7b;
          &:after {
            position: absolute;
            top: 25%;
            right: 0;
            height: 50%;
            width: 1px;
            background: rgba(250, 250, 250, 0.2);
            content: "";
          }
        }
      }
    }
    .no-bd {
      ul {
        display: flex;
        li {
          flex: 1;
          height: 4vh;
          line-height: 4vh;
          text-align: center;
          color: rgba(250, 250, 250, 0.7);
          padding: 1vh 0 0;
        }
      }
    }
  }
  .map {
    position: relative;
    height: 85vh;
    .map1 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30vw;
      height: 30vh;
      transform: translate(-50%, -50%);
    }
    .map2 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 32vw;
      height: 32vh;
      transform: translate(-50%, -50%);
      animation: rotate1 15s linear infinite;
    }
    .map3 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 33vw;
      height: 33vh;
      transform: translate(-50%, -50%);
      animation: rotate2 10s linear infinite;
    }
    @keyframes rotate1 {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    @keyframes rotate2 {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
  }
}
</style>
