

class GraphVertice {
  constructor(data) {
    this.data = data;
    this.firstArc = null;
  }
}

class ArcNode {
  constructor(adjvex, nextArc) {
    this.adjvex = adjvex;
    this.nextArc = nextArc;
  }
}

class Graph {
  constructor(vexnum, arcnum, vertices) {
    this.vexnum = vexnum;
    this.arcnum = arcnum;
    this.vertices = this.getVertices(vertices);
  }

  getVertices(vexs) {
    const vertices = [];
    const { vexnum } = this;
    for(let i = 0; i < vexnum; i++) {
      vertices.push(
        new GraphVertice(vexs[i])
      )
    }

    return vertices;
  }
}

function getVerticeLocation(G, verx) {
  let index = -1;
  for (let i = 0; i < G.vertices.length; i++) {
    if (G.vertices[i].data === verx) {
      index = i;
    }
  }
  return index;
}


const vertices = ['a', 'b', 'c', 'd', 'e'];

const adjvex = [
  ['a', 'b'],
  ['a', 'd'],
  ['b', 'c'],
  ['b', 'e'],
  ['d', 'c'],
  ['e', 'c'],
];
const G = new Graph(5, 6, vertices);

function createUDG(G, adjvex) {
  for(let k = 0; k < G.arcnum; k++) {
    const [v1, v2] = adjvex[k];
    const i = getVerticeLocation(G, v1);
    const j = getVerticeLocation(G, v2);
    console.log(i, j)
    
    G.vertices[i].firstArc = new ArcNode(j, G.vertices[i].firstArc);
    G.vertices[j].firstArc = new ArcNode(i, G.vertices[j].firstArc);
  }
  return G;
}

console.log('createUDG:', createUDG(G, adjvex))