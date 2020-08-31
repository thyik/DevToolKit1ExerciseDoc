var dataset = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];

const WIDTH = 600
const HEIGHT = 600

// Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr('width', WIDTH)
    .attr("height", HEIGHT);

// create circle dot datapoint
svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", pt => pt[0])
.attr("cy", pt => pt[1])
.attr("r", 5);

// create label for each point
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(pt => `${pt[0]},${pt[1]}`)
    .attr("x", pt => pt[0])
    .attr("y", pt => pt[1])
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");