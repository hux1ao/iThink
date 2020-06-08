##webpack打包速度优化

####背景
由于公司项目体积越来越庞大，项目构建速度特别慢，一次前端构建耗时约```8min```，严重影响了beta/线上环境发布的效率。so，我的任务是，优化它。


####主要策略
* 优化webpack检索时间
* 采用多进程打包
* 升级必要工具
* 略过部分不必要过程


####优化效果
优化之前的打包构建速度在```5.6min```，优化完成之后打包构建速度在```2.2min```，优化了60%的打包时间
####未优化之前
耗时约```5.6```分钟

```
SMP  ⏱  
General output time took 1 min, 33.49 secs

 SMP  ⏱  Plugins
TerserPlugin took 26.37 secs
IgnorePlugin took 11.81 secs
OptimizeCssAssetsWebpackPlugin took 3.62 secs
MiniCssExtractPlugin took 2.41 secs
InlineChunkHtmlPlugin took 0.163 secs
ManifestPlugin took 0.162 secs
InterpolateHtmlPlugin took 0.151 secs
DefinePlugin took 0.136 secs
ModuleNotFoundPlugin took 0.12 secs
HtmlWebpackPlugin took 0.034 secs

 SMP  ⏱  Loaders
_babel-loader@8.0.5@babel-loader took 58.34 secs
  module count = 1868
_babel-loader@8.0.5@babel-loader, and 
_eslint-loader@2.1.1@eslint-loader took 51.74 secs
  module count = 362
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 46.94 secs
  module count = 231
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 39.53 secs
  module count = 231
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 5.15 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 2.61 secs
  module count = 21
modules with no loaders took 1.61 secs
  module count = 27
```
####优化resolve查找效率
Webpack的resolve.modules配置模块库（即 node_modules）所在的位置，在 js 里出现  import 'vue' 这样不是相对、也不是绝对路径的写法时，会去 node_modules 目录下找。但是默认的配置，会采用向上递归搜索的方式去寻找，但通常项目目录里只有一个 node_modules，且是在项目根目录，为了减少搜索范围，可以直接写明 node_modules 的全路径；同样，对于别名(alias)的配置，亦当如此：


#####优化resolve路径之后，打包时间优化到```5.3min```左右

优化部分主要集中在loader中，过程中涉及到的路径查询更加高效
```
 SMP  ⏱  
General output time took 1 min, 24.58 secs

 SMP  ⏱  Plugins
TerserPlugin took 22.91 secs
IgnorePlugin took 11.2 secs
OptimizeCssAssetsWebpackPlugin took 3.85 secs
MiniCssExtractPlugin took 2.38 secs
ManifestPlugin took 0.194 secs
InlineChunkHtmlPlugin took 0.168 secs
DefinePlugin took 0.128 secs
InterpolateHtmlPlugin took 0.126 secs
ModuleNotFoundPlugin took 0.125 secs
HtmlWebpackPlugin took 0.037 secs

 SMP  ⏱  Loaders
_babel-loader@8.0.5@babel-loader took 54.72 secs
  module count = 1854
_babel-loader@8.0.5@babel-loader, and 
_eslint-loader@2.1.1@eslint-loader took 47.41 secs
  module count = 362
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 44.23 secs
  module count = 231
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 41.23 secs
  module count = 231
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 6.46 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 3.67 secs
  module count = 21
modules with no loaders took 2.25 secs
  module count = 24
```

####优化资源引用路径
部分资源在执行install的时候，开发者已经提供了压缩版本，此时，这些包我们其实可以不用再次进行压缩而可以直接使用

优化之后总耗时优化为```4.98min```

```
 SMP  ⏱  
General output time took 1 min, 16.85 secs

 SMP  ⏱  Plugins
TerserPlugin took 19.26 secs
IgnorePlugin took 9.95 secs
OptimizeCssAssetsWebpackPlugin took 3.45 secs
MiniCssExtractPlugin took 2.094 secs
InlineChunkHtmlPlugin took 0.151 secs
ManifestPlugin took 0.144 secs
DefinePlugin took 0.134 secs
InterpolateHtmlPlugin took 0.118 secs
ModuleNotFoundPlugin took 0.106 secs
HtmlWebpackPlugin took 0.039 secs

 SMP  ⏱  Loaders
_babel-loader@8.0.5@babel-loader took 51.53 secs
  module count = 1853
_babel-loader@8.0.5@babel-loader, and 
_eslint-loader@2.1.1@eslint-loader took 46.49 secs
  module count = 362
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 43.14 secs
  module count = 231
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 39.28 secs
  module count = 231
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 4.97 secs
  module count = 21
modules with no loaders took 2.37 secs
  module count = 24
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 2.33 secs
  module count = 21
```

####禁止生产环境中不需要的loader

发现代码中存在一些生产环境中根本不需要的loader如：eslint，可以在生产过程中直接禁止掉，保持开发环境中打开即可

发现在禁止部分loader之后，时间直接压缩到了```2.5min```

```
 SMP  ⏱  
General output time took 41.57 secs

 SMP  ⏱  Plugins
IgnorePlugin took 9.094 secs
OptimizeCssAssetsWebpackPlugin took 3.089 secs
MiniCssExtractPlugin took 2.054 secs
TerserPlugin took 0.907 secs
BundleAnalyzerPlugin took 0.401 secs
InlineChunkHtmlPlugin took 0.127 secs
ManifestPlugin took 0.124 secs
DefinePlugin took 0.117 secs
ModuleNotFoundPlugin took 0.116 secs
InterpolateHtmlPlugin took 0.107 secs
HtmlWebpackPlugin took 0.038 secs

 SMP  ⏱  Loaders
_babel-loader@8.0.5@babel-loader took 36.021 secs
  module count = 2222
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 27.48 secs
  module count = 234
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 25.15 secs
  module count = 234
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 3.44 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 1.8 secs
  module count = 21
modules with no loaders took 0.87 secs
  module count = 24
```


####使用多进程打包


happypack 双核

 SMP  ⏱  
General output time took 1 min, 7.6 secs

 SMP  ⏱  Plugins
IgnorePlugin took 12.68 secs
OptimizeCssAssetsWebpackPlugin took 5.37 secs
MiniCssExtractPlugin took 2.79 secs
TerserPlugin took 1.16 secs
HappyPlugin took 0.272 secs
InlineChunkHtmlPlugin took 0.18 secs
ManifestPlugin took 0.17 secs
InterpolateHtmlPlugin took 0.156 secs
DefinePlugin took 0.156 secs
ModuleNotFoundPlugin took 0.135 secs
HtmlWebpackPlugin took 0.049 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 59.67 secs
  module count = 1857
_happypack@5.0.1@happypack, and 
_eslint-loader@2.1.1@eslint-loader took 56.73 secs
  module count = 365
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 51.99 secs
  module count = 234
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 38.65 secs
  module count = 234
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 9.85 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 2.5 secs
  module count = 21
modules with no loaders took 0.856 secs
  module count = 24


4核

 SMP  ⏱  
General output time took 1 min, 24.11 secs

 SMP  ⏱  Plugins
TerserPlugin took 25.44 secs
IgnorePlugin took 9.68 secs
OptimizeCssAssetsWebpackPlugin took 4.53 secs
MiniCssExtractPlugin took 2.64 secs
HappyPlugin took 0.241 secs
InlineChunkHtmlPlugin took 0.151 secs
ManifestPlugin took 0.141 secs
DefinePlugin took 0.122 secs
ModuleNotFoundPlugin took 0.119 secs
InterpolateHtmlPlugin took 0.114 secs
HtmlWebpackPlugin took 0.053 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 49.21 secs
  module count = 1857
_happypack@5.0.1@happypack, and 
_eslint-loader@2.1.1@eslint-loader took 46.76 secs
  module count = 365
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 37.64 secs
  module count = 234
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 33.46 secs
  module count = 234
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 7.64 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 4.15 secs
  module count = 21
modules with no loaders took 1.76 secs
  module count = 24



关闭eslint

 SMP  ⏱  
General output time took 46.5 secs

 SMP  ⏱  Plugins
IgnorePlugin took 10.62 secs
OptimizeCssAssetsWebpackPlugin took 5.026 secs
MiniCssExtractPlugin took 2.84 secs
TerserPlugin took 0.617 secs
HappyPlugin took 0.233 secs
InlineChunkHtmlPlugin took 0.16 secs
ManifestPlugin took 0.132 secs
ModuleNotFoundPlugin took 0.121 secs
DefinePlugin took 0.12 secs
InterpolateHtmlPlugin took 0.107 secs
HtmlWebpackPlugin took 0.052 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 41.34 secs
  module count = 2222
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 36.77 secs
  module count = 234
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 32.45 secs
  module count = 234
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 9.66 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 4.9 secs
  module count = 21
modules with no loaders took 1.19 secs
  module count = 24



Webpack禁止打包为多文件夹


 SMP  ⏱  
General output time took 48.27 secs

 SMP  ⏱  Plugins
IgnorePlugin took 10.58 secs
OptimizeCssAssetsWebpackPlugin took 5.22 secs
MiniCssExtractPlugin took 2.56 secs
TerserPlugin took 0.571 secs
HappyPlugin took 0.266 secs
InlineChunkHtmlPlugin took 0.173 secs
ManifestPlugin took 0.148 secs
InterpolateHtmlPlugin took 0.141 secs
DefinePlugin took 0.128 secs
ModuleNotFoundPlugin took 0.126 secs
HtmlWebpackPlugin took 0.055 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 43.084 secs
  module count = 2233
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 35.82 secs
  module count = 237
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 26.6 secs
  module count = 237
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 7.89 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 3.26 secs
  module count = 21
modules with no loaders took 0.592 secs
  module count = 24





切换node版本为10.14.0

 SMP  ⏱  
General output time took 41.37 secs

 SMP  ⏱  Plugins
TerserPlugin took 13.42 secs
IgnorePlugin took 4.63 secs
OptimizeCssAssetsWebpackPlugin took 1.2 secs
MiniCssExtractPlugin took 1.009 secs
HappyPlugin took 0.174 secs
InlineChunkHtmlPlugin took 0.074 secs
ManifestPlugin took 0.073 secs
ModuleNotFoundPlugin took 0.064 secs
DefinePlugin took 0.057 secs
InterpolateHtmlPlugin took 0.053 secs
HtmlWebpackPlugin took 0.051 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 25.95 secs
  module count = 1997
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 13.47 secs
  module count = 237
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 12.98 secs
  module count = 237
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 10.66 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 3.19 secs
  module count = 21
modules with no loaders took 0.99 secs
  module count = 24



 SMP  ⏱  
General output time took 42.37 secs

 SMP  ⏱  Plugins
IgnorePlugin took 6.45 secs
OptimizeCssAssetsWebpackPlugin took 4.51 secs
MiniCssExtractPlugin took 1.36 secs
TerserPlugin took 0.447 secs
HappyPlugin took 0.249 secs
InlineChunkHtmlPlugin took 0.106 secs
ManifestPlugin took 0.096 secs
ModuleNotFoundPlugin took 0.08 secs
DefinePlugin took 0.079 secs
InterpolateHtmlPlugin took 0.075 secs
HtmlWebpackPlugin took 0.056 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 37.72 secs
  module count = 2233
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 31.73 secs
  module count = 237
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 21.44 secs
  module count = 237
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 12.62 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 2.92 secs
  module count = 21
modules with no loaders took 0.688 secs
  module count = 24




添加丑化插件之后 时间反而增长了



 SMP  ⏱  
General output time took 57.89 secs

 SMP  ⏱  Plugins
FasterUglifyPlugin took 11.54 secs
IgnorePlugin took 7.16 secs
OptimizeCssAssetsWebpackPlugin took 3.037 secs
MiniCssExtractPlugin took 1.32 secs
TerserPlugin took 0.731 secs
HappyPlugin took 0.224 secs
ManifestPlugin took 0.103 secs
InlineChunkHtmlPlugin took 0.087 secs
HtmlWebpackPlugin took 0.085 secs
ModuleNotFoundPlugin took 0.073 secs
InterpolateHtmlPlugin took 0.062 secs
DefinePlugin took 0.061 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 51.23 secs
  module count = 2233
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 43.49 secs
  module count = 237
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 32.76 secs
  module count = 237
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 9.38 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 4.12 secs
  module count = 21
modules with no loaders took 1.56 secs
  module count = 24


删除丑化插件



##### 最终优化完成之后为```2.2min```

 SMP  ⏱  
General output time took 34.71 secs

 SMP  ⏱  Plugins
IgnorePlugin took 5.14 secs
OptimizeCssAssetsWebpackPlugin took 4.14 secs
MiniCssExtractPlugin took 1.11 secs
TerserPlugin took 0.358 secs
HappyPlugin took 0.18 secs
InlineChunkHtmlPlugin took 0.072 secs
ManifestPlugin took 0.069 secs
ModuleNotFoundPlugin took 0.064 secs
InterpolateHtmlPlugin took 0.052 secs
DefinePlugin took 0.051 secs
HtmlWebpackPlugin took 0.05 secs

 SMP  ⏱  Loaders
_happypack@5.0.1@happypack took 30.44 secs
  module count = 2233
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 28.27 secs
  module count = 237
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader, and 
_sass-loader@7.1.0@sass-loader took 18.052 secs
  module count = 237
_mini-css-extract-plugin@0.4.3@mini-css-extract-plugin, and 
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 9.52 secs
  module count = 21
_css-loader@1.0.0@css-loader, and 
_postcss-loader@3.0.0@postcss-loader took 2.71 secs
  module count = 21
modules with no loaders took 0.698 secs
  module count = 24