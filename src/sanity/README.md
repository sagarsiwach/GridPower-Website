# Sanity Configuration

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token  # Optional: for draft content
```

## Getting Your Credentials

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project or select existing
3. Copy Project ID from project settings
4. Dataset is typically "production"
5. For read token: Settings > API > Tokens > Add Token (Viewer)

## Usage

```typescript
import { client, PRODUCTS_QUERY } from "@/sanity";

// In a Server Component
const products = await client.fetch(PRODUCTS_QUERY);
```

## Sanity Studio (Optional)

To add embedded Sanity Studio, run:

```bash
bun add sanity @sanity/vision
```

Then create `src/app/studio/[[...index]]/page.tsx` for the studio route.
