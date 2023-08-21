'use client'

import Card from "@/components/cards/Card";
import Loading from "@/components/layouts/Loading";
import useSignIn from "@/hooks/auth/useSignIn";
import fetcher from "@/lib/fetcher";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import PinInput from "react-pin-input";
import useSWR from "swr";

const SigninPage: FunctionComponent = () => {
  const router = useRouter()
  const signIn = useSignIn()
  const divRef = useRef<HTMLDivElement>(null)
  const accessToken = Cookies.get("access_token")

  useEffect(() => {
    if (accessToken) {
      router.replace("/dashboard")
    }
  }, [])

  const handleSignin = useCallback(async (value: string) => {
    divRef.current?.focus()
    await signIn.onSubmit(value)
  }, [])

  if (signIn.loadSession || accessToken) {
    return <Loading />
  }
  
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
            disabled={signIn.loading}
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
              borderColor: signIn.loading ? "#876445" : "#e5e7eb",
              borderRadius: "8px",
              marginRight: "4px",
              marginLeft: "4px",
            }}
            onComplete={(value, index) => {
              handleSignin(value)
            }}
          />
        </Card>
      </div>
    </section>
  );
};

export default SigninPage;
