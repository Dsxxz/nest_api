import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import { FindTopPageModel } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {

    constructor (private readonly configService : ConfigService) {}

    @Get('get/:alias')
    async getAlias(@Param('alias') alias: string) {
        this.configService.get('TEST')
    }

    @Post('create')
    async create(@Body() dto: Omit<TopPageModel,'_id'>) {

    }

    @Get(':id')
    async get(@Param('id') id:string) {

    }

    @Delete(':id')
    async delete(@Param('id') id:string) {

    }

    @Patch(':id')
    async patch(@Param('id') id:string, @Body() dto:FindTopPageModel) {

    }

    @HttpCode( 200)
    @Post()
    async find(@Body() dto: FindTopPageModel) {}}
