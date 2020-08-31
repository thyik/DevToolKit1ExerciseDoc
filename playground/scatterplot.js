var dataset = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];

const WIDTH = 600;
const HEIGHT = 600;
const PADDING = 20;

// setup data scaling to fit view
var xScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, d => d[0])])
                .range([PADDING, WIDTH - PADDING]);

var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, d => d[1])])
                .range([HEIGHT - PADDING, PADDING]);

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
.attr("cx", pt => xScale(pt[0]))
.attr("cy", pt => yScale(pt[1]))
.attr("r", 5);

// create label for each point
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(pt => `${pt[0]},${pt[1]}`)
    .attr("x", pt => xScale(pt[0]))
    .attr("y", pt => yScale(pt[1]))
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");

// create axes
// x axis
svg.append("g")
    .attr("transform", `translate(0,${HEIGHT-PADDING})`)
    .call(d3.axisBottom()
    .scale(xScale));
// y axis
svg.append("g")
    .attr("transform", `translate(${PADDING},0)`)
    .call(d3.axisLeft()
    .scale(yScale));