class AuthServices {
  static async createToken(phone: string) {
    const response = await fetch("https://dev.gocheckin.io/graphql", {
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Admin-Secret":
          "ff2096128b01180cfeabe4d8b3226a7fbe69a2b0b74a28fe7169f835a421d6de",
      },
      method: "POST",
      body: JSON.stringify({
        variables: {
          phone,
        },
        query: `
            mutation loginViaPlayWright($phone: phone_number!) {
                output: business_owner_acquire_access_token(phone_number: $phone) {
                    token
                }
            }
        `,
      }),
    });

    const result = await response.json();

    return result.data.output.token;
  }
}
export default AuthServices;
