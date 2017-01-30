<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>BST Visualizer</title>
        <link href="https://ssl.jackzh.com/file/css/bootstrap/bootstrap-3-3-6/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
        <link href="less/main.less" type="text/less" rel="stylesheet" />
        <script src="https://ssl.jackzh.com/file/js/jquery/jquery-2.2.2.min.js"></script>
        <script src="https://ssl.jackzh.com/file/js/less-js/less.min.js"></script>
        <script src="https://ssl.jackzh.com/file/js/greensock/greensock-js-1.18.0/src/minified/TweenMax.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="js/processing.min.js" type="text/javascript"></script>
        <script src="https://d3js.org/d3.v3.min.js"></script>
        <script src="js/app.js" type="text/babel"></script>
    </head>
    <body>
        <div id="app-container">
            <div id="control-bar">
                <br><br>
                <h2>Binary Search Tree Visualizer<br>二叉搜索樹可視化</h2>
                <span>© Jun Zheng All Rights Reserved<br>© 代码是什么东西</span>
                <br><br>
                <span>因爲在多倫多大學的作業有手寫二叉搜索樹，我卻懒著寫，就做了個這玩意（雖然我覺得還是手寫更快）</span>
                <input type="text" class="default-textbox" id="insert-textbox" placeholder="Enter Values Here" value="J U N T H E H A C K E R" /><br><br>
                <span>Use Space To Seperate Elements<br>用空格分離元素</span><br><br>
                <button class="btn btn-primary" id="insert-button">Render / 渲染</button><br><br>
                <span>深度優先遍歷</span><br><br>
                <button class="btn btn-default" id="in-order-traversal-button">In-Order Traversal / 中序遍歷</button><br><br>
                <button class="btn btn-default" id="pre-order-traversal-button">Pre-Order Traversal / 先序遍歷</button><br><br>
                <button class="btn btn-default" id="post-order-traversal-button">Post-Order Traversal / 後序遍歷</button>
            </div>
            <div id="bst-container">
            </div>
        </div>
    </body>
</html>