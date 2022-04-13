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
  @Input() size: number = 600;
  constructor() {}

  ngOnInit(): void {
    const width = this.size;
    const height = this.size;
    const nodeColor = '#000';
    const linkColor = 'gray';
    const textColor = 'white';
    const { nodes, links } = graphData;
    const svg = d3.select('svg').attr('viewBox', `0 0 ${height} ${width}`); //.attr('width', width).attr('height', height);

    const simulation = d3
      .forceSimulation()
      .force('charge', d3.forceManyBody().strength(-800))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'link',
        d3.forceLink().strength((link: any) => link.strength)
      );

    // links
    const linkElements = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', 2)
      .attr('stroke', linkColor);

    // nodes
    const nodeElements = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d) => d.size)
      .attr('fill', (node) => node.color || nodeColor)
      .attr('cursor', 'pointer')
      .attr('filter', 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))');

    // text
    const textElements = svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text((node) => node.label)
      .attr('font-size', 16)
      .attr('fill', (node) => textColor)
      .attr('font-weight', 500)
      .style('user-select', 'none')
      .attr('cursor', 'pointer')
      .attr('text-anchor', 'middle');

    simulation.nodes(graphData.nodes).on('tick', () => {
      nodeElements.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
      textElements.attr('x', (node) => node.x).attr('y', (node) => node.y);
      linkElements
        .attr('x1', (link: any) => link.source.x)
        .attr('y1', (link: any) => link.source.y)
        .attr('x2', (link: any) => link.target.x)
        .attr('y2', (link: any) => link.target.y);
    });

    simulation.force(
      'link',
      d3
        .forceLink()
        .links(graphData.links)
        .distance((link: any) => link.distance || 180)
    );

    const dragDrop: any = d3
      .drag()
      .on('start', (event) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      })
      .on('drag', (event) => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      })
      .on('end', (event) => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      });

    // nodeElements.call(dragDrop);
  }
}
