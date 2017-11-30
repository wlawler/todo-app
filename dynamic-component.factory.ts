import { Injectable, Type, ComponentFactory } from '@angular/core';
import { Compiler } from '@angular/core';
import { AppModule } from './app.module';


@Injectable()
// Utility methods to create a dynamic component
export default class DynamicComponentFactory {
    constructor(
        private compiler: Compiler
    ){}
/**
 * Sample Code
 * -----------
 *   constructor(
 *       public viewOfThis: ViewContainerRef,
 *       private svcDynCmpFactory: DynamicComponentFactory
 *   ) { 
 *      init(); 
 *  }
 *
 *   init() {
 *      this.viewOfThis.createComponent(await this.svcDynCmpFactory.createComponent(TodoListItemComponent)));
 *  }
 * 
 * @template T 
 * @param {Type<T>} componentType 
 * @returns {Promise<ComponentFactory<T>>} 
 * @memberof DynamicComponentFactory
 */
public async createComponent<T>(componentType: Type<T>): Promise<ComponentFactory<T>> {
        let moduleWithComponentFactories = await this.compiler.compileModuleAndAllComponentsAsync<AppModule>(AppModule);
        // All factories available in this module are returned instead of just the one we are interested in.
        // We filter the array to just get the factory for this componentType.
        let componentFactory =  moduleWithComponentFactories.componentFactories.find(fact => fact.componentType === componentType); 
        if (componentFactory)
            return componentFactory;
        else throw Error("[ Error ] --- componentFactory is undefined");
    }
}