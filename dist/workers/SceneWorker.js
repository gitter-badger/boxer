importScripts('../../dist/boxer.js');

var Scene = boxer.core.Scene;
var Node = boxer.core.Node;

onmessage = function(e) {

    if(e.data.frame){
        Scene.update(e.data.frame);
    }
    if(e.data.addNode){
        Scene.addChild(new Node(e.data.addNode));
    }
    if(e.data.addSubGraph){
        e.data.addSubGraph.forEach(function(node){
            Scene.addChild(new Node(node));
        });
    }
    if(e.data.removeNode){
        Scene.removeChild(Scene.findOne(e.data.removeNode));
    }
    if(e.data.removeGraph){
        e.data.removeGraph.forEach(function(query){
            Scene.removeChild(Scene.findOne(query));
        });
    }
    if(e.data.graph){
        postMessage(Scene.graph);
    }
}
