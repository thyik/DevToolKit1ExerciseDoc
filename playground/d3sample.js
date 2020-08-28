chart = {
    replay;
  
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    const l = length(line(data));
    
    svg.append("g")
        .call(xAxis);
    
    svg.append("g")
        .call(yAxis);
    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-dasharray", `0,${l}`)
        .attr("d", line)
      .transition()
        .duration(5000)
        .ease(d3.easeLinear)
        .attr("stroke-dasharray", `${l},${l}`);
    
        // draw dots?
    svg.append("g")
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
      .selectAll("circle")
      .data(data)
      .join("circle")
        .attr("cx", d => x(d.x))
        .attr("cy", d => y(d.y))
        .attr("r", 3);
    //
    const label = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
        .attr("opacity", 0);
    
    label.append("text")
        .text(d => d.name)
        .each(function(d) {
          const t = d3.select(this);
          switch (d.orient) {
            case "top": t.attr("text-anchor", "middle").attr("dy", "-0.7em"); break;
            case "right": t.attr("dx", "0.5em").attr("dy", "0.32em").attr("text-anchor", "start"); break;
            case "bottom": t.attr("text-anchor", "middle").attr("dy", "1.4em"); break;
            case "left": t.attr("dx", "-0.5em").attr("dy", "0.32em").attr("text-anchor", "end"); break;
          }
        })
        .call(halo);
    
    label.transition()
        .delay((d, i) => length(line(data.slice(0, i + 1))) / l * (5000 - 125))
        .attr("opacity", 1);
    
    return svg.node();
  }