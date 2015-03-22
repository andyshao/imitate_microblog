imitate_microblog
=================

###更新于2015/03/21  
更新了jQuery的版本：1.7.1->1.11.1；   
重新编写了仿博客发布的代码，把CSS和JavaScript独立出来，同时添加了字数统计和输入框为空时的警示。  
不过原来的代码仅仅是一个文件：**microblog.html**，我们可以对这两次的代码进行对比。如果不想要原来的代码，完全可以放心地把该文件删除！    

在这次的改动中，主要学习到了如下的内容：  
1. 样式进行了重新设计；  
2. 样式与结构分离，不再在html中添加样式；  
3. CCS3中animation的使用：输入框为空或者超过字数限制时进行提示；  
4. 文字的强制换行：`word-break:break-all; word-wrap:break-word;`；  
5. 输入框字数的限制：监听keydown事件，每次执行keydown事件时均获取输入框的值的长度；我在实时显示当前剩余字数外，还为剩余字数添加了颜色提示；    
6. 添加表情；  

更多内容，欢迎关注我的博客：[wenzi-microblog/](http://www.xiabingbao.com/javascript/2015/03/21/imitate-microblog/)  

###更新于2014/04/26  
仿微博发布和删除的动画  

不过在使用时，首先要在当前目录中放置jquery-1.7.1.js或者改变代码中jQuery链接  
