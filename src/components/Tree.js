import React from "react";
import { useState } from "react";
import TreeNode from "./TreeNode";


const Tree = ({ depth }) => {
    const [tree, setTree] = useState(() => createTree(depth));

    
    function createTree(maxDepth) {
        function createNode(value) {
            return {
                value: value,
                children: [],
            };
        }

        const root = createNode(1); 
        const nodes = [root]; 

        for (let currentDepth = 1; currentDepth < maxDepth; currentDepth++) {
            const levelSize = nodes.length; 
            for (let i = 0; i < levelSize; i++) {
                const node = nodes.shift(); 
                const leftChild = createNode(1);
                const rightChild = createNode(1);
                node.children.push(leftChild, rightChild);
                nodes.push(leftChild, rightChild); 
            }
        }

        return root; 
    }

    const handleNodeClick = (clickedNode) => {
        const newValue = prompt('Enter new value:', clickedNode.value);
        if (newValue !== null) {
            updateNodeValue(tree, clickedNode, newValue);
            setTree({ ...tree }); 
        }
    };

   
    function updateNodeValue(root, targetNode, newValue) {
        if (root === targetNode) {
            root.value = newValue;
        } else {
            root.children.forEach((child) => {
                if (child === targetNode) {
                    child.value = newValue;
                } else {
                    updateNodeValue(child, targetNode, newValue);
                }
            });
        }
    }

    return (
        <div>
            <h2>Tree Structure</h2>
            <TreeNode node={tree} onNodeClick={handleNodeClick} />
        </div>
    );
};

export default Tree;
