var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var data = {
	arr1:[
		{
			"img":"src/components/index/img/01 (1).jpg",
			"price1":"79",
			"price2":"188"
		},
		{
			"img":"src/components/index/img/01 (2).jpg",
			"price1":"899",
			"price2":"1399"
		},
		{
			"img":"src/components/index/img/01 (3).jpg",
			"price1":"1978",
			"price2":"2299"
		},
		{
			"img":"src/components/index/img/01 (4).jpg",
			"price1":"19",
			"price2":"59"
		},
		{
			"img":"src/components/index/img/01 (5).jpg",
			"price1":"159",
			"price2":"366"
		},
		{
			"img":"src/components/index/img/01 (6).jpg",
			"price1":"79",
			"price2":"188"
		},
		{
			"img":"src/components/index/img/01 (7).jpg",
			"price1":"186",
			"price2":"299"
		},
		{
			"img":"src/components/index/img/01 (8).jpg",
			"price1":"2899",
			"price2":"7398"
		},
		{
			"img":"src/components/index/img/01 (9).jpg",
			"price1":"819",
			"price2":"997"
		},
		{
			"img":"src/components/index/img/01 (10).jpg",
			"price1":"54",
			"price2":"85"
		},
		{
			"img":"src/components/index/img/01 (11).jpg",
			"price1":"2339",
			"price2":"2582"
		},
		{
			"img":"src/components/index/img/01 (12).jpg",
			"price1":"1200",
			"price2":"1320"
		},
		{
			"img":"src/components/index/img/01 (13).jpg",
			"price1":"24",
			"price2":"50"
		}
	],
	arr2:[
		{
			"img":"src/components/index/img/01 (154).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (155).jpg",
			"tex":"良品铺子 芒果干108g果脯蜜饯休闲零食 新...",
			"price":"18.90",
			"good":"好评率98%"
		},
		{
			"img":"src/components/index/img/01 (156).jpg",
			"tex":"七匹狼男士内裤平角裤重要兰精粘纤透气大码...",
			"price":"59.00",
			"good":"好评率96%"
		},
		{
			"img":"src/components/index/img/01 (157).jpg",
			"tex":"力士(LUX)沐浴露 幽莲魅肤 精油香氛沐浴乳",
			"price":"29.50",
			"good":"好评率98%"
		},
		{
			"img":"src/components/index/img/01 (158).jpg",
			"tex":"家乐氏 Kellogg's水果麦片 谷兰诺拉 草莓什锦",
			"price":"52.90",
			"good":"好评率99%"
		},
		{
			"img":"src/components/index/img/01 (159).jpg",
			"tex":"Chanel 香奈儿男士香水/香氛Allure Sport魅力...",
			"price":"495.00",
			"good":"好评率95%"
		},
		{
			"img":"src/components/index/img/01 (160).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (161).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (162).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (163).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (164).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (165).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (166).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (167).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (168).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (169).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (170).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		},
		{
			"img":"src/components/index/img/01 (171).jpg",
			"tex":"飞科(FLYCO)FS372全身水洗电动剃须刀刮胡须刀",
			"price":"99.00",
			"good":"好评率97%"
		}
	]
}


module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
