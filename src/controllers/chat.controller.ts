import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateChatDto } from 'src/core/dtos/chat.dto';
import { JwtAuthGuard } from 'src/core/guards/jwtauth.guard';
import { ChatFactoryService } from 'src/use-cases/chat/chat-factory.service';

@ApiTags('chats')
@Controller('chats')
export class ChatController {
  constructor(private readonly chatsService: ChatFactoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create-chat')
  @ApiResponse({
    status: 201,
    description: 'The chat has been successfully created.',
  })
  async createChat(@Body() createChatDto: CreateChatDto) {
    return await this.chatsService.createChat(createChatDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAllChatsByUserId(@Param(':id') id: string) {
    return await this.chatsService.findAllChats(id);
  }
}
