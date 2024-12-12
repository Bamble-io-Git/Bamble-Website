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
    return new Response(
      JSON.stringify({
        test: "test",
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
