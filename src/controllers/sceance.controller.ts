import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateSceanceDto, UpdateSceanceDto } from "src/core/dtos/sceance.dto";
import { Sceance } from "src/core/entities/sceance.entity";
import { SceanceUseCases } from "src/use-cases/sceance/sceance.use-case";
@ApiTags("api/sceance")
@Controller("sceance")
export class SceanceController {
  constructor(private seancesUseCase: SceanceUseCases) {}
  //should call the seance use case
  // controller interact with service not dataService
  @Post()
  create(@Body() createSceanceDto: CreateSceanceDto) {
    return this.seancesUseCase.createSceance(createSceanceDto);
  }

  @Get()
  getAll() {
    return this.seancesUseCase.getAllSceances();
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateSceanceDto: Sceance) {
    return this.seancesUseCase.updateSceance(id, updateSceanceDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.seancesUseCase.deleteSceance(id);
  }
}
