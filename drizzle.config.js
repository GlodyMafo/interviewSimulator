/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://InterviewSimulator_owner:LdpP4zDXwVW3@ep-flat-meadow-a53aki42.us-east-2.aws.neon.tech/InterviewSimulator?sslmode=require',
    }
  };