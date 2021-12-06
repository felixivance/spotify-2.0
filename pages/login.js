import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

function Login({ providers }) {
  return (
    <div className="bg-black flex flex-col h-screen items-center min-h-screen justify-center">
      <Head>
        <title>Welcome to spotify 2.0</title>
      </Head>
      <img
        src="https://links.papareact.com/9xl"
        alt="logo"
        className="w-52 mb-5"
      />

      {Object.values(providers).map((provider, index) => (
        <div key={index}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-lg"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
