import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComplaintDocument = Complaint & Document;

@Schema({ timestamps: true })
export class Complaint {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  category: string;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
