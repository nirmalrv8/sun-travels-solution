import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { SearchContractComponent } from './search-contract/search-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';


const routes: Routes = [
  { path: 'search_contract', component: SearchContractComponent},
  { path: 'view_contract', component: ViewContractComponent},
  { path: 'add_contract', component: AddContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
