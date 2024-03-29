
import delay from './delay';
import { LoginResponse } from './types';

export async function login(username: string, password: string): Promise<any> {
  const loginResponse: LoginResponse = {
    idToken: 'eyJraWQiOiJWSjU5eXdOeDdmMDArVnBFSUZcL0dMcG1PYXJJbHkrSkptS25pVGpCTCtsbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzODcyZjFkZC0wNWQ5LTRhMDEtYjZjNC0yYjNjYjgyNmY2NjUiLCJlbmxpZ2h0Um9sZXMiOiJhbmFseXN0LGluc3BlY3RvcixyZXBvcnRzdmlld2VyLHJvdXRlYWRtaW4sdXNlcl9hZG1pbixoaWVyYXJjaHlfbWFuYWdlcixpbnNpZ2h0YWRtaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfRGc3cFREaldjIiwiY29nbml0bzp1c2VybmFtZSI6ImptaW5uaWhhbkBnbWFpbC5jb20iLCJlbmxpZ2h0RXVsYUFncmVlZERhdGUiOiIyMDE4LTA4LTAzVDE1OjIyOjIzWiIsImF1ZCI6IjE5OGFpcTB1cHBqMG1vNmMyOHVsdnVpZjFiIiwiZW5saWdodEFjY2VzcyI6IjFhMmM2YmI5LWNiZGUtNDIwZC1iZTBlLTBhYmYxYjY2OGU3YSw3ZDBhMzhkYy1kY2U1LTQwZTAtYTk5My01OTk5YjY3OWIxMGUsYmUwNzI4MzktMTEwMi00MTFjLTlhMzItNGJlYjYxNWE4YmQxLGYxNzgyMWYzLTc4ODctNGJiZS1iYzYwLTRhYmI5ZmJhMTUxNSwwOTFmYzdiZi01NmMzLTRjODQtOWQ2OC1iNDUzYTc1ZjNlMTciLCJldmVudF9pZCI6Ijc1NDk4YTAyLWU3N2EtMTFlOC05ZTg3LTUxMjFhNGQyMjkxMyIsImVubGlnaHRVc2VySWQiOiIxMDg3MmRlOC1hYzBkLTQ2YTQtOWUzYi02ZGY2MDRhMjQ2M2MiLCJlbmxpZ2h0RW1haWwiOiJqbWlubmloYW5AZ21haWwuY29tIiwidG9rZW5fdXNlIjoiaWQiLCJlbmxpZ2h0U3RhdHVzIjoiYWN0aXZlIiwiYXV0aF90aW1lIjoxNTQyMTM3Mzc3LCJlbmxpZ2h0TmFtZSI6IkppbSBNaW5uaWhhbiIsImV4cCI6MTU0MjE0MDk3NywiaWF0IjoxNTQyMTM3Mzc3LCJlbWFpbCI6ImptaW5uaWhhbkBnbWFpbC5jb20iLCJlbmxpZ2h0VmFsaWRFdWxhIjoidHJ1ZSJ9.JEWKob3xUeFzdw_PbN9zxbBENAbpO_XPilr_HIMouYNvEv3OFCU6u4KBcnna6UVbkKxlxN9Y1Z82Or8SEvBoZyCED7fLRPDjSupZxs00-nV8my_jQ-6WSx-y0gmPBc16qEiUsA040j5BNrw3xb4zQJKuhudJzGgFcRpQ9wEoimwOFOBl1tYXcjCEPT7P27C1Vo4q2HJ7MtfpwMHs9JsViTpHfSG7rX7on9hEYCz5Jtwz2_ymzOriKScpJlpbv8uc4RDc-Ka7W5FACXh-CLFpfSi4j0yDHw4YmM-FXluH79HbsLy_HS5ucza346GMQytbNqu2HKvAqOIsH_Lr4T9YbA',
    user: {
      username: "fred@theflintstones.com",
      password: "wilma",
      name: 'Fred Flintstone'
    }
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loginResponse);
    }, delay);
  });
}
