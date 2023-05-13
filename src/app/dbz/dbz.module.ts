import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDbzComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppDbzComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    AppDbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
