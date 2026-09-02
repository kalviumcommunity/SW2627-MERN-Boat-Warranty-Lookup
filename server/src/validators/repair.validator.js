const { z } = require("zod");

const createRepairSchema = z.object({
  productId: z.coerce.number().int().positive(),

  repairDate: z.coerce.date({
    message: "Repair date must be a valid date",
  }),

  issue: z
    .string()
    .trim()
    .min(1, "Issue is required"),

  description: z
    .string()
    .trim()
    .optional(),

  status: z
    .string()
    .trim()
    .min(1, "Status is required")
    .default("Pending"),

  cost: z
    .coerce
    .number()
    .min(0, "Cost cannot be negative")
    .default(0),
});

module.exports = {
  createRepairSchema,
};