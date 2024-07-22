
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { json } from "stream/consumers";

export const interviewSimulator = pgTable('interviewSimulator', {
id:serial('id').primaryKey(),
jsonSimulatorResp:text('jsonSimulatorResp').notNull(),
jobPosition:varchar('jobPosition').notNull(),
jobDescription:varchar('jobDescription').notNull(),
jobExperience:varchar('jobExperience').notNull(),
})