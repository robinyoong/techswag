# Techswag

## \_Styling beyond your CSS

Techswag aims to be the one place where tech lovers can find all their favourite swag available for sale.

Granted, some swag such as Vercel's cup with a cork base are for employees only, while others such as Supabase's hackathon gold t-shirt can only be won if you attain the honorific title as their hackathon winner (or maybe you just have $1,000,000 to spare). However, many of them are for sale, and we aim to showcase (and link you there) on Techswag.

## Live site

techswag.io
(Yes, we are so committed to the cause—and we love tech swag that much—that we got an .io domain just for this 🔥 )

## All Star Team

Built with Next.js. Deployed on Vercel. Powered by Supabase.

## Usage of Supabase

##### Database

Brands, swag and categories are stored on separate tables. Could have taken normalisation a little further, but at this stage, it felt like an overkill. Logged in users can post new brands and swag on a protected route—that directly updates these tables.

While we love the Supabase platform UI, building a submission form speeds up the process as we do not need to recall how Netflix is brand_id: 18.

##### Realtime updates

The feature really shines on the product/brand submission forms. When a user makes a submission under 'Add Brands', the dropdown selector for brands in the 'Add Products' detects the change and updates in a flash. Or, as they say, in realtime. This subscription feature is simple, but saves an unnecessary refresh, which speeds up the uploading process.

##### Authentication

I needed a log in for admins to post information. The initial idea was to prevent sign-ups with email/password, but I really wanted to play with Supabase's magic links, so a decision was made.

##### Storage

We needed to store swag images in our storage as tech firms have a habit of unlisting dated swag, which wouldn't work well for us. Every image posted goes through the storage first for the public URL it is submitted as a datbase entry.

## Life after Hackathon

##### Upserting

Instead of having to add new brands and products seperately, upserting would make the process smoother.

##### Sorting by Brands

Currently, products are sorted by categories. Let's bring in the big boys, shall we?

##### Revamp

The UI has some way to go. We aim to do a full frontend revamp before bringing this site to more tech swag lovers.

## Motivations

The objective of this hackathon was to let us play with the best of what Supabase and Next.js has to offer—that was key. Coming in late into the hackathon, the idea has to be something that we were deeply interested in—yes, our deep interest lies in tech swags—but is something that can be completed on time while allowing us to test out the various features of Supabase.

Working on this has increased our confidence in taking on this All-Star stack for an upcoming product.

Well, this was fun—we hope you enjoyed it too.
