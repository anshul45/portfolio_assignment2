// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {

    const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");


    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }


    const userData = await response.json();


    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
