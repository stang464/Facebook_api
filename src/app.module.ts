import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusController } from './menus/menus.controller';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [PostsModule, MenusModule],
  controllers: [AppController, MenusController, PostsController],
  providers: [AppService],
})
export class AppModule {}
