class BinarySearchTree {
    constructor(){
        this._root = null;
        this._min_left = 0;
        this._json_data = {};
        this._traverse_result = [];
    }

    inOrderTraverse(node){
        if (node){
            //traverse the left subtree
            if (node.left !== null){
                this.inOrderTraverse(node.left);
            }            

            this._traverse_result[this._traverse_result.length] = node;

            //traverse the right subtree
            if (node.right !== null){
                this.inOrderTraverse(node.right);
            }
        }
    }

    preOrderTraverse(node){
        if (node){
            this._traverse_result[this._traverse_result.length] = node;

            //traverse the left subtree
            if (node.left !== null){
                this.preOrderTraverse(node.left);
            }            

            //traverse the right subtree
            if (node.right !== null){
                this.preOrderTraverse(node.right);
            }
        }
    }

    postOrderTraverse(node){
        if (node){
            //traverse the left subtree
            if (node.left !== null){
                this.postOrderTraverse(node.left);
            }            
            //traverse the right subtree
            if (node.right !== null){
                this.postOrderTraverse(node.right);
            }
            this._traverse_result[this._traverse_result.length] = node;
        }
    }

    insert(element){
        var node = {
            value: element,
            left: null,
            right: null
        }
        var current_node = this._root;
        var current_json_node = this._json_data;
        if(this._root == null){
            this._root = node
            this._json_data = {
                "name":node.value,
                "children": [
                    {"name": "null"},
                    {"name": "null"}
                ]
            }
        } else {
            while(true){
                console.log(current_json_node);
                if(element < current_node.value){
                    if (current_node.left === null){
                        current_node.left = node;
                        current_json_node["children"][0] = {
                            "name":node.value,
                            "children": [
                                {"name": "null"},
                                {"name": "null"}
                            ]
                        }
                        break;
                    } else {
                        current_node = current_node.left;
                        current_json_node = current_json_node["children"][0];
                    }
                } else if(element > current_node.value){
                    if (current_node.right === null){
                        current_node.right = node;
                        current_json_node["children"][1] = {
                            "name":node.value,
                            "children": [
                                {"name": "null"},
                                {"name": "null"}
                            ]
                        }
                        break;
                    } else {
                        current_node = current_node.right;
                        current_json_node = current_json_node["children"][1];
                    }
                } else {
                    break;
                }
            }
        }
    }
}

function doCollide(a, b) { // a and b are your objects
    //console.log(a.offset().top,a.position().top, b.position().top, a.width(),a.height(), b.width(),b.height());
    var aTop = a.offset().top;
    var aLeft = a.offset().left;
    var bTop = b.offset().top;
    var bLeft = b.offset().left;
 
    return !(
        ((aTop + a.height()) < (bTop)) ||
        (aTop > (bTop + b.height())) ||
        ((aLeft + a.width()) < bLeft) ||
        (aLeft > (bLeft + b.width()))
    );
}

var bst = new BinarySearchTree();
$(function(){
    $("#insert-button").click(function(){
        $("#bst-container").html("");
        var values = $("#insert-textbox").val().split(" ");
        bst._root = null;
        bst._json_data = null;
        for(var i = 0; i < values.length; i++){
            bst.insert(values[i]);
        }

        // ************** Generate the tree diagram	 *****************
        var margin = {top: 20, right: 120, bottom: 20, left: 120},
            width = $(window).width() * 2,
            height = $(window).height();
            
        var i = 0,
            duration = 750,
            root;

        var tree = d3.layout.tree()
            .size([height, width]);

        var diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.x, d.y]; });

        var svg = d3.select("#bst-container").append("svg")
            .attr("width",width)
            .attr("height",height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        root = bst._json_data;
        root.x0 = height / 2;
        root.y0 = 0;
        
        update(root);

        d3.select(self.frameElement).style("height", "500px");

        setTimeout(function(){
            $("svg").first().css({'height':$("g")[0].getBoundingClientRect().height + 200});
            $("svg").first().css({'width':$("g")[0].getBoundingClientRect().width + 500});
        },1000);

        function update(source) {

            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function(d) { d.y = d.depth * 100; });

            // Update the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function(d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
                .on("click", click);
            
            nodeEnter.append("circle")
                .attr("r", 0)
                .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
                .style("fill-opacity", function(d){
                    if(d.name === "null"){
                        return 0;
                    } else {
                        return 0.5;
                    }
                });

            nodeEnter.append("text")
                .attr("x", function(d) { return d.children || d._children ? -30 : 0; })
                .attr("font-size", function(d) { 
                    if(d.name === "null"){
                        return 15;
                    } else {
                        return 20;
                    }
                })
                .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
                .text(function(d) { return d.name; })
                .style("fill","white")
                .style("opacity", function(d) { 
                    if(d.name === "null"){
                        return 0.5;
                    } else {
                        return 1;
                    }
                })

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

            nodeUpdate.select("circle")
                .attr("r", 20)
                .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + source.x + "," + source.y + ")"; })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            var link = svg.selectAll("path.link")
                .data(links, function(d) { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .style("stroke-opacity", function(d){
                    if(d.target.name === "null"){
                        return 0.1;
                    } else {
                        return 0.5;
                    }
                })
                .attr("d", function(d) {
                    var o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function(d) {
                    var o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        }
    });

    $("#in-order-traversal-button").click(function(){
        bst._traverse_result = [];
        bst.inOrderTraverse(bst._root);
        showTraverseResult();
    });

    $("#pre-order-traversal-button").click(function(){
        bst._traverse_result = [];
        bst.preOrderTraverse(bst._root);
        showTraverseResult();
    });

    $("#post-order-traversal-button").click(function(){
        bst._traverse_result = [];
        bst.postOrderTraverse(bst._root);
        showTraverseResult();
    });

    function showTraverseResult(){
        var result = "";
        for(var i = 0; i < bst._traverse_result.length; i++){
            result += " " + bst._traverse_result[i].value;
        }
        alert(result);
    }

    $("#insert-button").click();
});