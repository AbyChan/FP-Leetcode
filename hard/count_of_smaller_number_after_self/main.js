!!!NOT SUlOTION TIME LIMIT

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function(nums){
    var res = [];
    var tree = new Tree();
    while ( nums.length !== 0 ) {
        res.unshift(tree.insert(nums.pop()));
    }
    return res;
};

var TNode = function(val){
    this.val = val;
    this.count = 1;
    this.left = null;
    this.right = null;
};

var Tree = function(){
    this.root = null;
};

Tree.childCount = function(node){
    if ( node === null ) {
        return 0;
    } else {
        return Tree.childCount(node.left) + Tree.childCount(node.right) + node.count;
    }
};

Tree.prototype.insert = function(val){
    
    var insertNode = function(node, val){
        if ( node === null ) {
            return 0;
        }
        if ( node.val === val ) {
            node.count++;
            return 0;
        } else if ( node.val > val ) {
            if ( node.left ) {
                return insertNode(node.left, val);
            } else {
                node.left = new TNode(val);
                return 0;
            }
        } else {
            if ( node.right ) {
                return node.count + Tree.childCount(node.left) + insertNode(node.right, val);
            } else {
                node.right = new TNode(val);
                return node.count + Tree.childCount(node.left);
            }
        }
    };
    
    if ( this.root === null ) {
        this.root = new TNode(val);
        return 0;
    } else {
        return insertNode(this.root, val);
    }
};


