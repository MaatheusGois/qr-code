import { ApiProperty } from "@nestjs/swagger";

export class AnswerDTO<T> {
    @ApiProperty()
    success: boolean;
    @ApiProperty()
    message: string;
    @ApiProperty()
    statusCode: number;
    @ApiProperty()
    data: T;

    constructor(success: boolean = true, message: string, statusCode = 200, data: T = undefined) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    };
}