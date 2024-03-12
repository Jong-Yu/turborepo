export type FirstParameter<F extends Function> = F extends (firstArgs: infer U, ...restArgs: any[]) => any ? U : any;
export type RestParameters<F extends Function> = F extends (firstArgs: any, ...restArgs: infer U) => any ? U : any;
