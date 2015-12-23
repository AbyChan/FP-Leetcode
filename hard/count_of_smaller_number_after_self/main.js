
var countSmaller = function(nums){
    
    
};

var Node = function(val){
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
        return Tree.childCount(node.left) + Tree.childCount(node.right);
    }
};

Tree.prototype.insert = function(val){
    var res = 0;
    var insertNode = function(node, val){
        var sres = 0;
        if ( node.val === val ) {
            node.count++;
            return sres;
        } else if ( node.val > val ) {
            if ( node.left ) {
                
            } else {
                
            }
        } else {
            
        }

    };
    

    if ( this.root === null ) {
        this.root = new Node(val);        
    } else {
        
    }
    return res;
};



countSmaller([5, 2, 6, 1]); // 2110
