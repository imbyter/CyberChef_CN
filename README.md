## 对开源项目CyberChef的汉化翻译

原项目地址：[https://github.com/gchq/CyberChef](https://github.com/gchq/CyberChef)

## 翻译方法

> 本项目仅支持在Linux/MacOS下编译

1. 安装nodejs：下载https://nodejs.org/en/download/中的linux安装包，然后解压复制文件
```
tar -xf node-v20.11.1-linux-x64.tar
sudo mv node-v20.11.1-linux-x64/bin/* /usr/local/bin/
sudo mv node-v20.11.1-linux-x64/lib/node_modules/ /usr/local/lib/
```

2. 下载CyberChef
```
git clone https://github.com/gchq/CyberChef.git
cd CyberChef
npm install vm
npm install
```

3. 测试：
```
npm start
```

4. 编译打包
```
npm run build
```

> 源文件是/src文件夹中的内容，编译打包后的文件在/build/prod中。

## 版本

当前翻译版本为CyberChef_v10.8.2，对应：[https://github.com/gchq/CyberChef/releases/tag/v10.8.2](https://github.com/gchq/CyberChef/releases/tag/v10.8.2)

## 进度

仅完成了界面的初步翻译，编码类型仅翻译了Base64，F1也很多没翻译，后续有待完善。

## 截图

![图片](/screenshot.png)