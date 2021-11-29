import {v1 as uuid} from 'uuid';
import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.module';

@Injectable()
export class BoardService {
	private boards: Board[] = [];				//Block change another class

	getAllBoards(): Board[]{
		return this.boards;
	}

	createBoard(title: string, description: string){
		const board: Board = {
			id: uuid(),
			title,
			description,
			status: BoardStatus.PUBLIC
		}

		this.boards.push(board)
		return board
	}
}
	