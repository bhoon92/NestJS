import { Module } from '@nestjs/common';

@Module({})
export class BoardModule {}

export interface Board{
	id: string;
	title: string;
	description: string;
	status: BoardStatus;
}

export enum BoardStatus {
	PUBLIC = 'PUBLIC',
	PRIVATE = 'PRIVATE'
}