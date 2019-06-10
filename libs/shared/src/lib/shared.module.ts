import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from './api/src/lib/api.module';
import { ComponentsModule } from './components/src/lib/components.module';
import { MaterialModule } from './material/src/lib/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, ComponentsModule, ApiModule],
  exports: [MaterialModule, ComponentsModule, ApiModule]
})
export class SharedModule { }
