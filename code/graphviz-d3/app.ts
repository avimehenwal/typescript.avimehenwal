import * as d3 from 'd3';
import 'd3-graphviz';

console.log('Avi Mehenwal');

// @ts-ignore
d3.select("#graph").graphviz()
    .renderDot('digraph  {a -> b}');