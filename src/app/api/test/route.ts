import { responseExample } from "@/app/preview/constants";

export function GET() {
    return new Response(
      JSON.stringify({
        test: "test",
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

export function POST() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(
          JSON.stringify(responseExample),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
      );
    }, 1000); // Delay the response by 5000ms (5 seconds)
  });
}
