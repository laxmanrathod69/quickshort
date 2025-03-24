import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useSchema = () => {
  const urlSchema = z.object({
    url: z.string().min(2, { message: "Enter valid URL" }).max(50),
  });

  const form = useForm<z.infer<typeof urlSchema>>({
    resolver: zodResolver(urlSchema),
    mode: "onBlur",
    defaultValues: {
      url: "",
    },
  });

  return { form, urlSchema };
};
