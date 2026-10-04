/**
 * T04-5: D3 binding and drawing with data
 */

const createBarChart = (data) => {
  // 1. Select the container and append an SVG canvas
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 400") // logical canvas size
    .style("border", "1px solid black"); // dev-only border to inspect canvas

  // 2. Bind data to <rect> elements, join, and set attributes
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
      console.log("Binding row:", d); // Inspect each row in DevTools Console
      return `bar bar-${d.count}`;
    })
    .attr("width", d => d.count) // Sets width based on numeric count value
    .attr("height", 16);         // Constant height for each bar
};