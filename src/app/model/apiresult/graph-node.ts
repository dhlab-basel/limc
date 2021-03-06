import { JsonObject, JsonProperty } from "json2typescript";

import { GraphNodeResourceInfo } from "./graph-node-resource-info";
import { GraphNodeProperty } from "./graph-node-property";

@JsonObject
export class GraphNode {

    public resourceId: number;

    @JsonProperty("properties", [GraphNodeProperty])
    public properties: GraphNodeProperty[] = undefined;

    @JsonProperty("resinfo", GraphNodeResourceInfo)
    public resInfo: GraphNodeResourceInfo = undefined;

    /**
     * Gets the values by a property.
     * @param propertyKey the property key
     * @returns {string[]}
     */
    public getValues(propertyKey: string): string[] {
        return this.properties !== undefined && typeof this.properties[propertyKey] !== "undefined" ? this.properties[propertyKey].getValues() : [];
    }

}
