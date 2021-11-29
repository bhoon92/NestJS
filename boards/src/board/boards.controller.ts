import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './boards.service';
import { Board } from './boards.module';

@Controller('boards')
export class BoardController {
	constructor(private boardService: BoardService){}
	
	@Get('/')
	getAllboard(): Board[] {
		return this.boardService.getAllBoards();
	}
	
	@Post()
	createBoard(
		@Body('title') title: string,
		@Body('description') description: string
	): Board {
		return this.boardService.createBoard(title,description)
	}

	
}