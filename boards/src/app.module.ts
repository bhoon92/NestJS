import { Module } from '@nestjs/common';
import { BoardController } from './board/boards.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardService } from './board/boards.service';
import { BoardModule } from './board/boards.module';


@Module({
  imports: [],
  controllers: [BoardController],
  //controllers: [AppController],
  providers: [BoardService],
  //providers: [AppService],
})
export class AppModule {}
