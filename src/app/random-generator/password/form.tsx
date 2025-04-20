"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { RandomPasswordGeneratorFormData } from "@/types/random-generator/random-pasword.type";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

type RandomPasswordGeneratorFormProps = {
  form: UseFormReturn<
    RandomPasswordGeneratorFormData,
    any,
    RandomPasswordGeneratorFormData
  >;
  onSubmit: (data: RandomPasswordGeneratorFormData) => void;
  passwordGenerated: string[];
};

const RandomPasswordGeneratorForm = ({
  form,
  onSubmit,
  passwordGenerated,
}: RandomPasswordGeneratorFormProps) => {
  const { copyToClipboard, copyStatus } = useCopyToClipboard();
  const [isPasswordLengthCustom, setPasswordLengthCustom] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 w-full"
      >
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="passwordLength"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password Length</FormLabel>
                {isPasswordLengthCustom ? (
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Password Length"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number.parseInt(e.target.value))
                      }
                      className="w-full"
                    />
                  </FormControl>
                ) : (
                  <Select
                    onValueChange={(value) => {
                      field.onChange(Number.parseInt(value));
                    }}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Password Length" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        6, 8, 12, 16, 24, 32, 64, 128, 256, 512, 1024, 2048,
                      ].map((item) => (
                        <SelectItem key={item} value={item.toString()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          <Checkbox
            id="setPasswordLengthCustom"
            onClick={() => setPasswordLengthCustom(!isPasswordLengthCustom)}
          />
          <Label htmlFor="setPasswordLengthCustom">
            Custom Password Length
          </Label>
        </div>
        <FormField
          control={form.control}
          name="isNumberOnly"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(value) => {
                    field.onChange(value);
                    if (value) {
                      form.setValue("isIncludeNumber", true);
                      form.setValue("isIncludeLowercaseLetter", false);
                      form.setValue("isIncludeUppercaseLetter", false);
                      form.setValue("isIncludeSpecialCharacter", false);
                      form.setValue("isBeginWithLetter", false);
                      form.setValue("isUseCustomSpecialCharacter", false);
                    }
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Number Only</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isIncludeNumber"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl>
                <Checkbox
                  checked={form.watch("isNumberOnly") ? true : field.value}
                  onCheckedChange={field.onChange}
                  disabled={form.watch("isNumberOnly")}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Include Number</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isIncludeLowercaseLetter"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl>
                <Checkbox
                  checked={form.watch("isNumberOnly") ? false : field.value}
                  onCheckedChange={field.onChange}
                  disabled={form.watch("isNumberOnly")}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Include Lowercase</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isIncludeUppercaseLetter"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl>
                <Checkbox
                  checked={form.watch("isNumberOnly") ? false : field.value}
                  onCheckedChange={field.onChange}
                  disabled={form.watch("isNumberOnly")}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Include Uppercase</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isIncludeSpecialCharacter"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl>
                <Checkbox
                  checked={form.watch("isNumberOnly") ? false : field.value}
                  onCheckedChange={field.onChange}
                  disabled={form.watch("isNumberOnly")}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Include Special Character</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Accordion
          type="single"
          collapsible
          className="-mx-4 border dark:border-white rounded-lg"
        >
          <AccordionItem value="advanced-settings">
            <AccordionTrigger className="px-4 hover:no-underline">
              <p>Advanced Settings</p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="isBeginWithLetter"
                render={({ field }) => (
                  <FormItem className="px-4 flex items-center gap-4">
                    <FormControl>
                      <Checkbox
                        checked={
                          form.watch("isNumberOnly") ? false : field.value
                        }
                        onCheckedChange={field.onChange}
                        disabled={
                          form.watch("isNumberOnly") ||
                          (!form.watch("isIncludeUppercaseLetter") &&
                            !form.watch("isIncludeLowercaseLetter"))
                        }
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Begin With A Letter</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isUseCustomSpecialCharacter"
                render={({ field }) => (
                  <FormItem className="px-4 flex items-center gap-4">
                    <FormControl>
                      <Checkbox
                        checked={
                          form.watch("isNumberOnly")
                            ? false
                            : form.watch("isIncludeSpecialCharacter")
                              ? field.value
                              : false
                        }
                        onCheckedChange={(value) => {
                          form.setValue(
                            "isUseCustomSpecialCharacter",
                            value as boolean,
                            {
                              shouldDirty: true,
                              shouldValidate: true,
                            },
                          );
                        }}
                        disabled={!form.watch("isIncludeSpecialCharacter")}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Use Custom Character</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              {form.watch("isUseCustomSpecialCharacter") && (
                <FormField
                  control={form.control}
                  name="customSpecialCharacter"
                  render={({ field }) => (
                    <FormItem className="px-4">
                      <FormLabel>Custom Character</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Custom Character"
                          className=""
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="numberOfPassword"
                render={({ field }) => (
                  <FormItem className="px-4 w-full">
                    <FormLabel>Number of Password</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(Number.parseInt(value));
                      }}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Number of Password" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 50 }, (_, i) => i + 1).map(
                          (item) => (
                            <SelectItem key={item} value={item.toString()}>
                              {item}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="grid md:grid-cols-2 gap-4">
          <Button type="submit">Generate</Button>
          <Button
            type="button"
            onClick={() => {
              copyToClipboard(passwordGenerated.join("\n"));
            }}
          >
            <div className="flex gap-1 items-center">
              <Icon icon={copyStatus ? "Check" : "Clipboard"} size="sm" />
              <span>{copyStatus ? "Copied!" : "Copy"}</span>
            </div>
          </Button>
        </div>
      </form>
      <div className="">
        <Textarea
          readOnly
          wrap="off"
          rows={form.watch("numberOfPassword") + 1}
          className="resize-none"
          value={passwordGenerated.join("\n")}
        />
      </div>
    </Form>
  );
};

export default RandomPasswordGeneratorForm;
