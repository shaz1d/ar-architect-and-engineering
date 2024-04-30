import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="my-10">
      <div className="container-x flex justify-center items-center">
        <SignIn path="/sign-in" />
      </div>
    </section>
  );
}
