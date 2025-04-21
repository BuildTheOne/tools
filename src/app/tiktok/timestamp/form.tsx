"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TiktokTimestampFormData } from "@/types/tiktok/tiktok-timestamp.type";
import { UseFormReturn } from "react-hook-form";

type TiktokTimestampFormProps = {
  form: UseFormReturn<TiktokTimestampFormData, any, TiktokTimestampFormData>;
  onSubmit: (data: TiktokTimestampFormData) => void;
};

const TiktokTimestampForm = ({ form, onSubmit }: TiktokTimestampFormProps) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 w-full"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Tiktok URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter tiktok URL"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Get Timestamp</Button>
      </form>
    </Form>
  );
};

export default TiktokTimestampForm;
