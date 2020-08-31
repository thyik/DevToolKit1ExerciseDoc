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
.attr("cx", d => d[0])
.attr("cy", d => d[1])
.attr("r", 5);