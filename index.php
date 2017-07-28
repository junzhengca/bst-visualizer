<!--v1.0-stinouvolea-junthehacker-->
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>BST Visualizer</title>
        <link href="https://ssl.jackzh.com/file/css/bootstrap/bootstrap-3-3-6/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
        <link href="css/main.min.css?v=020ae074ec5f8669352342e0e44eb6861eb2e99f" type="text/css" rel="stylesheet" />
        <link href="https://ssl.jackzh.com/file/css/font-awesome-4.4.0/css/font-awesome.min.css" type="text/css" rel="stylesheet" />
        <script src="https://ssl.jackzh.com/file/js/jquery/jquery-2.2.2.min.js"></script>
        <script src="https://ssl.jackzh.com/file/js/greensock/greensock-js-1.18.0/src/minified/TweenMax.min.js"></script>
        <script src="https://d3js.org/d3.v3.min.js"></script>
        <script src="js/app.min.js?v=020ae074ec5f8669352342e0e44eb6861eb2e99f" type="text/javascript"></script>
        <!--Begin Google AdSense-->
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9243641995511635",
            enable_page_level_ads: true
          });
        </script>
    </head>
    <body>
        <div id="app-container">
            <div id="control-bar">
                <br><br>
                <h2>Binary Search Tree Visualizer</h2>
                <span>© Jun Zheng (aka junthehacker, also aka 代码是什么东西) All Rights Reserved</span>
                <br><br>
                <input type="text" class="default-textbox" id="insert-textbox" placeholder="Enter Values Here" value="j,u,n,t,h,e,h,a,c,k,e,r" /><br><br>
                <span>Use <code id="seperate-by-indicator">,</code> to seperate elements.</span><br><br>
                <button class="btn btn-primary" id="insert-button">Render</button><br><br>
                <span>Depth-First</span><br><br>
                <button class="btn btn-default" id="in-order-traversal-button">In-Order Traversal</button><br><br>
                <button class="btn btn-default" id="pre-order-traversal-button">Pre-Order Traversal</button><br><br>
                <button class="btn btn-default" id="post-order-traversal-button">Post-Order Traversal</button>
            </div>
            <div id="bst-container">
            </div>
            <div id="status-panel">
                <div id="toggle-button"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                <br>
                <h2>Options</h2>
                <span>Split Elements By</span><br><br>
                <input type="text" class="default-textbox" id="seperate-by-textbox" placeholder="Enter Values Here" value="," /><br><br>
                <span>Scale Graph By</span><br><br>
                <input type="text" class="default-textbox" id="scale-by-textbox" placeholder="Enter Values Here" value="1.0" /><br><br>
            </div>
        </div>
    </body>
</html>
