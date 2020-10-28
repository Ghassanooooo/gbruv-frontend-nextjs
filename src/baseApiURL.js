export const backendApiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:7000/api/v1/"
    : "https://ghassanclassic.com/api/v1/";

export const backendURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:7000/"
    : "https://ghassanclassic.com/";
