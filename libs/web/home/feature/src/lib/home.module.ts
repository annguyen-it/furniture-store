import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CollectionModule } from '@furniture-store/web/home/ui/collection';
import { HomeCategoryModule } from '@furniture-store/web/home/ui/home-category';
import { HomeRoomModule } from '@furniture-store/web/home/ui/home-room';
import { HomeHotProductModule } from '@furniture-store/web/home/ui/home-hot-product';
import { HomeBestSellerModule } from '@furniture-store/web/home/ui/home-best-seller';
import { HomeStoryModule } from '@furniture-store/web/home/ui/home-story';
import { HomeBlogModule } from '@furniture-store/web/home/ui/home-blog';
import { HomeBrandModule } from '@furniture-store/web/home/ui/home-brand';
import { HomeMediaModule } from '@furniture-store/web/home/ui/home-media';
import { HomeJoinModule } from '@furniture-store/web/home/ui/home-join';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    CollectionModule,
    HomeCategoryModule,
    HomeRoomModule,
    HomeHotProductModule,
    HomeBestSellerModule,
    HomeStoryModule,
    HomeBlogModule,
    HomeBrandModule,
    HomeMediaModule,
    HomeJoinModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
