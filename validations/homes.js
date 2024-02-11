const { z } = require("zod");

exports.PostHomeSchema = z.object({
  area: z.number(),
  price: z.number(),
  ownerId: z.string(),
  isNegotiable: z.boolean().optional(),
  isSold: z.boolean().optional(),
});

exports.UpdateHomeSchema = z.object({
  area: z.number().optional(),
  price: z.number().optional(),
  isNegotiable: z.boolean().optional(),
  isSold: z.boolean().optional(),
});
