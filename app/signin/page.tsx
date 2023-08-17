'use client'

import Card from "@/components/cards/Card";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import PinInput from "react-pin-input";

const SigninPage: FunctionComponent = () => {
  const router = useRouter()
  const divRef = useRef<HTMLDivElement>(null)
  const accessToken = Cookies.get("access_token")
  const [disabled, setdisabled] = useState(false)

  useEffect(() => {
    if (accessToken) {
      router.replace("/dashboard")
    }
  }, [])

  const handleSignin = useCallback(async () => {
    divRef.current?.focus()
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
