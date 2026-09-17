# Controlled Agent Payments Demo — English review pack

This is a review-oriented, i18n-style representation of the English copy for
`/demo`. The route source remains authoritative; this file packages the copy
and rough layout so it can be assessed independently by ChatGPT, investors, or
the team.

## I18n-style English copy

```json
{
  "demo": {
    "meta": {
      "title": "Controlled Agent Payments | Pilot Concept Demo",
      "description": "Preview a controlled-payment pilot concept where the same agent authority completes an approved payment while funds remain within the owner's policy.",
      "canonicalPath": "/demo"
    },
    "hero": {
      "eyebrow": "Pilot concept demo · WIP",
      "headline": "Payments with rules the agent cannot rewrite.",
      "body": "Let software and AI agents pay for services with clear, owner-defined financial boundaries.",
      "supporting": "One policy. Multiple payment outcomes. See an agent complete an approved provider payment while the owner keeps control of the remaining funds.",
      "secondaryCta": "Explore the model"
    },
    "flow": {
      "eyebrow": "A policy-bound payment flow",
      "title": "Owner → Agent → Funds → Provider",
      "owner": {
        "title": "Owner",
        "detail": "Defines policy"
      },
      "agent": {
        "title": "Agent",
        "detail": "Initiates payment"
      },
      "funds": {
        "title": "Funds",
        "detail": "Enforce policy"
      },
      "provider": {
        "title": "Provider",
        "detail": "Receives valid payment"
      },
      "note": "Owner-defined policy travels with the funds."
    },
    "video": {
      "eyebrow": "Policy in action",
      "headline": "Same authority. Different result.",
      "intro": "From policy to provider payment, with owner control preserved throughout the flow.",
      "thesisTitle": "Useful autonomy, with policy carried through the payment flow.",
      "thesisBody": "For the critical comparison, use the same agent/signing authority twice. The approved transaction completes; the rules attached to the funds determine the permitted path for the second request.",
      "steps": {
        "ownerPolicy": {
          "number": "01",
          "title": "Owner defines policy",
          "body": "Set the approved provider, payment limit, and recovery path."
        },
        "fundsPrepared": {
          "number": "02",
          "title": "Funds are prepared",
          "body": "Place funds under the policy-bound control path."
        },
        "agentRequest": {
          "number": "03",
          "title": "Agent requests payment",
          "body": "Software asks to pay the approved provider."
        },
        "approvedPayment": {
          "number": "04",
          "title": "Approved payment completes",
          "body": "The same agent/signing authority pays within policy."
        },
        "policyBoundary": {
          "number": "05",
          "title": "Policy protects the boundary",
          "body": "The same authority tries a different transaction; the funds follow only a permitted path."
        }
      }
    },
    "value": {
      "eyebrow": "Value",
      "headline": "Autonomy with owner control",
      "cards": {
        "providerPayment": {
          "title": "Approved provider payment",
          "body": "An agent completes an API payment within the provider and amount defined by the owner.",
          "visualSlot": "allowed-payment.webp"
        },
        "policyExecution": {
          "title": "Policy-based execution",
          "body": "The same agent/signing authority can request another payment, while the funds follow only a permitted transaction path.",
          "visualSlot": "policy-boundary.webp"
        },
        "ownerControl": {
          "title": "Owner control",
          "body": "The owner keeps a defined recovery and control path for the remaining funds.",
          "visualSlot": "owner-recovery.webp"
        }
      }
    },
    "capabilities": {
      "eyebrow": "Foundation",
      "headline": "Built across the stack",
      "intro": "The pilot concept draws on Wallet delivery, Bitcoin Cash ecosystem experience, and controlled-payment research.",
      "areas": {
        "releasedProduct": "OPTN Wallet brings BCH, CashTokens, WalletConnect, and advanced transaction tools into one self-custody product.",
        "ecosystemExperience": "CashToken tooling, covenant workflow experience from FundMe.cash, and open Bitcoin Cash infrastructure.",
        "pilotExploration": "Controlled payments, agent integration, monitoring, and organizational policy workflows for scoped pilot projects."
      }
    },
    "resources": {
      "eyebrow": "Resources",
      "headline": "Explore the foundation",
      "wallet": {
        "title": "OPTN Wallet",
        "body": "The released BCH and CashTokens wallet at the center of the OPTN ecosystem.",
        "cta": "Explore OPTN Wallet"
      },
      "fundme": {
        "title": "FundMe.cash",
        "body": "Real-fund covenant workflows for contributions, claims, and refunds.",
        "cta": "Explore FundMe.cash"
      },
      "openSource": {
        "title": "Open-source implementation",
        "body": "Review the public OPTN Wallet implementation and transaction tooling.",
        "cta": "View GitHub"
      },
      "enforcement": {
        "title": "How enforcement works",
        "body": "See how programmable payment coordination and rule enforcement fit together on BCH.",
        "cta": "Explore the model"
      }
    },
    "cta": {
      "headline": "Build with OPTN",
      "body": "Explore OPTN Wallet, review the public implementation, or contact us about a controlled-payment pilot project.",
      "label": "Contact us"
    }
  }
}
```

## Rough layout description

1. **Hero — promise and orientation**
   - Keep the existing dark, high-contrast OPTN visual language.
   - Left column: the headline, a user-facing promise, and the model action.
   - Right column: a compact `Owner → Agent → Funds → Provider` flow. This explains the product in one glance without making the agent look like the party that grants itself payment authority.

2. **Video — the center of the page**
   - Show the full-width 16:9 video frame only when a real demo asset is configured.
   - The video should show a transaction workflow, not only a narrated interface tour.
   - Directly below it, place the short thesis strip: the same agent/signing authority makes both requests; policy determines the permitted route.
   - Follow with the five-step sequence, making the fourth and fifth steps visibly comparable.

3. **Why it matters — user outcomes**
   - Three equal cards: approved provider payment, policy-based execution, and owner control.
   - Show visual areas only when real screenshots or transaction captures are configured; never expose upload instructions to visitors.
   - Keep the copy benefit-led; the rejection behavior is established by the video rather than repeated as a warning in every card.

4. **Built across the stack — investor context**
   - Two-column section with the product foundation on the left and capability areas on the right.

5. **Resources — related paths**
   - Four resource cards: Wallet, FundMe.cash, open-source implementation, and How enforcement works.
   - Keep the transaction-reference card hidden until a specific public link or reproducible test vector has been checked.

6. **Final CTA — one clear next step**
   - End with a concise invitation to contact OPTN about a policy-aware payment workflow.
   - The global footer remains available for general site navigation, but the page body funnels toward the workflow, the model, and contact.

## Questions for ChatGPT assessment

- Does the page explain the user and investor value before introducing the technical boundary?
- Is “Payments with rules the agent cannot rewrite” strong and understandable without sounding adversarial?
- Does the same-agent comparison remain clear enough to make the claim falsifiable?
- Does the page give enough related resources without feeling unfinished or overly defensive?
