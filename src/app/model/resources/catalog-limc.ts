import { GraphNode } from "../apiresult/graph-node";

export class CatalogLimc {

    ////////////////
    // PROPERTIES //
    ////////////////


    public resourceId: number;

    public article: string;
    public volume: string;
    public catalogNumber: number;
    public asterix: boolean;
    public dot: boolean;


    /////////////
    // METHODS //
    /////////////


    /**
     * Gets an instance of CatalogLimc from a GraphNode instance.
     * @param node the graphnode
     * @returns {CatalogLimc}
     */
    public static fromGraphNode(node: GraphNode): CatalogLimc {

        const catalogLimc: CatalogLimc = new CatalogLimc();

        catalogLimc.article = node.getValues("limc:article")[0];
        catalogLimc.volume = node.getValues("limc:volume")[0];
        catalogLimc.catalogNumber = parseInt(node.getValues("limc:catalogNumber")[0], 10);
        if (isNaN(catalogLimc.catalogNumber)) catalogLimc.catalogNumber = undefined;
        catalogLimc.asterix = node.getValues("limc:asterix")[0] === "1";
        catalogLimc.dot = node.getValues("limc:dot")[0] === "1";

        return catalogLimc;

    }

}
