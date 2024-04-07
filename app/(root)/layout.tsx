import Header from "@/components/header";
import ImageBackground from "@/components/image-background";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-dark-blue xs:py-10 md:py-20 w-full h-full transition relative">
      {/* BACKGROUND PATTERN  */}
      <ImageBackground />
      <MaxWidthWrapper className="flex justify-end xs:mb-10 lg:mb-20 xs:px-5 md:px-0">
        <Header />
      </MaxWidthWrapper>

      <main className="h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
