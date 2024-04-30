import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="my-10">
      <div className="container-x flex justify-center items-center">
        <SignUp path="/sign-up" />
      </div>
    </section>
  );
}
