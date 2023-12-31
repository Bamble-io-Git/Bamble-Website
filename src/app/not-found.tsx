import LinkComponent from "@/components/elements/link";
import LottieControl from "@/components/elements/not-found-animation";

function NotFoundPage() {
  return (
    <div className="mx-auto block sm:flex justify-center p-10">
      <div>
        <h1 className="mb-10 text-blue-primary">Page not found</h1>
        <LinkComponent url="/" text="Home" />
      </div>
      <div className=" sm:ml-10 mt-0 sm:-mt-10">
        <LottieControl />
      </div>
    </div>
  );
}

export default NotFoundPage;
