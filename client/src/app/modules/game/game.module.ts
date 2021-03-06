import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { HandCardsComponent } from './components/hand-cards/hand-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameContainer } from './game.container';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { AdminControlsComponent } from './components/admin-controls/admin-controls.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MasterControlsComponent } from './components/master-controls/master-controls.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { DialogModule } from '../../shared/components/dialog/dialog.module';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';

const COMPONENTS = [
    HeaderComponent,
    MenuComponent,
    HandCardsComponent,
    GameContainer,
    PlayersListComponent,
    AdminControlsComponent,
    MainCardComponent,
    MasterControlsComponent,
    RoomsListComponent,
    GameSettingsComponent
];

@NgModule({
    imports: [
        CommonModule,
        SwiperModule,
        ComponentsModule,
        DialogModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    entryComponents: [
        PlayersListComponent,
        GameSettingsComponent
    ]
})
export class GameModule {}
