import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { ComplaintService } from './complaint.service';
import { Complaint } from './complaint.schema';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Post('submit')
  async createComplaint(
    @Body() createComplaintDto: CreateComplaintDto,
  ): Promise<Complaint> {
    return this.complaintService.createComplaint(createComplaintDto);
  }

  @Get()
  async findAllComplaints(): Promise<Complaint[]> {
    return this.complaintService.findAllComplaints();
  }
}
