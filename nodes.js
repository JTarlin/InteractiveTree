const blue = "#2a3fde";
const red = "#bf0845";

// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: "Glen Mattis", level: 1, group: 1},
    { id: 2, label: "Morgan Vulpis", level: 2, group: 1 },
    { id: 3, label: "Orpheus Faust", level: 2, group: 3 },
    { id: 4, label: "Mary May", level: 3, group: 1 },
    { id: 5, label: "Mr. Bruce", level: 3, group: 1 },
    {id: 6, label: "Coralai Cronn", level: 3, group: 4},
    {id: 7, label: "Mariel Navila", level: 4, group: 2},
    {id: 8, label: "Koren Hydar", level: 2, group: 2},
    {id: 9, label: "Skar Sona", level: 2, group: 2},
    {id: 10, label: "Sofia Barati", level: 1, group: 2},
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 2, color: {color: blue, opacity: 1}},
    {from: 1, to: 3, color: {color: red, opacity: 1}},
    {from: 1, to: 4, color: {color: blue, opacity: 1}},
    {from: 1, to: 5, color: {color: red, opacity: 1}},
    {from: 1, to: 6, color: {color: red, opacity: 1}},
    {from: 2, to: 5, color: {color: blue, opacity: 1}},
    {from: 2, to: 7, color: {color: blue, opacity: 1}},
    {from: 3, to: 5, color: {color: blue, opacity: 1}},
    {from: 3, to: 9, color: {color: red, opacity: 1}},
    {from: 10, to: 9, color: {color: blue, opacity: 1}},
    {from: 10, to: 8, color: {color: red, opacity: 1}},
    {from: 10, to: 6, color: {color: blue, opacity: 1}},
    {from: 10, to: 7, color: {color: blue, opacity: 1}},
    {from: 10, to: 5, color: {color: blue, opacity: 1}},
    {from: 9, to: 8, color: {color: blue, opacity: 1}},
    {from: 9, to: 4, color: {color: red, opacity: 1}},
    {from: 8, to: 4, color: {color: red, opacity: 1}},
    {from: 4, to: 6, color: {color: blue, opacity: 1}},
  ]);

  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
        layout: {
            hierarchical: false
            // hierarchical: {
            // direction: "UD",
            // },
        },
        edges: {
            smooth: {
                type: "cubicBezier",
                forceDirection: "none",
                roundness: 0.5,
            },
        },
        physics: {
            enabled: true,
            barnesHut: {
                theta: 0.5,
                gravitationalConstant: -4000,
                centralGravity: 0.3,
                springLength: 95,
                springConstant: 0.04,
                damping: 0.5,
                avoidOverlap: 1,
              },
        },
    };

    

  var network = new vis.Network(container, data, options);