import Graph from './graph';

describe('Graphs and Graph Algorithms', () => {
  it('Building a Graph', () => {
    // given
    const graph = new Graph(5);

    // when
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);

    // then
    expect(graph.showGraph()).toEqual([
      [1, 2],
      [0, 3],
      [0, 4],
      [1],
      [2],
    ]);
  })
})


