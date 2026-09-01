const { z } = require("zod");

const createProductSchema = z.object({
  serialNumber: z
    .string()
    .trim()
    .min(1, "Serial number is required"),

  productName: z
    .string()
    .trim()
    .min(1, "Product name is required"),

  model: z
    .string()
    .trim()
    .min(1, "Model is required"),

  purchaseDate: z.coerce.date({
    message: "Purchase date must be a valid date",
  }),

  warrantyExpiry: z.coerce.date({
    message: "Warranty expiry must be a valid date",
  }),

  warrantyPdf: z
    .string()
    .trim()
    .optional(),
});

module.exports = {
  createProductSchema,
};