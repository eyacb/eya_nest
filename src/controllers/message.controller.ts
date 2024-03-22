import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateMessageDto } from 'src/core/dtos';
import { JwtAuthGuard } from 'src/core/guards/jwtauth.guard';
import { MessageFactoryService } from 'src/use-cases/message/message-factory.service';
@ApiTags('messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messagesService: MessageFactoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create-message')
  @ApiResponse({
    status: 201,
    description: 'The message has been successfully created.',
  })
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.createMessage(createMessageDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAllMessagesByChatId(@Param('id') id: string) {
    return await this.messagesService.findAllMessages(id);
  }
}
