import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "empleados", component: EmpleadosComponent
    },
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

