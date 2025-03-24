import { Copy } from "@/icons/copy";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { useShortUrl } from "@/hooks/short-url";
import { Form, FormField, FormItem } from "../ui/form";
import { ErrorMessage } from "@hookform/error-message";
import { z } from "zod";
import { useSchema } from "@/hooks/short-url/schema";
import { Check } from "@/icons/check";
import { useCopyToClipboard } from "@/hooks/copy-to-clipboard";
import { useEffect, useState } from "react";

const Shorten = () => {
  const { mutate, data, isPending } = useShortUrl();
  const { form, urlSchema } = useSchema();
  const { copy, copied } = useCopyToClipboard();

  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (data?.shortUrl) {
      setCurrentUrl(data.shortUrl);
      form.setValue("url", data.shortUrl);
    }
  }, [data, form]);

  const handleUrls = ({ url }: z.infer<typeof urlSchema>) => {
    if (!isPending) {
      mutate(url);
    }
  };

  const handleCopyButton = () => {
    copy(currentUrl);
  };

  return (
    <section className="py-16 flex flex-col items-center bg-white">
      <h2 className="text-3xl font-bold">Shorten Your URLs, Instantly</h2>
      <p className="text-gray-600 mt-2">
        Simple, clean, and effective. Enter your long URL and get a short,
        shareable link.
      </p>
      <Card className="w-1/2 mt-6 p-5 border-none shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUrls)}
            className="flex flex-col items-center gap-4"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="flex justify-center border-gray-300 border rounded-md">
                    <Input
                      className={`border-none text-gray-800 ${
                        currentUrl && "rounded-r-none"
                      }`}
                      placeholder="Enter your long URL..."
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setCurrentUrl(e.target.value);
                      }}
                    />

                    <div
                      className={`flex items-center justify-center w-9 bg-gray-100 p-1 rounded-r-md cursor-pointer ${
                        !currentUrl && "hidden"
                      }`}
                      onClick={handleCopyButton}
                    >
                      {currentUrl && !copied && (
                        <Copy className="w-[22px] h-[22px]" />
                      )}
                      {copied && <Check className="w-[20px] h-[20px]" />}
                    </div>
                  </div>
                  <ErrorMessage
                    errors={form.formState.errors}
                    name="url"
                    render={({ message }) => (
                      <p className="text-red-500 text-[.69rem] ml-1 font-medium">
                        {message === "Required" ? "" : message}
                      </p>
                    )}
                  />
                </FormItem>
              )}
            />

            <Button className="w-fit" type="submit">
              Shorten URL
            </Button>
          </form>
        </Form>
      </Card>
    </section>
  );
};

export default Shorten;
