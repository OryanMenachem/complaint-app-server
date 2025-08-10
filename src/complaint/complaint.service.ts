import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Complaint, ComplaintDocument } from './complaint.schema';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectModel(Complaint.name)
    private complaintModel: Model<ComplaintDocument>,
  ) {}

  async createComplaint(
    createComplaintDto: CreateComplaintDto,
  ): Promise<Complaint> {
    const createdComplaint = new this.complaintModel(createComplaintDto);
    return createdComplaint.save();
  }

  async findAllComplaints(): Promise<Complaint[]> {
    return this.complaintModel.find().exec();
  }

  async deleteComplaintById(id: string): Promise<Complaint | null> {
    return this.complaintModel.findByIdAndDelete(id).exec();
  }
}
