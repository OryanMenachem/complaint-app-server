import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { ComplaintService } from './complaint.service';
import { Complaint } from './complaint.schema';
import { join } from 'path';
import type { Response } from 'express';
import { ServeStaticModule } from '@nestjs/serve-static';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Post('submit')
  async createComplaint(
    @Body() createComplaintDto: CreateComplaintDto,
  ): Promise<Complaint> {
    return this.complaintService.createComplaint(createComplaintDto);
  }

  @Post('admin')
  async updateAdminPassword(
    @Body('password') password: string,
    @Res() res: Response,
  ): Promise<void> {
    if (password === process.env.ADMIN_PASSWORD) {
      return res.redirect('/admin.html');
    }
    res.status(401).json({ message: 'Unauthorized: Invalid admin password' });
    return;
  }

  @Get()
  async findAllComplaints(): Promise<Complaint[]> {
    return this.complaintService.findAllComplaints();
  }
}
