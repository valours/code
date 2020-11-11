class Graph {
  private edges = 0;
  private adjacencyMatrix: number[][] = [];

  constructor(vertices: number) {
    for (let i = 0; i < vertices; i = i + 1) {
      this.edges = this.edges + 1;
      this.adjacencyMatrix.push([]);
    }
  }

  addEdge = (v: number, w: number) => {
    this.adjacencyMatrix[v].push(w);
    this.adjacencyMatrix[w].push(v);
  }

  depthFirstSearch = () => {

  }

  showGraph = () => {
    return this.adjacencyMatrix;
  }
}

export default Graph;