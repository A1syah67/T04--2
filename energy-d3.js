// 1. Select the <h1> tag and change its text color to green
d3.select("h1")
  .style("color", "green");

// 2. Select the first <div> (#content), append a paragraph <p>, and set its text
d3.select("div")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// 3. Append an empty <rect> (invisible in SVG, visible in DOM)
d3.select("svg")
  .append("rect");

// 4. Append a second <rect> with x, y, width, height, and green fill
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");