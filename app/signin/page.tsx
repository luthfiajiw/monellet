'use client'

import Card from "@/components/cards/Card";
import { useRouter } from "next/navigation";
import { FunctionComponent, useCallback, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import PinInput from "react-pin-input";

const SigninPage: FunctionComponent = () => {
  const router = useRouter()
  const divRef = useRef<HTMLDivElement>(null)
  const [disabled, setdisabled] = useState(false)

  function resolveAfter5Sec() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }

  const handleSignin = useCallback(async () => {
    divRef.current?.focus()
    toast.loading("Signing In", { id: "loading" })
    await resolveAfter5Sec()
    toast.dismiss("loading")
    toast.success("Signed In")
    router.replace("/dashboard")
  }, [])
  
  return (
    <section className="container relative h-screen mx-auto max-w-6xl">
      <div
        ref={divRef}
        className="center-screen flex flex-col items-center"
      >
        <Card className="items-center py-4">
          <img
            src="/images/lawallet.png" width={100}
            className="mb-10"
          />

          <h1 className="font-semibold mb-2">
            Enter Your PIN
          </h1>
          <PinInput
            focus
            secret
            disabled={disabled}
            autoSelect
            length={6}
            initialValue=""
            type="numeric"
            inputMode="numeric"
            inputFocusStyle={{
              borderColor: "#876445",
              marginBottom: "1rem"
            }}
            inputStyle={{
              borderColor: disabled ? "#876445" : "#e5e7eb",
              borderRadius: "8px",
              marginRight: "4px",
              marginLeft: "4px",
            }}
            onComplete={(value, index) => {
              setdisabled(true)
              handleSignin()
            }}
          />
        </Card>
      </div>
    </section>
  );
};

export default SigninPage;
