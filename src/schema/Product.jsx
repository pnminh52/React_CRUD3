import Joi from "joi";
export const productSchema = Joi.object({
  name: Joi.string().required().message({
    "any.required": "requiredd",
    "string.emty": "required",
  }),
  price: Joi.string().required().message({
    "any.required": "requiredd",
    "string.emty": "required",
  }),
  description: Joi.string().required().message({
    "any.required": "requiredd",
    "string.emty": "required",
  }),
});
