import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
// data
import { graphData } from './graph-data';

@Component({
  selector: 'app-bubble-graph',
  templateUrl: './bubble-graph.component.html',
  styleUrls: ['./bubble-graph.component.scss'],
})
export class BubbleGraphComponent implements OnInit {
  nodes = graphData.nodes;
  @Input() size: number = 500;
  constructor() {}

  ngOnInit(): void {}

  createChart() {
    const width = this.size;
    const height = this.size;
    const nodeColor = '#000000b3';
    const linkColor = '#3f4040';
    const textColor = '#FFFFFF';
    const { nodes, links } = graphData;
    const svg = d3.select('svg').attr('viewBox', `0 0 ${height} ${width}`);

    const simulation = d3
      .forceSimulation()
      .force('charge', d3.forceManyBody().strength(-20))
      .force(
        'x',
        d3
          .forceX()
          .strength(0.03)
          .x(width / 2)
      )
      .force(
        'y',
        d3
          .forceY()
          .strength(0.03)
          .y(height / 2)
      )
      .force(
        'collision',
        d3.forceCollide().radius((d: any) => d.size + 2)
      );

    // nodes
    const nodeElements = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d) => d.size)
      .attr('fill', (node) => node.color || nodeColor);

    // text
    const textElements = svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text((node) => node.label)
      .attr('font-size', 14)
      .attr('fill', (node) => textColor)
      .attr('font-weight', 500)
      .style('user-select', 'none')
      .attr('text-anchor', 'middle');

    simulation.nodes(graphData.nodes).on('tick', () => {
      nodeElements.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
      textElements.attr('x', (node) => node.x).attr('y', (node) => node.y);
    });
  }
}
