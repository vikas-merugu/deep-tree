import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Tree = ({ data }) => {
  const svgRef = useRef();
  const [root, setRoot] = useState(null);

  useEffect(() => {
    if (data) {
      const width = 960;
      const height = 500;

      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(40,0)');

      const treeLayout = d3.tree()
        .size([height, width - 160]);

      const hierarchyData = d3.hierarchy(data);
      treeLayout(hierarchyData);

      setRoot(hierarchyData);
    }
  }, [data]);

  useEffect(() => {
    if (root) {
      const updateTree = () => {
        const svg = d3.select(svgRef.current).select('g');

        const nodes = root.descendants();
        const links = root.links();

        // Nodes
        const node = svg.selectAll('g.node')
          .data(nodes, d => d.data.name);

        const nodeEnter = node.enter().append('g')
          .attr('class', 'node')
          .attr('transform', d => `translate(${d.y},${d.x})`)
          .on('click', d => {
            // Toggle children on click
            if (d.children) {
              d._children = d.children;
              d.children = null;
            } else {
              d.children = d._children;
              d._children = null;
            }
            updateTree();
          });

        nodeEnter.append('circle')
          .attr('r', 6)
          .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

        nodeEnter.append('text')
          .attr('dy', '0.31em')
          .attr('x', d => d.children ? -10 : 10)
          .attr('text-anchor', d => d.children ? 'end' : 'start')
          .text(d => d.data.name);

        const nodeUpdate = nodeEnter.merge(node)
          .transition()
          .duration(500)
          .attr('transform', d => `translate(${d.y},${d.x})`);

        nodeUpdate.select('circle')
          .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

        node.exit().remove();

        // Links
        svg.selectAll('path.link')
          .data(links, d => d.target.data.name)
          .enter().insert('path', 'g')
          .attr('class', 'link')
          .attr('d', d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x))
          .attr('fill', 'none')
          .attr('stroke', '#ccc');
      };

      updateTree();
    }
  }, [root]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default Tree;
