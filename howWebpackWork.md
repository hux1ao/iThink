#### webpack work process

* 初始化参数：根据配置文件 & shell命令中的参数初始化得出最终参数，并执行插件实例化。
* 根据配置生成全局唯一的compiler
* 加载插件，调用插件的apply方法，并将compiler实例传递给插件
* 应用node的文件系统找到compiler对象，方便后续的寻找和读取
* 读取配置entrys，为每一个entry实例话一个entryplugin，为递归解析做准备工作
* 根据配置初始化resolver，resolver负责在文件系统中搜寻制定文件
* 找到入口文件，针对每个module串行调用loader去翻译文件内容，并递归地找出该文件的依赖文件处理下去，直到所有文件全部被处理完成
* 将编译后的module组合成chunk文件，并输入到文件系统中