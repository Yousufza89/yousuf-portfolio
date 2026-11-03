export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * SIMULATED sender: waits briefly and resolves, so the UI states can be demoed.
 * Nothing is delivered. To go live, replace the body with a real call, e.g.
 *
 *   const res = await fetch("https://formspree.io/f/<your-id>", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json", Accept: "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error("Request failed");
 */
export async function sendMessage(payload: ContactPayload): Promise<void> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 900));
}
