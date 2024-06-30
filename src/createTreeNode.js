import React from "react";
import { useState } from "react";
import Tree from "./components/Tree";
import TreeNode from "./components/TreeNode";
import LoginForm from "./components/LoginForm";


function createTreeNode(value) {
    return {
        value: value,
        children: []
    };
}

// Function to build a tree recursively
function buildTree(root, currentDepth, maxDepth) {
    if (currentDepth >= maxDepth) {
        return;
    }

    // Each node has 2 children for simplicity
    let leftChild = createTreeNode(1);
    let rightChild = createTreeNode(1);
    root.children = [leftChild, rightChild];

    // Recursive call to build children
    buildTree(leftChild, currentDepth + 1, maxDepth);
    buildTree(rightChild, currentDepth + 1, maxDepth);
}

// Function to create a tree
function createTree(depth) {
    const root = createTreeNode(1); // Initialize root node with value 1
    buildTree(root, 1, depth);
    return root;
}

// Usage example
const depthOfTree = 10000;
const tree = createTree(depthOfTree);
console.log(tree); // Outputs the tree structure

export default createTreeNode;