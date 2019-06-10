// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Custom modules
import { AppInitializerModule } from './app-initializer/src/lib/app-initializer.module';
import { AuthenticationModule } from './authentication/src';
import { AuthorizationModule } from './authorization/src/lib/authorization.module';
import { GuardsModule } from './guards/src/lib/guards.module';
import { TranslationModule } from './translation/src/lib/translation.module';

@NgModule({
  imports: [CommonModule, AppInitializerModule, AuthenticationModule, AuthorizationModule, GuardsModule, TranslationModule],
  exports: [AppInitializerModule, AuthenticationModule, AuthorizationModule, GuardsModule, TranslationModule]
})
export class CoreModule { }
