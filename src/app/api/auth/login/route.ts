export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // TODO: Implement actual authentication with database
    if (!email || !password) {
      return Response.json(
        { error: "البريد الإلكتروني وكلمة المرور مطلوبة" },
        { status: 400 }
      );
    }

    // Mock response
    return Response.json(
      {
        token: "mock-jwt-token",
        user: {
          id: "1",
          email,
          name: "User Name",
          role: "admin",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: "خطأ في المصادقة" },
      { status: 500 }
    );
  }
}
