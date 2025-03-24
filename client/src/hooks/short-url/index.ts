import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const API_URL = "http://localhost:5000/api/url"; // WIP: add actual server domain

export const useShortUrl = () => {
  const mutationFn = async (url: string) => {
    const { data } = await axios.post(`${API_URL}/short`, {
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
