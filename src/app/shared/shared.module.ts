import { NgModule } from "@angular/core";
import { AngularMaterial } from './angular-material.module';
import { CommonModule } from '@angular/common';
import * as fromComponent from './components/index';
import { ReactiveFormsModule } from '@angular/forms';


const entries = [
    fromComponent.LoginDialogComponent
]

const modules = [
    AngularMaterial,
    ReactiveFormsModule,
    CommonModule
]
@NgModule({
    entryComponents:[...entries],
    declarations: [...fromComponent.components],
    imports: [...modules],
    exports: [...modules, ...fromComponent.components, ...entries]
})

export class SharedModule {}