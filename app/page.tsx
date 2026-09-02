"use client"

import { InputOTPDemo } from "@/components/examples/input-otp-demo"
import { InputOTPPattern } from "@/components/examples/input-otp-pattern"
import { InputOTPSeparatorDemo } from "@/components/examples/input-otp-separator"
import { InputOTPDisabled } from "@/components/examples/input-otp-disabled"
import { InputOTPControlled } from "@/components/examples/input-otp-controlled"
import { InputOTPInvalid } from "@/components/examples/input-otp-invalid"
import { InputOTPFourDigits } from "@/components/examples/input-otp-four-digits"
import { InputOTPAlphanumeric } from "@/components/examples/input-otp-alphanumeric"
import { InputOTPForm } from "@/components/examples/input-otp-form"
import { InputOTPRtl } from "@/components/examples/input-otp-rtl"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex items-center justify-center rounded-lg border p-8">
        {children}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p className="text-muted-foreground">
          Accessible one-time password component with copy-paste functionality.
        </p>
      </div>

      <Section title="Default" description="A basic 6-digit OTP input with a separator.">
        <InputOTPDemo />
      </Section>

      <Section title="Pattern" description="Uses REGEXP_ONLY_DIGITS_AND_CHARS to accept both letters and numbers.">
        <InputOTPPattern />
      </Section>

      <Section title="Separator" description="Multiple separators between groups of 2 digits.">
        <InputOTPSeparatorDemo />
      </Section>

      <Section title="Disabled" description="The disabled prop prevents user interaction.">
        <InputOTPDisabled />
      </Section>

      <Section title="Controlled" description="Use value and onChange to control the input value.">
        <InputOTPControlled />
      </Section>

      <Section title="Invalid" description="Use aria-invalid on slots to show an error state.">
        <InputOTPInvalid />
      </Section>

      <Section title="Four Digits" description="A common pattern for PIN codes using REGEXP_ONLY_DIGITS.">
        <InputOTPFourDigits />
      </Section>

      <Section title="Alphanumeric" description="Accepts both letters and numbers.">
        <InputOTPAlphanumeric />
      </Section>

      <Section title="Form" description="Integration with react-hook-form and zod validation.">
        <InputOTPForm />
      </Section>

      <Section title="RTL" description="Right-to-left support.">
        <InputOTPRtl />
      </Section>
    </div>
  )
}
