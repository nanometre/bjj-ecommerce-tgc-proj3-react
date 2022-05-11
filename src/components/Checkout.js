import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    //pk key here
)
const stripe = await stripePromise

stripe.redirectToCheckout({sessionId: ""
    // sessionid here
})