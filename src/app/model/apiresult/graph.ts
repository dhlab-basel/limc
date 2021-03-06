import { JsonObject, JsonProperty } from "json2typescript";

import { GraphNode } from "./graph-node";
import { GraphEdge } from "./graph-edge";

@JsonObject
export class Graph {

    @JsonProperty("nodes", [GraphNode])
    public nodes: [GraphNode] = undefined;

    @JsonProperty("edges", [GraphEdge])
    public edges: [GraphEdge] = undefined;

}
