const blue = "#2a3fde";
const red = "#bf0845";

var DIR = "./assets/"

// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, shape: "circularImage", image: DIR + "mattis.png", label: "Glen Mattis", level: 1, group: "apex"},
    { id: 2, shape: "circularImage", image: DIR + "vulpis.png", label: "Morgan Vulpis", level: 2, group: "apex" },
    { id: 3, shape: "circularImage", image: DIR + "faust.png", label: "Orpheus Faust", level: 2, group: "harper" },
    { id: 4, shape: "circularImage", image: DIR + "may.png", label: "Mary May", level: 3, group: "apex" },
    { id: 5, shape: "circularImage", image: DIR + "bruce.png",label: "Mr. Bruce", level: 3, group: "apex" },
    {id: 6, shape: "circularImage", image: DIR + "coralai.png",label: "Coralai Cronn", level: 3, group: "cronn"},
    {id: 7, shape: "circularImage", image: DIR + "navila.png",label: "Mariel Navila", level: 4, group: "magv"},
    {id: 8, shape: "circularImage", image: DIR + "hydar.png",label: "Koren Hydar", level: 2, group: "magv"},
    {id: 9, shape: "circularImage", image: DIR + "sona.png",label: "Skar Sona", level: 2, group: "magv"},
    {id: 10, shape: "circularImage", image: DIR + "barati.png",label: "Sofia Barati", level: 1, group: "magv"},
    {id: 11, shape: "circularImage", image: DIR + "lava.png",label: "LAVA", level: 1, group: 1},
    {id: 12, shape: "circularImage", image: DIR + "masaka.png",label: "Masaka", level: 1, group: 2},
    {id: 13, shape: "circularImage", image: DIR + "corvo.png",label: "Corvo Cronn", level: 1, group: "cronn"},
    {id: 14, shape: "circularImage", image: DIR + "bebo.png",label: "Jiddy Bebo", level: 1, group: 3},
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
    {from: 10, to: 11, color: {color: blue, opacity: 1}},
    {from: 4, to: 12, color: {color: blue, opacity: 1}},
    {from: 6, to: 13, color: {color: red, opacity: 1}},
    {from: 3, to: 14, color: {color: red, opacity: 1}},
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
        },
        nodes: {
            borderWidth: 10,
            borderWidthSelected: 14,
            size: 25,
            font: {size: 14}
        },
        groups: {
            apex: {
                color: {
                    background: "#32D2CF",
                    border: "#32D2CF",
                    highlight: {
                        border: "#32D2CF",
                        background: "#32D2CF"
                    },
                },
                font: {color: "black"}
            },
            magv: {
                color: {
                    background: "#A22222",
                    border: "#A22222",
                    highlight: {
                        border: "#A22222",
                        background: "#A22222"
                    },
                },
                font: {color: "black"}
            },
            harper: {
                color: {
                    background: "black",
                    border: "black",
                    highlight: {
                        border: "black",
                        background: "black"
                    },
                },
                font: {color: "black"}
            },
            cronn:  {
                color: {
                    background: "#D7B124",
                    border: "#930EEC",
                    highlight: {
                        border: "#930EEC",
                        background: "#D7B124"
                    },
                },
                font: {color: "black"}
            },
        },
        manipulation: {
            enabled: true,
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

  network.on("click", function (params) {
    const nodecount = nodes.length;
    //loop through all nodes and set their sizes to default
    for(let i=1; i<=nodecount; i++) {
        let node = network.body.nodes[i];
        node.setOptions({
            size: options.nodes.size,
            font: {
                size: options.nodes.font.size,
            }
        });
    }
    //set selected node (if there is one) to selected size
    if(params.nodes.length){
        let selectedNode = network.body.nodes[params.nodes[0]];
        console.log("NODE", selectedNode);
        //set node size for the clicked node to large (40)
        //also set the font size to large (20)
        selectedNode.setOptions({
            size: 40,
            font: {
                size: 20,
            },
        })
    };
  });