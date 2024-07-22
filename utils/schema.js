
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { json } from "stream/consumers";

export const interviewSimulator = pgTable('interviewSimulator', {
id:serial('id').primaryKey(),
jsonInterviewResp:text('jsonInterviewResp').notNull(),
jobPosition:varchar('jobPosition').notNull(),
jobDescription:varchar('jobDescription').notNull(),
jobExperience:varchar('jobExperience').notNull(),
createdBy:varchar('createdBy').notNull(),
createdAt:varchar('createdAt').notNull(),
interviewId:varchar('interviewId').notNull(),
})