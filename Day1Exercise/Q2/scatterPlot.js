function myScatterPlot() {
    var dataset = [[10, 15], [20, 20], [5, 20], [7, 4], [22, 6]];


    var svg = d3.select("body")
        .append('svg')
        .attr("width", 600)
        .attr("height", 600);

    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d[0]; })])
        .range([0, 600]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d[1]; })])
        .range([0, 600]);

    var rScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d[1]; })])
        .range([2, 5]);

    // https://alignedleft.com/tutorials/d3/making-a-scatterplot
    svg.selectAll("circle").data(dataset).enter().append("circle")
        /* .attr("transform", function (d, i) { return "scale(10)" }) */
        .attr("fill", "blue")
        .attr("cx", function (d) { return xScale(d[0]); })
        .attr("cy", function (d) { return yScale(d[1]); })
        .attr("r", rScale(1));

    // print text next to the point
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        /* .attr("transform", function (d, i) { return "scale(10)" }) */
        .text(function (d) {
            return d[0] + "," + d[1];
        })
        .attr("x", function (d) {
            return d[0] + 1;
        })
        .attr("y", function (d) {
            return d[1];
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "1px")
        .attr("fill", "red");


    // setup axis
    //var xAxis = svg.append('g').call(d3.axisBottom());

    /*                <circle cx="0" cy="0" r="10" fill="blue"
                   transform="scale(4)" />
    */
}