import {QueryEngine} from "@comunica/query-sparql";
import {IQueryEngine} from "graphql-ld";
import {Algebra} from "sparqlalgebrajs";
import * as stringifyStream from "stream-to-string";

/**
 * A GraphQL-LD engine that is backed by Comunica.
 */
export class QueryEngineComunica implements IQueryEngine {

  private readonly comunicaEngine: QueryEngine;
  private readonly context: any;

  constructor(context: any) {
    this.comunicaEngine = new QueryEngine();
    this.context = context;
  }

  public async query(query: Algebra.Operation, options?: any): Promise<any> {
    const { data } = await this.comunicaEngine.resultToString(
      await this.comunicaEngine.query(query, { ...options, ...this.context }),
      'application/sparql-results+json',
    );
    return JSON.parse(await stringifyStream(data));
  }

}
