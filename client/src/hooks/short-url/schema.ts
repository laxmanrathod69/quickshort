import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const urlSchema = z.object({
  url: z
    .string()
    .min(2, { message: "Enter a valid URL" })
    .max(50, { message: "URL is too long" }),
});

export const useSchema = () => {
  const form = useForm<z.infer<typeof urlSchema>>({
    resolver: zodResolver(urlSchema),
    mode: "onBlur",
    defaultValues: {
      url: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = form;

  return {
    form,
    handleSubmit,
    errors,
    setValue,
    urlSchema,
  };
};
