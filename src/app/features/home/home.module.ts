import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import * as fromComponents from "./components";
import * as fromPages from "./pages";






const modules = [SharedModule, HomeRoutingModule];

@NgModule({
    declarations: [...fromComponents.components, ...fromPages.pages],
    imports: [...modules]
})

export class HomeModule {}