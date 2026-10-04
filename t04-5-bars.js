const createBarChart = (data) => {
  // SVG internal coordinate system (logical dimensions)
  const viewW = 500; // logical width available for the chart
  const viewH = 1600; // logical height available for all bars

  // SVG rendered size displayed on the webpage (viewport size)
  const displayW = 640; // visible width of the SVG
  const displayH = 420; // visible height of the SVG

  // Append SVG container with responsive viewBox and explicit CSS display bounds
  const svg = d3
    .select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`) // defines the internal coordinate system
    .attr("width", displayW) // sets the displayed width
    .attr("height", displayH) // sets the displayed height
    .style("border", "1px solid black");

  // 1. Linear Scale for x-axis (Numeric: count -> pixels)
  const xMax = d3.max(data, (d) => d.count); // Find the largest count value in the dataset
  const xScale = d3
    .scaleLinear()
    .domain([0, xMax]) // input: data values from 0 to highest count
    .range([0, viewW]); // output: pixel positions from 0 to SVG logical width

  // 2. Band Scale for y-axis (Categorical: brand -> vertical slots)
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.brand)) // extract brand names as categories
    .range([0, viewH]) // distribute categories from top to bottom
    .paddingInner(0.2) // space between neighbouring bars
    .paddingOuter(0.1); // space before first bar & after last bar

  // 3. Render SVG Rectangles using D3 Data Binding
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", (d) => `bar bar-${d.count}`)
    .attr("x", 0) // start every bar at left edge
    .attr("y", (d) => yScale(d.brand)) // vertical position from band scale
    .attr("width", (d) => xScale(d.count)) // horizontal length from linear scale
    .attr("height", yScale.bandwidth()) // uniform height calculated by band scale
    .attr("fill", "steelblue");
};