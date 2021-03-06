import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavComponent } from "./@Components/nav/nav.component";
import { ChartComponent } from "./@Components/chart/chart.component";
import { SummaryComponent } from "./@Components/summary/summary.component";
import { CompareComponent } from "./compare/compare.component";
import { MarketplaceComponent } from "./marketplace/marketplace.component";
import { SwitchComponent } from "./switch/switch.component";
import { TransactionsComponent } from "./@Components/transactions/transactions.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "compare", component: CompareComponent },
  { path: "marketplace", component: MarketplaceComponent },
  { path: "switch", component: SwitchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SummaryComponent,
    ChartComponent,
    NavComponent,
    CompareComponent,
    MarketplaceComponent,
    SwitchComponent,
    TransactionsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
