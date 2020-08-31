function myScatterPlot() {
    var dataset = [[10, 15], [20, 20], [5, 20], [7, 4], [22, 6]];
    console.log("entering...");
    
    //debugger;
    d3.csv("./dataset.csv", function(error, data)  {

        console.log("callback...")
        if (error)
        {
            console.log("callback error...")
            throw error;
        }

        var i=0;
        data.forEach(d => {
            d.x = +d.x;
            d.y = +d.y;
            //
            dataset[i][0] = d.x;
            dataset[i][1] = d.y;
            i++;
        });

    });

    // ?? why never plot using update csv data???
    console.log(dataset);

    // constants
    const WIDTH = 600;
    const HEIGHT = 600;
    const PADDING = 20;
    
    // setup data scaling to fit view
    // x-scale
    var xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, d => d[0])])
                    .range([PADDING, WIDTH - PADDING]);
    
    // y-scale
    var yScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, d => d[1])])
                    .range([HEIGHT - PADDING, PADDING]);        // reverse the range as view coordinate start from top-left
    
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
    
    // draw axes
    // x axis : transform drawing from top to bottom
    svg.append("g")
        .attr("transform", `translate(0,${HEIGHT-PADDING})`)
        .call(d3.axisBottom()
        .scale(xScale));
    // y axis : transform the drawing to display the scale number
    svg.append("g")
        .attr("transform", `translate(${PADDING},0)`)
        .call(d3.axisLeft()
        .scale(yScale));
}