import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "terminal": z.object({
        "brand": z.string(),
        "windowTitle": z.string(),
        "prompt": z.string(),
        "command": z.string(),
        "greeting": z.string(),
        "subheading": z.string(),
        "status": z.string(),
        "footer": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;