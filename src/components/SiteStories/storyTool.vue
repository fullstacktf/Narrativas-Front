<template>
  <div>
    <div class="container"></div>
  </div>
</template>

<script>
import { Network } from "vis-network/peer/esm/vis-network";
import { DataSet } from "vis-data/peer/esm/vis-data";
import "vis-network/styles/vis-network.css";
export default {
    name: "StoryTool",
    mounted() {
      const container = this.$el.querySelector(".container");
      console.log(container);

      const data = {
        nodes: this.arrayOfNodes,
        edges: this.arrayOfEdges
      }

      const network = new Network(container, data, this.options);
    
    },
    data() {
      name: "StoryTools"
      return {
        arrayOfNodes: new DataSet([
          { id: 1, label: "Node 1" },
          { id: 2, label: "Node 2" },
          { id: 3, label: "Node 3" },
          { id: 4, label: "Node 4" },
          { id: 5, label: "Node 5" }
        ]),
        arrayOfEdges: new DataSet([
          { from: 1, to: 3 },
          { from: 1, to: 2 },
          { from: 2, to: 4 },
          { from: 2, to: 5 },
          { from: 3, to: 3 }
        ]),
        options: {
          autoResize: true,
          height: "1000px",
          width: "1000px",
          nodes: {
            shape: "square",
            size: 30,
          }
        },
      }
    },
}
</script>

<style>

</style>