import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <div className="flex justify-center my-4 laptop:my-8">
        <div className="w-[90%] laptop:w-[80%]">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
