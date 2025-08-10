import { Body, Controller, Post, Get, Res, Delete } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { ComplaintService } from './complaint.service';
import { Complaint } from './complaint.schema';
import type { Response } from 'express';
import { Types } from 'mongoose';

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
  async validateAdminPassword(
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

  @Post('del')
  async deleteComplaintById(
    @Body('complaintId') id: string,
    @Res() res: Response,
  ): Promise<Response | null> {
    const deletedComplaint = this.complaintService.deleteComplaintById(id);
    if (deletedComplaint) {
      return res.status(200).json(deletedComplaint);
    }
    return res.status(404).json({ message: 'Complaint not found' });
  }
}
