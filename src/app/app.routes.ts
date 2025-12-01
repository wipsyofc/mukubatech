import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ActualitesComponent } from './actualites/actualites.component';

export const routes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'accueil', component: AccueilComponent},
    {path: 'apropos', component: AproposComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'technologies', component: TechnologiesComponent},
    {path: 'actualites', component: ActualitesComponent},
    {path: '**', component: PagenotfoundComponent }
];



