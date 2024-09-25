import Head from "@/modules/header/header";
import Userbody from "@/auth/user/userbody";
import Foot from "@/modules/footer/footer";

export default function Home() {
  return (
    <div>
      <Head />
      <Userbody />
      <Foot />
    </div>
  );
}
