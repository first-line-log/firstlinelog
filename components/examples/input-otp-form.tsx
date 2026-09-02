"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following pin: ${data.pin}`)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          One-Time Password
        </label>
        <p className="text-sm text-muted-foreground">
          Please enter the one-time password sent to your phone.
        </p>
        <InputOTP
          maxLength={6}
          value={form.watch("pin")}
          onChange={(value) => form.setValue("pin", value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {form.formState.errors.pin && (
          <p className="text-sm font-medium text-destructive">
            {form.formState.errors.pin.message}
          </p>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
