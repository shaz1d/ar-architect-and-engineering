import { auth, signOut } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  } else {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="container-x flex justify-between items-center py-2">
          <Image
            src={"/logo/ar-architect-and-engineering.svg"}
            width={200}
            height={100}
            alt="ar-architect-and-engineering-logo"
          />
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button>Sign out</button>
          </form>
        </nav>

        {children}
      </section>
    );
  }
}
