这是一款简易瀑布流插件
书写规则：
html:
<div class="waterFall">
    <ul></ul>
</div>

js:
$('.waterFall').waterFall(minLiH,maxLiH);
注意：1 div.waterFall 中可以添加多个ul标签
      2 minLiH,maxLiH参数可选，默认值为200,400
      3 若添加更多的更多的图片或者是想刷新多次，请修改js/waterFall.js或其他文件
      4 若是对您有帮助，希望可以star 一下，不胜感激