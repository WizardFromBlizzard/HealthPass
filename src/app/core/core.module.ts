import { NgModule } from '@angular/core';

import * as fromComponents from './components';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


const modules = [ SharedModule, CommonModule ]
@NgModule({
    entryComponents:[],
    declarations: [...fromComponents.components],
    imports: [...modules],
    exports: [...fromComponents.components]
})

export class CoreModule{
    
}