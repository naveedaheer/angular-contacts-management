import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContactEffects } from '../app/store/state/contacts.effects';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        EffectsModule.forRoot([ContactEffects]),
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Number of actions to retain in the history
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
