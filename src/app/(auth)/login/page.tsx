import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

import React from "react";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/dashboard");
  } else {
    return (
      <section>
        <div className="container-x">
          <h1>Login</h1>
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/dashboard" });
            }}
          >
            <button className="px-4 py-1 bg-white text-black" type="submit">
              Login with Github
            </button>
          </form>
        </div>
      </section>
    );
  }
};

export default LoginPage;
