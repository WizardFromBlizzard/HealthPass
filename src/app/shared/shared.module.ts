import { NgModule } from "@angular/core";
import { AngularMaterial } from './angular-material.module';
import { CommonModule } from '@angular/common';

const modules = [
    AngularMaterial,
    CommonModule
]
@NgModule({
    entryComponents:[],
    declarations: [],
    imports: [...modules],
    exports: [...modules]
})

export class SharedModule {}