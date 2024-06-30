import React from 'react';

const TreeNode = ({ node, onNodeClick }) => {
    const handleNodeClick = () => {
        onNodeClick(node); // Pass the node to the handler function
    };

    return (
        <div style={{ marginLeft: '20px', marginBottom: '5px' }}>
            <span onClick={handleNodeClick} style={{ cursor: 'pointer' }}>
                {node.value}
            </span>
            {node.children.length > 0 && (
                <div style={{ marginTop: '5px' }}>
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} onNodeClick={onNodeClick} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;
