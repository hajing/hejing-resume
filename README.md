# 我的前端求职简历
看到一句话，“作为一个前端工程师，如果没有一份线上简历，这将是一件很low逼的事情”，于是，我就花了两天搭了这个线上简历。

先奉上地址吧，后面再说下搭建过程中的一些事，
访问地址：[http://hajing.github.io/hejing-resume/index.html](http://hajing.github.io/hejing-resume/index.html)
![我的简历首页](http://7xpy9b.com1.z0.glb.clouddn.com/resume_index.png)

## 起因
因为那句话，也因为辞职了想找份新的工作，刚好也看到了一个比较有新意的简历PSD，于是就把它切来做简历了。（侵权删）

有新意的PSD奉上：
![resume.psd](http://7xpy9b.com1.z0.glb.clouddn.com/resume.jpg)


## 经过
切图没什么好说的，说一下字体那一块，我本来想引用Google字体CDN，有点担心国内网络会不会不好加载，于是选择下载到本地直接用
@font-face，结果“思源黑体”是真的大，15.6M，我本地调试加载都够我看完一集《毒枭》了（此处用了夸张的手法，厉害了）。
最后还是放弃了。（字体有line字体、新青年字体、思源黑体、Mononoki程序猿字体，侵权删）

本来想选用的字体，丧心病狂的15.6M：

![字体](http://7xpy9b.com1.z0.glb.clouddn.com/font.jpg)

还有一个地方，在“阅读书籍”模块，原来会加载一个1664*260的一个图片，加载过程很慢，最后换成了.webp格式的图片，稍微好点，图片预加载这个暂时还没做，
等后面维护吧。7本书籍的封面都是在豆瓣上获取的。（侵权删）

“阅读书籍”加载问题：

![阅读书籍](http://7xpy9b.com1.z0.glb.clouddn.com/BookJZ.jpg)
![素材](http://7xpy9b.com1.z0.glb.clouddn.com/SC.jpg)

很多选择器的命名都没有严格按照驼峰规则，样式选择器命名也很乱很杂，兼容性也不是很好（主流现代浏览器显示没问题），这些都会在后面处理，
最后还会加上前端自动化工具等等辅助处理。

## 结尾
希望能够找到一份合适的工作。简历存在的问题还望大家指正，谢谢。

