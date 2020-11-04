//basicExample();
example2();

function example2(){

    let g = { nodes: [], edges: [] };
    let limit = 5;
    
    // Generate a random graph:
    for (let i = 0; i < limit; i++){
        g.nodes.push({
            id: 'n' + i,
            label: 'Node ' + i,
            x: i,
            y: 0,
            size: Math.random(),
            color: '#666'
        });
    }
    
    for (let i = 0; i < limit; i++){
        g.edges.push({
            id: 'e' + i,
            source: 'n' + i,
            target: 'n' + ((i+1 < limit) ? (i+1) : (i)),
            size: Math.random(),
            color: '#ccc'
        });
    }
    
    // Instantiate sigma:
    let s = new sigma({
        graph: g,
        container: 'myDiagramDiv'
    });
}

function basicExample(){
    /**
     * This is a basic example on how to instantiate sigma. A random graph is
     * generated and stored in the "graph" variable, and then sigma is instantiated
     * directly with the graph.
     *
     * The simple instance of sigma is enough to make it render the graph on the on
     * the screen, since the graph is given directly to the constructor.
     */
    let i, s,
        N = 100,
        E = 500,
        g = { nodes: [], edges: [] };
    
    // Generate a random graph:
    for (i = 0; i < N; i++)
        g.nodes.push({
            id: 'n' + i,
            label: 'Node ' + i,
            x: Math.random(),
            y: Math.random(),
            size: Math.random(),
            color: '#666'
    });
    
    for (i = 0; i < E; i++)
        g.edges.push({
            id: 'e' + i,
            source: 'n' + (Math.random() * N | 0),
            target: 'n' + (Math.random() * N | 0),
            size: Math.random(),
            color: '#ccc'
    });
    
    // Instantiate sigma:
    s = new sigma({
        graph: g,
        container: 'myDiagramDiv'
    });
}
