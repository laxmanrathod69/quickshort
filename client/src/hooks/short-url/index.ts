import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useShortUrl = () => {
  const mutationFn = async (url: string) => {
    const { data } = await axios.post(`${process.env.SERVER_API!}/short`, {
      longUrl: url,
    });

    return data;
  };

  const { data, mutate, isPending, error } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data?.message || "Short URL created successfully");
    },
  });

  if (error) {
    toast.error("Unexpected error occurred.");
    return { data: null, mutate, isPending };
  }

  return { data, mutate, isPending };
};
