import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusController } from './menus/menus.controller';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [AppController, MenusController, PostsController],
  providers: [AppService],
})
export class AppModule {}
